import React, { useState } from "react";
import { FaUser, FaPhone, FaEnvelope, FaBuilding, FaClipboardList } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const RequestService = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "",
    details: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const services = t("request.services", { returnObjects: true });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("تم إرسال الطلب:", formData);
    setSubmitted(true);
    setFormData({
      name: "",
      phone: "",
      email: "",
      serviceType: "",
      details: "",
    });
  };

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6 md:px-20 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-10 text-yellow-700 text-center">
        {t("request.title")}
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full"
      >
        {submitted && (
          <div className="mb-6 text-green-600 font-semibold text-center">
            {t("request.successMessage")}
          </div>
        )}

        {/* الاسم */}
        <div className="mb-5">
          <label className="block mb-2 font-semibold" htmlFor="name">
            {t("request.name")}
          </label>
          <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-yellow-500">
            <FaUser className="text-yellow-600 mr-2" />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t("request.namePlaceholder")}
              required
              className="w-full outline-none text-gray-700"
            />
          </div>
        </div>

        {/* الهاتف */}
        <div className="mb-5">
          <label className="block mb-2 font-semibold" htmlFor="phone">
            {t("request.phone")}
          </label>
          <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-yellow-500">
            <FaPhone className="text-yellow-600 mr-2" />
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={t("request.phonePlaceholder")}
              required
              className="w-full outline-none text-gray-700"
            />
          </div>
        </div>

        {/* البريد */}
        <div className="mb-5">
          <label className="block mb-2 font-semibold" htmlFor="email">
            {t("request.email")}
          </label>
          <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-yellow-500">
            <FaEnvelope className="text-yellow-600 mr-2" />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t("request.emailPlaceholder")}
              required
              className="w-full outline-none text-gray-700"
            />
          </div>
        </div>

        {/* نوع الخدمة */}
        <div className="mb-5">
          <label className="block mb-2 font-semibold" htmlFor="serviceType">
            {t("request.serviceType")}
          </label>
          <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-yellow-500">
            <FaBuilding className="text-yellow-600 mr-2" />
            <select
              id="serviceType"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              required
              className="w-full outline-none text-gray-700 bg-white cursor-pointer"
            >
              <option value="" disabled>
                {t("request.selectService")}
              </option>
              {services.map((service, idx) => (
                <option key={idx} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* تفاصيل إضافية */}
        <div className="mb-7">
          <label className="block mb-2 font-semibold" htmlFor="details">
            {t("request.details")}
          </label>
          <div className="flex items-start border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-yellow-500">
            <FaClipboardList className="text-yellow-600 mr-2 mt-1" />
            <textarea
              id="details"
              name="details"
              value={formData.details}
              onChange={handleChange}
              rows="4"
              placeholder={t("request.detailsPlaceholder")}
              className="w-full outline-none text-gray-700 resize-none"
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 rounded-md transition-colors duration-300"
        >
          {t("request.submit")}
        </button>
      </form>
    </section>
  );
};

export default RequestService;
