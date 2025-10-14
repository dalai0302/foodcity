import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { t } from "i18next";
import React, { useState } from "react";
import ReactCountryFlag from "react-country-flag";
// import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (val: string) => {
    // const selectedLanguage = e.target.value;
    i18n.changeLanguage(val);
  };

  return (
    <div className="inline-block relative cursor-pointer ">
      <div className="flex gap-2 flex-row">
        <div
          className="flex gap-1 font-semibold text-black uppercase"
          onClick={() => {
            changeLanguage("mn");
          }}
        >
          <ReactCountryFlag className="!w-6 !h-6" countryCode="MN" svg />
          {/* {t("language.mongolian")} */}
          мн
        </div>
        <div
          className="flex gap-1 font-semibold text-black uppercase"
          onClick={() => {
            changeLanguage("en");
          }}
        >
          <ReactCountryFlag className="!w-6 !h-6" countryCode="GB" svg />
          {/* {t("language.english")} */}
          en
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
