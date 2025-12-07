import Link from 'next/link';
import { Product } from '@/types';
import { formatPrice, formatRelativeTime } from '@/lib/utils';
import { ROUTES } from '@/constants';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const mainImage = product.images[0] || '/placeholder-product.jpg';

  return (
    <Link href={ROUTES.PRODUCT(product.id)}>
      <div className="flex flex-col gap-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden group">
        <div className="relative">
          <div
            className="aspect-[4/3] bg-cover bg-center"
            style={{ backgroundImage: `url("${mainImage}")` }}
          />

          {/* Premium/Featured Badge */}
          <div className="absolute top-2 right-2 flex gap-1.5">
            {product.isPremium && (
              <div className="flex items-center justify-center size-8 rounded-full bg-yellow-400/90 backdrop-blur-sm">
                <span className="material-symbols-outlined text-black !text-xl fill">workspace_premium</span>
              </div>
            )}
            {product.isPromoted && (
              <div className="flex items-center justify-center size-8 rounded-full bg-purple-500/90 backdrop-blur-sm">
                <span className="material-symbols-outlined text-white !text-xl fill">diamond</span>
              </div>
            )}
          </div>

          {/* Store Badge */}
          {product.store && (
            <div className="absolute bottom-2 left-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-white text-lg drop-shadow-md">storefront</span>
              <span className="text-white text-sm font-medium drop-shadow-md">{product.store.name}</span>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-3 px-4 pb-4">
          <p className="text-lg font-bold text-gray-900 dark:text-white">
            {formatPrice(product.price, product.currency)}
          </p>
          <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors">
            {product.title}
          </h3>
          <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
            <span>{product.location.city}</span>
            <span>{formatRelativeTime(product.createdAt)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
