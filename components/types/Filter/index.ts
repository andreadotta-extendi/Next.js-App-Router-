export interface Instrument {
  imageSrc: string;
  altText: string;
  name: string;
  value: string;
}

export interface FilterData {
  instruments: Instrument[];
  genres: string[];
  topics: string[];
}

// Exporting the centralized filter data type
export type FilterMetadata = FilterData;
