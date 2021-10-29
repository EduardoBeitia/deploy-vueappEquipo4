<template>
  <div class="itemContainer" v-bind:style="{backgroundImage: 'url(' + getImgUrl() + ')'}">
      <!-- overlay -->
    <div class="overlay">
      <!-- <v-icon name="flag"></v-icon> -->
      <div class="iconContainer">
        <i v-if="isFavorite" v-on:click="deleteDoc()" class="fas fa-minus-circle icon"></i>
        <i v-else v-on:click="addToFav()" class="fas fa-plus-circle icon"></i>
      </div>
      
    </div>
  </div>
</template>

<script>
const imgBaseUrl = "https://image.tmdb.org/t/p/original";
import { getAuth } from "firebase/auth";
import { deleteDoc, doc, setDoc } from 'firebase/firestore'
import { db } from '../database/firebase';

export default {
  name: 'RowItem',
  data() {
    return {
      isFavorite: false,
    }
  },
  props: {
    title: String,
    id: Number,
    imgUrl: String,
    isFav: Boolean,
  },
  mounted() {
    this.isFavorite = this.isFav;
  },
  components: {
    ///'v-icon': Icon
  },
  methods: {
    getImgUrl() {
      return imgBaseUrl + this.imgUrl;
    },
    //add id to firebase collection
    async addToFav() {
      const auth = getAuth();
      const uid = auth.currentUser.uid
      await setDoc(doc(db, `users/${uid}/favorites/${String(this.id)}`), {id: this.id});
      this.isFavorite = true;
    },
    async removeFromFav() {
      const auth = getAuth();
      const uid = auth.currentUser.uid
      await deleteDoc(doc(db, `users/${uid}/favorites/${String(this.id)}`), {id: this.id});
      this.isFavorite = false;
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.itemContainer{
    width: 300px;
    min-width: 300px;
    height: 450px;
    margin-right: 10px;
    transition: transform 450ms;
    border-radius: 5px;
    cursor: pointer;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin-bottom: 50px;
}
.overlay {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-image: linear-gradient(
        180deg,
        rgba(0,0,0,0) 10%,
        rgba(0,0,0,0.25) 50%,
        #111 100%
    );
}
.iconContainer{
    position: absolute;
    top: 89%;
    left: 84%;
}
.icon {
    color: #fff;
    font-size: 2rem;
    cursor: pointer;
    transition: transform 450ms;
    &:hover{
        transform: scale(1.1);
    }
}
</style>
