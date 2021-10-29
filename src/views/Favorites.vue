
<template>
  <div class="home">
      <!-- Header -->
      <Header/>
      
      <!-- list of movies -->
      <div class="itemsContainer">
          <FavMovie @remove-movie="removeMovie" v-for="item in items" :key="item.id" :title="item.name" :id="item.id" :imgUrl="item.poster_path"/>
      </div>

      
  </div>
</template>

<script>
/* Components */
import Header from '../components/Header'
import FavMovie from '../components/FavMovie'

import axios from 'axios';

import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore'
import { db, auth } from '../database/firebase';
//import { deleteDoc, doc } from 'firebase/firestore'

const baseUrl  = 'https://api.themoviedb.org/3/movie/'

export default{
    name: "Favorites",
    data() {
        return {
            items: [],
            favorites: [],
            currentUser: null,
        };
    },
    mounted() {
        this.getUser();
    },
    components: {
        Header,
        FavMovie
    },
    methods: {
        getUser() {
            auth.onAuthStateChanged(user => {
                this.currentUser = user;
                if(user !== null) {
                this.getFavorites();
                }
            });
        },
        async getFavorites() {
            //console.log("currentUser: ", this.currentUser);
            if(this.currentUser !== null){
                const uid = this.currentUser.uid
                const query = await getDocs(collection(db, `users/${uid}/favorites`));
                query.forEach((doc) => {
                    if (!this.favorites.includes(doc.data().id)){
                        this.favorites.push(doc.data().id);
                    }
                })
                console.log(this.favorites);
                this.getMovies();
            } else {
                console.log("no user");
            }
        },
        getMovies() {
            this.favorites.forEach((movie) => {
                const url = baseUrl + movie + '?api_key=' + process.env.VUE_APP_API_KEY;
                console.log(url);
                axios.get(url)
                .then(response => {
                    
                    //this.items = response.data.results;
                    console.log(response.data);
                    this.items.push(response.data);
                    console.log(this.items);
                }).catch(error => {console.log(error)});
            })
        },
        async removeMovie(id) {
            console.log(id);
            if(this.currentUser !== null){
                const uid = this.currentUser.uid
                await deleteDoc(doc(db, `users/${uid}/favorites/${String(id)}`), {id: id});
                this.items = this.items.filter(item => item.id !== id);
            } else {
                console.log("no user");
            }
        }
    }
  
};
</script>

<style>
.itemsContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 0 auto;
    max-width: 1200px;
    padding: 50px;
}
</style>

