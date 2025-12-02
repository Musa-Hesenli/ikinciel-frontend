import Link from 'next/link';
import { Category } from '@/types';
import { Card } from '@/components/ui';
import { ROUTES } from '@/constants';

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={ROUTES.CATEGORY(category.slug)}>
      <Card hover className="h-full">
        <div className="p-6 flex flex-col items-center text-center">
          {/* Icon */}
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            {category.icon ? (
              <span className="text-3xl">{category.icon}</span>
            ) : (
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            )}
          </div>

          {/* Name */}
          <h3 className="font-semibold text-gray-900 mb-1">
            {category.name}
          </h3>

          {/* Product Count */}
          {category.productCount !== undefined && (
            <p className="text-sm text-gray-500">
              {category.productCount} {category.productCount === 1 ? 'listing' : 'listings'}
            </p>
          )}
        </div>
      </Card>
    </Link>
  );
}
