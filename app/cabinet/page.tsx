'use client';

import { useState } from 'react';
import UserSidebar from '@/components/features/cabinet/UserSidebar';
import UserListingCard from '@/components/features/cabinet/UserListingCard';

interface Listing {
  id: string;
  title: string;
  location: string;
  price: number;
  imageUrl: string;
  postedDate: string;
  status: 'active' | 'pending' | 'inactive';
}

// Mock data - replace with API call
const mockListings: Listing[] = [
  {
    id: '1',
    title: 'Mərkəzdə 3 otaqlı mənzil',
    location: 'Bakı, Nəsimi ray.',
    price: 250000,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOsMF9Gc3d4ocWzu9d_cr7VnVy2ohyE3AzxaIfw3yFvR2eRSj6dk4WikioA_l4Mee94rxvzlTJeUY48DzaMn7dnZGK8Gpe7u_3beh7gaeGtVTGdN_YOBQ_o55lq73kP5hDtM5sL63ZS2rVcwQPzBlEvhU9VC3ljRI7k6N1mjdWa0RaG1d-LFd34uB2TvuF-bgWpTNXf7PPUYUEkp-z5B42lbynJwepxem4UbIt0IPjKoyfK6hjcfpBPxZWaTV3PU8rawZ4pIIms8Q',
    postedDate: '12.08.2024',
    status: 'active'
  },
  {
    id: '2',
    title: 'Chevrolet Camaro, 2015',
    location: 'Sumqayıt',
    price: 55000,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKlNkXzCcIGVCvkvs-JXZE8nmEcHHSNmQHpRt3ZVKuPZF_zS7YWQhd2XlfcEsHPrjvu7DO636lG3P5OcpzEJLjOetLthF_FpUv2ACg3pTs-7d2osh4zm9e4vcxyXmmQZlmkxSrsZfJTlAc0otqjLOWHoxVvAHfCMJAYkfvWYPZhPprAMte1MWwPBoMJr9Mkb7gdj0duLlKr8wVt0KF1EO5JtiLDlVzQCBAHVJAh-NrRUe1P0RQWrNJB5DKHent3iyrpqGZd0Dpto0',
    postedDate: '10.08.2024',
    status: 'active'
  },
  {
    id: '3',
    title: 'iPhone 14 Pro Max',
    location: 'Bakı, Xətai ray.',
    price: 1800,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARamETslBDFDknBtZk-FG83Wv-bA2ohn_L6boOD4QoZnAeqcnr_A7hRCBKj2zmwyMdar6zFHogZF528uwN2S28sI5nkEnYfT6CXSOqU65nbJUL5pN3D4Me-YSsAJ--STzNkiR92t9Htsm6KdUbQhNEoYtv5g1_C8VcaA9wS-lP5nztes21KPvdJMXXinlsUwuuvtEmL2NEgX-c0M43O37xhMXokXiV_iBAjjWyfNrgKustgxZgx95knQY0eqlnVzpURg0kx8mqoAY',
    postedDate: '05.08.2024',
    status: 'active'
  },
  {
    id: '4',
    title: 'MacBook Pro M2',
    location: 'Bakı, Yasamal ray.',
    price: 3500,
    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800',
    postedDate: '02.08.2024',
    status: 'pending'
  },
  {
    id: '5',
    title: 'Samsung 65" QLED TV',
    location: 'Gəncə',
    price: 2200,
    imageUrl: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800',
    postedDate: '25.07.2024',
    status: 'inactive'
  }
];

export default function CabinetPage() {
  const [activeTab, setActiveTab] = useState<'active' | 'pending' | 'inactive'>('active');

  const filteredListings = mockListings.filter(listing => listing.status === activeTab);

  const getTabCount = (status: 'active' | 'pending' | 'inactive') => {
    return mockListings.filter(listing => listing.status === status).length;
  };

  const handlePromote = (id: string) => {
    console.log('Promote listing:', id);
    // Implement promote functionality
  };

  const handleEdit = (id: string) => {
    console.log('Edit listing:', id);
    // Navigate to edit page
  };

  const handleDelete = (id: string) => {
    console.log('Delete listing:', id);
    // Implement delete functionality
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
                  Elanlarım
                </p>
                <p className="text-text-light-secondary dark:text-text-dark-secondary text-base font-normal leading-normal">
                  Elanlarınızı idarə edin və yenilərini əlavə edin.
                </p>
              </div>
            </div>

            {/* Tabs */}
            <div className="pb-3 mt-4">
              <div className="flex border-b border-border-light dark:border-border-dark px-4 gap-8">
                <button
                  onClick={() => setActiveTab('active')}
                  className={`flex items-center gap-2 justify-center border-b-[3px] pb-[13px] pt-4 ${
                    activeTab === 'active'
                      ? 'border-b-primary'
                      : 'border-b-transparent'
                  }`}
                >
                  <p className={`text-sm font-bold leading-normal tracking-[0.015em] ${
                    activeTab === 'active' ? 'text-primary' : 'text-text-light-secondary dark:text-text-dark-secondary'
                  }`}>
                    Aktiv
                  </p>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                    activeTab === 'active'
                      ? 'bg-primary/20 text-primary'
                      : 'bg-gray-500/20 text-text-light-secondary dark:text-text-dark-secondary'
                  }`}>
                    {getTabCount('active')}
                  </span>
                </button>

                <button
                  onClick={() => setActiveTab('pending')}
                  className={`flex items-center gap-2 justify-center border-b-[3px] pb-[13px] pt-4 ${
                    activeTab === 'pending'
                      ? 'border-b-primary'
                      : 'border-b-transparent'
                  }`}
                >
                  <p className={`text-sm font-bold leading-normal tracking-[0.015em] ${
                    activeTab === 'pending' ? 'text-primary' : 'text-text-light-secondary dark:text-text-dark-secondary'
                  }`}>
                    Gözləmədə
                  </p>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                    activeTab === 'pending'
                      ? 'bg-primary/20 text-primary'
                      : 'bg-gray-500/20 text-text-light-secondary dark:text-text-dark-secondary'
                  }`}>
                    {getTabCount('pending')}
                  </span>
                </button>

                <button
                  onClick={() => setActiveTab('inactive')}
                  className={`flex items-center gap-2 justify-center border-b-[3px] pb-[13px] pt-4 ${
                    activeTab === 'inactive'
                      ? 'border-b-primary'
                      : 'border-b-transparent'
                  }`}
                >
                  <p className={`text-sm font-bold leading-normal tracking-[0.015em] ${
                    activeTab === 'inactive' ? 'text-primary' : 'text-text-light-secondary dark:text-text-dark-secondary'
                  }`}>
                    Passiv
                  </p>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                    activeTab === 'inactive'
                      ? 'bg-primary/20 text-primary'
                      : 'bg-gray-500/20 text-text-light-secondary dark:text-text-dark-secondary'
                  }`}>
                    {getTabCount('inactive')}
                  </span>
                </button>
              </div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
              {filteredListings.map(listing => (
                <UserListingCard
                  key={listing.id}
                  listing={listing}
                  onPromote={handlePromote}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              ))}
            </div>

            {filteredListings.length === 0 && (
              <div className="p-8 text-center text-text-light-secondary dark:text-text-dark-secondary">
                Bu statusda elan yoxdur
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
