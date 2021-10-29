<template>
  <div class="rowContainer">
    <h2 class="rowTitle">{{title}}</h2>
    <div class="rowInnerContainer">
        <RowItem v-for="item in items" :key="item.id" :title="item.name" :id="item.id" :imgUrl="item.poster_path" :isFav="item.isFav"/>
    </div>
    
  </div>
</template>

<script>
//import firebase from 'firebase/compat/app';
import RowItem from './RowItem.vue';

import axios from 'axios';

const baseUrl = "https://api.themoviedb.org/3";

//import { getAuth } from "firebase/auth";
import { getDocs, collection } from 'firebase/firestore'
import { db, auth } from '../database/firebase';

//const db = getFirestore(firebaseApp);

export default {
  name: 'Row',
  data() {
    return {
      items: [],
      currentUser: null,
    }
  },
  props: {
    title: String,
    fetchUrl: String,
  },
  mounted() {
    this.getUser();
  },
  components: {
    RowItem
  },
  methods: {
    getUser() {
      auth.onAuthStateChanged(user => {
        this.currentUser = user;
        if(user !== null) {
          this.fetchData();
        }
      });
    },
    async fetchData() {
      
      //console.log("currentUser: ", this.currentUser);
      if(this.currentUser !== null){
        var favorites = []
        const uid = this.currentUser.uid
        const query = await getDocs(collection(db, `users/${uid}/favorites`));
        query.forEach((doc) => {
          if (!favorites.includes(doc.data().id)){
              favorites.push(doc.data().id);
          }
        })
        const url = baseUrl + this.fetchUrl;
        console.log(url);
        axios.get(url)
          .then(response => {
              
              this.items = response.data.results;
              console.log(response.data.results);
              this.items.forEach((item) => {
                item.isFav = favorites.includes(item.id)
              })
              console.log(this.items);
          }).catch(error => {console.log(error)});
      } else {
        console.log("no user");
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.rowContainer {
    text-align: left;
    padding: 20px;
}   
.rowInnerContainer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow-x: scroll;
  padding: 20px 0px;
  position: relative;
  top: -10px;
}
.rowInnerContainer::-webkit-scrollbar {
    display: none;
} 
.rowTitle {
  font-size: 1.5em;
  font-weight: bold;
  color: white;
}
</style>
