import React from "react";
import { useTranslation } from "react-i18next";
import { FaBuilding, FaHardHat, FaTools } from "react-icons/fa";

const Projects = () => {
  const { t } = useTranslation();

  const projets = [
    {
      title: t("projets.1.title"),
      description: t("projets.1.description"),
      image:
        "https://images.pexels.com/photos/261187/pexels-photo-261187.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <FaBuilding className="text-yellow-600 w-6 h-6 inline-block mr-2" />,
    },
    {
      title: t("projets.2.title"),
      description: t("projets.2.description"),
      image:
        "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <FaHardHat className="text-yellow-600 w-6 h-6 inline-block mr-2" />,
    },
    {
      title: t("projets.3.title"),
      description: t("projets.3.description"),
      image:
        "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <FaBuilding className="text-yellow-600 w-6 h-6 inline-block mr-2" />,
    },
    {
      title: t("projets.4.title"),
      description: t("projets.4.description"),
      image:
        "https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <FaTools className="text-yellow-600 w-6 h-6 inline-block mr-2" />,
    },
    {
      title: t("projets.5.title"),
      description: t("projets.5.description"),
      image:
        "https://images.pexels.com/photos/269739/pexels-photo-269739.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <FaBuilding className="text-yellow-600 w-6 h-6 inline-block mr-2" />,
    },
    {
      title: t("projets.6.title"),
      description: t("projets.6.description"),
      image:
        "https://images.pexels.com/photos/373965/pexels-photo-373965.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <FaHardHat className="text-yellow-600 w-6 h-6 inline-block mr-2" />,
    },
    {
      title: t("projets.7.title"),
      description: t("projets.7.description"),
      image:
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <FaTools className="text-yellow-600 w-6 h-6 inline-block mr-2" />,
    },
    {
      title: t("projets.8.title"),
      description: t("projets.8.description"),
      image:
        "https://images.pexels.com/photos/3884664/pexels-photo-3884664.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <FaBuilding className="text-yellow-600 w-6 h-6 inline-block mr-2" />,
    },
    {
      title: t("projets.9.title"),
      description: t("projets.9.description"),
      image:
        "https://images.pexels.com/photos/373965/pexels-photo-373965.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <FaHardHat className="text-yellow-600 w-6 h-6 inline-block mr-2" />,
    },
  ];

  const handleMoreClick = (title) => {
    alert(`${t("projets.moreAbout")}: ${title}`);
  };

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-4 md:px-20">
      <h2 className="text-4xl font-bold text-center text-yellow-700 mb-12">
        {t("projets.title")}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projets.map(({ title, description, image, icon }, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-56 object-cover transform hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold mb-3 flex items-center text-yellow-600">
                {icon} {title}
              </h3>
              <p className="text-gray-700 mb-5 flex-grow">{description}</p>

              <button
                onClick={() => handleMoreClick(title)}
                className="mt-auto self-start bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 transition-colors duration-300"
              >
                {t("projets.more")}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
