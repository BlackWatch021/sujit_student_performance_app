"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Upload,
  MonitorCheck,
  ChartNoAxesCombined,
  Sparkles,
  Settings,
  LogOut,
} from "lucide-react";
import { roboto } from "@/utils/fonts";

const navItems = [
  { name: "Dashboard", href: "/dashboard/admin", icon: LayoutDashboard },
  { name: "Data Upload", href: "/dataupload", icon: Upload },
  { name: "Visualization", href: "/visualization", icon: ChartNoAxesCombined },
  { name: "Analysis", href: "/analytics", icon: MonitorCheck },
  { name: "Prediction", href: "/prediction", icon: Sparkles },
  { name: "Settings", href: "/settings", icon: Settings },
  //   { name: "Settings", href: "/settings", icon: LogOut },
];

const NavBar = () => {
  const pathname = usePathname();
  return (
    <aside className="h-screen w-30 border-black border-r-1  text-white flex flex-col py-6 px-4 sticky top-0">
      <nav className="flex flex-col gap-2 h-full justify-between">
        <div className="flex flex-col gap-2">
          {navItems.map(({ name, href, icon: Icon }, index) => {
            const isActive = pathname.includes(href);

            return (
              <Link
                key={index}
                href={href}
                className={`group flex flex-col items-center gap-y-2 px-4 py-2 rounded-lg transition-colors ${
                  isActive ? "bg-accent font-semibold" : "hover:bg-accent"
                }`}
              >
                <Icon
                  className={`w-5 h-5 transition-colors ${
                    isActive
                      ? "text-black/80"
                      : "text-black/30 group-hover:text-black/80"
                  }`}
                />
                <span
                  className={`${
                    roboto.className
                  } font-semibold text-navbar transition-colors ${
                    isActive
                      ? "text-black/80"
                      : "text-black/30 group-hover:text-black"
                  }`}
                >
                  {name}
                </span>
              </Link>
            );
          })}
        </div>
        <Link
          href="/"
          className={`group flex flex-col items-center gap-y-2 px-4 py-2 rounded-lg transition-colors 

              hover:bg-secondary
          `}
        >
          <LogOut
            className={`w-5 h-5 transition-colors           
                text-black/30 group-hover:text-black/80`}
          />
          <span
            className={`${roboto.className} font-semibold text-navbar transition-colors text-black/30 group-hover:text-black`}
          >
            Logout
          </span>
        </Link>
      </nav>
    </aside>
  );
};

export default NavBar;
