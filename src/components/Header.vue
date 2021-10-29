<template>
  <div class="header">
    <div class="logoContainer">
      <router-link to="/">
        <img class="logo" src="../assets/logo.png"/>
      </router-link>
    </div>
    <div class="itemsContainer">
        <router-link id="favorites" to="/favorites">
          <i class="fas fa-star icon"></i>
        </router-link>
        <router-link id="search" to="/quiz">
          <i class="fas fa-search icon"></i>
        </router-link>
        <button class="buttonL" @click="Logout">Logout</button>
    </div>
  </div>
</template>

<script>
//import firebase from 'firebase/compat/app';
import { getAuth, signOut } from "firebase/auth";

export default {
  name: 'Header',
  props: {
    
  },
  methods: {
    Logout: function() {
        const auth = getAuth();
        signOut(auth).then(() => {
          // Sign-out successful.
        }).catch((error) => {
          // An error happened.
          console.log(error);
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: #fff;
  padding: 0 20px;
  flex: 1;
}
.logoContainer {
  flex: 1;
}
.logo{
    width: 150px;
    float: left;
}
.itemsContainer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
}

.buttonL {
    background-color: #ff6b6b; 
    border: none;
    color: #f7fff7;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 18px;
}
.icon {
    color: #ff6b6b;
    font-size: 2rem;
    cursor: pointer;
    transition: transform 450ms;
    &:hover{
        transform: scale(1.1);
    }
    margin-right: 10px;
}
</style>
