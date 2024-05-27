import Image from "next/image";
import { Inter } from "next/font/google";
import LandingPage from "@/components/LandingPage";
import Layout from "@/components/layout";
import { getPokemonList } from "@/lib/pokemonApi";
import Head from "next/head";
/**
 * Home page component
 * @param {{pokemonDataList: {data: Array<{name: string, url: string}>, allData: Array<Object>}}} props
 */
export default function Home({ pokemonDataList }) {
  return (
    <Layout>
      <Head>
        <title>Pokémon Listing and Filtering App</title>
        <meta
          name="description"
          content="Discover and filter through a vast collection of Pokémon with ease. Find your favorite Pokémon by type, generation, and more."
        />
      </Head>
      <LandingPage pokemonDataList={pokemonDataList} />
    </Layout>
  );
}
export async function getStaticProps() {
  const pokemonDataList = await getPokemonList();
  return {
    props: { pokemonDataList },
  };
}
