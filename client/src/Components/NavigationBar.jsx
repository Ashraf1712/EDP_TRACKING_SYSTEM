import { useState } from "react";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

function NavigationBar() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const { logout } = useLogout();
  const { user } = useAuthContext();

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="fixed left-0 top-0 h-full bg-gray-800 w-48 z-50">
      <nav>
        <div className="px-4 py-6">
          <div className="flex items-center justify-center">
            <img
              className="h-12 w-12"
              src="src/assets/icons/EDP.svg"
              alt="Your Company"
            ></img>
          </div>
          <div className="mt-10">
            <div className="space-y-4">
              <a
                href="/"
                className={`${
                  window.location.pathname === "/"
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                } block px-4 py-2 text-sm font-medium rounded-md`}
              >
                Homepage
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-4 py-2 text-sm font-medium rounded-md"
              >
                Dashboard
              </a>
              <a
                href="/edp-add"
                className={`${
                  window.location.pathname === "/edp-add"
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                } block px-4 py-2 text-sm font-medium rounded-md`}
              >
                Add EDP
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="absolute bottom-0 w-full px-4 pb-6">
        <div className="flex items-center justify-center">
          <button
            type="button"
            className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <span className="absolute -inset-1.5"></span>
            <span className="sr-only">View notifications</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
          </button>
        </div>
        <div className="flex items-center justify-center mt-4">
          <div className="relative">
            <button
              type="button"
              className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              id="user-menu-button"
              aria-expanded={isUserMenuOpen}
              aria-haspopup="true"
              onClick={toggleUserMenu}
            >
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">Open user menu</span>
              <img
                className="h-8 w-8 rounded-full"
                src={user.Staff_ProfilePicture}
                alt=""
              ></img>
            </button>
            {isUserMenuOpen && (
              <div
                id="user-menu"
                className="absolute top-full right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabIndex="-1"
              >
                <a
                  href="/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                  role="menuitem"
                  tabIndex="-1"
                >
                  Your Profile
                </a>
                <a
                  href="#"
                  onClick={handleLogout}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                  role="menuitem"
                  tabIndex="-1"
                >
                  Sign out
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
