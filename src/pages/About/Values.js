import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { FaRegHandshake, FaCheckCircle, FaBalanceScale, FaHardHat } from 'react-icons/fa';

const Values = () => {
  const { t } = useTranslation();

  const values = [
    {
      title: t('values.professionalism.title'),
      icon: <FaRegHandshake size={40} className="text-white mb-3" />,
      bgColor: 'bg-blue-600',
      desc: t('values.professionalism.desc'),
    },
    {
      title: t('values.quality.title'),
      icon: <FaCheckCircle size={40} className="text-white mb-3" />,
      bgColor: 'bg-green-600',
      desc: t('values.quality.desc'),
    },
    {
      title: t('values.transparency.title'),
      icon: <FaBalanceScale size={40} className="text-white mb-3" />,
      bgColor: 'bg-yellow-500',
      desc: t('values.transparency.desc'),
    },
    {
      title: t('values.safety.title'),
      icon: <FaHardHat size={40} className="text-white mb-3" />,
      bgColor: 'bg-red-600',
      desc: t('values.safety.desc'),
    },
  ];

  return (
    <section className="px-4 py-10 md:px-20 bg-gray-50 text-gray-800" dir="rtl">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-2">
          {t('values.title')}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {t('values.subtitle')}
        </p>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 5000 }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        dir="rtl"
      >
        {values.map((value, index) => (
          <SwiperSlide key={index}>
            <div className={`rounded-xl p-6 shadow-md text-white ${value.bgColor}`}>
              <div className="flex flex-col items-center text-center">
                {value.icon}
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-sm">{value.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Values;
