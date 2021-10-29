const requests = {
  fetchActionMovies: `/discover/movie?api_key=${process.env.VUE_APP_API_KEY}&with_genres=28`,
  fetchAdventureMovies: `/discover/movie?api_key=${process.env.VUE_APP_API_KEY}&with_genres=12`,
  fetchAnimationMovies: `/discover/movie?api_key=${process.env.VUE_APP_API_KEY}&with_genres=16`,
  fetchComedyMovies: `/discover/movie?api_key=${process.env.VUE_APP_API_KEY}&with_genres=35`,
  fetchCrimeMovies: `/discover/movie?api_key=${process.env.VUE_APP_API_KEY}&with_genres=80`,
  fetchDramaMovies: `/discover/movie?api_key=${process.env.VUE_APP_API_KEY}&with_genres=18`,
  fetchFamilyMovies: `/discover/movie?api_key=${process.env.VUE_APP_API_KEY}&with_genres=10751`,
  fetchFantasyMovies: `/discover/movie?api_key=${process.env.VUE_APP_API_KEY}&with_genres=14`,
  fetchHistoryMovies: `/discover/movie?api_key=${process.env.VUE_APP_API_KEY}&with_genres=36`,
  fetchMysteryMovies: `/discover/movie?api_key=${process.env.VUE_APP_API_KEY}&with_genres=9648`,
  fetchScienceFictionMovies: `/discover/movie?api_key=${process.env.VUE_APP_API_KEY}&with_genres=878`,
  fetchTVMovies: `/discover/movie?api_key=${process.env.VUE_APP_API_KEY}&with_genres=10770`,
  fetchThrillerMovies: `/discover/movie?api_key=${process.env.VUE_APP_API_KEY}&with_genres=53`,
  fetchWarMovies: `/discover/movie?api_key=${process.env.VUE_APP_API_KEY}&with_genres=10752`,
  fetchWesternMovies: `/discover/movie?api_key=${process.env.VUE_APP_API_KEY}&with_genres=37`,
  fetchHorrorMovies: `/discover/movie?api_key=${process.env.VUE_APP_API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${process.env.VUE_APP_API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${process.env.VUE_APP_API_KEY}&with_genres=99`,
};

export default requests;