export const APP_NAME = 'İkinciel';
export const APP_DESCRIPTION = 'Buy and sell second-hand items easily';

export const ROUTES = {
  HOME: '/',
  LISTINGS: '/listings',
  PRODUCT: (id: string) => `/products/${id}`,
  CATEGORY: (slug: string) => `/categories/${slug}`,
  PROFILE: '/profile',
  MY_LISTINGS: '/profile/listings',
  FAVORITES: '/profile/favorites',
  MESSAGES: '/profile/messages',
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  CREATE_LISTING: '/listings/create',
} as const;

export const PRODUCT_CONDITIONS = [
  { value: 'new', label: 'New' },
  { value: 'used', label: 'Used' },
  { value: 'refurbished', label: 'Refurbished' },
] as const;

export const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'popular', label: 'Most Popular' },
] as const;

export const CURRENCY = {
  AZN: '₼',
  USD: '$',
  EUR: '€',
} as const;

export const DEFAULT_CURRENCY = 'AZN';

export const ITEMS_PER_PAGE = 24;

export const POPULAR_CATEGORIES = [
  'Electronics',
  'Vehicles',
  'Real Estate',
  'Fashion',
  'Home & Garden',
  'Sports',
] as const;
