"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
  Clock,
  Code2,
  MessageSquare,
  Star,
  Trophy,
  Users,
} from "lucide-react";

export function CommunitySection() {
  const features = [
    {
      icon: MessageSquare,
      title: "실시간 Q&A",
      description: "24/7 활성화된 질문답변 채널",
      stats: "평균 응답시간 5분",
    },
    {
      icon: Code2,
      title: "코드 리뷰",
      description: "전문가와 동료들의 코드 피드백",
      stats: "월 1,000+ 리뷰",
    },
    {
      icon: Trophy,
      title: "코딩 챌린지",
      description: "매주 새로운 프로그래밍 도전",
      stats: "참여자 5,000+",
    },
    {
      icon: Users,
      title: "스터디 그룹",
      description: "목표가 같은 개발자들과 함께",
      stats: "활성 그룹 200+",
    },
  ];

  const testimonials = [
    {
      name: "김민수",
      role: "프론트엔드 개발자",
      content:
        "AI 튜터 덕분에 React를 3개월 만에 마스터했어요. 개인 맞춤형 학습이 정말 효과적이었습니다.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      name: "박지영",
      role: "백엔드 개발자",
      content:
        "커뮤니티에서 만난 멘토님 덕분에 시니어 개발자로 성장할 수 있었습니다. 정말 감사해요!",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
      name: "이준호",
      role: "풀스택 개발자",
      content:
        "코딩 챌린지를 통해 실력이 많이 늘었고, 좋은 개발자 친구들도 많이 만났어요.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=3",
    },
  ];

  const liveActivity = [
    { user: "개발자A", action: "React 질문에 답변", time: "방금 전" },
    { user: "개발자B", action: "알고리즘 챌린지 완료", time: "2분 전" },
    { user: "개발자C", action: "코드 리뷰 요청", time: "5분 전" },
    { user: "개발자D", action: "스터디 그룹 참여", time: "7분 전" },
  ];

  return (
    <section id="community" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Users className="w-4 h-4 mr-2" />
            커뮤니티
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">함께 성장하는</span>
            <br />
            개발자 커뮤니티
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            10,000명의 개발자들과 함께 지식을 나누고, 서로 도우며 성장하세요
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Community Features */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">커뮤니티 기능</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature) => {
                const IconComponent = feature.icon;
                return (
                  <Card
                    key={feature.title}
                    className="group hover:scale-105 transition-all duration-300"
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-lg bg-ai-primary/10 flex items-center justify-center group-hover:bg-ai-primary/20 transition-colors">
                          <IconComponent className="w-5 h-5 text-ai-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">
                            {feature.title}
                          </CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="mb-2">
                        {feature.description}
                      </CardDescription>
                      <Badge variant="outline" className="text-xs">
                        {feature.stats}
                      </Badge>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Live Activity */}
          <div>
            <h3 className="text-2xl font-bold mb-6">실시간 활동</h3>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse" />
                  지금 이 순간
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {liveActivity.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg bg-secondary"
                  >
                    <div className="flex items-center space-x-3">
                      <Avatar className="w-8 h-8">
                        <AvatarImage
                          src={`https://i.pravatar.cc/150?img=${index + 10}`}
                        />
                        <AvatarFallback>{activity.user[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="text-sm font-medium">
                          {activity.user}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {activity.action}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="w-3 h-3 mr-1" />
                      {activity.time}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">커뮤니티 후기</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">
                        {testimonial.name}
                      </CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.content}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                지금 바로 <span className="gradient-text">커뮤니티에 참여</span>
                하세요
              </h3>
              <p className="text-muted-foreground mb-6">
                활발한 개발자들과 함께 성장하고, 새로운 기회를 발견하세요
              </p>
              <Button size="lg" className="aurora-glow">
                커뮤니티 가입하기
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
