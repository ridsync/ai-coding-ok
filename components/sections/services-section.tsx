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
import {
  ArrowRight,
  Brain,
  GraduationCap,
  Handshake,
  Users,
  Zap,
} from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: GraduationCap,
      title: "AI 코딩 교육",
      description: "개인 맞춤형 AI 튜터와 함께하는 체계적인 프로그래밍 학습",
      features: [
        "개인화된 학습 경로",
        "실시간 코드 피드백",
        "프로젝트 기반 학습",
        "진도 추적",
      ],
      color: "text-ai-primary",
      bgColor: "bg-ai-primary/10",
      popular: false,
    },
    {
      icon: Handshake,
      title: "전문가 컨설팅",
      description: "경험 많은 개발자들과의 1:1 멘토링 및 기술 컨설팅",
      features: [
        "1:1 멘토링",
        "코드 리뷰",
        "커리어 상담",
        "기술 아키텍처 설계",
      ],
      color: "text-ai-secondary",
      bgColor: "bg-ai-secondary/10",
      popular: true,
    },
    {
      icon: Users,
      title: "개발자 커뮤니티",
      description: "활발한 개발자들과 함께하는 지식 공유 및 네트워킹",
      features: ["실시간 Q&A", "코드 공유", "스터디 그룹", "개발 챌린지"],
      color: "text-ai-accent",
      bgColor: "bg-ai-accent/10",
      popular: false,
    },
  ];

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Brain className="w-4 h-4 mr-2" />
            서비스
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">AI와 함께하는</span>
            <br />
            완전한 학습 생태계
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            교육부터 실무까지, 개발자 성장의 모든 단계를 지원하는 통합 플랫폼
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={service.title}
                className={`relative group hover:scale-105 transition-all duration-300 ${
                  index === 1 ? "lg:scale-110 lg:z-10" : ""
                } ${service.popular ? "ring-2 ring-ai-secondary/50" : ""}`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-ai-secondary text-white">
                      <Zap className="w-3 h-3 mr-1" />
                      인기
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 mx-auto rounded-2xl ${service.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <CardTitle className="text-2xl font-bold">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <div
                          className={`w-2 h-2 rounded-full ${service.bgColor} mr-3`}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    className="w-full group-hover:aurora-glow transition-all duration-300"
                    variant={service.popular ? "default" : "outline"}
                  >
                    자세히 보기
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                모든 서비스를{" "}
                <span className="gradient-text">하나의 플랫폼</span>에서
              </h3>
              <p className="text-muted-foreground mb-6">
                교육, 컨설팅, 커뮤니티가 유기적으로 연결된 통합 학습 환경을
                경험하세요
              </p>
              <Button size="lg" className="aurora-glow">
                무료 체험 시작하기
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
