import React from "react";
import { useTranslation } from "react-i18next";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="font-sans rtl">
      {/* Hero Section */}
      <section
        className="relative w-full h-[80vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/4254160/pexels-photo-4254160.jpeg')`,
        }}
      >
        <div className="bg-black bg-opacity-60 p-8 rounded-xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("hero.title")}</h1>
          <p className="text-lg md:text-xl">{t("hero.subtitle")}</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 md:px-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">{t("about.title")}</h2>
        <p className="text-gray-700 max-w-3xl mx-auto">{t("about.desc")}</p>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 md:px-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">{t("services.title")}</h2>
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 4000 }}
          loop
          navigation
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
        >
          {[
            {
              title: t("services.items.realEstate.title"),
              img: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg",
              desc: t("services.items.realEstate.desc"),
            },
            {
              title: t("services.items.construction.title"),
              img: "https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg",
              desc: t("services.items.construction.desc"),
            },
            {
              title: t("services.items.finishing.title"),
              img: "https://images.pexels.com/photos/6474446/pexels-photo-6474446.jpeg",
              desc: t("services.items.finishing.desc"),
            },
          ].map((service, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transform hover:scale-105 transition duration-300">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4 md:px-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">{t("projects.title")}</h2>
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3500 }}
          loop
          navigation
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
        >
          {[
            {
              title: t("projects.items.tower.title"),
              img: "https://images.pexels.com/photos/261187/pexels-photo-261187.jpeg",
            },
            {
              title: t("projects.items.compound.title"),
              img: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg",
            },
            {
              title: t("projects.items.businessCenter.title"),
              img: "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg",
            },
          ].map((project, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-gray-100 rounded-xl shadow-md overflow-hidden hover:shadow-xl transform hover:scale-105 transition duration-300">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Testimonials + Team Section */}
      <section className="py-16 px-4 md:px-16 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Testimonials Slider */}
          <div className="h-96">
            <h3 className="text-2xl font-bold text-center mb-4">{t("testimonials.title")}</h3>
            <Swiper
              direction="vertical"
              modules={[Autoplay, Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{ delay: 4000 }}
              loop
              navigation
              className="h-full"
            >
              {[
                {
                  name: "م. أحمد فؤاد",
                  comment: t("testimonials.items.ahmed.comment"),
                  bg: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
                },
                {
                  name: "م. سارة عبد الله",
                  comment: t("testimonials.items.sarah.comment"),
                  bg: "https://images.pexels.com/photos/8101570/pexels-photo-8101570.jpeg",
                },
                {
                  name: "أ. خالد سعيد",
                  comment: t("testimonials.items.khaled.comment"),
                  bg: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg",
                },
              ].map((testimonial, idx) => (
                <SwiperSlide key={idx}>
                  <div
                    className="h-full flex flex-col justify-center items-center text-white text-center p-6 rounded-xl bg-cover bg-center"
                    style={{ backgroundImage: `url(${testimonial.bg})` }}
                  >
                    <div className="bg-black bg-opacity-60 p-6 rounded-xl">
                      <p className="text-lg italic mb-4">"{testimonial.comment}"</p>
                      <span className="font-bold">{testimonial.name}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Team Slider - Vertical */}
          <div className="h-96">
            <h3 className="text-2xl font-bold text-center mb-4 text-gray-800">
              {t("team.title")}
            </h3>
            <Swiper
              direction="vertical"
              modules={[Autoplay, Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{ delay: 4000 }}
              loop
              navigation
              className="h-full"
            >
              {[
                {
                  name: "م. عمر الجمل",
                  role: t("team.items.omar.role"),
                  bg: "https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg",
                  img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
                  bio: t("team.items.omar.bio"),
                },
                {
                  name: "م. ليلى يوسف",
                  role: t("team.items.leila.role"),
                  bg: "https://images.pexels.com/photos/6474446/pexels-photo-6474446.jpeg",
                  img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
                  bio: t("team.items.leila.bio"),
                },
                {
                  name: "م. كريم نادر",
                  role: t("team.items.karim.role"),
                  bg: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg",
                  img: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg",
                  bio: t("team.items.karim.bio"),
                },
              ].map((member, idx) => (
                <SwiperSlide key={idx}>
                  <div
                    className="h-full flex flex-col justify-center items-center text-white text-center p-6 rounded-xl bg-cover bg-center"
                    style={{ backgroundImage: `url(${member.bg})` }}
                  >
                    <div className="bg-black bg-opacity-60 p-6 rounded-xl w-full max-w-md">
                      <img
                        src={member.img}
                        alt={member.name}
                        className="w-32 h-32 md:w-36 md:h-36 rounded-full mb-4 object-cover border-4 border-yellow-400 mx-auto"
                      />
                      <h4 className="text-xl font-bold text-white">{member.name}</h4>
                      <p className="text-sm text-yellow-300 mb-2">{member.role}</p>
                      <p className="text-sm text-gray-200 leading-relaxed">{member.bio}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 px-4 md:px-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10">{t("certifications.title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              img: "https://images.pexels.com/photos/8068357/pexels-photo-8068357.jpeg",
              license: t("certifications.items.generalContract.title"),
            },
            {
              img: "https://images.pexels.com/photos/5658854/pexels-photo-5658854.jpeg",
              license: t("certifications.items.qualityControl.title"),
            },
            {
              img: "https://images.pexels.com/photos/6694864/pexels-photo-6694864.jpeg",
              license: t("certifications.items.realEstateDev.title"),
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gray-100 p-4 shadow rounded-xl hover:shadow-lg transition"
            >
              <img
                src={item.img}
                alt={item.license}
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <p className="font-semibold">{item.license}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 md:px-16 bg-yellow-100 text-center">
        <h2 className="text-3xl font-bold mb-6">{t("contact.title")}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
          <div>
            <FaPhoneAlt className="mx-auto text-3xl text-blue-600 mb-2" />
            <p className="font-semibold">{t("contact.landline")}</p>
            <p>03 484 1234</p>
            <p className="font-semibold mt-2">{t("contact.mobile")}</p>
            <p>+20 100 123 4567</p>
            <p>+20 122 456 7890</p>
          </div>

          <div>
            <FaEnvelope className="mx-auto text-3xl text-blue-600 mb-2" />
            <p className="font-semibold">{t("contact.email")}</p>
            <p>info@constructionco.com</p>
            <p>support@constructionco.com</p>
          </div>

          <div>
            <FaMapMarkerAlt className="mx-auto text-3xl text-blue-600 mb-2" />
            <p className="font-semibold">{t("contact.address")}</p>
            <p>{t("contact.addressLine1")}</p>
            <p>{t("contact.addressLine2")}</p>
          </div>
        </div>

        {/* Google Map Embed */}
        <div className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-md">
          <iframe
            title={t("contact.mapTitle")}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.0027502892296!2d29.954169984886996!3d31.21564548146947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c4b72aa86d0f%3A0x3c13d23eb4fd768!2z2YXYsdmD2LIg2KfZhNmF2YbYp9iqINin2YTZg9mG2KfYqiDZhdix2YPYp9iq!5e0!3m2!1sar!2seg!4v1691947137481!5m2!1sar!2seg"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Home;
