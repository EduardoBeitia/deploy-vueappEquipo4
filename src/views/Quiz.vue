<template>
  <div class="container-app">
    <Header/>
    <div class="container-quiz">
      <div class="quiz-header">
        <h1>Búsqueda personalizada</h1>
      </div>
      <div class="quiz-main" v-for="(k, index) in questions.slice(a,b)" :key="index">
        <div class="box-question">
          <h2>Pregunta</h2>
          <p>{{k.question}}</p>
        </div>
        <div class="box-suggestions">
          <!---
          <ul>
            <li v-for="(l, index) in k.suggestions" :key="index" :class="selected ? change(l) : ''" @click="selectResponse(l)">{{l.suggestion}}</li>
          </ul>
          --> 
          <select id="sel" multiple="multiple">
            <option v-for="(l, index) in k.suggestions" :key="index" :class="selected ? change(l) : ''" @click="selectResponse(l, k)">{{l.suggestion}}</option>
          </select>    
        </div>
      </div>
      <div class="quiz-footer">
        <div class="box-button">
          <button id="buttonQ" :class="selected ? bchange() : ''" @click="nextQuestion()">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'

export default {
  name: 'App',
  data(){
    return{
      questions:[
        {
          question:'Que generos te gustan?',
          suggestions:[
            {suggestion:'Action', choice:false, ident:28},
            {suggestion:'Adventure', choice:false, ident:12},
            {suggestion:'Animation', choice:false, ident:16},
            {suggestion:'Comedy', choice:false, ident:35},
            {suggestion:'Crime', choice:false, ident:80},
            {suggestion:'Documentary', choice:false, ident:99},
            {suggestion:'Drama', choice:false, ident:18},
            {suggestion:'Family', choice:false, ident:10751},
            {suggestion:'Fantasy', choice:false, ident:14},
            {suggestion:'History', choice:false, ident:36},
            {suggestion:'Horror', choice:false, ident:27},
            {suggestion:'Music', choice:false, ident:10402},
            {suggestion:'Mystery', choice:false, ident:9648},
            {suggestion:'Romance', choice:false, ident:10749},
            {suggestion:'Science Fiction', choice:false, ident:878},
            {suggestion:'TV Movie', choice:false, ident:10770},
            {suggestion:'Thriller', choice:false, ident:53},
            {suggestion:'War', choice:false, ident:10752},
            {suggestion:'Western', choice:false, ident:37},
          ]
        },
        {
          question:'En que rango de años quieres que este la pelicula?',
          suggestions:[
            {suggestion:'50s', choice:false, ident:1950},
            {suggestion:'60s', choice:false, ident:1960},
            {suggestion:'70s', choice:false, ident:1970},
            {suggestion:'80s', choice:false, ident:1980},
            {suggestion:'90s', choice:false, ident:1990}, 
            {suggestion:'00s', choice:false, ident:2000},
            {suggestion:'10s', choice:false, ident:2010},
            {suggestion:'20s', choice:false, ident:2020}, 
          ]
        },
        {
          question:'Que ratings quieres que sea el minimo?',
          suggestions:[
            {suggestion:'1', choice:false, ident:1},
            {suggestion:'2', choice:false, ident:2},
            {suggestion:'3', choice:false, ident:3},
            {suggestion:'4', choice:false, ident:4},
            {suggestion:'5', choice:false, ident:5},
            {suggestion:'6', choice:false, ident:6},
            {suggestion:'7', choice:false, ident:7},
            {suggestion:'8', choice:false, ident:8},
            {suggestion:'9', choice:false, ident:9},
          ]
        },
        {
          question:'Cuántos minutos quieres que dure la película?',
          suggestions:[
            {suggestion:'< 60', choice:false, ident:59},
            {suggestion:'60 - 70', choice:false, ident:69},
            {suggestion:'70 - 80', choice:false, ident:79},
            {suggestion:'80 - 90', choice:false, ident:89},
            {suggestion:'90 - 100', choice:false, ident:99},
            {suggestion:'100 - 110', choice:false, ident:109},
            {suggestion:'110 - 120', choice:false, ident: 119},
            {suggestion:'> 120', choice:false, ident: 120},
          ]
        },

      ],
      x: 1,
      current:0,
      array:0,
      a:0,
      b:1,
      selected:false,
      apiArray:[[],[],[], []],
    }
  },
  components: {
    Header
  },
  methods:{
      selectResponse(status){
        this.selected = true;
        status.choice = true;
        this.apiArray[this.array][this.current] = status.ident;
        console.log(this.apiArray[this.array][this.current]);
        this.current++;
      },
      nextQuestion(){
        console.log(this.x);
        if(this.selected){
          this.a++;
          this.b++;
          this.selected = false;
          this.current = 0;
          this.array++;
          this.x++;
        }
        if(this.x == this.questions.length + 1){
          console.log(this.apiArray)
          var genres = ""
          var year = ""
          var rating = ""
          var runtime = ""
          if(this.apiArray[0].length > 0){
            genres = this.apiArray[0].join(',');
          } else {
            genres = this.apiArray[0][0];
          }
          if(this.apiArray[1].length > 0){
            year = this.apiArray[1].join(',');
          } else {
            year = this.apiArray[1][0];
          }
          if(this.apiArray[2].length > 0){
            rating = this.apiArray[2].join(',');
          } else {
            rating = this.apiArray[2][0];
          }
          if(this.apiArray[3].length > 0){
            runtime = this.apiArray[3].join(',');
          } else {
            runtime = this.apiArray[3][0];
          }
          
          
          this.$router.push(`/results?genres=${genres}&year=${year}&rating=${rating}&runtime=${runtime}`);
        }
      },
      change(status){
        if(status.choice){
          return 'yes'
        }
      },
      bchange(){
        if(this.selected){
          return 'yes'
        }
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

.container-app{
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;

}

.container-quiz{
    display: flex;
    width: 40%;
    height: 85%;
    position: absolute;
    top: 5%;
    bottom: 0%;
    margin: auto;
    flex-flow: column;
    text-align: center;
    border: 2px solid #e7eae0;
    border-radius: 10px;
    background-color: #F7FFF7;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19) 0 6px 6px rgba(0, 0, 0, 0.23);
}

.quiz-header{
    display: flex;
    width: 100%;
    height: 20%;
    border-bottom: 2px;
    justify-content: center;
    align-items: center;
    background-color: #e7eae0;
    border-radius: 8px 8px 0px 0px;
}

.quiz-main{
    display: flex;
    width: 100%;
    height: 70%;
    flex-flow: column;
    margin: auto;
}

.quiz-footer{
    display: flex;
    width: 100%;
    height: 10%;
    justify-content: center;
    border-top: 1px solid #e7eae0;
    background-color: #e7eae0;
    border-radius: 0px 0px 10px 10px;
}

.box-question{
    margin-top: 20px;
}

.box-suggestion{
    display: flex;
    width: 100%;
    justify-content: center;
    margin: auto;
}

ul{
    display: flex;
    width: 80%;
    margin: 0;
    padding: 0;
    flex-flow: column;
}

ul li{
    list-style: none;
    line-height: 2;
    border: 1px solid #cdd2d2;
    margin-bottom: 20px;
    border-radius: 15px;
    cursor: pointer;
}

li:hover{
    background-color: #e7eae0;

}

li.yes{
    border: 1px solid greenyellow;
    background-color: greenyellow;
    color: white;
    font-weight: 600;
}

select{
    display: flex;
    margin: 0;
    width: 300px;
    height: 300px;
    background-color: #F7FFF7;
    flex-flow: column;
    justify-content: center;
}

select option{
    display: flex;
    list-style: none;
    line-height: 2;
    border: 1px solid #cdd2d2;
    margin-top: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    text-align: center;
    font-size: 20px;
    background-color: #e7eae0;
    width: 100%;
}

option.yes{
    border: 1px solid #4ECDC4;
    background-color: #4ECDC4;
    color: white;
    font-weight: 600;
}

.box-button{
    display: flex;
    width: 100%;
}

.box-button #buttonQ{
    width: 150px;
    height: 35px;
    outline: none;
    border:0;
    color: white;
    font-size: 18px;
    cursor: pointer;
    border-radius: 15px;
    margin: auto;
    background-color: #FF6B6B;

}

#buttonQ.yes{
    width: 150px;
    height: 35px;
    outline: none;
    border:0;
    color: white;
    font-size: 18px;
    cursor: pointer;
    border-radius: 15px;
    margin: auto;
    background-color: #4ECDC4;
}

p{
    color: black;
}

h2{
    color: black;
}
</style>