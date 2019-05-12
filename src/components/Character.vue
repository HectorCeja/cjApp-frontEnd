<template>
  <div v-if="this.character">
    <h4>Character</h4>
    <div>
      <label>Name: </label> {{this.character.name}}
    </div>
    <div>
      <label>Age: </label> {{this.character.age}}
    </div>
    <div>
      <label>Description: </label> {{this.character.description}}
    </div>
    <div>
      <label>ImageUrl: </label> {{this.character.imageUrl}}
    </div>
    <div>
      <label>Status: </label> {{this.character.status}}
    </div>
  
    <span v-if="this.character.status === 'DEAD'"
      v-on:click="updateActive('ALIVE')"
      class="button is-small btn-primary">Dead</span>
    <span v-else
      v-on:click="updateActive('DEAD')"
      class="button is-small btn-primary">Alive</span>
  
    <span class="button is-small btn-danger" v-on:click="deleteCharacter()">Delete</span>
  </div>
  <div v-else>
    <br/>
    <p>Please click on a Character...</p>
  </div>
</template>
 
<script>
import http from "../http-common";
 
export default {
  name: "character",
  props: ["character"],
  methods: {
   
    updateActive(estatus) {
      var data = {
        id: this.character.id,
        name: this.character.name,
        age: this.character.age,
        description: this.character.description,
        status: estatus
      };
 
      http
        .put("/personajes/update/" + this.character.id, data)
        .then(response => {
          this.character.status = response.data.status;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    deleteCharacter() {
      http
        .delete("/personajes/delete/" + this.character.id)
        .then(response => {
          console.log(response.data);
          this.$emit("refreshData");
          this.$router.push('/');
        })
        .catch(e => {
          console.log(e);
        });
    }
   
  }
};
</script>