import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutMenuOpen, setIsAboutMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const isActive = (path) => location.pathname.startsWith(path);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    if (!isMobileMenuOpen) setIsAboutMenuOpen(false);
  };

  const toggleAboutMenu = () => {
    setIsAboutMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsAboutMenuOpen(false);
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === "ar" ? "en" : "ar";
    i18n?.changeLanguage?.(newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <header className="bg-[#1e293b] shadow-md fixed top-0 left-0 right-0 z-50 text-white">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* الشعار */}
        <Link to="/" className="flex items-center gap-4" onClick={closeMobileMenu}>
          <img
            src="/logo.jpg"
            alt="Logo"
            className="w-16 h-16 object-contain rounded-full border-2 border-yellow-500"
          />
          <span className="text-yellow-400 font-bold whitespace-nowrap text-xl sm:text-sm md:text-xs lg:text-3xl">
            {t("header.companyName")}
          </span>
        </Link>

        {/* زر اللغة */}
        <button
          onClick={toggleLanguage}
          className="text-xs sm:text-xs md:text-xs lg:text-base border px-2 py-1 rounded border-yellow-400 hover:bg-yellow-500 hover:text-black transition min-w-[55px]"
        >
          {i18n.language === "ar" ? "EN" : "عربي"}
        </button>

        {/* زر القائمة للجوال */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <FaBars />
        </button>

        {/* القائمة الرئيسية */}
        <nav className="hidden md:flex gap-6 items-center font-medium text-xs sm:text-sm md:text-xs lg:text-base">
          <Link
            to="/"
            onClick={closeMobileMenu}
            className={isActive("/") ? "text-yellow-400" : "hover:text-yellow-300"}
          >
            {t("header.home")}
          </Link>

          {/* من نحن */}
          <div className="relative">
            <button
              className="flex items-center gap-1 hover:text-yellow-300 text-xs sm:text-sm md:text-xs lg:text-base"
              onClick={toggleAboutMenu}
              type="button"
              aria-haspopup="true"
              aria-expanded={isAboutMenuOpen}
            >
              {t("header.about")} ▾
            </button>

            {isAboutMenuOpen && (
              <div className="absolute right-0 mt-3 w-52 bg-white text-gray-800 rounded-lg shadow-lg border z-50">
                <Link
                  to="/about/overview"
                  className="block px-4 py-2 hover:bg-gray-100 border-b"
                  onClick={closeMobileMenu}
                >
                  {t("header.overview")}
                </Link>
                <Link
                  to="/about/mission-vision"
                  className="block px-4 py-2 hover:bg-gray-100 border-b"
                  onClick={closeMobileMenu}
                >
                  {t("header.missionVision")}
                </Link>
                <Link
                  to="/about/values"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={closeMobileMenu}
                >
                  {t("header.values")}
                </Link>
              </div>
            )}
          </div>

          {[
            { path: "/services", label: t("header.services") },
            { path: "/projects", label: t("header.projects") },
            { path: "/licenses", label: t("header.licenses") },
            { path: "/request-service", label: t("header.requestService") },
            { path: "/partnership", label: t("header.partnership") },
            { path: "/joinus", label: t("header.joinus") },
            { path: "/contactus", label: t("header.contact") },
          ].map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              onClick={closeMobileMenu}
              className={isActive(path) ? "text-yellow-400" : "hover:text-yellow-300"}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>

      {/* قائمة الجوال */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#1e293b] border-t border-gray-600 shadow px-4 pt-4 pb-6 text-right space-y-2 text-white text-xs sm:text-sm">
          <Link to="/" className="block" onClick={closeMobileMenu}>
            {t("header.home")}
          </Link>

          <details className="group">
            <summary className="cursor-pointer flex justify-between items-center">
              {t("header.about")} <span className="ml-2">▾</span>
            </summary>
            <div className="pl-4 mt-2 space-y-2 text-sm">
              <Link to="/about/overview" className="block" onClick={closeMobileMenu}>
                {t("header.overview")}
              </Link>
              <Link to="/about/mission-vision" className="block" onClick={closeMobileMenu}>
                {t("header.missionVision")}
              </Link>
              <Link to="/about/values" className="block" onClick={closeMobileMenu}>
                {t("header.values")}
              </Link>
            </div>
          </details>

          {[
            { path: "/services", label: t("header.services") },
            { path: "/projects", label: t("header.projects") },
            { path: "/licenses", label: t("header.licenses") },
            { path: "/request-service", label: t("header.requestService") },
            { path: "/partnership", label: t("header.partnership") },
            { path: "/join-us", label: t("header.joinus") },
            { path: "/contactus", label: t("header.contact") },
          ].map(({ path, label }) => (
            <Link key={path} to={path} className="block" onClick={closeMobileMenu}>
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
