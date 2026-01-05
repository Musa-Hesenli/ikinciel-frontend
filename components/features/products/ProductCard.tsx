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
    <Link href={ROUTES.PRODUCT(product.id)} className="h-full">
      <div className="flex flex-col h-full bg-white rounded-xl shadow-sm overflow-hidden group">
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

        <div className="flex flex-col px-3 sm:px-4 pt-3 sm:pt-4 pb-3 sm:pb-4 flex-1">
          <p className="text-base sm:text-lg font-bold text-gray-900 mb-1">
            {formatPrice(product.price, product.currency)}
          </p>
          <h3 className="text-sm sm:text-base font-medium text-gray-900 group-hover:text-primary transition-colors line-clamp-2 mb-2 sm:mb-3">
            {product.title}
          </h3>
          <div className="flex justify-between text-xs sm:text-sm text-gray-500 mt-auto">
            <span className="truncate">{product.location.city}</span>
            <span className="ml-1 flex-shrink-0">{formatRelativeTime(product.createdAt)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
