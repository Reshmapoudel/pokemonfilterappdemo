const POKEMONLIST_API = "https://pokeapi.co/api/v2/";
/**
 * Fetches the list of Pokémon with their details, utilizing client-side caching.
 * @returns {Promise<{data: Array<{name: string, url: string}>, allData: Array<Object>}>}
 */

export async function getPokemonList() {
  let cachedData;
  let cachedTime;
  if (typeof localStorage !== "undefined") {
    const cacheKey = "pokemonData";
    const cacheTimeKey = "pokemonCacheTime";
    cachedData = localStorage.getItem(cacheKey);
    cachedTime = localStorage.getItem(cacheTimeKey);
  }

  const cacheDuration = 60 * 60 * 1000;
  if (cachedData && cachedTime) {
    const now = new Date().getTime();
    if (now - parseInt(cachedTime) < cacheDuration) {
      return JSON.parse(cachedData);
    }
  }

  const response = await fetch(POKEMONLIST_API + "pokemon?limit=80&offset=0");
  const data = await response.json();

  const allDataPromises = data.results.map(async (pokemon) => {
    const pokemonRes = await fetch(pokemon.url);
    return pokemonRes.json();
  });

  const allData = await Promise.all(allDataPromises);
  const result = { data: data.results, allData };
  if (typeof localStorage !== "undefined") {
    const cacheKey = "pokemonData";
    const cacheTimeKey = "pokemonCacheTime";
    localStorage.setItem(cacheKey, JSON.stringify(result));
    localStorage.setItem(cacheTimeKey, new Date().getTime().toString());
  }

  console.log(allData, "ppp");
  //   return allData;
  return { data: data.results, allData };
}
