"use client";

import { Navigation } from "@/components/sections/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export function DashboardPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="pt-16 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              대시보드
            </h1>
            <p className="text-muted-foreground">
              전체 시스템 현황을 한눈에 확인하세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">시스템 상태</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>서버 상태</span>
                  <span className="text-green-500">정상</span>
                </div>
                <div className="flex justify-between">
                  <span>데이터베이스</span>
                  <span className="text-green-500">연결됨</span>
                </div>
                <div className="flex justify-between">
                  <span>API 응답시간</span>
                  <span>120ms</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">사용자 통계</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>총 사용자</span>
                  <span className="font-bold">1,234</span>
                </div>
                <div className="flex justify-between">
                  <span>활성 사용자</span>
                  <span className="font-bold">892</span>
                </div>
                <div className="flex justify-between">
                  <span>신규 가입</span>
                  <span className="text-green-500">+45</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">빠른 작업</h3>
              <div className="space-y-3">
                <Link href="/users">
                  <Button className="w-full justify-start" variant="outline">
                    사용자 관리
                  </Button>
                </Link>
                <Link href="/events">
                  <Button className="w-full justify-start" variant="outline">
                    이벤트 관리
                  </Button>
                </Link>
                <Link href="/products">
                  <Button className="w-full justify-start" variant="outline">
                    제품 관리
                  </Button>
                </Link>
              </div>
            </Card>
          </div>

          <div className="mt-8">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">최근 활동</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b">
                  <span>새로운 사용자 등록</span>
                  <span className="text-sm text-muted-foreground">5분 전</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b">
                  <span>이벤트 생성됨</span>
                  <span className="text-sm text-muted-foreground">
                    1시간 전
                  </span>
                </div>
                <div className="flex items-center justify-between py-2 border-b">
                  <span>제품 업데이트</span>
                  <span className="text-sm text-muted-foreground">
                    2시간 전
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
