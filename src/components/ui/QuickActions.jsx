export const QuickActions = ({ icon, title, subTitle }) => {
  return (
    <div className="flex bg-white/90 shadow-2xl px-3 py-5 rounded-2xl w-full cursor-pointer hover:-translate-y-1 duration-300">
      {/* icon */}
      <div className="text-3xl flex items-center">{icon}</div>
      {/* title & subTitle */}
      <div className="px-3 flex flex-col items-start">
        <h1 className="text-gray-700 font-semibold text-lg">{title}</h1>
        <p className="text-gray-500 font-medium py-1 ">{subTitle}</p>
      </div>
    </div>
  );
};
