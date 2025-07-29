import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaCertificate,
  FaCheckCircle,
  FaFileAlt,
} from "react-icons/fa";

const Licenses = () => {
  const { t } = useTranslation();

  const licenses = [
    { title: t("licenses.building"), date: "2024", icon: <FaCertificate className="text-yellow-600 w-6 h-6 inline-block mr-2" /> },
    { title: t("licenses.safety"), date: "2023", icon: <FaCheckCircle className="text-green-600 w-6 h-6 inline-block mr-2" /> },
    { title: t("licenses.heavy"), date: "2022", icon: <FaFileAlt className="text-blue-600 w-6 h-6 inline-block mr-2" /> },
    { title: t("licenses.iso"), date: "2021", icon: <FaCertificate className="text-yellow-600 w-6 h-6 inline-block mr-2" /> },
    { title: t("licenses.electric"), date: "2024", icon: <FaCheckCircle className="text-green-600 w-6 h-6 inline-block mr-2" /> },
    { title: t("licenses.environment"), date: "2023", icon: <FaFileAlt className="text-blue-600 w-6 h-6 inline-block mr-2" /> },
    { title: t("licenses.underground"), date: "2022", icon: <FaCertificate className="text-yellow-600 w-6 h-6 inline-block mr-2" /> },
    { title: t("licenses.training"), date: "2021", icon: <FaCheckCircle className="text-green-600 w-6 h-6 inline-block mr-2" /> },
    { title: t("licenses.transport"), date: "2024", icon: <FaFileAlt className="text-blue-600 w-6 h-6 inline-block mr-2" /> },
  ];

  return (
    <section
      className="min-h-screen py-16 px-6 md:px-20 bg-gray-50"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/618612/pexels-photo-618612.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-yellow-700 text-center">
          {t("licenses.title")}
        </h2>

        <ul className="space-y-6">
          {licenses.map(({ title, date, icon }, idx) => (
            <li
              key={idx}
              className="flex items-center gap-4 bg-yellow-50 rounded-lg p-4 shadow hover:shadow-lg transition-shadow duration-300"
            >
              <span className="text-yellow-600 text-3xl">{icon}</span>
              <div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-gray-600">
                  {t("licenses.year")}: {date}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Licenses;
