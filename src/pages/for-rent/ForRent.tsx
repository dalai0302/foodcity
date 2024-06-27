import React from "react";
import { useTranslation } from "react-i18next";

const ForRent = () => {
  const { t } = useTranslation("global");

  return (
    <>
      <section className="!p-0 box-border relative">
        <img
          className="w-full max-h-[500px] bg-blend-darken block object-cover"
          src={window.location.origin + "/img/rent.jpg"}
          alt=""
        />
        <div className="overlay1 text-center text-white text-3xl"></div>
      </section>
      <section className="!py-8">
        <div className=" h-20 flex justify-center items-center ">
          <h2 className="text-center text-gray-900 font-semibold">
            {t("footer.forRent")}
          </h2>
        </div>
        <div className="container">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white">
                <span className="uppercase pb-1 underline">Food city</span>
                <p className="mt-1 text-sm text-gray-900 font-semibold">
                  ЯАРМАГТ БАЙРЛАХ "ФҮҮД СИТИ" ХУДАЛДААНЫ ТӨВД
                </p>
                <p className="mt-1 text-sm text-gray-900 font-semibold">
                  ХОЛБОО БАРИХ УТАС: 76112223
                </p>
              </caption>
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Давхар
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Төрөл
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Тоо
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b text-gray-900">
                  <th
                    scope="row"
                    className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap "
                  >
                    F2 давхарт
                  </th>
                  <td className="px-6 py-4">Авто машины зогсоол</td>
                  <td className="px-6 py-4">
                    <b>60ш</b>
                  </td>
                </tr>
                <tr className="bg-white border-b text-gray-900">
                  <th
                    scope="row"
                    className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap "
                  >
                    F3 давхарт
                  </th>
                  <td className="px-6 py-4">Кофе шоп, хоол үйлдвэрлэл</td>
                  <td className="px-6 py-4">
                    <b>1 </b>талбай
                  </td>
                </tr>
                <tr className="bg-white border-b text-gray-900">
                  <th
                    scope="row"
                    className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap "
                  >
                    F4 давхарт
                  </th>
                  <td className="px-6 py-4">Хоол үйлдвэрлэл</td>
                  <td className="px-6 py-4">
                    <b>1</b> талбай
                  </td>
                </tr>
                <tr className="bg-white border-b text-gray-900">
                  <th
                    scope="row"
                    className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap "
                  >
                    F4 давхарт
                  </th>
                  <td className="px-6 py-4">Том хүний бэлэн хувцас</td>
                  <td className="px-6 py-4">
                    <b> 3</b> талбай
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForRent;
