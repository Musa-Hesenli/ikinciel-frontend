import Image from 'next/image';
import { Container } from '@/components/layout';
import { Button, Badge, Card, CardBody } from '@/components/ui';
import { formatPrice, formatRelativeTime } from '@/lib/utils';

// Mock product data - in real app, fetch from API
const mockProduct = {
  id: '1',
  title: 'iPhone 13 Pro Max 256GB',
  description: 'Great condition iPhone 13 Pro Max with 256GB storage. Barely used, always kept in a case. Includes original box, charger, and cable. Battery health at 98%. No scratches or dents. Unlocked and ready for any carrier.',
  price: 1500,
  currency: '₼',
  images: ['/placeholder-product.jpg', '/placeholder-product.jpg', '/placeholder-product.jpg'],
  category: { id: '1', name: 'Electronics', slug: 'electronics' },
  location: { id: '1', city: 'Baku', region: 'Nasimi', country: 'Azerbaijan' },
  seller: {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+994501234567',
    createdAt: new Date(Date.now() - 365 * 24 * 60 * 60 * 1000),
    isVerified: true
  },
  condition: 'used' as const,
  status: 'active' as const,
  viewCount: 245,
  favoriteCount: 12,
  createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
  updatedAt: new Date(),
  features: {
    'Storage': '256GB',
    'Color': 'Graphite',
    'Battery Health': '98%',
  }
};

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="py-8 bg-gray-50 min-h-screen">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images */}
          <div className="lg:col-span-2">
            <Card>
              <div className="aspect-[4/3] relative bg-gray-100">
                <Image
                  src={mockProduct.images[0]}
                  alt={mockProduct.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 grid grid-cols-4 gap-2">
                {mockProduct.images.map((img, idx) => (
                  <div key={idx} className="aspect-square relative bg-gray-100 rounded cursor-pointer hover:opacity-75 transition">
                    <Image
                      src={img}
                      alt={`${mockProduct.title} ${idx + 1}`}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                ))}
              </div>
            </Card>

            {/* Description */}
            <Card className="mt-6">
              <CardBody>
                <h2 className="text-xl font-semibold mb-4">Description</h2>
                <p className="text-gray-700 whitespace-pre-line">{mockProduct.description}</p>
              </CardBody>
            </Card>

            {/* Features */}
            {mockProduct.features && (
              <Card className="mt-6">
                <CardBody>
                  <h2 className="text-xl font-semibold mb-4">Details</h2>
                  <dl className="space-y-2">
                    {Object.entries(mockProduct.features).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-gray-100 last:border-0">
                        <dt className="text-gray-600">{key}</dt>
                        <dd className="font-medium text-gray-900">{String(value)}</dd>
                      </div>
                    ))}
                  </dl>
                </CardBody>
              </Card>
            )}
          </div>

          {/* Right Column - Product Info & Seller */}
          <div className="lg:col-span-1">
            <Card className="sticky top-20">
              <CardBody>
                <h1 className="text-2xl font-bold text-gray-900 mb-4">
                  {mockProduct.title}
                </h1>

                <div className="flex items-baseline justify-between mb-4">
                  <p className="text-3xl font-bold text-primary">
                    {formatPrice(mockProduct.price, mockProduct.currency)}
                  </p>
                  <Badge variant="default">{mockProduct.condition}</Badge>
                </div>

                <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {mockProduct.location.city}, {mockProduct.location.region}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {formatRelativeTime(mockProduct.createdAt)}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    {mockProduct.viewCount} views
                  </div>
                </div>

                {/* Seller Info */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Seller</h3>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-lg font-semibold text-primary">
                        {mockProduct.seller.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center">
                        <p className="font-medium">{mockProduct.seller.name}</p>
                        {mockProduct.seller.isVerified && (
                          <svg className="w-4 h-4 ml-1 text-primary" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <p className="text-sm text-gray-500">
                        Member since {formatRelativeTime(mockProduct.seller.createdAt)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <Button className="w-full" size="lg">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                    Contact Seller
                  </Button>
                  <Button variant="outline" className="w-full">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    Save to Favorites
                  </Button>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}
