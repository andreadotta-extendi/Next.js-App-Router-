import { FilterMetadata } from "@/components/types/Filter";

const filterData: FilterMetadata = {
  instruments: [
    {
      imageSrc: "assets/instruments/chitarra.svg",
      altText: "Guitar icon",
      name: "Chitarra",
      value: "a",
    },
    {
      imageSrc: "assets/instruments/batteria.svg",
      altText: "Drums icon",
      name: "Batteria",
      value: "b",
    },
    {
      imageSrc: "assets/instruments/strumento.svg",
      altText: "Music production icon",
      name: "Produzione musicale",
      value: "c",
    },
    {
      imageSrc: "assets/instruments/piano-e-tastiera.svg",
      altText: "Piano and keyboard icon",
      name: "Piano e tastiera",
      value: "d",
    },
    {
      imageSrc: "assets/instruments/ukulle.svg",
      altText: "Ukulele icon",
      name: "Ukulele",
      value: "e",
    },
    {
      imageSrc: "assets/instruments/basso.svg",
      altText: "Bass icon",
      name: "Basso",
      value: "f",
    },
  ],

  instrumentSubCategories: ["Acoustic", "Electric"],
  genres: ["Rock", "Blues", "Pop", "Metal", "Jazz-fusion", "Funk", "Hip Hop"],
  topics: ["Argomento 1", "Argomento 2", "Argomento 3"],
};

export default filterData;
