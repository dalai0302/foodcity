import React from "react";
import { useTranslation } from "react-i18next";

const Job = () => {
  const { t } = useTranslation("global");

  return (
    <>
      <section className="!p-0 box-border relative">
        <img
          className="w-full max-h-[500px] bg-blend-darken block object-cover"
          src={window.location.origin + "/img/job.jpg"}
          alt=""
        />
        <div className="overlay1 text-center text-white text-3xl"></div>
      </section>
      <section className="!py-8">
        <div className=" h-20 flex justify-center items-center ">
          <h2 className="text-center text-gray-900 font-semibold">
            {t("footer.job")}
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
                  ХОЛБОО БАРИХ УТАС: 96119621
                </p>
                <p className="mt-1 text-sm text-gray-900 font-semibold">
                  ( Таны гэр ХУД-тээ ойр Яармаг болон Нисэхд байдаг бол давуу
                  тал болно )
                </p>
              </caption>
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Албан тушаал
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Цалин
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Нэмэлт мэдээлэл:
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b text-gray-900">
                  <th
                    scope="row"
                    className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap "
                  >
                    НЯГТЛАН БОДОГЧ
                  </th>
                  <td className="px-6 py-4">2,500,000 төгрөг</td>
                  <td className="px-6 py-4">
                    <ul className="list-disc text-gray-900">
                      <li>Мэргэжлээрээ 3 дээш жил ажилласан туршлагатай</li>
                      <li>Нас – 25-45 доош байх</li>
                      <li>Ажлын 5 өдөртэй</li>
                      <li>Өдрийн хоолтой</li>
                    </ul>
                  </td>
                  {/* <td className="px-6 py-4">$2999</td> */}
                </tr>
                <tr className="bg-white border-b text-gray-900">
                  <th
                    scope="row"
                    className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap "
                  >
                    ГАЛЫН АЮУЛГҮЙ БАЙДЛЫН АЖИЛТАН
                  </th>
                  <td className="px-6 py-4">
                    Цалин 1 гараа - 140,000 төгрөг / Тогтвор суурьшилтай
                    ажиллавал өсөн нэмэгдэх боломжтой/
                  </td>
                  <td className="px-6 py-4">
                    <ul className="list-disc">
                      <li>Нас – 25-50 байх</li>
                      <li>
                        Онцгой байдлын газар гал унтраах хэлтэст ажиллаж байсан
                        бол давуу тал болно
                      </li>
                      <li>24/48 – ээлжээр ажиллана</li>
                    </ul>
                  </td>
                  {/* <td className="px-6 py-4">$1999</td> */}
                </tr>
                <tr className="bg-white border-b text-gray-900">
                  <th
                    scope="row"
                    className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap "
                  >
                    ХАРУУЛ ХАМГААЛАЛТЫН АЖИЛТАН
                  </th>
                  <td className="px-6 py-4">
                    1 гарааны - 100,000-110,000 төгрөг / Тогтвор суурьшилтай
                    ажиллавал өсөн нэмэгдэх боломжтой/
                  </td>
                  <td className="px-6 py-4">
                    <ul className="list-disc">
                      <li>Нас – 25-50 байх</li>
                      <li>
                        Харуул хамгаалалтын ажил хийж байсан бол давуу тал болно
                      </li>
                      <li>
                        Ээлжээр шөнөөр - 24/48 болон өдрөөр -12/12 гэж ээлжилж
                        гарна
                      </li>
                      <li>Өдөр , оройн хоолтой</li>
                    </ul>
                  </td>
                  {/* <td className="px-6 py-4">$99</td> */}
                </tr>
                <tr className="bg-white border-b text-gray-900">
                  <th
                    scope="row"
                    className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap "
                  >
                    ҮЙЛЧЛЭГЧ
                  </th>
                  <td className="px-6 py-4">
                    1.100.000 төгрөг + Урамшуулал / Тогтвор суурьшилтай
                    ажиллавал өсөн нэмэгдэх боломжтой/
                  </td>
                  <td className="px-6 py-4">
                    <ul className="list-disc">
                      <li>Нас харгалзахгүй</li>
                      <li>Цэвэрч нямбай, цаг барьдаг байх</li>
                      <li>Ажлын 5 өдөр, 8 цагаараа ажиллана</li>
                      <li>Өдрийн хоолтой</li>
                    </ul>
                  </td>
                  {/* <td className="px-6 py-4">$99</td> */}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="!py-8">
        <div className="container">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white">
                <span className="uppercase pb-1 underline">
                  FAT POT Халуун тогоо
                </span>
                <p className="mt-1 text-sm text-gray-900 font-semibold">
                  ЯАРМАГТ БАЙРЛАХ "ФҮҮД СИТИ" ХУДАЛДААНЫ ТӨВ-н FAT POT Халуун
                  тогоо хятад ресторанд
                </p>
                <p className="mt-1 text-sm text-gray-900 font-semibold">
                  ХОЛБОО БАРИХ УТАС: 96119621
                </p>
                <p className="mt-1 text-sm text-gray-900 font-semibold">
                  ( Таны гэр ХУД-тээ ойр Яармаг болон Нисэхд байдаг бол давуу
                  тал болно )
                </p>
              </caption>
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Албан тушаал
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Цалин
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Нэмэлт мэдээлэл:
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b text-gray-900">
                  <th
                    scope="row"
                    className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap "
                  >
                    <b>МАХ БЭЛТГЭГЧ ТОГООЧ</b> хийх сонирхолтой залуусыг <br />{" "}
                    сургаад авах боломжтой
                  </th>
                  <td className="px-6 py-4">
                    1,500,000 төгрөг /Тогтвортой, тууштай ажиллахад цалин өсөн
                    нэмэгдэх боломжтой/
                  </td>
                  <td className="px-6 py-4">
                    <ul className="list-disc text-gray-900">
                      <li>Нас – 25-40 доош байх</li>
                      <li>Ажлын цаг 10-22, ээлжээр 2 гараад 2 амрана</li>
                      <li>Өдрийн хоолтой</li>
                    </ul>
                  </td>
                  {/* <td className="px-6 py-4">$2999</td> */}
                </tr>
                <tr className="bg-white border-b text-gray-900">
                  <th
                    scope="row"
                    className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap "
                  >
                    ЗӨӨГЧ
                  </th>
                  <td className="px-6 py-4">
                    1.100.000 төгрөг/ 1 гараа- 73.000 төгрөг
                  </td>
                  <td className="px-6 py-4">
                    <ul className="list-disc">
                      <li>Цэвэрч нямбай, цаг барьдаг байх </li>
                      <li>Ээлжээр - 2 өдөр ажиллаад 2 өдөр амрана</li>
                      <li>Өдрийн хоолтой</li>
                    </ul>
                  </td>
                  {/* <td className="px-6 py-4">$1999</td> */}
                </tr>
                <tr className="bg-white border-b text-gray-900">
                  <th
                    scope="row"
                    className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap "
                  >
                    УГААГЧ
                  </th>
                  <td className="px-6 py-4">1.100.000 төгрөг</td>
                  <td className="px-6 py-4">
                    <ul className="list-disc">
                      <li>Цэвэрч нямбай, цаг барьдаг байх </li>
                      <li>Ээлжээр - 1 өдөр ажиллаад 1 өдөр амрана</li>
                      <li>Өдрийн хоолтой</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="!py-8">
        <div className="container">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white">
                <span className="uppercase pb-1 underline">HAPPY LAND</span>
                <p className="mt-1 text-sm text-gray-900 font-semibold">
                  ЯАРМАГТ БАЙРЛАХ "ФҮҮД СИТИ" ХУДАЛДААНЫ ТӨВ-н HAPPY LAND
                  хүүхдийн тоглоомын газарт
                </p>
                <p className="mt-1 text-sm text-gray-900 font-semibold">
                  ХОЛБОО БАРИХ УТАС: 96119621
                </p>
                <p className="mt-1 text-sm text-gray-900 font-semibold">
                  ( Таны гэр ХУД-тээ ойр Яармаг болон Нисэхд байдаг бол давуу
                  тал болно )
                </p>
              </caption>
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Албан тушаал
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Цалин
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Нэмэлт мэдээлэл:
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b text-gray-900">
                  <th
                    scope="row"
                    className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap "
                  >
                    ТУСЛАХ АЖИЛТАН
                  </th>
                  <td className="px-6 py-4">1.200.000 төгрөг</td>
                  <td className="px-6 py-4">
                    <ul className="list-disc text-gray-900">
                      <li>Цэвэрч нямбай, цаг барьдаг байх </li>
                      <li>Ажлын 5 өдөртэй , Ажлын цаг 11:00-20:00</li>
                      <li>Өдрийн хоолтой</li>
                    </ul>
                  </td>
                  {/* <td className="px-6 py-4">$2999</td> */}
                </tr>
                <tr className="bg-white border-b text-gray-900">
                  <th
                    scope="row"
                    className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap "
                  >
                    ЗӨӨГЧ
                  </th>
                  <td className="px-6 py-4">
                    1.100.000 төгрөг/ 1 гараа- 73.000 төгрөг
                  </td>
                  <td className="px-6 py-4">
                    <ul className="list-disc">
                      <li>Цэвэрч нямбай, цаг барьдаг байх </li>
                      <li>Ээлжээр - 2 өдөр ажиллаад 2 өдөр амрана</li>
                      <li>Өдрийн хоолтой</li>
                    </ul>
                  </td>
                  {/* <td className="px-6 py-4">$1999</td> */}
                </tr>
                <tr className="bg-white border-b text-gray-900">
                  <th
                    scope="row"
                    className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap "
                  >
                    УГААГЧ
                  </th>
                  <td className="px-6 py-4">1.100.000 төгрөг</td>
                  <td className="px-6 py-4">
                    <ul className="list-disc">
                      <li>Цэвэрч нямбай, цаг барьдаг байх </li>
                      <li>Ээлжээр - 1 өдөр ажиллаад 1 өдөр амрана</li>
                      <li>Өдрийн хоолтой</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="!py-8">
        <div className="container ">
          <img className="w-full mx-auto" src={window.location.origin + "/img/bar.png"} alt="" />
        </div>
      </section>
    </>
  );
};

export default Job;
