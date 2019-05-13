<template>
    <div class="list row">
        <div class="col-md-6">
            <h4>Characters List</h4>
            <ul>
                <li v-for="(character, index) in characters" :key="index">
                    <router-link :to="{
                            name: 'character-details',
                            params: { 
                              name: character.name, 
                              id: character.id,
                              status: character.status,
                              age: character.age,
                              description: character.description,
                              imageUrl: character.imageUrl
                              }
                        }">
                            {{character.name}}
                            {{character.age}}
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="col-md-6">
            <router-view @refreshData="refreshList"></router-view>
        </div>
    </div>
</template>
 
<script>
import http from "../http-common";
 
export default {
  name: "characters-list",
  data() {
    return {
      characters: []
    };
  },
  methods: {
    retrieveCharacters() {
      http
        .get("personajes/get-all")
        .then(response => {
          this.characters = response.data; // JSON are parsed automatically.
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveCharacters();
    }
  },
  mounted() {
    this.retrieveCharacters();
  }
};
</script>
 
<style>
.list {
  text-align: left;
  max-width: 450px;
  margin: auto;
}
</style>
