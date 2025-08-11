"use client";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      name: "대시보드",
      href: "/dashboard",
    },
    {
      name: "사용자 관리",
      href: "/users",
    },
    {
      name: "이벤트",
      href: "/events",
    },
    {
      name: "제품 관리",
      href: "/products",
    },
    {
      name: "유튜버 컨텐츠",
      href: "/youtube-creator",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold gradient-text focus:outline-none focus:ring-2 focus:ring-ai-primary/50"
            >
              AI코딩OK
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-ai-primary px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="ghost" size="sm">
              로그인
            </Button>
            <Button size="sm" className="aurora-glow">
              회원가입
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-9 h-9"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border/20">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-foreground hover:text-ai-primary block px-3 py-2 text-base font-medium transition-colors duration-200 w-full text-left"
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" size="sm">
                  로그인
                </Button>
                <Button size="sm" className="aurora-glow">
                  회원가입
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
