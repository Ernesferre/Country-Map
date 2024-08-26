import { CountryCardProps } from "@/types/types";
import React from "react";

const CardInfo: React.FC<CountryCardProps> = ({countryInfo}) => {

  const {name, capital, continent, emoji, languages, currency, code } = countryInfo

  return (
    <div className="h-full w-full flex-col md:flex-row md:w-[500px] bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      <div className="flex justify-center bg-gray-200 p-4">
        <span className="text-4xl">{emoji}</span>
      </div>
      <div className="p-4">
        <h2 className="text-3xl text-center font-bold text-gray-800 mb-2">{name}</h2>
        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Capital:</span> {capital}
        </p>
        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Continent: </span> {continent.name}
        </p>
        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Spoken Language: </span> {languages[0].name}
        </p>
        <p className="text-gray-600 mb-2">
          <span className="font-semibold">ISO Code: </span> {code}
        </p>
        <p className="text-gray-600 pb-4">
          <span className="font-semibold">Currency: </span> {currency}
        </p>
      </div>
    </div>
  );
};

export default CardInfo;
