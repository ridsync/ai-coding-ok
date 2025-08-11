"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1652512456007-e16ac46f1879?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw3fHxjb21wdXRlciUyMGNvZGluZyUyMHdvcmtzcGFjZSUyMG1vbml0b3JzJTIwdGVjaG5vbG9neXxlbnwwfDB8fGJsdWV8MTc1NDgwOTAyNHww&ixlib=rb-4.1.0&q=85"
          alt="Futuristic coding workspace with multiple monitors displaying code, AI interface elements, dark ambient lighting, tech aesthetic - Photo by Siednji Leon on Unsplash"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/60 dark:from-background/90 dark:via-background/70 dark:to-background/50" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-ai-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-ai-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ai-accent/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="flex justify-center">
            <Badge
              variant="secondary"
              className="px-4 py-2 text-sm font-medium bg-secondary/80 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Learning Platform
            </Badge>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="gradient-text">AI로 시작하는</span>
              <br />
              <span className="text-foreground">코딩 여정</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              인공지능과 함께하는 개인 맞춤형 코딩 교육, 전문가 컨설팅, 그리고
              활발한 개발자 커뮤니티를 경험하세요.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="px-8 py-4 text-lg font-semibold aurora-glow"
            >
              무료로 시작하기
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg font-semibold bg-background/60 backdrop-blur-sm hover:bg-background/80"
            >
              <Play className="mr-2 h-5 w-5" />
              데모 보기
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/50">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text">
                10K+
              </div>
              <div className="text-muted-foreground mt-2">활성 학습자</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text">
                500+
              </div>
              <div className="text-muted-foreground mt-2">완료된 프로젝트</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text">
                98%
              </div>
              <div className="text-muted-foreground mt-2">만족도</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Code Animation */}
      <div className="absolute bottom-10 left-10 z-20 hidden lg:block">
        <div className="bg-card/90 backdrop-blur-sm border border-border/50 rounded-lg p-4 font-mono text-sm shadow-lg animate-bounce">
          <div className="text-ai-primary font-semibold">const</div>
          <div className="text-foreground ml-2">
            <span className="text-muted-foreground">future =</span>{" "}
            <span className="text-ai-secondary font-semibold">AI</span>{" "}
            <span className="text-muted-foreground">+</span>{" "}
            <span className="text-ai-accent font-semibold">Code;</span>
          </div>
        </div>
      </div>
    </section>
  );
}
