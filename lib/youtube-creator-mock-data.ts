// Mock data for YouTube Creator Studio landing page

export interface StatCard {
  title: string;
  value: string;
  growth: string;
  icon: string;
}

export interface ActivityItem {
  icon: string;
  title: string;
  timestamp: string;
}

export interface EventItem {
  title: string;
  status: 'LIVE' | '예정';
  time: string;
}

export interface QuickAction {
  title: string;
  icon: string;
  gradient: string;
  shadowColor: string;
}

export const mockStatCards: StatCard[] = [
  {
    title: "구독자 수",
    value: "1,234,567",
    growth: "+12.5%",
    icon: "users"
  },
  {
    title: "총 조회수", 
    value: "45,678,901",
    growth: "+8.3%",
    icon: "eye"
  },
  {
    title: "월 수익",
    value: "₩2,345,000", 
    growth: "+15.7%",
    icon: "dollar"
  },
  {
    title: "진행 중인 이벤트",
    value: "7",
    growth: "3개 신규",
    icon: "calendar"
  }
];

export const mockActivityItems: ActivityItem[] = [
  {
    icon: "userPlus",
    title: "새로운 구독자 1,234명 증가",
    timestamp: "2시간 전"
  },
  {
    icon: "calendarCheck", 
    title: "라이브 스트리밍 이벤트 완료",
    timestamp: "5시간 전"
  },
  {
    icon: "shoppingBag",
    title: "굿즈 판매 목표 달성 (150%)",
    timestamp: "1일 전"
  }
];

export const mockEventItems: EventItem[] = [
  {
    title: "라이브 Q&A 세션",
    status: "LIVE",
    time: "오늘 오후 8:00"
  },
  {
    title: "신제품 런칭 이벤트", 
    status: "예정",
    time: "내일 오후 2:00"
  },
  {
    title: "팬미팅 사전 예약",
    status: "예정", 
    time: "3일 후"
  }
];

export const mockQuickActions: QuickAction[] = [
  {
    title: "이벤트 생성",
    icon: "plusCircle",
    gradient: "linear-gradient(135deg, #10B981 14.64%, #34D399 85.36%)",
    shadowColor: "#10B981"
  },
  {
    title: "사용자 관리", 
    icon: "usersManagement",
    gradient: "linear-gradient(135deg, #3B82F6 14.64%, #1D4ED8 85.36%)",
    shadowColor: "#3B82F6"
  },
  {
    title: "제품 추가",
    icon: "packagePlus", 
    gradient: "linear-gradient(135deg, #F59E0B 14.64%, #D97706 85.36%)",
    shadowColor: "#F59E0B"
  },
  {
    title: "분석 보기",
    icon: "barChart",
    gradient: "linear-gradient(135deg, #8B5CF6 14.64%, #7C3AED 85.36%)", 
    shadowColor: "#8B5CF6"
  }
];