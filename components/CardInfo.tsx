import { CountryCardProps } from "@/types/types";
import React from "react";

const CardInfo: React.FC<CountryCardProps> = ({countryInfo}) => {
  const {name, capital, continent, emoji} = countryInfo

  return (
    <div className="max-w-sm h-64 mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      <div className="flex items-center justify-center bg-gray-200 p-4">
        <span className="text-4xl">{emoji}</span>
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{name}</h2>
        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Capital:</span> {capital}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Continent:</span> {continent.name}
        </p>
      </div>
    </div>
  );
};

export default CardInfo;
