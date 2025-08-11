"use client";

import { Navigation } from "@/components/sections/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function UsersPage() {
  const mockUsers = [
    {
      id: 1,
      name: "김철수",
      email: "kim@example.com",
      status: "active",
      role: "관리자",
    },
    {
      id: 2,
      name: "이영희",
      email: "lee@example.com",
      status: "active",
      role: "사용자",
    },
    {
      id: 3,
      name: "박민수",
      email: "park@example.com",
      status: "inactive",
      role: "사용자",
    },
    {
      id: 4,
      name: "최지영",
      email: "choi@example.com",
      status: "active",
      role: "에디터",
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
                사용자 관리
              </h1>
              <p className="text-muted-foreground">
                시스템 사용자를 관리하고 권한을 설정하세요
              </p>
            </div>
            <Button>새 사용자 추가</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2">전체 사용자</h3>
              <p className="text-3xl font-bold text-primary">1,234</p>
              <p className="text-sm text-muted-foreground">+12% 이번 달</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2">활성 사용자</h3>
              <p className="text-3xl font-bold text-green-500">892</p>
              <p className="text-sm text-muted-foreground">72% 활성률</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2">신규 가입</h3>
              <p className="text-3xl font-bold text-blue-500">45</p>
              <p className="text-sm text-muted-foreground">이번 주</p>
            </Card>
          </div>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">사용자 목록</h3>
            <div className="space-y-4">
              {mockUsers.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium">
                        {user.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {user.email}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge
                      variant={
                        user.status === "active" ? "default" : "secondary"
                      }
                    >
                      {user.status === "active" ? "활성" : "비활성"}
                    </Badge>
                    <Badge variant="outline">{user.role}</Badge>
                    <Button variant="outline" size="sm">
                      편집
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
