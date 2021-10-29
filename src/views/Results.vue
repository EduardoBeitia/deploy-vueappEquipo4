<template>
    <div>
        <div class="backgrop" v-bind:style="{backgroundImage: 'url(' + imgUrl + ')'}">
            <div class="overlay">
                <div class="infoContainer">
                    <h2 class="title">{{title}}</h2>
                    <p class="description">{{description}}</p>
                </div>
            </div>
        </div>
        <div class="buttonsContainer">
            <button @click="otherSearch()" class="button">
                <i class="fas fa-arrow-left"></i> otra busqueda
            </button>
            <button @click="nextMovie()" class="button">
                <i class="fas fa-arrow-right"></i> Siguiente resultado
            </button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
const imgBaseUrl = "https://image.tmdb.org/t/p/original";

export default {
  name: 'App',
  data(){
    return{
      title: "",
      description: "",
      results: [],
      current: 0,
      imgUrl: "",
      resultsNum: 0
    }
  },
  mounted() {
    var genres = this.$route.query.genres;
    var year = this.$route.query.year;
    var rating = this.$route.query.rating;
    var runtime = this.$route.query.runtime;
    const url = 'https://api.themoviedb.org/3/discover/movie?api_key=' + process.env.VUE_APP_API_KEY + '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres='+genres+'&primary_release_year='+year+'&vote_average.gte='+rating+'&with_runtime.gte='+runtime

    console.log(url)
    axios.get(url)
        .then(response => {
            console.log(response.data)
            console.log(response.data.results);
            this.results = response.data.results;
            this.title = response.data.results[0].title;
            this.description = response.data.results[0].overview;
            this.imgUrl = imgBaseUrl + response.data.results[0].poster_path;
    })
  },
  methods:{
      otherSearch(){
          this.$router.push('/quiz')
      },
      nextMovie(){
          this.current++;
          if(this.current >= this.results.length){
              this.current = 0;
          }
          this.title = this.results[this.current].title;
          this.description = this.results[this.current].overview;
          this.imgUrl = imgBaseUrl + this.results[this.current].poster_path;
      }
  }
}
</script>

<style>
*{
    font-family: 'Poppins', sans-serif;
    margin: auto;
    letter-spacing: 2px;

}

.backgrop {
    position: relative;
    width: 100vw;
    height: 90vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
}
.overlay {
    position: relative;
    width: 100vw;
    height: 90vh;
    background-image: linear-gradient(
        180deg,
        rgba(255,107,107,0) 10%,
        rgba(255,107,107,0.5) 50%,
        #ff6b6b 80%
    );
    position: relative;
    width: 100%;
    padding-left: 30px;
    display: flex;
    flex-direction: column-reverse;
}
.infoContainer {
    width: 40%;
    float: left;
}
.title {
    color: white;
    font-size: 2.5em;
    font-weight: bold;
    text-align: left;
    margin-bottom: 2rem;
}
.description {
    color: white;
    font-size: 1.5em;
    text-align: left;
}
.button {
    background: white;
    padding: 20px 10px;
    border-radius: 5px;
    color: #ff6b6b !important;
}
</style>