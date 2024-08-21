import React from "react";
import { CategorySection } from "./CategorySection";
import { FilterSection } from "./FilterSection";
import { Avatar, Button, Chip, FormLabel, StepIcon, SvgIcon, TextField, Theme, Typography } from "@mui/material";

const CatalogPage = () => {
  return (
    <main className="flex overflow-hidden relative flex-col justify-center items-center bg-zinc-900">
      <div className="flex z-0 flex-1 gap-2.5 justify-center self-center size-full max-md:max-w-full">
        <div className="flex flex-col justify-between items-center w-[1440px] max-md:max-w-full">
          <div className="relative w-full max-md:max-w-full" >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f4b7ead5bbd68b16be08f000a11d8756e4f91099498b58d4c478b1b6ba608ac8?placeholderIfAbsent=true&apiKey=ab14136582c84aab8af41f16349d0438"
              alt=""
              className="object-contain z-0 shrink-0 self-stretch my-auto aspect-[3.62] w-[152px]"
            />
            <div className="flex z-0 flex-wrap flex-1 shrink gap-4 items-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
              <Button
                size="small"
                variant="outlined"
                color="primary"
                className="self-stretch my-auto"
              >
                Accedi
              </Button>
              <Button
                size="small"
                variant="contained"
                color="primary"
                className="self-stretch my-auto"
              >
                Iscriviti
              </Button>
            </div>
          </div>
          <section className="flex flex-col flex-1 py-10 max-w-full w-[1259px]">
            <div className="flex flex-col w-full max-md:max-w-full">
              <div className="flex flex-col w-full max-md:max-w-full">
                <div className="flex flex-col p-8 w-full rounded-xl bg-neutral-900 max-md:px-5 max-md:max-w-full">
                  <Typography variant="h1" className="w-full max-md:max-w-full">
                    Esplora il catalogo
                  </Typography>
                  <form className="flex flex-col self-center mt-8 max-w-full w-[900px]">
                    <TextField
                      placeholder="Cerca un argomento, un insegnante, un percorso"
                      value="Value"
                      variant="filled"
                      size="medium"
                      className="w-full max-md:max-w-full"
                      InputProps={{}}
                    />
                  </form>
                  <div className="flex flex-wrap gap-4 items-start mt-8 w-full max-md:max-w-full">
                    {[
                      "Chitarra",
                      "Batteria",
                      "Travis Barker",
                      "Assolo chitarra",
                      "Assolo chitarra",
                      "Assolo chitarra",
                      "Assolo chitarra",
                      "Assolo chitarra",
                      "Assolo chitarra",
                      "Assolo chitarra",
                    ].map((label, index) => (
                      <Chip
                        key={index}
                        label={label}
                        size="medium"
                        //color="tertiary"
                        variant="filled"
                        className={index === 1 ? "flex-1 shrink basis-0" : ""}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col justify-center mt-4 w-full max-md:max-w-full">
                  <div className="flex flex-wrap w-full rounded-xl bg-neutral-900 min-h-[450px] max-md:max-w-full">
                    <div className="flex flex-col flex-1 shrink justify-center px-8 py-10 basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full">
                      <div className="flex flex-col w-full max-md:max-w-full">
                        <Chip
                          label="Masterclass Live"
                          size="medium"
                          //color="tertiary"
                          variant="filled"
                          className="self-center"
                          avatar={<Avatar />}
                        />
                        <Typography
                          variant="h2"
                          className="mt-4 w-full max-md:max-w-full"
                        >
                          Tecniche Melodiche negli Assoli di Chitarra
                        </Typography>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4abcf3b5ad004c0a02719844c727cc66ecf74909d76abadfd4b9bcd69eba8434?placeholderIfAbsent=true&apiKey=ab14136582c84aab8af41f16349d0438"
                          alt=""
                          className="object-contain self-center mt-4 w-20 aspect-[40] stroke-[3px] stroke-red-400"
                        />
                        <Typography
                          variant="s1"
                          className="mt-4 w-full max-md:max-w-full"
                        >
                          con Tony De Gruttola
                        </Typography>
                      </div>
                      <div className="flex flex-col self-center mt-8 max-w-full w-[187px]">
                        <div className="flex gap-2 justify-center items-center w-full">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/744f649b03c0c7ea70d7be21bef254f5c05abdbff7aa152943c95c8b98e97057?placeholderIfAbsent=true&apiKey=ab14136582c84aab8af41f16349d0438"
                            alt=""
                            className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                          />
                          <Typography
                            variant="body-small-500"
                            className="self-stretch my-auto"
                          >
                            22 Settembre - 21:30
                          </Typography>
                        </div>
                        <Button
                          size="large"
                          variant="contained"
                          color="primary"
                          className="mt-4 w-full"
                        >
                          Accedi alla live
                        </Button>
                      </div>
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/81ba2ff2f482cdc7ab8254d93f7fb0ab94a0d0e4c3a0d8a6f8b4875c84ddeb60?placeholderIfAbsent=true&apiKey=ab14136582c84aab8af41f16349d0438"
                      alt="Masterclass Live"
                      className="object-contain rounded-none aspect-[1.4] min-w-[240px] w-[632px] max-md:max-w-full"
                    />
                  </div>
                  <div className="flex flex-wrap justify-center items-center mt-2 w-full max-md:max-w-full">
                    <div className="flex overflow-hidden flex-col justify-center items-center self-stretch p-3.5 my-auto rounded-lg rotate-[1.2246468525851679e-16rad] w-[52px]">
                      <SvgIcon className="w-6 min-h-[24px]" />
                    </div>
                    <div className="flex gap-2 justify-center items-center self-stretch my-auto">
                      <StepIcon className="self-stretch my-auto w-4 h-4" icon={undefined} />
                      <StepIcon
                        className="self-stretch my-auto w-4 h-4"
                        completed icon={undefined}                      />
                    </div>
                    <div className="flex overflow-hidden flex-col justify-center items-center self-stretch p-3.5 my-auto rounded-lg w-[52px]">
                      <SvgIcon className="w-6 min-h-[24px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-10 w-full max-md:max-w-full">
              <div className="flex flex-wrap gap-6 items-start w-full max-md:max-w-full">
                {[
                  "Chitarra",
                  "Batteria",
                  "Produzione musicale",
                  "Piano e tastiera",
                  "Ukulele",
                  "Basso",
                ].map((label, index) => (
                  <div
                    key={index}
                    className="flex flex-col flex-1 shrink justify-center p-2 rounded-lg border border-solid basis-0 bg-neutral-900 border-neutral-400"
                  >
                    <div className="flex flex-col w-full">
                      <div className="flex flex-col items-center w-full">
                        <img
                          loading="lazy"
                          src={`http://b.io/ext_${index + 5}-`}
                          alt={label}
                          className="object-contain aspect-square w-[72px]"
                        />
                        <FormLabel className="mt-2">{label}</FormLabel>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-6 items-start mt-8 w-full">
                <FilterSection />
                <div className="flex flex-col flex-1 shrink justify-center basis-0 min-w-[240px] max-md:max-w-full">
                  <CategorySection title="In evidenza" />
                  <CategorySection title="Impara da zero" />
                  <CategorySection title="Ultime uscite"/>
                  <CategorySection title="Più seguiti"/>
                  <CategorySection title="Categoria statica 1"/>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3b7a883e6a81541ce5b67038e18f9b413daa52ed162dd86a09a48aedf5e1d2d?placeholderIfAbsent=true&apiKey=ab14136582c84aab8af41f16349d0438"
        alt=""
        className="object-contain absolute z-0 max-w-full h-24 aspect-[1.23] right-[115px] top-[154px] w-[118px]"
      />
    </main>
  );
};

export default CatalogPage;
