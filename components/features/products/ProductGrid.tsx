import { Product } from '@/types';
import ProductCard from './ProductCard';
import Link from 'next/link';

interface ProductGridProps {
  products: Product[];
  emptyMessage?: string;
  title?: string;
  description?: string;
  viewAllLink?: string;
}

export default function ProductGrid({ products, emptyMessage = 'No products found', title, description, viewAllLink }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <span className="material-symbols-outlined text-gray-400 !text-5xl">
          inventory_2
        </span>
        <h3 className="mt-2 text-sm font-medium text-gray-900">No products</h3>
        <p className="mt-1 text-sm text-gray-500">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-10 py-5 sm:py-10">
      <div className="flex flex-col gap-6">
        {(title || description || viewAllLink) && (
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
            <div className="flex flex-col gap-2">
              {title && (
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{title}</h1>
              )}
              {description && (
                <p className="text-sm sm:text-base text-gray-600">{description}</p>
              )}
            </div>
            {viewAllLink && (
              <Link href={viewAllLink}>
                <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary hover:text-primary-dark transition-colors">
                  <span>Hamısına bax</span>
                  <span className="material-symbols-outlined !text-lg">arrow_forward</span>
                </button>
              </Link>
            )}
          </div>
        )}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
