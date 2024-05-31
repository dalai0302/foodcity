import { t } from "i18next";
import React from "react";
import ReactCountryFlag from "react-country-flag";
// import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (e: any) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div className="inline-block relative">
      <select
        onChange={changeLanguage}
        className="block appearance-none w-full bg-white text-black border border-gray-400 hover:border-gray-500 px-4 py-2 shadow leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value="mn">
          <ReactCountryFlag
            countryCode="MN"
            svg
            style={{ marginRight: "8px" }}
          />
          {/* {t("language.mongolian")} */}
          MN
        </option>
        <option value="en">
          <ReactCountryFlag
            countryCode="GB"
            svg
            style={{ marginRight: "8px" }}
          />
          {/* {t("language.english")} */}
          EN
        </option>
      </select>
    </div>
  );
};

export default LanguageSelector;
