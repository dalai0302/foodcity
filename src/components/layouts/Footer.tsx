import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation("global");

  return (
    <footer className="bg-[#323232] text-white">
      {/* <div className=" bg-white footer-top">
        <div className="container">
          <div className="row margin-four">
            <div className="col-md-4 col-sm-4 text-center">
              <i className="icon-phone small-icon white-text"></i>
              <h6 className="white-text margin-two no-margin-bottom">
                <a href="tel: +9767611-2223">7611-2223</a>
              </h6>
            </div>
            <div className="col-md-4 col-sm-4 text-center">
              <i className="icon-map-pin small-icon white-text"></i>
              <h6 className="white-text margin-two no-margin-bottom">
                <a
                  target="_blank"
                  href="https://www.google.com/maps/dir/?api=1&destination=47.878364000815%2C106.85542657468&fbclid=IwZXh0bgNhZW0CMTAAAR1frS3C2f9wz4092G2jJDNzfRVNzZqm-HqT8bZF2Q6gVZdDdm40GmD8sZc_aem_AQiRNxFkpm02__qXa0S7kdX62nXEPHp0vlPjyDAILnIM8BEZtuwOihr3YlWh2sXWeHg34Ncowmqk5tOHkbjVok1v"
                >
                  FOOD CITY
                </a>
              </h6>
            </div>
            <div className="col-md-4 col-sm-4 text-center">
              <i className="icon-envelope small-icon white-text"></i>
              <h6 className="margin-two no-margin-bottom">
                <a href="mailto:marketing@foodcity.mn" className="white-text">
                  marketing@foodcity.mn
                </a>
              </h6>
            </div>
          </div>
        </div>
      </div> */}
      <div className="container footer-middle !text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 sm:gap-2">
          <div className="">
            <h4 className="text-left mb-6">{t("footer.social")}</h4>
            <div className="flex gap-3">
              <a target="_blank" href="https://www.facebook.com/FoodCityMall">
                <i className="fa fa-facebook text-white before:text-2xl"></i>
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/foodcitymongolia"
              >
                <i className="fa fa-instagram text-white before:text-2xl"></i>
              </a>
            </div>
          </div>
          <div className="text-left flex flex-col sm:gap-0 gap-2">
            <h4 className="mb-6"> {t("footer.structure")}</h4>
            <h5>
              <Link className="text-white" to="/about">
                {t("footer.about")}
              </Link>
            </h5>
            <h5>
              <Link className="text-white" to="/job">
                {t("footer.job")}
              </Link>
            </h5>
            <h5>
              <Link className="text-white" to="/for_rent">
                {t("footer.forRent")}
              </Link>
            </h5>
          </div>
          <div className="text-left flex flex-col sm:gap-0 gap-2">
            <h4 className="mb-6">{t("footer.menu")}</h4>
            <h5>
              <Link className="text-white" to="/shop">
                {t("footer.shop")}
              </Link>
            </h5>
            <h5>
              <Link className="text-white" to="/brands">
                {t("footer.brand")}
              </Link>
            </h5>
            <h5>
              <Link className="text-white" to="/guide">
                {t("footer.guide")}
              </Link>
            </h5>
            <h5>
              <Link className="text-white" to="/event">
                {t("footer.event")}
              </Link>
            </h5>
          </div>
          <div className="text-left">
            <h4 className="mb-6">{t("footer.contact")}</h4>
            <div className="flex gap-3 mb-5">
              <i className="icon-phone w-5 small-icon white-text"></i>
              <h6 className="white-text margin-two no-margin-bottom">
                <a className="text-white" href="tel: +9767611-2223">
                  7611-2223
                </a>
              </h6>
            </div>
            <div className=" flex gap-3 mb-5">
              <i className="icon-map-pin w-5 small-icon white-text items-center !flex"></i>
              <h6 className="white-text margin-two no-margin-bottom">
                <a
                  className="text-white"
                  target="_blank"
                  href="https://www.google.com/maps/dir/47.9166464,106.9056/%D0%9D%D0%B0%D0%B0%D0%B4%D0%B0%D0%BC%D1%87%D0%B4%D1%8B%D0%BD+%D0%97%D0%B0%D0%BC+Food+City,+%D0%A3%D0%BB%D0%B0%D0%B0%D0%BD%D0%B1%D0%B0%D0%B0%D1%82%D0%B0%D1%80/@47.8962897,106.8595306,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x5d96935dd0e02fc9:0x8e2792532f91f140!2m2!1d106.8553245!2d47.8784012?entry=ttu"
                >
                  {t("footer.location")}
                </a>
              </h6>
            </div>
            <div className=" flex gap-3 mb-5">
              <i className="icon-envelope w-5 small-icon before:text-xl white-text"></i>
              <h6 className="margin-two no-margin-bottom">
                <a href="mailto:marketing@foodcity.mn" className="white-text">
                  marketing@foodcity.mn
                </a>
              </h6>
            </div>
            <div className=" flex gap-3 mb-5">
              <i className="icon-clock w-5 small-icon before:text-xl white-text"></i>
              <p>
              {t("footer.timeTxt")} :
              </p>
              <h6 className="margin-two no-margin-bottom">
                {t("footer.time")}
              </h6>
            </div>
          </div>
        </div>

        <div className="row">
          {/* <div className="col-md-3 col-sm-3 footer-link1 xs-display-none">
            <h5>{t("label.about")}</h5>
            <p className="footer-text">{t("paragraph.shortAbout")}</p>
          </div> */}
        </div>
        <div className="wide-separator-line bg-mid-gray no-margin-lr margin-three no-margin-bottom"></div>
        <div className="row no-margin-bottom">
          <div className="col-md-6 col-sm-12 footer-social text-right sm-text-center"></div>
        </div>
      </div>

      <a href="javascript:;" className="scrollToTop">
        <i className="fa fa-angle-up"></i>
      </a>
    </footer>
  );
};

export default Footer;
