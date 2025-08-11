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
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle,
  Code,
  Lightbulb,
  Play,
} from "lucide-react";

export function EducationSection() {
  const learningPaths = [
    {
      id: "frontend",
      title: "프론트엔드 개발",
      description: "React, Vue, Angular를 활용한 현대적 웹 개발",
      duration: "12주",
      level: "초급-중급",
      students: "2,500+",
      modules: [
        { name: "HTML/CSS 기초", completed: true, duration: "1주" },
        { name: "JavaScript 마스터", completed: true, duration: "3주" },
        { name: "React 심화", completed: false, duration: "4주" },
        { name: "상태 관리", completed: false, duration: "2주" },
        { name: "실전 프로젝트", completed: false, duration: "2주" },
      ],
      progress: 40,
    },
    {
      id: "backend",
      title: "백엔드 개발",
      description: "Node.js, Python, Java를 활용한 서버 개발",
      duration: "16주",
      level: "중급-고급",
      students: "1,800+",
      modules: [
        { name: "서버 기초", completed: false, duration: "2주" },
        { name: "데이터베이스", completed: false, duration: "3주" },
        { name: "API 설계", completed: false, duration: "4주" },
        { name: "보안 & 인증", completed: false, duration: "3주" },
        { name: "배포 & 운영", completed: false, duration: "4주" },
      ],
      progress: 0,
    },
    {
      id: "fullstack",
      title: "풀스택 개발",
      description: "프론트엔드부터 백엔드까지 완전한 웹 개발",
      duration: "24주",
      level: "중급-고급",
      students: "3,200+",
      modules: [
        { name: "웹 개발 기초", completed: false, duration: "4주" },
        { name: "프론트엔드 심화", completed: false, duration: "6주" },
        { name: "백엔드 개발", completed: false, duration: "8주" },
        { name: "데브옵스", completed: false, duration: "3주" },
        { name: "포트폴리오 프로젝트", completed: false, duration: "3주" },
      ],
      progress: 0,
    },
  ];

  const features = [
    {
      icon: Brain,
      title: "AI 개인 튜터",
      description:
        "학습 패턴을 분석하여 최적화된 개인 맞춤 학습 경로를 제공합니다.",
    },
    {
      icon: Code,
      title: "실시간 코드 피드백",
      description: "작성한 코드를 실시간으로 분석하고 개선점을 제안합니다.",
    },
    {
      icon: Lightbulb,
      title: "프로젝트 기반 학습",
      description: "실제 프로젝트를 통해 실무 경험을 쌓을 수 있습니다.",
    },
    {
      icon: CheckCircle,
      title: "진도 추적",
      description: "학습 진도와 성취도를 시각적으로 확인할 수 있습니다.",
    },
  ];

  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <BookOpen className="w-4 h-4 mr-2" />
            AI 교육
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">AI가 설계한</span>
            <br />
            개인 맞춤 학습
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            당신의 학습 스타일과 목표에 맞춰 AI가 최적의 학습 경로를 설계합니다
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Learning Features */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold">AI 학습의 특별함</h3>
            <div className="space-y-6">
              {features.map((feature) => {
                const IconComponent = feature.icon;
                return (
                  <div key={feature.title} className="flex space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-ai-primary/10 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-ai-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Demo Video/Preview */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">학습 미리보기</h3>
            <Card className="group hover:scale-105 transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative aspect-video bg-gradient-to-br from-ai-primary/20 to-ai-secondary/20 rounded-lg flex items-center justify-center">
                  <Button size="lg" className="aurora-glow">
                    <Play className="w-6 h-6 mr-2" />
                    데모 영상 보기
                  </Button>
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">AI 튜터 데모</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center p-4">
                <div className="text-2xl font-bold text-ai-primary">95%</div>
                <div className="text-sm text-muted-foreground">학습 완료율</div>
              </Card>
              <Card className="text-center p-4">
                <div className="text-2xl font-bold text-ai-secondary">
                  4.9/5
                </div>
                <div className="text-sm text-muted-foreground">만족도</div>
              </Card>
            </div>
          </div>
        </div>

        {/* Learning Paths */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">학습 경로</h3>
          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {learningPaths.map((path) => (
                <TabsTrigger key={path.id} value={path.id} className="text-sm">
                  {path.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {learningPaths.map((path) => (
              <TabsContent key={path.id} value={path.id}>
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl">{path.title}</CardTitle>
                        <CardDescription className="text-base mt-2">
                          {path.description}
                        </CardDescription>
                      </div>
                      <Badge variant="outline">{path.level}</Badge>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-4">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <span>기간:</span>
                        <span className="font-medium">{path.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <span>수강생:</span>
                        <span className="font-medium">{path.students}</span>
                      </div>
                    </div>

                    {path.progress > 0 && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>진행률</span>
                          <span>{path.progress}%</span>
                        </div>
                        <Progress value={path.progress} className="h-2" />
                      </div>
                    )}
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-4">커리큘럼</h4>
                      <div className="space-y-3">
                        {path.modules.map((module, index) => (
                          <div
                            key={index}
                            className={`flex items-center justify-between p-3 rounded-lg border ${
                              module.completed
                                ? "bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800"
                                : "bg-secondary"
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <div
                                className={`w-6 h-6 rounded-full flex items-center justify-center ${
                                  module.completed
                                    ? "bg-green-500 text-white"
                                    : "bg-muted-foreground/20 text-muted-foreground"
                                }`}
                              >
                                {module.completed ? (
                                  <CheckCircle className="w-4 h-4" />
                                ) : (
                                  <span className="text-xs font-medium">
                                    {index + 1}
                                  </span>
                                )}
                              </div>
                              <span
                                className={
                                  module.completed
                                    ? "text-green-700 dark:text-green-300"
                                    : ""
                                }
                              >
                                {module.name}
                              </span>
                            </div>
                            <Badge variant="outline" className="text-xs">
                              {module.duration}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full" size="lg">
                      {path.progress > 0 ? "학습 계속하기" : "학습 시작하기"}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                지금 바로 <span className="gradient-text">AI 학습</span>을
                시작하세요
              </h3>
              <p className="text-muted-foreground mb-6">
                무료 체험으로 AI 튜터의 놀라운 학습 경험을 직접 확인해보세요
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
