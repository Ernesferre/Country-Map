import { searchCriteriaOptions } from "@/utils/utils";
import React from "react";
import Select from "react-select";

interface SearchFormProps {
  searchCriteria: any;
  selectedOption: any;
  filledOptions: any;
  isSelectDisabled: boolean;
  isButtonDisabled: boolean;
  handleSearchCriteria: (selectedCriteria: any) => void;
  handleSearchCountry: (selectedCountry: any) => void;
  handleClick: () => void;
}

const customStyles = {
  control: (styles: any, { isDisabled }: any) => ({
    ...styles,
    backgroundColor: isDisabled ? "#e0e0e0" : "white",
    cursor: isDisabled ? "not-allowed" : "default",
  }),
};

const SearchForm: React.FC<SearchFormProps> = ({
  searchCriteria,
  selectedOption,
  filledOptions,
  isSelectDisabled,
  isButtonDisabled,
  handleSearchCriteria,
  handleSearchCountry,
  handleClick,
}) => {
  return (
    <div className="flex justify-between flex-col md:flex-row gap-4 mb-4">
      <div className="flex flex-col md:flex-row gap-4">
        <Select
          options={searchCriteriaOptions}
          placeholder="Search by..."
          className="basic-single w-full md:w-80"
          onChange={handleSearchCriteria}
          value={searchCriteria}
        />
        <Select
          options={filledOptions}
          placeholder="Select country..."
          className="basic-single w-full md:w-80"
          styles={customStyles}
          onChange={handleSearchCountry}
          value={selectedOption}
          isDisabled={isSelectDisabled}
        />
      </div>
      <button
        className={`${
          isButtonDisabled
            ? "opacity-50 cursor-not-allowed pointer-events-none disabled w-full md:w-60"
            : "hover:bg-blue-700"
        } bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2 w-full md:w-60`}
        onClick={handleClick}
      >
        Find Country
      </button>
    </div>
  );
};

export default SearchForm;
