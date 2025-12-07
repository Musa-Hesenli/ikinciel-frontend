import Link from 'next/link';
import { Category } from '@/types';
import { ROUTES } from '@/constants';

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={ROUTES.CATEGORY(category.slug)}
      className="flex flex-col items-center gap-2 text-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
    >
      <span className="material-symbols-outlined !text-4xl">
        {category.icon || 'category'}
      </span>
      <span className="whitespace-nowrap">{category.name}</span>
    </Link>
  );
}
