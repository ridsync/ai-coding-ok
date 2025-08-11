"use client";

import CalendarIcon from "@/components/icons/CalendarIcon";
import { Navigation } from "@/components/sections/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  mockActivityItems,
  mockEventItems,
  mockQuickActions,
  mockStatCards,
} from "@/lib/youtube-creator-mock-data";
import { Youtube } from "lucide-react";
import { ActivityItem } from "./ActivityItem";
import { EventItem } from "./EventItem";
import { QuickActionButton } from "./QuickActionButton";
import { StatCard } from "./StatCard";

export function YouTubeCreatorLanding() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/50">
          <div className="max-w-7xl mx-auto text-center">
            {/* YouTube Badge */}
            <div className="flex justify-center mb-6">
              <Badge
                variant="secondary"
                className="px-4 py-2 bg-[#dc2626]/10 text-[#dc2626] border border-[#dc2626]/20"
              >
                <Youtube className="w-4 h-4 mr-2" />
                YouTube Creator Platform
              </Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="youtube-gradient">
                YouTube 크리에이터를 위한
              </span>
              <br />
              <span className="text-foreground">올인원 관리 플랫폼</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              구독자 관리부터 이벤트 기획, 제품 판매까지
              <br />
              모든 것을 한 곳에서 효율적으로 관리하세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold px-8 aurora-glow"
              >
                무료로 시작하기
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#dc2626] text-[#dc2626] hover:bg-[#dc2626]/10 font-bold px-8"
              >
                데모 보기
              </Button>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-[#dc2626] mb-8 text-center">
              실시간 통계
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mockStatCards.map((stat, index) => (
                <StatCard
                  key={index}
                  title={stat.title}
                  value={stat.value}
                  growth={stat.growth}
                  icon={stat.icon}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Main Dashboard */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Panel */}
              <div className="lg:col-span-2 space-y-6">
                {/* Recent Activity */}
                <Card className="p-6 border-[#dc2626]/20 shadow-lg hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-foreground">
                      최근 활동
                    </h3>
                    <Select defaultValue="all">
                      <SelectTrigger className="w-32 bg-transparent border-[#dc2626]/20 text-[#dc2626]">
                        <SelectValue placeholder="선택하세요" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">전체</SelectItem>
                        <SelectItem value="subscribers">구독자</SelectItem>
                        <SelectItem value="events">이벤트</SelectItem>
                        <SelectItem value="sales">판매</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-4">
                    {mockActivityItems.map((activity, index) => (
                      <ActivityItem
                        key={index}
                        icon={activity.icon}
                        title={activity.title}
                        timestamp={activity.timestamp}
                      />
                    ))}
                  </div>
                </Card>

                {/* Quick Actions */}
                <Card className="p-6 border-[#dc2626]/20 shadow-lg hover:scale-105 transition-all duration-300">
                  <h3 className="text-lg font-bold text-foreground mb-6">
                    빠른 작업
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {mockQuickActions.map((action, index) => (
                      <QuickActionButton
                        key={index}
                        title={action.title}
                        icon={action.icon}
                        gradient={action.gradient}
                        shadowColor={action.shadowColor}
                      />
                    ))}
                  </div>
                </Card>
              </div>

              {/* Right Panel */}
              <div className="space-y-6">
                {/* Upcoming Events */}
                <Card className="p-6 border-[#dc2626]/20 shadow-lg hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-foreground">
                      예정된 이벤트
                    </h3>
                    <CalendarIcon width={20} height={20} color="#dc2626" />
                  </div>
                  <div className="space-y-4">
                    {mockEventItems.map((event, index) => (
                      <EventItem
                        key={index}
                        title={event.title}
                        status={event.status}
                        time={event.time}
                      />
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
