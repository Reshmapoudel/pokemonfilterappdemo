import React, { useState } from "react";
import PokemonCard from "./PokemonCard";
/**
 * LandingPage component
 * @param {{pokemonDataList: {data: Array<{name: string, url: string}>, allData: Array<Object>}}} props
 */
const LandingPage = ({ pokemonDataList }) => {
  const [searchKeyword, setSearchKeyword] = useState("");

  const searchListFilter = (pokemonDataList) => {
    return pokemonDataList?.allData?.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchKeyword.toLowerCase())
    );
  };
  const filteredPokemonResult = searchListFilter(pokemonDataList);
  // console.log(img, "alllll");
  return (
    <div>
      <div className="text-[#EE1B24] text-center py-4">
        <h1 className=" font-bold text-xl">
          Welcome to the Pokémon Listing and Filtering App
        </h1>
        <p className="font-serif pt-2">Search for pokemon by name</p>
      </div>
      <div className="grid grid-cols-[1.9fr_0.1fr] gap-1 max-w-2xl mx-auto">
        <input
          type="text"
          placeholder="eg:charmeleon"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          className="text-center border rounded text-gray-500 py-2"
        />
      </div>

      <div className="flex items-start justify-evenly flex-wrap gap-4">
        {filteredPokemonResult?.length > 0 ? (
          <>
            {filteredPokemonResult?.map((item) => {
              console.log(item.types, "99999999");
              return (
                <PokemonCard
                  name={item.name}
                  img={item.sprites.other.home.front_default}
                  type={item.types}
                  key={item.name}
                />
              );
            })}
          </>
        ) : (
          <div className="text-black mt-4 font-medium">No item found</div>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
