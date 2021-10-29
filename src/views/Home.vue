
<template>
  <div class="home">
      <!-- Header -->
      <Header/>

      <!-- random movie -->
      
      <!-- list of genres -->
      <Row title="Action" :fetchUrl="fetchActionMovies()"/>
      <Row title="Adventure" :fetchUrl="fetchAdventureMovies()"/>
      <Row title="Animation" :fetchUrl="fetchAnimationMovies()"/>
      <Row title="Comedy" :fetchUrl="fetchComedyMovies()"/>
      <Row title="Crime" :fetchUrl="fetchCrimeMovies()"/>
      <Row title="Drama" :fetchUrl="fetchDramaMovies()"/>
      <Row title="Family" :fetchUrl="fetchFamilyMovies()"/>
      <Row title="Fantasy" :fetchUrl="fetchFantasyMovies()"/>
      <Row title="History" :fetchUrl="fetchHistoryMovies()"/>
      <Row title="Mystery" :fetchUrl="fetchMysteryMovies()"/>
      <Row title="Science Fiction" :fetchUrl="fetchScienceFictionMovies()"/>
      <Row title="TV Movies" :fetchUrl="fetchTVMovies()"/>
      <Row title="Thriller" :fetchUrl="fetchThrillerMovies()"/>
      <Row title="War" :fetchUrl="fetchWarMovies()"/>
      <Row title="Western" :fetchUrl="fetchWesternMovies()"/>
      <Row title="Horror" :fetchUrl="fetchHorrorMovies()"/>
      <Row title="Romance" :fetchUrl="fetchRomanceMovies()"/>
      <Row title="Documentaries" :fetchUrl="fetchDocumentaries()"/>
  </div>

</template>

<script>
/* Components */
import Header from '../components/Header'
import Row from '../components/Row'

/* utils */
import requests from '../utils/genRequest'

export default{
    name: "Home",
    data() {
        return {
            
        };
    },
    components: {
        Header,
        Row
    },
    methods: {
        fetchActionMovies () {
          return requests.fetchActionMovies
        },
        fetchAdventureMovies () {
          return requests.fetchAdventureMovies
        },
        fetchAnimationMovies () {
          return requests.fetchAnimationMovies
        },
        fetchComedyMovies () {
          return requests.fetchComedyMovies
        },
        fetchCrimeMovies () {
          return requests.fetchCrimeMovies
        },
        fetchDramaMovies () {
          return requests.fetchDramaMovies
        },
        fetchFamilyMovies () {
          return requests.fetchFamilyMovies
        },
        fetchFantasyMovies () {
          return requests.fetchFantasyMovies
        },
        fetchHistoryMovies () {
          return requests.fetchHistoryMovies
        },
        fetchMysteryMovies () {
          return requests.fetchMysteryMovies
        },
        fetchScienceFictionMovies () {
          return requests.fetchScienceFictionMovies
        },
        fetchTVMovies () {
          return requests.fetchTVMovies
        },
        fetchThrillerMovies () {
          return requests.fetchThrillerMovies
        },
        fetchWarMovies () {
          return requests.fetchWarMovies
        },
        fetchWesternMovies () {
          return requests.fetchWesternMovies
        },
        fetchHorrorMovies () {
          return requests.fetchHorrorMovies
        },
        fetchRomanceMovies () {
          return requests.fetchRomanceMovies
        },
        fetchDocumentaries () {
          return requests.fetchDocumentaries
        },
    }
  
};
</script>

<style>

</style>

