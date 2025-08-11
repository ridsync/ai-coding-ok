"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Github, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  const footerLinks = {
    product: [
      { name: "AI 코딩 교육", href: "#education" },
      { name: "전문가 컨설팅", href: "#consulting" },
      { name: "개발자 커뮤니티", href: "#community" },
      { name: "가격 정책", href: "#pricing" },
    ],
    company: [
      { name: "회사 소개", href: "#about" },
      { name: "팀", href: "#team" },
      { name: "채용", href: "#careers" },
      { name: "블로그", href: "#blog" },
    ],
    support: [
      { name: "도움말", href: "#help" },
      { name: "문의하기", href: "#contact" },
      { name: "FAQ", href: "#faq" },
      { name: "상태 페이지", href: "#status" },
    ],
    legal: [
      { name: "이용약관", href: "#terms" },
      { name: "개인정보처리방침", href: "#privacy" },
      { name: "쿠키 정책", href: "#cookies" },
    ],
  }

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
  ]

  return (
    <footer className="bg-muted/30 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <div className="text-2xl font-bold gradient-text mb-4">AI코드</div>
                <p className="text-muted-foreground max-w-md">
                  AI와 함께하는 개인 맞춤형 코딩 교육, 전문가 컨설팅, 그리고 활발한 개발자 커뮤니티를 제공하는 통합 플랫폼입니다.
                </p>
              </div>

              {/* Newsletter */}
              <div className="space-y-4">
                <h3 className="font-semibold">뉴스레터 구독</h3>
                <p className="text-sm text-muted-foreground">
                  최신 개발 트렌드와 학습 팁을 받아보세요
                </p>
                <div className="flex space-x-2">
                  <Input 
                    placeholder="이메일 주소" 
                    className="flex-1"
                  />
                  <Button>구독</Button>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>contact@aicode.kr</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>02-1234-5678</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>서울특별시 강남구 테헤란로 123</span>
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-semibold mb-4">서비스</h3>
                <ul className="space-y-3">
                  {footerLinks.product.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4">회사</h3>
                <ul className="space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4">지원</h3>
                <ul className="space-y-3">
                  {footerLinks.support.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4">법적 고지</h3>
                <ul className="space-y-3">
                  {footerLinks.legal.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © 2024 AI코드. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social) => {
              const IconComponent = social.icon
              return (
                <Button
                  key={social.name}
                  variant="ghost"
                  size="sm"
                  className="w-9 h-9 rounded-md"
                  asChild
                >
                  <a href={social.href} aria-label={social.name}>
                    <IconComponent className="w-4 h-4" />
                  </a>
                </Button>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}