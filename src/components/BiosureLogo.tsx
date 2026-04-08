const BiosureLogo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center text-[0.65rem] font-bold text-primary-foreground tracking-tighter">
      BS
    </div>
    <span className="text-lg font-semibold text-foreground tracking-tight">BioSure</span>
  </div>
);

export default BiosureLogo;
