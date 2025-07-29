
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

// صفحات من مجلد pages
import Home from "./pages/Home";
import AboutOverview from "./pages/About/Overview";
import AboutMissionVision from "./pages/About/MissionVision";
import AboutValues from "./pages/About/Values";
import Projects from "./pages/Projects";
import Licenses from "./pages/Licenses";
import RequestService from "./pages/RequestService";
import Partnership from "./pages/Partnership";
import JoinUs from "./pages/JoinUs";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import './i18n'; // مهم جداً


function App() {
  return (
    <div className="font-sans text-gray-800">
      <Header />

      {/* اضف padding-top لتعويض ارتفاع الهيدر الثابت */}
      <main className="pt-[88px]">
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* About Section with nested routes */}
          <Route path="/about/overview" element={<AboutOverview />} />
          <Route path="/about/mission-vision" element={<AboutMissionVision />} />
          <Route path="/about/values" element={<AboutValues />} />
          <Route path="/services" element={<Services />} />

          <Route path="/projects" element={<Projects />} />
          <Route path="/licenses" element={<Licenses />} />
          <Route path="/request-service" element={<RequestService />} />
          <Route path="/partnership" element={<Partnership />} />
          <Route path="/joinus" element={<JoinUs />} />
          <Route path="/contactUs" element={<ContactUs />} />

          {/* أضف هنا باقي الصفحات حسب الحاجة */}
        </Routes>
      </main>

      <Footer />
    </div>
  );
}


export default App;
