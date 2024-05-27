import Image from "next/image";
import React from "react";
/**
 * PokemonCard component
 * @param {{name: string, img: string, type: Array<{type: {name: string}}>}} props
 */
const PokemonCard = ({ name, img, type }) => {
  return (
    <div className="flex flex-col items-start w-max text-gray-500   mt-12 cursor-pointer">
      <div className="bg-red-100 p-2 rounded ">
        <Image src={img} alt="pic" className="" width={160} height={160} />
      </div>
      <h1 className="capitalize ">Name: {name}</h1>
      {type?.map((i) => {
        console.log(i, "ooooooooo");
        return (
          <p className="text-gray-500" key={i?.type?.name}>
            Types: {i?.type?.name}
          </p>
        );
      })}
    </div>
  );
};

export default PokemonCard;
