import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا يمكنك ربط النموذج مع API أو إرسال البريد الإلكتروني
    console.log("تم إرسال النموذج:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-yellow-700 mb-12 text-center">اتصل بنا</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* نموذج الاتصال */}
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
          {submitted && (
            <div className="mb-6 text-green-600 font-semibold text-center">
              شكراً لتواصلك معنا! سنرد عليك قريباً.
            </div>
          )}

          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-semibold">
              الاسم الكامل
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="أدخل اسمك الكامل"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-yellow-500 focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-semibold">
              البريد الإلكتروني
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="أدخل بريدك الإلكتروني"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-yellow-500 focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block mb-2 font-semibold">
              رقم الهاتف
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="أدخل رقم الهاتف"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-yellow-500 focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 font-semibold">
              رسالتك
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="اكتب رسالتك هنا..."
              className="w-full border border-gray-300 rounded-md px-4 py-2 resize-none focus:outline-yellow-500 focus:ring-2 focus:ring-yellow-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 rounded-md transition-colors duration-300"
          >
            إرسال
          </button>
        </form>

        {/* معلومات الاتصال + الخريطة */}
        <div className="space-y-8">
          {/* معلومات الاتصال */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-yellow-700">معلومات الاتصال</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-4">
                <FaPhoneAlt className="text-yellow-600 w-6 h-6" />
                <span>+20 100 123 4567</span>
              </li>
              <li className="flex items-center gap-4">
                <FaEnvelope className="text-yellow-600 w-6 h-6" />
                <span>info@company.com</span>
              </li>
              <li className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-yellow-600 w-6 h-6" />
                <span>الإسكندرية، مصر - شارع النصر 123</span>
              </li>
            </ul>
          </div>

          {/* خريطة Google */}
          <div className="rounded-lg overflow-hidden shadow-md">
            <iframe
              title="موقع الشركة على الخريطة"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.534623225464!2d29.95528531505927!3d31.21564008147609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c4e70c2d4d9b%3A0x31b5f53790a840d9!2sAlexandria%20Governorate!5e0!3m2!1sen!2seg!4v1690539410254!5m2!1sen!2seg"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
