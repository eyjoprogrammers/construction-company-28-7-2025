import React from "react";
import { FaTools, FaEye } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const MissionVision = () => {
  const { t } = useTranslation();

  return (
    <section className="px-4 py-16 md:px-20 bg-white text-gray-800" dir={t("dir")}>
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-blue-800 mb-4">{t("missionVision.title")}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">{t("missionVision.subtitle")}</p>
      </div>

      {/* مهمتنا */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        {/* نص */}
        <div className="bg-blue-50 rounded-xl p-8 shadow-lg border-r-8 border-blue-500 transition-transform duration-300 hover:scale-105">
          <h3 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-3">
            <FaTools className="text-blue-600 text-3xl" /> {t("missionVision.mission.title")}
          </h3>
          <p className="text-gray-700 leading-relaxed text-lg">{t("missionVision.mission.text")}</p>
        </div>

        {/* صورة */}
        <div className="flex justify-center">
          <img
            src="/daniel-mccullough-HtBlQdxfG9k-unsplash.jpg"
            alt={t("missionVision.mission.alt")}
            className="rounded-xl shadow-xl w-full h-[350px] object-cover"
          />
        </div>
      </div>

      {/* رؤيتنا */}
      <div className="grid md:grid-cols-2 gap-12 items-center flex-row-reverse">
        {/* صورة */}
        <div className="flex justify-center">
          <img
            src="/nathan-waters-j7q-Z9DV3zw-unsplash (1).jpg"
            alt={t("missionVision.vision.alt")}
            className="rounded-xl shadow-xl w-full h-[350px] object-cover"
          />
        </div>

        {/* نص */}
        <div className="bg-green-50 rounded-xl p-8 shadow-lg border-l-8 border-green-500 transition-transform duration-300 hover:scale-105">
          <h3 className="text-2xl font-bold text-green-700 mb-4 flex items-center gap-3">
            <FaEye className="text-green-600 text-3xl" /> {t("missionVision.vision.title")}
          </h3>
          <p className="text-gray-700 leading-relaxed text-lg">{t("missionVision.vision.text")}</p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
