export default function Logo({ size = 40 }: { size?: number }) {
  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <div
        className="absolute inset-0 rounded-full border border-gold/40"
        style={{ boxShadow: '0 0 20px rgba(212,175,55,0.25)' }}
      />
      <div className="relative font-display gold-gradient-text font-bold tracking-tighter" style={{ fontSize: size * 0.5 }}>
        GD
      </div>
    </div>
  );
}
