"use client";

import { Navigation } from "@/components/sections/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function EventsPage() {
  const mockEvents = [
    {
      id: 1,
      title: "라이브 스트리밍",
      date: "2024-01-15",
      status: "진행중",
      participants: 150,
    },
    {
      id: 2,
      title: "제품 런칭 이벤트",
      date: "2024-01-20",
      status: "예정",
      participants: 89,
    },
    {
      id: 3,
      title: "커뮤니티 미팅",
      date: "2024-01-10",
      status: "완료",
      participants: 45,
    },
    {
      id: 4,
      title: "Q&A 세션",
      date: "2024-01-25",
      status: "예정",
      participants: 23,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="pt-16 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                이벤트 관리
              </h1>
              <p className="text-muted-foreground">
                이벤트를 생성하고 관리하세요
              </p>
            </div>
            <Button>새 이벤트 생성</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2">전체 이벤트</h3>
              <p className="text-3xl font-bold text-primary">24</p>
              <p className="text-sm text-muted-foreground">이번 달</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2">진행중</h3>
              <p className="text-3xl font-bold text-green-500">3</p>
              <p className="text-sm text-muted-foreground">라이브 이벤트</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2">예정</h3>
              <p className="text-3xl font-bold text-blue-500">8</p>
              <p className="text-sm text-muted-foreground">다가오는 이벤트</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2">총 참가자</h3>
              <p className="text-3xl font-bold text-purple-500">1,247</p>
              <p className="text-sm text-muted-foreground">누적 참가자</p>
            </Card>
          </div>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">이벤트 목록</h3>
            <div className="space-y-4">
              {mockEvents.map((event) => (
                <div
                  key={event.id}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-lg">📅</span>
                    </div>
                    <div>
                      <p className="font-medium">{event.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {event.date}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-right">
                      <p className="text-sm font-medium">
                        {event.participants}명 참가
                      </p>
                    </div>
                    <Badge
                      variant={
                        event.status === "진행중"
                          ? "default"
                          : event.status === "예정"
                          ? "secondary"
                          : "outline"
                      }
                    >
                      {event.status}
                    </Badge>
                    <Button variant="outline" size="sm">
                      관리
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
