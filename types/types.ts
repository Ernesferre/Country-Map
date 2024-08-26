export interface Language {
    code: string;
    name: string;
  }
  
  export interface Continent {
    name: string;
    code: string;
  }

  export interface Languages {
    name: string;
  }
  
  export interface CountryProps {
      country: CountryInfo
  }

  export interface CountryInfo {
    name: string;
    capital: string;
    continent: Continent;
    emoji: string;
    languages: Languages[],
    currency: string,
    code: string
  }

  export interface CountryCardProps {
    countryInfo: CountryInfo;
  }

  export interface OptionType {
    label: string; 
    value: string;
  }

  export interface CountriesJson {
    Country: string;       
    ISOCode: string;   
    Latitude: number;     
    Longitude: number;    
  }

  export interface Markers {
    lat: number,
    lng: number,
    title: string,
    zoom: number
  }

  export interface MapProps {
    markers: Markers;
  }
  
  