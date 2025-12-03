'use client';

import { useState } from 'react';
import { Container } from '@/components/layout';
import SearchBar from '@/components/features/search/SearchBar';
import FilterPanel from '@/components/features/filters/FilterPanel';
import ProductGrid from '@/components/features/products/ProductGrid';
import { SearchFilters, Product, Category } from '@/types';

// Mock data
const mockProducts: Product[] = [
  {
    id: '1',
    title: 'iPhone 13 Pro Max 256GB',
    description: 'Great condition, barely used',
    price: 1500,
    currency: '₼',
    images: ['/placeholder-product.jpg'],
    category: { id: '1', name: 'Electronics', slug: 'electronics' },
    location: { id: '1', city: 'Baku', region: 'Nasimi', country: 'Azerbaijan' },
    seller: { id: '1', name: 'John Doe', email: 'john@example.com', createdAt: new Date(), isVerified: true },
    condition: 'used',
    status: 'active',
    viewCount: 245,
    favoriteCount: 12,
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
    updatedAt: new Date(),
    isFeatured: true,
  },
  // Add more mock products as needed
];

export default function ListingsPage() {
  const [filters, setFilters] = useState<SearchFilters>({
    sortBy: 'latest',
  });

  const handleFilterChange = (newFilters: SearchFilters) => {
    setFilters(newFilters);
    // In a real app, fetch products with new filters
  };

  return (
    <div className="py-8 bg-gray-50 min-h-screen">
      <Container>
        {/* Search Bar */}
        <div className="mb-6">
          <SearchBar initialQuery={filters.query} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-1">
            <FilterPanel filters={filters} onFilterChange={handleFilterChange} />
          </aside>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="mb-4 flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-900">
                All Listings
              </h1>
              <p className="text-sm text-gray-600">
                {mockProducts.length} results
              </p>
            </div>
            <ProductGrid products={mockProducts} />
          </div>
        </div>
      </Container>
    </div>
  );
}
