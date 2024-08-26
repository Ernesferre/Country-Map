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
    <div className="flex gap-4 mb-4">
      <div className="flex gap-2">
        <Select
          options={searchCriteriaOptions}
          placeholder="Search by..."
          className="basic-single text-red"
          onChange={handleSearchCriteria}
          value={searchCriteria}
        />
        <Select
          options={filledOptions}
          placeholder="Select country..."
          className="basic-single"
          onChange={handleSearchCountry}
          value={selectedOption}
          isDisabled={isSelectDisabled}
        />
      </div>
      <button
        className={`${
          isButtonDisabled
            ? "opacity-50 cursor-not-allowed disabled"
            : "hover:bg-blue-700"
        } bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2`}
        onClick={handleClick}
      >
        Find Country
      </button>
    </div>
  );
};

export default SearchForm;
