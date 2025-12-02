import Link from 'next/link';
import { Container } from '@/components/layout';
import SearchBar from '@/components/features/search/SearchBar';
import CategoryGrid from '@/components/features/categories/CategoryGrid';
import ProductGrid from '@/components/features/products/ProductGrid';
import { Button } from '@/components/ui';
import { ROUTES } from '@/constants';
import { Category, Product } from '@/types';

// Mock data - replace with actual API calls
const mockCategories: Category[] = [
  { id: '1', name: 'Electronics', slug: 'electronics', icon: '💻', productCount: 1234 },
  { id: '2', name: 'Vehicles', slug: 'vehicles', icon: '🚗', productCount: 856 },
  { id: '3', name: 'Real Estate', slug: 'real-estate', icon: '🏠', productCount: 543 },
  { id: '4', name: 'Fashion', slug: 'fashion', icon: '👔', productCount: 2341 },
  { id: '5', name: 'Home & Garden', slug: 'home-garden', icon: '🛋️', productCount: 987 },
  { id: '6', name: 'Sports', slug: 'sports', icon: '⚽', productCount: 456 },
];

const mockProducts: Product[] = [
  {
    id: '1',
    title: 'iPhone 13 Pro Max 256GB',
    description: 'Great condition, barely used',
    price: 1500,
    currency: '₼',
    images: ['/placeholder-product.jpg'],
    category: mockCategories[0],
    location: { id: '1', city: 'Baku', region: 'Nasimi', country: 'Azerbaijan' },
    seller: { id: '1', name: 'John Doe', email: 'john@example.com', createdAt: new Date(), isVerified: true },
    condition: 'used',
    status: 'active',
    viewCount: 245,
    favoriteCount: 12,
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    updatedAt: new Date(),
    isFeatured: true,
  },
  {
    id: '2',
    title: 'MacBook Pro 14" M1 Pro',
    description: 'Like new, with original box',
    price: 3200,
    currency: '₼',
    images: ['/placeholder-product.jpg'],
    category: mockCategories[0],
    location: { id: '2', city: 'Baku', region: 'Yasamal', country: 'Azerbaijan' },
    seller: { id: '2', name: 'Jane Smith', email: 'jane@example.com', createdAt: new Date(), isVerified: true },
    condition: 'new',
    status: 'active',
    viewCount: 189,
    favoriteCount: 8,
    createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5 hours ago
    updatedAt: new Date(),
  },
  {
    id: '3',
    title: 'Samsung Galaxy S23 Ultra',
    description: 'Perfect condition, under warranty',
    price: 1800,
    currency: '₼',
    images: ['/placeholder-product.jpg'],
    category: mockCategories[0],
    location: { id: '3', city: 'Baku', region: 'Sabunchu', country: 'Azerbaijan' },
    seller: { id: '3', name: 'Mike Johnson', email: 'mike@example.com', createdAt: new Date(), isVerified: false },
    condition: 'used',
    status: 'active',
    viewCount: 156,
    favoriteCount: 5,
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
    updatedAt: new Date(),
  },
  {
    id: '4',
    title: 'Sony PlayStation 5',
    description: 'Brand new, sealed',
    price: 900,
    currency: '₼',
    images: ['/placeholder-product.jpg'],
    category: mockCategories[0],
    location: { id: '4', city: 'Baku', region: 'Khatai', country: 'Azerbaijan' },
    seller: { id: '4', name: 'Sarah Williams', email: 'sarah@example.com', createdAt: new Date(), isVerified: true },
    condition: 'new',
    status: 'active',
    viewCount: 342,
    favoriteCount: 23,
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
    updatedAt: new Date(),
    isPromoted: true,
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Buy & Sell Anything
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100">
              The largest marketplace for second-hand items in Azerbaijan
            </p>
            <div className="max-w-2xl mx-auto">
              <SearchBar />
            </div>
          </div>
        </Container>
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-gray-50">
        <Container>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Browse Categories</h2>
          </div>
          <CategoryGrid categories={mockCategories} />
        </Container>
      </section>

      {/* Featured Products */}
      <section className="py-12">
        <Container>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Featured Listings</h2>
            <Link href={ROUTES.LISTINGS}>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </Link>
          </div>
          <ProductGrid products={mockProducts} />
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Sell?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Post your ad for free and reach thousands of potential buyers
            </p>
            <Link href={ROUTES.CREATE_LISTING}>
              <Button size="lg">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Post Your Ad Now
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
