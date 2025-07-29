import React from "react";
import Slider from "react-slick";
import {
  FaHammer,
  FaWater,
  FaBolt,
  FaPaintRoller,
  FaLeaf,
  FaTools,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation();

  // جلب البيانات من ملف الترجمة
  const servicsData = t("servics.list", { returnObjects: true });

  // إعدادات السلايدر
  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ],
  };

  // أيقونات مترابطة مع الـ id لكل خدمة (للحفاظ على الأيقونات كما هي)
  const iconsMap = {
    1: <FaHammer className="text-yellow-600 w-20 h-20 mx-auto mb-4" />,
    2: <FaWater className="text-blue-500 w-20 h-20 mx-auto mb-4" />,
    3: <FaBolt className="text-yellow-400 w-20 h-20 mx-auto mb-4" />,
    4: <FaPaintRoller className="text-pink-500 w-20 h-20 mx-auto mb-4" />,
    5: <FaLeaf className="text-green-500 w-20 h-20 mx-auto mb-4" />,
    6: <FaTools className="text-gray-700 w-20 h-20 mx-auto mb-4" />,
  };

  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50" dir="rtl">
      <h2 className="text-4xl font-bold text-center text-yellow-600 mb-12">
        {t("servics.title")}
      </h2>

      <Slider {...settings}>
        {servicsData.map(({ id, title, description }) => (
          <div key={id} className="px-4">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center transition-all duration-300 hover:scale-105">
              {iconsMap[id]}
              <h3 className="text-xl font-semibold mb-3">{title}</h3>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
