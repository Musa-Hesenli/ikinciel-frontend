'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui';
import { ROUTES } from '@/constants';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={ROUTES.HOME} className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">İ</span>
            </div>
            <span className="text-xl font-bold text-gray-900">İkinciel</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href={ROUTES.LISTINGS} className="text-gray-700 hover:text-primary transition-colors">
              All Listings
            </Link>
            <Link href={ROUTES.HOME} className="text-gray-700 hover:text-primary transition-colors">
              Categories
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-3">
              <Link href={ROUTES.FAVORITES}>
                <Button variant="ghost" size="sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </Button>
              </Link>
              <Link href={ROUTES.MESSAGES}>
                <Button variant="ghost" size="sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </Button>
              </Link>
              <Link href={ROUTES.LOGIN}>
                <Button variant="outline" size="sm">
                  Login
                </Button>
              </Link>
            </div>
            <Link href={ROUTES.CREATE_LISTING}>
              <Button size="sm">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Post Ad
              </Button>
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3">
              <Link href={ROUTES.LISTINGS} className="text-gray-700 hover:text-primary transition-colors py-2">
                All Listings
              </Link>
              <Link href={ROUTES.HOME} className="text-gray-700 hover:text-primary transition-colors py-2">
                Categories
              </Link>
              <Link href={ROUTES.FAVORITES} className="text-gray-700 hover:text-primary transition-colors py-2">
                Favorites
              </Link>
              <Link href={ROUTES.MESSAGES} className="text-gray-700 hover:text-primary transition-colors py-2">
                Messages
              </Link>
              <Link href={ROUTES.LOGIN} className="text-gray-700 hover:text-primary transition-colors py-2">
                Login
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
