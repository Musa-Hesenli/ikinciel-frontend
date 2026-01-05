import CategoryGrid from '@/components/features/categories/CategoryGrid';
import ProductGrid from '@/components/features/products/ProductGrid';
import { Category, Product } from '@/types';

// Mock data - replace with actual API calls
const mockCategories: Category[] = [
  { id: '1', name: 'Nəqliyyat', slug: 'transport', icon: 'directions_car' },
  { id: '2', name: 'Daşınmaz əmlak', slug: 'real-estate', icon: 'home' },
  { id: '3', name: 'Elektronika', slug: 'electronics', icon: 'devices' },
  { id: '4', name: 'İş və biznes', slug: 'business', icon: 'work' },
  { id: '5', name: 'Şəxsi əşyalar', slug: 'personal', icon: 'watch' },
  { id: '6', name: 'Hobbi və asudə', slug: 'hobbies', icon: 'sports_esports' },
  { id: '7', name: 'Heyvanlar', slug: 'animals', icon: 'pets' },
  { id: '8', name: 'Xidmətlər', slug: 'services', icon: 'home_repair_service' },
  { id: '9', name: 'Uşaq aləmi', slug: 'kids', icon: 'stroller' },
  { id: '10', name: 'Ev və bağ üçün', slug: 'home-garden', icon: 'chair' },
  { id: '11', name: 'Təmir və tikinti', slug: 'construction', icon: 'construction' },
  { id: '12', name: 'Digər', slug: 'other', icon: 'more_horiz' },
];

const mockProducts: Product[] = [
  {
    id: '1',
    title: 'Nəsimi rayonunda 2 otaqlı mənzil',
    description: 'Təmirli mənzil',
    price: 135000,
    currency: 'AZN',
    images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuBALyIDea0fsnHv4JFqFXAxbRxqXKUjCe-nJ-fJ6Yb9aoZqPBY52wZra33-aR8Pmqzh547WLQeA_OdhuYmBfZQ_SmqCDxh62WkU3T53fn8Jcbj4hzRknEUEEo7MiT69qNfzr05-UxGQcNJADkRYnjegCjsfW3NrmtxTeJc3HYzzBrgYCZGvkhIeDsTX1byGf40vu6ahL6lsNyqfV5Yp3REh45veCC4Jjp5lGJbRqyc6hQuqzLrKwFGDk204uUhZk0NeXLmZvdEYHtw'],
    category: mockCategories[1],
    location: { id: '1', city: 'Bakı', region: 'Nəsimi', country: 'Azerbaijan' },
    seller: { id: '1', name: 'John Doe', email: 'john@example.com', createdAt: new Date(), isVerified: true },
    condition: 'used',
    status: 'active',
    viewCount: 245,
    favoriteCount: 12,
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
    updatedAt: new Date(),
    isPremium: true,
    store: { id: '1', name: 'Prestige Homes', isVerified: true },
  },
  {
    id: '2',
    title: 'Mercedes-Benz C-Class, 2012',
    description: 'Yaxşı vəziyyətdə',
    price: 25500,
    currency: 'AZN',
    images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuCB-tOrVSYrosblx83moP3JuomgOiJ5CPr3mAJATFLa-Ca9DgdmwrukBjlJRL4_Mc8yyh2-uhSt_zS7jQu-uqEyS0cNEFsMxD6bYfQHw5kzj5pq21wu7pXBU2FqxkhAPhqmbcUc5I9-AWpup0_ONbOAVfIhnf-v0lO3yFfriv1zYndZBXl6XA5xjFtV0m0S4IgSS2SJS1Z5CCTyyC6PCUPxsicf4PQiiF6cmGiZs7hTMEZwD1Cw0EKt4gYWz4D1T9Fy9nf_-oT0LIQ'],
    category: mockCategories[0],
    location: { id: '2', city: 'Sumqayıt', region: 'Sumqayıt', country: 'Azerbaijan' },
    seller: { id: '2', name: 'Jane Smith', email: 'jane@example.com', createdAt: new Date(), isVerified: true },
    condition: 'used',
    status: 'active',
    viewCount: 189,
    favoriteCount: 8,
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
    updatedAt: new Date(),
    isPromoted: true,
  },
  {
    id: '3',
    title: 'Apple iPhone 14 Pro Max',
    description: 'Ideal vəziyyətdə',
    price: 1200,
    currency: 'AZN',
    images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuCpNALD7ss1o2G_YcVp1G3jzMNWDlVJdPGSIgRsasgNRaTHCh4ZkovaEZ1x1dkFPMnbA7UHesbHqdX0Q2tIHuiR5JGBEcp22Dg9IFBIyj3Qyk-hOARpBjuuSxtbPMEeyhiqt66wSSk1uoWYd7L_EsuiyctDuyGle7E3a3Ch5GF0kz-H9fOSfK9cd0gvLNTP9kCqI92do_ZKMdO3Gi8C4pX8Gm-m6qeYHOeAxRi_T-hIw7Ifm1r-CWfk2RsNC-S7O1HRZQa6lG5FY3k'],
    category: mockCategories[2],
    location: { id: '3', city: 'Gəncə', region: 'Gəncə', country: 'Azerbaijan' },
    seller: { id: '3', name: 'Mike Johnson', email: 'mike@example.com', createdAt: new Date(), isVerified: false },
    condition: 'used',
    status: 'active',
    viewCount: 156,
    favoriteCount: 5,
    createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000),
    updatedAt: new Date(),
    isPremium: true,
  },
  {
    id: '4',
    title: 'Notbuk HP Pavilion 15',
    description: 'Yaxşı işlək vəziyyətdə',
    price: 850,
    currency: 'AZN',
    images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuC8JX-Wao7OLKuvCZFXsIapctamRohJ8FZGiDhj2BswcGcgsxVptoQbi52UmNGJbmayFjQZmLHGpskz-xfPDyB_oVwuMPAnWyaKHa0RW7QgNE1r5rKPa0i0XrX-fy2oEjjyJE2eR3aU50SICmSxnY_klImOXT2cA4FuClK4-5pKCaYcB3LLLsRSXKUfc1-d4Q6TAgmvXbDsYve0m8B1IOvulhxa_AD9SUFpZ5o-KVkh8pQYnHCQAttW-zhVHp5ChttAZq3oidhL5JI'],
    category: mockCategories[2],
    location: { id: '4', city: 'Bakı', region: 'Bakı', country: 'Azerbaijan' },
    seller: { id: '4', name: 'Sarah Williams', email: 'sarah@example.com', createdAt: new Date(), isVerified: true },
    condition: 'used',
    status: 'active',
    viewCount: 342,
    favoriteCount: 23,
    createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000),
    updatedAt: new Date(),
    isPromoted: true,
    store: { id: '2', name: 'TechShop', isVerified: true },
  },
  {
    id: '5',
    title: 'Kirayə 3 otaqlı mənzil',
    description: 'Təmirli, rahat mənzil',
    price: 600,
    currency: 'AZN / aylıq',
    images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuC8JX-Wao7OLKuvCZFXsIapctamRohJ8FZGiDhj2BswcGcgsxVptoQbi52UmNGJbmayFjQZmLHGpskz-xfPDyB_oVwuMPAnWyaKHa0RW7QgNE1r5rKPa0i0XrX-fy2oEjjyJE2eR3aU50SICmSxnY_klImOXT2cA4FuClK4-5pKCaYcB3LLLsRSXKUfc1-d4Q6TAgmvXbDsYve0m8B1IOvulhxa_AD9SUFpZ5o-KVkh8pQYnHCQAttW-zhVHp5ChttAZq3oidhL5JI'],
    category: mockCategories[1],
    location: { id: '5', city: 'Bakı', region: 'Bakı', country: 'Azerbaijan' },
    seller: { id: '5', name: 'Ali Məmmədov', email: 'ali@example.com', createdAt: new Date(), isVerified: true },
    condition: 'used',
    status: 'active',
    viewCount: 123,
    favoriteCount: 7,
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
    updatedAt: new Date(),
    isPremium: true,
  },
  {
    id: '6',
    title: 'Nike Air Jordan 1 Retro',
    description: 'Orijinal, yeni',
    price: 150,
    currency: 'AZN',
    images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuC8JX-Wao7OLKuvCZFXsIapctamRohJ8FZGiDhj2BswcGcgsxVptoQbi52UmNGJbmayFjQZmLHGpskz-xfPDyB_oVwuMPAnWyaKHa0RW7QgNE1r5rKPa0i0XrX-fy2oEjjyJE2eR3aU50SICmSxnY_klImOXT2cA4FuClK4-5pKCaYcB3LLLsRSXKUfc1-d4Q6TAgmvXbDsYve0m8B1IOvulhxa_AD9SUFpZ5o-KVkh8pQYnHCQAttW-zhVHp5ChttAZq3oidhL5JI'],
    category: mockCategories[4],
    location: { id: '6', city: 'Bakı', region: 'Bakı', country: 'Azerbaijan' },
    seller: { id: '6', name: 'Rəşad İsmayılov', email: 'rashad@example.com', createdAt: new Date(), isVerified: false },
    condition: 'new',
    status: 'active',
    viewCount: 89,
    favoriteCount: 3,
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    updatedAt: new Date(),
    isPromoted: true,
  },
  {
    id: '7',
    title: 'Yataq dəsti',
    description: 'Keyfiyyətli materialdan',
    price: 450,
    currency: 'AZN',
    images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuC8JX-Wao7OLKuvCZFXsIapctamRohJ8FZGiDhj2BswcGcgsxVptoQbi52UmNGJbmayFjQZmLHGpskz-xfPDyB_oVwuMPAnWyaKHa0RW7QgNE1r5rKPa0i0XrX-fy2oEjjyJE2eR3aU50SICmSxnY_klImOXT2cA4FuClK4-5pKCaYcB3LLLsRSXKUfc1-d4Q6TAgmvXbDsYve0m8B1IOvulhxa_AD9SUFpZ5o-KVkh8pQYnHCQAttW-zhVHp5ChttAZq3oidhL5JI'],
    category: mockCategories[9],
    location: { id: '7', city: 'Sumqayıt', region: 'Sumqayıt', country: 'Azerbaijan' },
    seller: { id: '7', name: 'Səbinə Əliyeva', email: 'sabina@example.com', createdAt: new Date(), isVerified: true },
    condition: 'new',
    status: 'active',
    viewCount: 67,
    favoriteCount: 4,
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
    updatedAt: new Date(),
    isPremium: true,
    store: { id: '3', name: 'Mebel Evi', isVerified: true },
  },
  {
    id: '8',
    title: 'Apple Macbook Pro 13"',
    description: 'M1 çip, ideal vəziyyət',
    price: 1800,
    currency: 'AZN',
    images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuC8JX-Wao7OLKuvCZFXsIapctamRohJ8FZGiDhj2BswcGcgsxVptoQbi52UmNGJbmayFjQZmLHGpskz-xfPDyB_oVwuMPAnWyaKHa0RW7QgNE1r5rKPa0i0XrX-fy2oEjjyJE2eR3aU50SICmSxnY_klImOXT2cA4FuClK4-5pKCaYcB3LLLsRSXKUfc1-d4Q6TAgmvXbDsYve0m8B1IOvulhxa_AD9SUFpZ5o-KVkh8pQYnHCQAttW-zhVHp5ChttAZq3oidhL5JI'],
    category: mockCategories[2],
    location: { id: '8', city: 'Bakı', region: 'Bakı', country: 'Azerbaijan' },
    seller: { id: '8', name: 'Elvin Hüseynov', email: 'elvin@example.com', createdAt: new Date(), isVerified: true },
    condition: 'used',
    status: 'active',
    viewCount: 234,
    favoriteCount: 15,
    createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000),
    updatedAt: new Date(),
    isPromoted: true,
  },
  {
    id: '9',
    title: 'Adidas Superstar',
    description: 'Orijinal, az işlənmiş',
    price: 220,
    currency: 'AZN',
    images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuC8JX-Wao7OLKuvCZFXsIapctamRohJ8FZGiDhj2BswcGcgsxVptoQbi52UmNGJbmayFjQZmLHGpskz-xfPDyB_oVwuMPAnWyaKHa0RW7QgNE1r5rKPa0i0XrX-fy2oEjjyJE2eR3aU50SICmSxnY_klImOXT2cA4FuClK4-5pKCaYcB3LLLsRSXKUfc1-d4Q6TAgmvXbDsYve0m8B1IOvulhxa_AD9SUFpZ5o-KVkh8pQYnHCQAttW-zhVHp5ChttAZq3oidhL5JI'],
    category: mockCategories[4],
    location: { id: '9', city: 'Gəncə', region: 'Gəncə', country: 'Azerbaijan' },
    seller: { id: '9', name: 'Nigar Əhmədova', email: 'nigar@example.com', createdAt: new Date(), isVerified: false },
    condition: 'used',
    status: 'active',
    viewCount: 45,
    favoriteCount: 2,
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
    updatedAt: new Date(),
    isPremium: true,
  },
  {
    id: '10',
    title: 'Divan və 2 kreslo',
    description: 'Təmiz, rahat',
    price: 350,
    currency: 'AZN',
    images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuC8JX-Wao7OLKuvCZFXsIapctamRohJ8FZGiDhj2BswcGcgsxVptoQbi52UmNGJbmayFjQZmLHGpskz-xfPDyB_oVwuMPAnWyaKHa0RW7QgNE1r5rKPa0i0XrX-fy2oEjjyJE2eR3aU50SICmSxnY_klImOXT2cA4FuClK4-5pKCaYcB3LLLsRSXKUfc1-d4Q6TAgmvXbDsYve0m8B1IOvulhxa_AD9SUFpZ5o-KVkh8pQYnHCQAttW-zhVHp5ChttAZq3oidhL5JI'],
    category: mockCategories[9],
    location: { id: '10', city: 'Bakı', region: 'Bakı', country: 'Azerbaijan' },
    seller: { id: '10', name: 'Ramil Qasımov', email: 'ramil@example.com', createdAt: new Date(), isVerified: true },
    condition: 'used',
    status: 'active',
    viewCount: 78,
    favoriteCount: 5,
    createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000),
    updatedAt: new Date(),
    isPromoted: true,
  },
];

export default function Home() {
  return (
    <main className="bg-gray-50">
      <div className="container mx-auto">
        <div className="flex gap-4 lg:gap-6">
          {/* Left Banner */}
          <aside className="hidden xl:block w-48 2xl:w-64 flex-shrink-0">
            <div className="sticky top-4 pt-4">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-6 h-[600px] flex items-center justify-center border border-purple-200">
                <p className="text-sm text-gray-500 text-center">Reklam sahəsi</p>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Categories Section */}
            <CategoryGrid categories={mockCategories} />

            {/* Premium Products */}
            <ProductGrid
              products={mockProducts}
              title="Premium Elanlar"
              description="Ən yaxşı və seçilmiş elanları kəşf edin"
              viewAllLink="/listings?premium=true"
            />
          </div>

          {/* Right Banner */}
          <aside className="hidden xl:block w-48 2xl:w-64 flex-shrink-0">
            <div className="sticky top-4 pt-4">
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-6 h-[600px] flex items-center justify-center border border-blue-200">
                <p className="text-sm text-gray-500 text-center">Reklam sahəsi</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
