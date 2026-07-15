const EmptyMsg = ({ icon, title, subtitle }) => {
  return (
    <div className="bg-white/90 text-center py-10 px-20 rounded-2xl border-2 shadow-2xl border-gray-300 border-dashed ">
      <span className="text-7xl ">{icon}</span>
      <p className="text-3xl py-4 font-semibold text-gray-800">{title}</p>
      <p className="text-gray-400 text-lg font-normal">{subtitle}</p>
    </div>
  );
};

export default EmptyMsg;
