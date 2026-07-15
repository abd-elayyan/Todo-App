"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();
  const navItems = [
    { id: "1", label: "Dashboard", href: "/", icon: "🏠" },
    { id: "2", label: "ToDo ", href: "/todo", icon: "📰" },
    { id: "3", label: "About", href: "/about", icon: "ℹ️" },
  ];

  return (
    <div className="bg-white/20 py-8 px-6 my-10 border border-white/25 rounded-2xl flex justify-between text-white/90 font-medium shadow-2xl">
      <div className="flex gap-10 ">
        {" "}
        <div className="px-3 py-2">✨ ToDo App</div>
        {navItems &&
          navItems.map((items) => {
            return (
              <Link
                key={items.id}
                href={items.href}
                className={` duration-300 px-3 py-2 rounded-xl ${items.href === pathname ? "bg-white/20 " : "hover:-translate-y-1 hover:bg-white/10"}`}
              >
                <span>{items.icon}</span>
                {items.label}
              </Link>
            );
          })}
      </div>
      <div className="px-3 py-2">Made with ❤️ react</div>
    </div>
  );
};
