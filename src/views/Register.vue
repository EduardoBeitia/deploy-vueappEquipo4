<template>
  <div class="Resgister">
      <h1>Resgister</h1>
  </div>

  <form class="box">
      <label class="label">Email</label><br>
      <input type="email" placeholder="juanito@itesm.mx" class="input" v-model="email"><br>
      <label class="label">Password</label><br>
      <input type="password" placeholder="Password" class="input" v-model="password">
      <button @click="register" class="button" type="button">resgister</button>
  </form>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default{
    name: "Register",
    data() {
        return {
            email: "",
            password: ""
        };
    },
    methods: {
        register: function() {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, this.email, this.password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                // ...
            })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode,errorMessage);
            });
        }
    }
};
</script>

<style>
.box {

    border-radius: 15px 50px 30px;
    background: #f7fff7;
    padding: 20px;
    width: 500px;
    height: 350px;
    margin: auto;
    margin-top: 10%;
}

.button {
    background-color: #ff6b6b; 
    border: none;
    color: #f7fff7;
    padding: 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 12px;
}

.label {
    color: black;
    text-align: left;
    width: 100%;
    padding: 12px 20px;
    margin: 20px 0;
    box-sizing: border-box;
}

.input {
    color: black;
    width: 100%;
    padding: 12px 20px;
    margin: 20px 0;
    box-sizing: border-box;
    border: 2px solid #ff6b6b;
    border-radius: 12px;
}

#link {
    color: black;
}

#register{
    color: #ff6b6b;
}
</style>

