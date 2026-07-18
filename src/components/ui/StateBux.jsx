export const StateBox = ({ title, icon, count }) => {
  return (
    <div className="flex w-full items-center justify-between py-2 px-4 text-white/90 rounded-2xl bg-white/10 gap-4">
      {/* title and count */}
      <div className="py-3 space-y-2">
        <div className="py-3 text-xl">{title}</div>
        <div className="text-4xl">{count}</div>
      </div>
      {/* icon */}
      <div className="py-3 text-4xl">{icon}</div>
    </div>
  );
};
