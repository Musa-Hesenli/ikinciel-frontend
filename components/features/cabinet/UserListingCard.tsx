'use client';

interface Listing {
  id: string;
  title: string;
  location: string;
  price: number;
  imageUrl: string;
  postedDate: string;
  status: 'active' | 'pending' | 'inactive';
}

interface UserListingCardProps {
  listing: Listing;
  onPromote: (id: string) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function UserListingCard({
  listing,
  onPromote,
  onEdit,
  onDelete
}: UserListingCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('az-AZ').format(price);
  };

  return (
    <div className="flex flex-col gap-4 rounded-xl bg-background-light dark:bg-background-dark p-4 shadow-[0_0_8px_rgba(0,0,0,0.05)] border border-border-light dark:border-border-dark">
      {/* Image */}
      <div
        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
        style={{ backgroundImage: `url("${listing.imageUrl}")` }}
        role="img"
        aria-label={listing.title}
      />

      {/* Details */}
      <div className="flex flex-col gap-2">
        <p className="text-text-light-primary dark:text-text-dark-primary text-lg font-bold leading-tight">
          {listing.title}
        </p>
        <p className="text-text-light-secondary dark:text-text-dark-secondary text-sm font-normal leading-normal">
          {listing.location}
        </p>
        <p className="text-2xl font-black text-primary">
          {formatPrice(listing.price)} AZN
        </p>
      </div>

      {/* Posted Date */}
      <p className="text-text-light-secondary dark:text-text-dark-secondary text-xs font-normal leading-normal">
        Yerləşdirilib: {listing.postedDate}
      </p>

      {/* Actions */}
      <div className="flex items-center justify-between gap-2 pt-2 border-t border-border-light dark:border-border-dark">
        <button
          onClick={() => onPromote(listing.id)}
          className="flex items-center justify-center gap-2 min-w-[84px] cursor-pointer overflow-hidden rounded-lg h-9 px-3 bg-primary/20 text-primary text-sm font-medium leading-normal hover:bg-primary/30 transition-colors"
        >
          <span className="material-symbols-outlined text-base">rocket_launch</span>
          <span className="truncate">Önə Çıxar</span>
        </button>

        <div className="flex gap-1">
          <button
            onClick={() => onEdit(listing.id)}
            className="flex size-9 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-background-light dark:bg-background-dark text-text-light-secondary dark:text-text-dark-secondary border border-border-light dark:border-border-dark hover:bg-primary/10 transition-colors"
            aria-label="Redaktə et"
          >
            <span className="material-symbols-outlined text-xl">edit</span>
          </button>

          <button
            onClick={() => onDelete(listing.id)}
            className="flex size-9 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-background-light dark:bg-background-dark text-text-light-secondary dark:text-text-dark-secondary border border-border-light dark:border-border-dark hover:bg-red-500/10 hover:text-red-500 transition-colors"
            aria-label="Sil"
          >
            <span className="material-symbols-outlined text-xl">delete</span>
          </button>
        </div>
      </div>
    </div>
  );
}
