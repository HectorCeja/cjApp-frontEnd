<template>
  <div v-if="this.$route.params.id > 0">
    <h4>Character</h4>
    <div>
      <label>Name: </label> {{this.$route.params.name}}
    </div>
    <div>
      <label>Age: </label> {{this.$route.params.age}}
    </div>
    <div>
      <label>Status: </label> {{this.$route.params.status}}
    </div>
    <div>
      <label>Description: </label> {{this.$route.params.description}}
    </div>

    <span v-if="this.$route.params.status === 'DEAD'"
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
   /* eslint-disable no-console */
    updateActive(estatus) {
      var data = {
        id: this.$route.params.id,
        name: this.$route.params.name,
        age: this.$route.params.age,
        description: this.$route.params.description,
        imageUrl: this.$route.params.imageUrl,
        status: estatus
      };
 
      http
        .put("/characters/update/" + this.$route.params.id, data)
        .then(response => {
          this.$route.params.status = response.data.status;
          this.$emit("refreshData");
          this.$router.push('/');
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    deleteCharacter() {
      http
        .delete("/characters/delete/" + this.$route.params.id)
        .then(response => {
          console.log(response.data);
          this.$emit("refreshData");
          this.$router.push('/');
        })
        .catch(e => {
          console.log(e);
        });
    }
   /* eslint-disable no-console */
  }
};
</script>