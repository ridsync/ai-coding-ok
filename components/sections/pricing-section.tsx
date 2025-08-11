"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Check, Crown, Star, Zap } from "lucide-react";
import { useState } from "react";

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Free",
      description: "개발 입문자를 위한 기본 플랜",
      price: { monthly: 0, yearly: 0 },
      icon: Star,
      popular: false,
      features: [
        "기본 AI 튜터 액세스",
        "월 10개 질문",
        "커뮤니티 참여",
        "기본 코딩 챌린지",
        "학습 진도 추적",
      ],
      limitations: [
        "고급 기능 제한",
        "1:1 멘토링 불가",
        "프리미엄 콘텐츠 제한",
      ],
    },
    {
      name: "Pro",
      description: "진지한 개발자를 위한 프로 플랜",
      price: { monthly: 29000, yearly: 290000 },
      icon: Zap,
      popular: true,
      features: [
        "무제한 AI 튜터 액세스",
        "무제한 질문",
        "월 2회 1:1 멘토링",
        "고급 코딩 챌린지",
        "프로젝트 기반 학습",
        "코드 리뷰 서비스",
        "프리미엄 콘텐츠",
        "우선 지원",
      ],
      limitations: [],
    },
    {
      name: "Enterprise",
      description: "팀과 기업을 위한 엔터프라이즈 플랜",
      price: { monthly: 99000, yearly: 990000 },
      icon: Crown,
      popular: false,
      features: [
        "Pro 플랜의 모든 기능",
        "무제한 1:1 멘토링",
        "팀 관리 도구",
        "커스텀 학습 경로",
        "전용 커뮤니티",
        "기업 전용 컨설팅",
        "API 액세스",
        "24/7 전담 지원",
        "온사이트 교육",
      ],
      limitations: [],
    },
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ko-KR").format(price);
  };

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Crown className="w-4 h-4 mr-2" />
            가격 정책
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">합리적인 가격</span>으로
            <br />
            최고의 교육을
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            개인부터 기업까지, 모든 규모에 맞는 플랜을 제공합니다
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span
              className={`text-sm ${
                !isYearly
                  ? "text-foreground font-medium"
                  : "text-muted-foreground"
              }`}
            >
              월간 결제
            </span>
            <Switch checked={isYearly} onCheckedChange={setIsYearly} />
            <span
              className={`text-sm ${
                isYearly
                  ? "text-foreground font-medium"
                  : "text-muted-foreground"
              }`}
            >
              연간 결제
            </span>
            {isYearly && (
              <Badge variant="secondary" className="ml-2">
                2개월 무료!
              </Badge>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            const price = isYearly ? plan.price.yearly : plan.price.monthly;
            const yearlyDiscount =
              isYearly && plan.price.yearly < plan.price.monthly * 12;

            return (
              <Card
                key={plan.name}
                className={`relative group hover:scale-105 transition-all duration-300 ${
                  plan.popular ? "ring-2 ring-ai-primary/50 scale-105 z-10" : ""
                } ${plan.popular ? "aurora-glow" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-ai-primary text-white">
                      <Star className="w-3 h-3 mr-1" />
                      가장 인기
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 mx-auto rounded-2xl ${
                      plan.popular ? "bg-ai-primary/20" : "bg-muted"
                    } flex items-center justify-center mb-4`}
                  >
                    <IconComponent
                      className={`w-8 h-8 ${
                        plan.popular
                          ? "text-ai-primary"
                          : "text-muted-foreground"
                      }`}
                    />
                  </div>
                  <CardTitle className="text-2xl font-bold">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {plan.description}
                  </CardDescription>

                  <div className="mt-4">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold">
                        {price === 0 ? "무료" : `₩${formatPrice(price)}`}
                      </span>
                      {price > 0 && (
                        <span className="text-muted-foreground ml-1">
                          /{isYearly ? "년" : "월"}
                        </span>
                      )}
                    </div>
                    {yearlyDiscount && (
                      <div className="text-sm text-muted-foreground mt-1">
                        월간 대비{" "}
                        <span className="text-green-600 font-medium">
                          17% 할인
                        </span>
                      </div>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <Button
                    className={`w-full ${plan.popular ? "aurora-glow" : ""}`}
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                  >
                    {plan.name === "Free"
                      ? "무료로 시작하기"
                      : plan.name === "Enterprise"
                      ? "문의하기"
                      : "지금 시작하기"}
                  </Button>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                      포함된 기능
                    </h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm">
                          <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {plan.limitations.length > 0 && (
                    <div className="space-y-3 pt-4 border-t border-border/50">
                      <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                        제한사항
                      </h4>
                      <ul className="space-y-2">
                        {plan.limitations.map((limitation) => (
                          <li
                            key={limitation}
                            className="flex items-center text-sm text-muted-foreground"
                          >
                            <div className="w-4 h-4 mr-3 flex-shrink-0 flex items-center justify-center">
                              <div className="w-1 h-1 bg-muted-foreground rounded-full" />
                            </div>
                            {limitation}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* FAQ */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">자주 묻는 질문</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="text-left">
              <CardHeader>
                <CardTitle className="text-lg">
                  언제든 플랜을 변경할 수 있나요?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  네, 언제든지 플랜을 업그레이드하거나 다운그레이드할 수
                  있습니다. 변경사항은 다음 결제 주기부터 적용됩니다.
                </p>
              </CardContent>
            </Card>

            <Card className="text-left">
              <CardHeader>
                <CardTitle className="text-lg">
                  환불 정책은 어떻게 되나요?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  모든 유료 플랜에 대해 7일 무조건 환불 보장을 제공합니다.
                  만족하지 않으시면 전액 환불해드립니다.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
