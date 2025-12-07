import { Product } from '@/types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  emptyMessage?: string;
  title?: string;
}

export default function ProductGrid({ products, emptyMessage = 'No products found', title }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <span className="material-symbols-outlined text-gray-400 !text-5xl">
          inventory_2
        </span>
        <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">No products</h3>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-10 py-5 sm:py-10">
      <div className="flex flex-col gap-6">
        {title && (
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">{title}</h1>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
