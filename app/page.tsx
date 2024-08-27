"use client";
import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_COUNTRY } from "@/graphQl/queries/getCountry";
import Map from "../components/Map";
import { CountryProps, Markers, OptionType } from "../types/types";
import countries from "../public/countries.json";
import {
  getIsoCodeByCountry,
  getSelectOptionsByCountry,
  getSelectOptionsByIsoCode,
  initialState,
} from "@/utils/utils";
import SearchForm from "../components/SearchForm";
import CardInfo from "../components/CardInfo";

const Home: React.FC = () => {
  const [getCountry, { error }] = useLazyQuery<CountryProps>(GET_COUNTRY);

  const [selectedOption, setSelectedOption] = useState<OptionType | null>();
  const [searchCriteria, setSearchCriteria] = useState<OptionType | null>();
  const [isSelectDisabled, setIsSelectDisabled] = useState<boolean>(true);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
  const [filledOptions, setFilledOptions] = useState<OptionType[] | null>();
  const [markers, setMarkers] = useState<Markers>(initialState);
  const [countryInfo, setCountryInfo] = useState<CountryProps | null>();

  const handleSearchCriteria = (selectedCriteria: OptionType | null) => {
    setSearchCriteria(selectedCriteria);
    setIsSelectDisabled(false);
    if (selectedCriteria?.value === "Country") {
      setFilledOptions(getSelectOptionsByCountry(countries));
    } else {
      setFilledOptions(getSelectOptionsByIsoCode(countries));
    }
    setSelectedOption(null);
    setIsButtonDisabled(true);
  };

  const handleSearchCountry = (selectedCountry: OptionType | null) => {
    setSelectedOption(selectedCountry);
    setIsButtonDisabled(false);
  };

  const handleClick = async () => {
    if (!searchCriteria || !selectedOption) {
      console.error("Search criteria or selected option is missing.");
      return;
    }

    const searchKey =
      searchCriteria?.value === "Country" ? "Country" : "ISOCode";

    const selectedCountry = countries.find(
      (c) => c[searchKey]?.toLowerCase() === selectedOption?.value.toLowerCase()
    );

    if (selectedCountry) {
      const { Latitude, Longitude, Country } = selectedCountry;
      setMarkers({
        lat: Latitude,
        lng: Longitude,
        title: Country,
        zoom: 2,
      });
    }

    const code =
      searchKey === "Country"
        ? getIsoCodeByCountry(selectedOption.value)
        : selectedOption.value;

    try {
      const { data } = await getCountry({ variables: { code } });
      if (data) {
        setCountryInfo(data);
      }
    } catch (error) {
      console.error("Error fetching country data:", error);
    }
    setSearchCriteria(null);
    setSelectedOption(null);
    setFilledOptions(null);
    setIsSelectDisabled(true);
    setIsButtonDisabled(true);
  };

  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl mt-12 mb-14 text-white text-center">Country Map</h1>
        <SearchForm
          searchCriteria={searchCriteria}
          selectedOption={selectedOption}
          filledOptions={filledOptions}
          isSelectDisabled={isSelectDisabled}
          isButtonDisabled={isButtonDisabled}
          handleSearchCriteria={handleSearchCriteria}
          handleSearchCountry={handleSearchCountry}
          handleClick={handleClick}
        />
        <div className="flex flex-col-reverse md:flex-row justify-between gap-6">
          <Map markers={markers} />
          {error && <p>Error: {error.message}</p>}
          {countryInfo && <CardInfo countryInfo={countryInfo.country} />}
        </div>
      </div>
    </div>
  );
};

export default Home;
