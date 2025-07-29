import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaUserTie, FaEnvelope, FaPhoneAlt, FaFileUpload } from "react-icons/fa";

const JoinUs = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    cvFile: null,
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

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      cvFile: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("تم إرسال الطلب:", formData);
    setSubmitted(true);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      cvFile: null,
      message: "",
    });
  };

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6 md:px-20">
      <h2 className="text-4xl font-bold mb-8 text-yellow-700 text-center">
        {t("join.title")}
      </h2>

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <div className="mb-10 text-gray-700 text-lg leading-relaxed text-center">
          <p>{t("join.intro1")}</p>
          <p className="mt-4">{t("join.intro2")}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6" encType="multipart/form-data">
          {submitted && (
            <div className="text-green-600 font-semibold text-center mb-6">
              {t("join.success")}
            </div>
          )}

          <div>
            <label htmlFor="fullName" className="block mb-2 font-semibold">
              {t("join.fullName")}
            </label>
            <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-yellow-500">
              <FaUserTie className="text-yellow-600 mr-2" />
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder={t("join.fullNamePlaceholder")}
                required
                className="w-full outline-none text-gray-700"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-semibold">
              {t("join.email")}
            </label>
            <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-yellow-500">
              <FaEnvelope className="text-yellow-600 mr-2" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t("join.emailPlaceholder")}
                required
                className="w-full outline-none text-gray-700"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block mb-2 font-semibold">
              {t("join.phone")}
            </label>
            <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-yellow-500">
              <FaPhoneAlt className="text-yellow-600 mr-2" />
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t("join.phonePlaceholder")}
                required
                className="w-full outline-none text-gray-700"
              />
            </div>
          </div>

          <div>
            <label htmlFor="cvFile" className="block mb-2 font-semibold">
              {t("join.upload")}
            </label>
            <label
              htmlFor="cvFile"
              className="flex items-center border border-yellow-600 rounded-md px-3 py-2 cursor-pointer text-yellow-600 hover:bg-yellow-100 transition"
            >
              <FaFileUpload className="mr-2" />
              {formData.cvFile ? formData.cvFile.name : t("join.chooseFile")}
              <input
                type="file"
                id="cvFile"
                name="cvFile"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="hidden"
                required
              />
            </label>
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 font-semibold">
              {t("join.message")}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder={t("join.messagePlaceholder")}
              className="w-full border rounded-md px-3 py-2 text-gray-700 resize-none focus:ring-2 focus:ring-yellow-500 outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 rounded-md transition-colors duration-300"
          >
            {t("join.submit")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default JoinUs;
