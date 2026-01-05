'use client';

import Link from 'next/link';
import { useState, useRef } from 'react';
import { ROUTES } from '@/constants';
import Select, { SelectOption } from '@/components/ui/Select';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';

// Define options for selects
const categoryOptions: SelectOption[] = [
  { value: 'electronics', label: 'Elektronika' },
  { value: 'vehicles', label: 'Nəqliyyat' },
  { value: 'real-estate', label: 'Daşınmaz əmlak' },
  { value: 'fashion', label: 'Geyim və aksesuarlar' },
  { value: 'home', label: 'Ev və bağ' },
  { value: 'sports', label: 'İdman və hobbi' },
];

const subcategoryOptions: SelectOption[] = [
  { value: 'phones', label: 'Mobil telefonlar' },
  { value: 'laptops', label: 'Noutbuklar' },
  { value: 'cars', label: 'Avtomobillər' },
];

const cityOptions: SelectOption[] = [
  { value: 'baku', label: 'Bakı' },
  { value: 'ganja', label: 'Gəncə' },
  { value: 'sumqayit', label: 'Sumqayıt' },
  { value: 'mingachevir', label: 'Mingəçevir' },
  { value: 'lankaran', label: 'Lənkəran' },
  { value: 'shirvan', label: 'Şirvan' },
];

export default function CreateListingPage() {
  const [formData, setFormData] = useState({
    category: '',
    subcategory: '',
    title: '',
    description: '',
    price: '',
    name: '',
    email: '',
    phone: '',
    city: '',
  });

  const [images, setImages] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (files: FileList | null) => {
    if (!files) return;

    const newFiles = Array.from(files);
    const newPreviews = newFiles.map(file => URL.createObjectURL(file));

    setImages(prev => [...prev, ...newFiles]);
    setImagePreviews(prev => [...prev, ...newPreviews]);
  };

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    handleImageUpload(files);
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
    setImagePreviews(prev => {
      const newPreviews = prev.filter((_, i) => i !== index);
      // Revoke the URL to free up memory
      URL.revokeObjectURL(prev[index]);
      return newPreviews;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form data:', formData);
    console.log('Images:', images);
  };

  return (
    <main className="w-full flex justify-center py-5 sm:py-10 px-4 bg-white min-h-screen">
      <div className="container mx-auto max-w-4xl">
        {/* Breadcrumb */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            <Link href={ROUTES.HOME} className="text-gray-500 text-sm font-medium leading-normal hover:text-primary transition-colors">
              Ana Səhifə
            </Link>
            <span className="text-gray-500 text-sm font-medium leading-normal">/</span>
            <span className="text-gray-900 text-sm font-medium leading-normal">Yeni elan</span>
          </div>
        </div>

        {/* Page Title */}
        <h1 className="text-gray-900 text-3xl sm:text-4xl font-black leading-tight tracking-[-0.033em] mb-8">
          Yeni elan yerləşdirin
        </h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Section 1: Basic Information */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-gray-900 text-xl font-bold mb-6">Əsas Məlumatlar</h2>

            <div className="space-y-4">
              {/* Category */}
              <Select
                label="Kateqoriya"
                options={categoryOptions}
                value={categoryOptions.find(option => option.value === formData.category)}
                onChange={(option) => setFormData(prev => ({ ...prev, category: option?.value || '' }))}
                placeholder="Kateqoriya seçin"
                isClearable
                required
              />

              {/* Subcategory */}
              <Select
                label="Alt kateqoriya"
                options={subcategoryOptions}
                value={subcategoryOptions.find(option => option.value === formData.subcategory)}
                onChange={(option) => setFormData(prev => ({ ...prev, subcategory: option?.value || '' }))}
                placeholder="Alt kateqoriya seçin"
                isClearable
                required
              />

              {/* City */}
              <Select
                label="Şəhər"
                options={cityOptions}
                value={cityOptions.find(option => option.value === formData.city)}
                onChange={(option) => setFormData(prev => ({ ...prev, city: option?.value || '' }))}
                placeholder="Şəhər seçin"
                isClearable
                required
              />

              {/* Title */}
              <Input
                label="Elanın başlığı"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Məsələn: iPhone 13 Pro Max 256GB"
                required
              />

              {/* Description */}
              <Textarea
                label="Təsvir"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={6}
                placeholder="Məhsul haqqında ətraflı məlumat yazın..."
                required
              />

              {/* Price */}
              <Input
                label="Qiymət (₼)"
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                placeholder="0"
                min="0"
                step="0.01"
                required
              />
            </div>
          </div>

          {/* Section 2: Images */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-gray-900 text-xl font-bold mb-6">Şəkillər</h2>

            {/* Upload Area */}
            <div
              onDragEnter={handleDragEnter}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors ${
                isDragging
                  ? 'border-primary bg-primary/5'
                  : 'border-gray-300 hover:border-primary hover:bg-gray-50'
              }`}
            >
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="material-symbols-outlined text-gray-500 !text-4xl">
                    cloud_upload
                  </span>
                </div>
                <div>
                  <p className="text-gray-900 font-medium mb-1">
                    Şəkilləri yükləyin
                  </p>
                  <p className="text-sm text-gray-500">
                    və ya bu sahəyə sürüşdürün
                  </p>
                </div>
                <p className="text-xs text-gray-400">
                  PNG, JPG, JPEG (Maks. 10 MB)
                </p>
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                onChange={(e) => handleImageUpload(e.target.files)}
                className="hidden"
              />
            </div>

            {/* Image Previews */}
            {imagePreviews.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
                {imagePreviews.map((preview, index) => (
                  <div key={index} className="relative aspect-square rounded-lg overflow-hidden border border-gray-200 group">
                    <img
                      src={preview}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeImage(index);
                      }}
                      className="absolute top-2 right-2 w-8 h-8 bg-error text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <span className="material-symbols-outlined !text-lg">close</span>
                    </button>
                    {index === 0 && (
                      <div className="absolute bottom-2 left-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded">
                        Əsas
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Section 3: Contact Information */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-gray-900 text-xl font-bold mb-6">Əlaqə Məlumatları</h2>

            <div className="space-y-4">
              {/* Name */}
              <Input
                label="Ad, Soyad"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Ad və soyadınızı daxil edin"
                required
              />

              {/* Email */}
              <Input
                label="E-mail"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="email@example.com"
                required
              />

              {/* Phone */}
              <Input
                label="Telefon"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+994 XX XXX XX XX"
                required
              />
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-end">
            <Link href={ROUTES.HOME}>
              <button
                type="button"
                className="w-full sm:w-auto px-6 h-12 rounded-lg border border-gray-300 bg-white text-gray-900 font-bold hover:bg-gray-50 transition-colors"
              >
                İmtina et
              </button>
            </Link>
            <button
              type="submit"
              className="w-full sm:w-auto px-6 h-12 rounded-lg bg-primary text-white font-bold hover:bg-primary-dark transition-colors"
            >
              Elanı Dərc Et
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
