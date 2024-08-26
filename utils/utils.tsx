import { CountriesJson } from "@/types/types";
import countries from "../public/countries.json";

export const getSelectOptionsByCountry = (data: CountriesJson[]) => {
  return data.map((country) => ({
    value: country.Country,
    label: country.Country,
  }));
};

export const getSelectOptionsByIsoCode = (data: CountriesJson[]) => {
  return data.map((country) => ({
    value: country.ISOCode,
    label: country.ISOCode,
  }));
};

export const getIsoCodeByCountry = (countryName: string ) => {
  const country = countries.find(
    (item) => item.Country.toLowerCase() === countryName.toLowerCase()
  );
  return country ? country["ISOCode"] : "Country not found";
};

export const initialState = {
  lat: -32,
  lng: -68,
  title: "Argentina",
  zoom: 1,
};

export const searchCriteriaOptions = Object.keys(countries[0])
  .filter((key) => key === "Country" || key === "ISOCode")
  .map((key) => ({
    value: key,
    label: key === "ISOCode" ? "ISO Code" : key,
  }));
