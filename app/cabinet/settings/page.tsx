'use client';

import { useState } from 'react';
import UserSidebar from '@/components/features/cabinet/UserSidebar';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import Textarea from '@/components/ui/Textarea';

export default function SettingsPage() {
  const [formData, setFormData] = useState({
    name: 'İstifadəçi Adı',
    email: 'istifadeci@email.com',
    phone: '+994 50 123 45 67',
    city: 'baku',
    bio: '',
    notifications: {
      email: true,
      sms: false,
      push: true
    }
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNotificationChange = (type: 'email' | 'sms' | 'push') => {
    setFormData(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [type]: !prev.notifications[type]
      }
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Settings saved:', formData);
      setIsLoading(false);
      alert('Parametrlər uğurla yadda saxlanıldı!');
    }, 1000);
  };

  const cityOptions = [
    { value: 'baku', label: 'Bakı' },
    { value: 'ganja', label: 'Gəncə' },
    { value: 'sumqayit', label: 'Sumqayıt' },
    { value: 'mingachevir', label: 'Mingəçevir' },
    { value: 'shirvan', label: 'Şirvan' },
    { value: 'nakhchivan', label: 'Naxçıvan' },
    { value: 'lankaran', label: 'Lənkəran' },
    { value: 'shaki', label: 'Şəki' }
  ];

  return (
    <main className="w-full mx-auto p-4 md:p-8 lg:p-10 max-w-7xl">
      <div className="flex flex-col lg:flex-row gap-8">
        <UserSidebar />

        <div className="flex-1">
          <div className="bg-surface-light dark:bg-surface-dark p-4 md:p-6 rounded-xl border border-border-light dark:border-border-dark">
            {/* Page Heading */}
            <div className="flex flex-wrap justify-between gap-3 p-4 border-b border-border-light dark:border-border-dark">
              <div className="flex min-w-72 flex-col gap-2">
                <p className="text-text-light-primary dark:text-text-dark-primary text-3xl font-black leading-tight tracking-[-0.033em]">
                  Parametrlər
                </p>
                <p className="text-text-light-secondary dark:text-text-dark-secondary text-base font-normal leading-normal">
                  Hesab məlumatlarınızı və parametrlərinizi idarə edin
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-4 space-y-8">
              {/* Profile Section */}
              <div>
                <h3 className="text-text-light-primary dark:text-text-dark-primary text-xl font-bold mb-4">
                  Profil Məlumatları
                </h3>

                <div className="space-y-4">
                  {/* Avatar */}
                  <div className="flex items-center gap-4">
                    <div
                      className="w-20 h-20 rounded-full bg-cover bg-center"
                      style={{ backgroundImage: 'url("https://i.pravatar.cc/150?img=3")' }}
                    />
                    <div>
                      <button
                        type="button"
                        className="bg-primary text-white rounded-lg px-4 py-2 text-sm font-semibold hover:bg-primary/90 transition-colors"
                      >
                        Şəkil yüklə
                      </button>
                      <p className="text-text-light-secondary dark:text-text-dark-secondary text-xs mt-2">
                        JPG, PNG və ya GIF (maks. 5MB)
                      </p>
                    </div>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-text-light-primary dark:text-text-dark-primary text-sm font-semibold mb-2">
                      Ad Soyad
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Adınızı daxil edin"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-text-light-primary dark:text-text-dark-primary text-sm font-semibold mb-2">
                      E-poçt
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="email@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-text-light-primary dark:text-text-dark-primary text-sm font-semibold mb-2">
                      Telefon
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+994 XX XXX XX XX"
                    />
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-text-light-primary dark:text-text-dark-primary text-sm font-semibold mb-2">
                      Şəhər
                    </label>
                    <Select
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      options={cityOptions}
                    />
                  </div>

                  {/* Bio */}
                  <div>
                    <label className="block text-text-light-primary dark:text-text-dark-primary text-sm font-semibold mb-2">
                      Haqqımda
                    </label>
                    <Textarea
                      value={formData.bio}
                      onChange={(e) => handleInputChange('bio', e.target.value)}
                      placeholder="Özünüz haqqında qısa məlumat..."
                      rows={4}
                    />
                  </div>
                </div>
              </div>

              {/* Notifications Section */}
              <div className="pt-6 border-t border-border-light dark:border-border-dark">
                <h3 className="text-text-light-primary dark:text-text-dark-primary text-xl font-bold mb-4">
                  Bildirişlər
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-background-light dark:bg-background-dark">
                    <div>
                      <p className="text-text-light-primary dark:text-text-dark-primary font-semibold">
                        E-poçt bildirişləri
                      </p>
                      <p className="text-text-light-secondary dark:text-text-dark-secondary text-sm">
                        Yeni mesajlar və elanlar haqqında e-poçt al
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.notifications.email}
                        onChange={() => handleNotificationChange('email')}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg bg-background-light dark:bg-background-dark">
                    <div>
                      <p className="text-text-light-primary dark:text-text-dark-primary font-semibold">
                        SMS bildirişləri
                      </p>
                      <p className="text-text-light-secondary dark:text-text-dark-secondary text-sm">
                        Vacib bildirişləri SMS vasitəsilə al
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.notifications.sms}
                        onChange={() => handleNotificationChange('sms')}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg bg-background-light dark:bg-background-dark">
                    <div>
                      <p className="text-text-light-primary dark:text-text-dark-primary font-semibold">
                        Push bildirişləri
                      </p>
                      <p className="text-text-light-secondary dark:text-text-dark-secondary text-sm">
                        Brauzerdə bildirişlər al
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.notifications.push}
                        onChange={() => handleNotificationChange('push')}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Password Section */}
              <div className="pt-6 border-t border-border-light dark:border-border-dark">
                <h3 className="text-text-light-primary dark:text-text-dark-primary text-xl font-bold mb-4">
                  Şifrə
                </h3>

                <button
                  type="button"
                  className="flex items-center gap-2 text-primary font-semibold hover:underline"
                >
                  <span className="material-symbols-outlined">lock</span>
                  Şifrəni dəyiş
                </button>
              </div>

              {/* Danger Zone */}
              <div className="pt-6 border-t border-border-light dark:border-border-dark">
                <h3 className="text-red-500 text-xl font-bold mb-4">
                  Təhlükə Zonası
                </h3>

                <button
                  type="button"
                  className="flex items-center gap-2 text-red-500 font-semibold hover:underline"
                >
                  <span className="material-symbols-outlined">delete_forever</span>
                  Hesabı sil
                </button>
              </div>

              {/* Save Button */}
              <div className="pt-6 flex gap-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-primary text-white rounded-lg px-6 py-3 font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Yadda saxlanılır...' : 'Dəyişiklikləri yadda saxla'}
                </button>
                <button
                  type="button"
                  className="bg-border-light dark:bg-border-dark text-text-light-primary dark:text-text-dark-primary rounded-lg px-6 py-3 font-semibold hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                >
                  Ləğv et
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
