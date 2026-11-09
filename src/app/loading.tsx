export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center" aria-label="Loading page content">
      <div className="text-center">
        <div className="w-12 h-12 border-3 border-gold/20 border-t-gold rounded-full animate-spin mx-auto mb-4" />
        <p className="text-muted text-sm">Loading...</p>
      </div>
    </div>
  );
}
