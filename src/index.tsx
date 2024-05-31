import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./i18n/config";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import "./assets/css/style.css";
import "./assets/css/animate.css";
import "./assets/css/bootstrap.css";
import "./assets/css/et-line-icons.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/extralayers.css";
import "./assets/css/settings.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/owl.carousel.css";
import "./assets/css/owl.transitions.css";
import "./assets/css/full-slider.css";
import "./assets/css/text-effect.css";
import "./assets/css/menu-hamburger.css";
import "./assets/css/responsive.css";

// import 'bootstrap/dist/css/bootstrap.css';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/grid";
import { HelmetProvider } from "react-helmet-async";
import ShopList from "./pages/shop-list/ShopList";
import ShopDetail from "./pages/shop-detail/ShopDetail";
import About from "./pages/about/About";
import BrandList from "./pages/brand/BrandList";
import Guide from "./pages/guide/Guide";
import Event from "./pages/event/Event";
import ScrollToTop from "./utility/ScrollToTop";
import { I18nextProvider } from "react-i18next";
import config from "./i18n/config";
import Entertaiment from "./pages/entertainment/Entertaiment";
import Job from "./pages/job/Job";
import ForRent from "./pages/for-rent/ForRent";
import Restaurant from "./pages/restaurant/Restaurant";
import Service from "./pages/service/Service";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const AppContext = createContext("Unknown");
const appName: string = "Food city";

root.render(
  <AppContext.Provider value={appName}>
    <I18nextProvider i18n={config}>
      <HelmetProvider>
        <BrowserRouter>
          <ScrollToTop>
            <Routes>
              <Route element={<App />}>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<ShopList />} />
                <Route path="/shop/:id" element={<ShopDetail />} />
                <Route path="/about" element={<About />} />
                <Route path="/brands" element={<BrandList />} />
                <Route path="/guide" element={<Guide />} />
                <Route path="/event" element={<Event />} />
                <Route path="/entertainment" element={<Entertaiment />} />
                <Route path="/job" element={<Job />} />
                <Route path="/for_rent" element={<ForRent />} />
                <Route path="/restaurant" element={<Restaurant />} />
                <Route path="/service" element={<Service />} />
              </Route>
            </Routes>
          </ScrollToTop>
        </BrowserRouter>
      </HelmetProvider>
    </I18nextProvider>
  </AppContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
