import React from 'react';
import { useTranslation } from 'react-i18next';

const Overview = () => {
  const { t } = useTranslation();

  return (
    <section className="px-4 py-16 md:px-24 bg-gray-50 text-gray-800" dir={t("dir")} >
      {/* العنوان الرئيسي */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-blue-800 mb-4 underline decoration-blue-500 decoration-4 underline-offset-8">
          {t("overview.title")}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          {t("overview.subtitle")}
        </p>
      </div>

      {/* محتوى القسم */}
      <div className="flex flex-col md:flex-row gap-14 items-center">
        {/* النص */}
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-4 text-blue-700 underline decoration-blue-400 decoration-2 underline-offset-6">
            {t("overview.whoWeAre")}
          </h3>
          <p className="text-gray-700 leading-loose mb-4 text-justify">
            {t("overview.paragraph1")}
          </p>
          <p className="text-gray-700 leading-loose text-justify">
            {t("overview.paragraph2")}
          </p>
        </div>

        {/* الصورة */}
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt={t("overview.imageAlt")}
            className="rounded-xl shadow-xl w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Overview;
