import cn from "@/utils/cn";

export const Button = ({ icon, title, type, className, onClick }) => {
  const baseStyle =
    "shadow-2xl rounded-2xl  duration-300  px-4 py-2 gap-3 text-center  flex items-center justify-center cursor-pointer transition-all  ";
  const variants = {
    primary:
      "bg-linear-to-r from-indigo-600 to-purple-600 text-white/90 font-bold text-lg",
    secondary: "bg-gray-100  font-medium text-sm text-gray-600 text-lg",
  };

  const combined = cn(variants[type] || variants.primary, baseStyle, className);
  return (
    <button
      onClick={onClick}
      className={`${combined}  hover:-translate-y-1 hover:shadow-2xl `}
    >
      <span>{icon}</span>
      <h1>{title}</h1>
    </button>
  );
};
