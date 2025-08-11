const nextConfig = {
  distDir: "dist",
  productionBrowserSourceMaps: process.env.NODE_ENV === "production",
  reactStrictMode: true,
  // Hot reloading 최적화
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {},
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
  // 개발 중 파일 변경 감지를 보다 안정적으로 하기 위한 감시 옵션 (webpack 기반 dev 환경에서 사용)
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      // 파일 저장 후 반영 지연 시간(ms)
      aggregateTimeout: 200,
      // 폴링 간격(ms): 네트워크 드라이브/파일시스템 이슈 완화용
      poll: 1000,
      // 불필요한 디렉터리 제외
      ignored: [
        "**/node_modules/**",
        "**/.git/**",
        "**/.next/**",
        "**/dist/**",
      ],
    };
    return config;
  },
  webpack: (config, options) => {
    // 개발 환경에서 hot reloading 최적화
    if (options.dev) {
      config.devtool = "eval-cheap-module-source-map";
      config.optimization = {
        ...config.optimization,
        minimize: false,
        removeAvailableModules: false,
        removeEmptyChunks: false,
        splitChunks: false,
      };
    } else {
      config.devtool = "source-map";
      config.optimization = {
        ...config.optimization,
        minimize: false,
      };
    }
    config.plugins = config.plugins || [];
    config.module = config.module || { rules: [] };
    config.module.rules = config.module.rules || [];

    const fileLoaderRule = config.module.rules.find(
      (rule) =>
        typeof rule === "object" &&
        rule !== null &&
        rule.test instanceof RegExp &&
        rule.test.test(".svg")
    );
    if (fileLoaderRule && typeof fileLoaderRule === "object") {
      fileLoaderRule.exclude = /\.svg$/i;
    }
    config.module.rules.push(
      {
        test: /\.svg$/i,
        resourceQuery: /url/,
        type: "asset/resource",
      }
      //      {
      //        test: /\.svg$/i,
      //        issuer: /\.[jt]sx?$/,
      //        resourceQuery: { not: [/url/] },
      //        use: ["@svgr/webpack"],
      //      }
    );

    return config;
  },
};

export default nextConfig;
