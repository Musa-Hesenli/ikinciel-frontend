import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types';
import { Card } from '@/components/ui';
import { Badge } from '@/components/ui';
import { formatPrice, formatRelativeTime } from '@/lib/utils';
import { ROUTES } from '@/constants';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const mainImage = product.images[0] || '/placeholder-product.jpg';

  return (
    <Link href={ROUTES.PRODUCT(product.id)}>
      <Card hover className="h-full">
        {/* Image Container */}
        <div className="relative aspect-[4/3] bg-gray-100">
          <Image
            src={mainImage}
            alt={product.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {product.isFeatured && (
            <div className="absolute top-2 left-2">
              <Badge variant="warning">Featured</Badge>
            </div>
          )}
          {product.isPromoted && (
            <div className="absolute top-2 left-2">
              <Badge variant="primary">Promoted</Badge>
            </div>
          )}
          <button
            className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              // Handle favorite toggle
            }}
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2 h-12">
            {product.title}
          </h3>

          <div className="flex items-baseline justify-between mb-2">
            <p className="text-xl font-bold text-primary">
              {formatPrice(product.price, product.currency)}
            </p>
            <Badge variant="default">{product.condition}</Badge>
          </div>

          <div className="flex items-center text-sm text-gray-500 mb-1">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {product.location.city}, {product.location.region}
          </div>

          <div className="flex items-center justify-between text-xs text-gray-400">
            <span>{formatRelativeTime(product.createdAt)}</span>
            <div className="flex items-center space-x-3">
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                {product.viewCount}
              </span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}
