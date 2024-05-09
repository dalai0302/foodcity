import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className=" bg-white footer-top">
        <div className="container">
          <div className="row margin-four">
            <div className="col-md-4 col-sm-4 text-center">
              <i className="icon-phone small-icon black-text"></i>
              <h6 className="black-text margin-two no-margin-bottom">
                7611-2223
              </h6>
            </div>
            <div className="col-md-4 col-sm-4 text-center">
              <i className="icon-map-pin small-icon black-text"></i>
              <h6 className="black-text margin-two no-margin-bottom">
                <a
                  target="_blank"
                  href="https://www.google.com/maps/dir/?api=1&destination=47.878364000815%2C106.85542657468&fbclid=IwZXh0bgNhZW0CMTAAAR1frS3C2f9wz4092G2jJDNzfRVNzZqm-HqT8bZF2Q6gVZdDdm40GmD8sZc_aem_AQiRNxFkpm02__qXa0S7kdX62nXEPHp0vlPjyDAILnIM8BEZtuwOihr3YlWh2sXWeHg34Ncowmqk5tOHkbjVok1v"
                >
                  FOOD CITY
                </a>
              </h6>
            </div>
            <div className="col-md-4 col-sm-4 text-center">
              <i className="icon-envelope small-icon black-text"></i>
              <h6 className="margin-two no-margin-bottom">
                <a href="mailto:marketing@foodcity.mn" className="black-text">
                  marketing@foodcity.mn
                </a>
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="container footer-middle">
        <div className="row">
          <div className="col-md-3 col-sm-3 footer-link1 xs-display-none">
            <h5>Бидний тухай</h5>

            <p className="footer-text">
              FOOD CITY төв өнөөдөр бүх төрлийн хүнсний төрөлжсөн худалдаа,
              өргөн хэрэглээний бараа, гоо сайхан, ахуйн бараа, хувцас, олон
              үндэсний хоол, түргэн хоол, авто худалдаа, сургалт, засвар
              үйлчилгээ, хүүхдийн тоглоом, салон зэрэг олон 100 төрлийн худалдаа
              үйлчилгээ цогцолсон томоохон төв болон ажиллаж байна.
            </p>
          </div>
          <div className="col-md-2 col-sm-3 col-xs-4 footer-link2 col-md-offset-3">
            <h5>
              <Link to="/about">Бидний тухай</Link>
            </h5>
          </div>
          <div className="col-md-2 col-sm-3 col-xs-4  footer-link3">
            <h5>
              <Link to="/shop">Дэлгүүрүүд</Link>
            </h5>
            <h5>
              <Link to="/brands">Брэнд</Link>
            </h5>
          </div>
          <div className="col-md-2 col-sm-3 col-xs-4  footer-link4">
            <h5>
              <Link to="/guide">Хөтөч</Link>
            </h5>
            <h5>
              <Link to="/event">Эвент</Link>
            </h5>

            {/* <ul>
              <li>
                <a href="team-members.html">Team Members</a>
              </li>
              <li>
                <a href="testimonials.html">Testimonials</a>
              </li>
              <li>
                <a href="our-clients.html">Our Clients</a>
              </li>
              <li>
                <a href="careers.html">Careers With Us</a>
              </li>
            </ul> */}
          </div>
        </div>
        <div className="wide-separator-line bg-mid-gray no-margin-lr margin-three no-margin-bottom"></div>
        <div className="row margin-four no-margin-bottom">
          <div className="col-md-6 col-sm-12 sm-text-center sm-margin-bottom-four">
            {/* <ul className="list-inline footer-link text-uppercase">
              <li>
                <a href="about-us.html">About</a>
              </li>
              <li>
                <a href="blog-masonry-3columns.html">Blog</a>
              </li>
              <li>
                <a href="careers.html">Careers</a>
              </li>
              <li>
                <a href="testimonials.html">Testimonials</a>
              </li>
              <li>
                <a href="contact-us.html">Contact</a>
              </li>
            </ul> */}
          </div>
          <div className="col-md-6 col-sm-12 footer-social text-right sm-text-center">
            <a target="_blank" href="https://www.facebook.com/FoodCityMall">
              <i className="fa fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark-gray footer-bottom">
        <div className="container">
          <div className="row margin-three">
            <div className="col-md-6 col-sm-6 col-xs-12 copyright text-left letter-spacing-1 xs-text-center xs-margin-bottom-one">
              &copy;FOODCITY 2024.
            </div>

            <div className="col-md-6 col-sm-6 col-xs-12 footer-logo text-right xs-text-center">
              <a href="index.html">
                <img src="images/logo-light-gray.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <a href="javascript:;" className="scrollToTop">
        <i className="fa fa-angle-up"></i>
      </a>
    </footer>
  );
};

export default Footer;
