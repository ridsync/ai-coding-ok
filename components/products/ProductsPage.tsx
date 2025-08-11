"use client";

import { Navigation } from "@/components/sections/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function ProductsPage() {
  const mockProducts = [
    {
      id: 1,
      name: "AI 코딩 강의",
      price: "₩99,000",
      status: "판매중",
      sales: 234,
    },
    {
      id: 2,
      name: "프리미엄 멘토링",
      price: "₩199,000",
      status: "판매중",
      sales: 89,
    },
    {
      id: 3,
      name: "개발자 굿즈",
      price: "₩29,000",
      status: "품절",
      sales: 156,
    },
    {
      id: 4,
      name: "온라인 워크샵",
      price: "₩149,000",
      status: "준비중",
      sales: 0,
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
                제품 관리
              </h1>
              <p className="text-muted-foreground">
                제품을 등록하고 판매를 관리하세요
              </p>
            </div>
            <Button>새 제품 등록</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2">전체 제품</h3>
              <p className="text-3xl font-bold text-primary">12</p>
              <p className="text-sm text-muted-foreground">등록된 제품</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2">판매중</h3>
              <p className="text-3xl font-bold text-green-500">8</p>
              <p className="text-sm text-muted-foreground">활성 제품</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2">총 매출</h3>
              <p className="text-3xl font-bold text-blue-500">₩2.4M</p>
              <p className="text-sm text-muted-foreground">이번 달</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2">총 판매량</h3>
              <p className="text-3xl font-bold text-purple-500">479</p>
              <p className="text-sm text-muted-foreground">누적 판매</p>
            </Card>
          </div>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">제품 목록</h3>
            <div className="space-y-4">
              {mockProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-lg">📦</span>
                    </div>
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {product.price}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-right">
                      <p className="text-sm font-medium">
                        {product.sales}개 판매
                      </p>
                    </div>
                    <Badge
                      variant={
                        product.status === "판매중"
                          ? "default"
                          : product.status === "품절"
                          ? "destructive"
                          : "secondary"
                      }
                    >
                      {product.status}
                    </Badge>
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
