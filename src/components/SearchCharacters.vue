<template>
  <div class="searchform">
    <h4>Find by Age</h4>
    <div class="form-group">
      <input type="number" class="form-control" id="age" required v-model="age" name="age">
    </div>
 
    <div class="btn-group">
      <button v-on:click="searchCharacters" class="btn btn-success">Search</button>
    </div>
 
    <ul class="search-result">
      <li v-for="(character, index) in characters" :key="index">
        <h6>{{character.name}} ({{character.age}})</h6>
      </li>
    </ul>
  </div>
</template>
 
<script>
import http from "../http-common";
 
export default {
  name: "search-character",
  data() {
    return {
      age: 0,
      characters: []
    };
  },
  methods: {
    
    searchCharacters() {
      http
        .get("/personajes/getByAge?age=" + this.age)
        .then(response => {
          this.characters = response.data; // JSON are parsed automatically.
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
    
  }
};
</script>
 
<style>
.searchform {
  max-width: 300px;
  margin: auto;
}
.search-result {
  margin-top: 20px;
  text-align: left;
}
</style>