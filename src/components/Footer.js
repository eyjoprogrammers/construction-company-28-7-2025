import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 text-center space-y-3">
        {/* السطر الأول: الحقوق */}
        <p className="text-sm">
          {t("footer.rights")}
        </p>

        {/* السطر الثاني: الروابط */}
        <div className="flex justify-center gap-6 text-xl">
          {/* فيسبوك */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <i className="fab fa-facebook-square"></i>
          </a>

          {/* تويتر */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <i className="fab fa-x-twitter"></i>
          </a>

          {/* يوتيوب */}
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500"
          >
            <i className="fab fa-youtube"></i>
          </a>

          {/* واتساب */}
          <a
            href="https://wa.me/201234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
