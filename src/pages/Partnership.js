import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaHandshake, FaEnvelope, FaPhoneAlt, FaBuilding } from "react-icons/fa";

const Partnership = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    phone: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Request submitted:", formData);
    setSubmitted(true);
    setFormData({
      companyName: "",
      contactPerson: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-yellow-700 text-center">
        {t("partnership.title")}
      </h2>

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        {/* Intro */}
        <div className="mb-12 text-gray-700 text-base md:text-lg leading-relaxed">
          <div className="flex items-center mb-6">
            <FaHandshake className="text-yellow-600 w-10 h-10 mr-4" />
            <h3 className="text-xl md:text-2xl font-semibold">
              {t("partnership.whyTitle")}
            </h3>
          </div>
          <p>{t("partnership.whyDescription1")}</p>
          <p className="mt-4">{t("partnership.whyDescription2")}</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {submitted && (
            <div className="text-green-600 font-semibold text-center mb-6">
              {t("partnership.successMessage")}
            </div>
          )}

          <div>
            <label htmlFor="companyName" className="block mb-2 font-semibold">
              {t("partnership.companyName")}
            </label>
            <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-yellow-500">
              <FaBuilding className="text-yellow-600 mr-2" />
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder={t("partnership.companyPlaceholder")}
                required
                className="w-full outline-none text-gray-700"
              />
            </div>
          </div>

          <div>
            <label htmlFor="contactPerson" className="block mb-2 font-semibold">
              {t("partnership.contactPerson")}
            </label>
            <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-yellow-500">
              <FaHandshake className="text-yellow-600 mr-2" />
              <input
                type="text"
                id="contactPerson"
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleChange}
                placeholder={t("partnership.contactPlaceholder")}
                required
                className="w-full outline-none text-gray-700"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block mb-2 font-semibold">
              {t("partnership.phone")}
            </label>
            <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-yellow-500">
              <FaPhoneAlt className="text-yellow-600 mr-2" />
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t("partnership.phonePlaceholder")}
                required
                className="w-full outline-none text-gray-700"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-semibold">
              {t("partnership.email")}
            </label>
            <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-yellow-500">
              <FaEnvelope className="text-yellow-600 mr-2" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t("partnership.emailPlaceholder")}
                required
                className="w-full outline-none text-gray-700"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 font-semibold">
              {t("partnership.message")}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder={t("partnership.messagePlaceholder")}
              className="w-full border rounded-md px-3 py-2 text-gray-700 resize-none focus:ring-2 focus:ring-yellow-500 outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 rounded-md transition-colors duration-300"
          >
            {t("partnership.submitButton")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Partnership;
