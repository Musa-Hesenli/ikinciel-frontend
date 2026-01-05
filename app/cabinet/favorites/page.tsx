'use client';

import { useState } from 'react';
import UserSidebar from '@/components/features/cabinet/UserSidebar';
import ProductCard from '@/components/features/products/ProductCard';

interface FavoriteListing {
  id: string;
  title: string;
  location: string;
  price: number;
  imageUrl: string;
  category: string;
}

// Mock data - replace with API call
const mockFavorites: FavoriteListing[] = [
  {
    id: '1',
    title: 'BMW X5, 2020',
    location: 'Bakı',
    price: 75000,
    imageUrl: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800',
    category: 'Nəqliyyat'
  },
  {
    id: '2',
    title: 'Yaşayış kompleksində 2 otaqlı mənzil',
    location: 'Bakı, Nərimanov ray.',
    price: 180000,
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
    category: 'Daşınmaz əmlak'
  },
  {
    id: '3',
    title: 'Gaming Laptop MSI',
    location: 'Bakı, Yasamal ray.',
    price: 2800,
    imageUrl: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800',
    category: 'Elektronika'
  },
  {
    id: '4',
    title: 'Ofis üçün yazı masası',
    location: 'Gəncə',
    price: 450,
    imageUrl: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800',
    category: 'Mebel'
  }
];

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState(mockFavorites);

  const handleRemoveFavorite = (id: string) => {
    setFavorites(favorites.filter(item => item.id !== id));
  };

  return (
    <main className="w-full mx-auto p-4 md:p-8 lg:p-10 max-w-7xl">
      <div className="flex flex-col lg:flex-row gap-8">
        <UserSidebar />

        <div className="flex-1">
          <div className="bg-surface-light dark:bg-surface-dark p-4 md:p-6 rounded-xl border border-border-light dark:border-border-dark">
            {/* Page Heading */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-2">
                <p className="text-text-light-primary dark:text-text-dark-primary text-3xl font-black leading-tight tracking-[-0.033em]">
                  Seçilmiş Elanlar
                </p>
                <p className="text-text-light-secondary dark:text-text-dark-secondary text-base font-normal leading-normal">
                  Bəyəndiyiniz elanlar burada saxlanılır
                </p>
              </div>
            </div>

            {/* Favorites Grid */}
            {favorites.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-4">
                {favorites.map(listing => (
                  <div key={listing.id} className="relative">
                    <ProductCard
                      id={listing.id}
                      title={listing.title}
                      price={listing.price}
                      location={listing.location}
                      imageUrl={listing.imageUrl}
                    />
                    <button
                      onClick={() => handleRemoveFavorite(listing.id)}
                      className="absolute top-6 right-6 bg-white dark:bg-surface-dark rounded-full p-2 shadow-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                      aria-label="Seçilmişlərdən sil"
                    >
                      <span className="material-symbols-outlined text-red-500" style={{ fontVariationSettings: "'FILL' 1" }}>
                        favorite
                      </span>
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center p-12 text-center">
                <span className="material-symbols-outlined text-6xl text-text-light-secondary dark:text-text-dark-secondary mb-4">
                  favorite_border
                </span>
                <p className="text-text-light-primary dark:text-text-dark-primary text-xl font-semibold mb-2">
                  Seçilmiş elan yoxdur
                </p>
                <p className="text-text-light-secondary dark:text-text-dark-secondary">
                  Bəyəndiyiniz elanları ürək ikonuna klikləyərək əlavə edin
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
