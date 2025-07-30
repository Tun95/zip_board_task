import { useState } from "react";
import { Menu, Moon, Sun } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import Sidebar from "../sidebar/Sidebar";
import { useTheme } from "../../utilities/custom hooks/hooks";

function Navbar() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "About Us", path: "/about" },
    { label: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      <header className="header sticky top-0 h-16 flex items-center justify-between px-10 max-900px:px-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 transition-all z-20">
        {/* Logo */}
        <div className="flex-1 max-900px:flex-none">
          <Link
            to="/"
            className="font-display text-xl font-semibold text-gray-900 dark:text-white"
          >
            ZipTask
          </Link>
        </div>

        {/* Desktop: Show nav links */}
        <div className="max-900px:hidden flex-1 flex justify-center">
          <nav className="flex items-center gap-1">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 text-nowrap text-sm rounded-md transition-colors ${
                    isActive
                      ? "text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 font-medium"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700/50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Theme toggle and mobile menu */}
        <div className="flex-1 flex justify-end">
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* Mobile: Show menu icon instead of settings */}
            <button
              onClick={() => setMobileSidebarOpen(true)}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 max-900px:block hidden"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar/Drawer */}
      {mobileSidebarOpen && (
        <div
          className="max-900px:h-[100vh] fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setMobileSidebarOpen(false)}
        ></div>
      )}
      {mobileSidebarOpen && (
        <div
          className={`fixed lg:hidden z-40 transition-transform duration-500 ease-in-out ${
            mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{ left: 0, top: 0 }}
        >
          <Sidebar onClose={() => setMobileSidebarOpen(false)} mobileVersion />
        </div>
      )}
    </>
  );
}

export default Navbar;
