<template>
  <div class="submitform">
    <div v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="(error,index) in errors" :key="index">{{ error }}</li>
    </ul>
    </div>
    <div v-if="!submitted">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" required v-model="character.name" name="name">
        </div>
    
        <div class="form-group">
          <label for="age">Age</label>
          <input type="number" class="form-control" id="age" required v-model="character.age" name="age">
        </div>

        <div class="form-group">
          <label for="name">Description</label>
          <input type="text" class="form-control" id="description" required v-model="character.description" name="description">
        </div>

        <div class="form-group">
          <label for="name">imageUrl</label>
          <input type="text" class="form-control" id="imageUrl" required v-model="character.imageUrl" name="imageUrl">
        </div>

        <div class="form-group">
          <label for="name">Status</label>
          <input type="text" class="form-control" id="status" required v-model="character.status" name="status">
        </div>
    
        <button v-on:click="saveCharacter" class="btn btn-success">Submit</button>
    </div>
    
    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" v-on:click="newCharacter">Add</button>
    </div>
  </div>
</template>

<script>
import http from "../http-common";

export default {
  name: "add-character",
  data() {
    return {
      character: {
        id: 0,
        name: "",
        age: 0,
        description: "",
        imageUrl: "",
        status: ""
      },
      submitted: false
    };
  },
  methods: {
    saveCharacter() {
      var data = {
        name: this.character.name,
        age: this.character.age,
        description: this.character.description,
        imageUrl: this.character.imageUrl,
        status: this.character.status
      };

      http
        .post("/characters/save", data)
        .then(response => {
          this.character.id = response.data.id;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });

      this.submitted = true;
    },
    newCharacter() {
      this.submitted = false;
      this.character = {};
    },
    errors(){
      this.errors = [];
      if (!this.character.name) {
          this.errors.push('Name required.');
      }
    }
  }
};
</script>

<style>
.submitform {
  max-width: 300px;
  margin: auto;
}
</style>
<template>
  <div class="submitform">
    <div v-if="!submitted">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" required v-model="character.name" name="name">
        </div>
    
        <div class="form-group">
          <label for="age">Age</label>
          <input type="number" class="form-control" id="age" required v-model="character.age" name="age">
        </div>

        <div class="form-group">
          <label for="name">Description</label>
          <input type="text" class="form-control" id="description" required v-model="character.description" name="description">
        </div>

        <div class="form-group">
          <label for="name">imageUrl</label>
          <input type="text" class="form-control" id="imageUrl" required v-model="character.imageUrl" name="imageUrl">
        </div>

        <div class="form-group">
          <label for="name">Status</label>
          <input type="text" class="form-control" id="status" required v-model="character.status" name="status">
        </div>
    
        <button v-on:click="saveCharacter" class="btn btn-success">Submit</button>
    </div>
    
    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" v-on:click="newCharacter">Add</button>
    </div>
  </div>
</template>
 
<script>
import http from "../http-common";
 
export default {
  name: "add-character",
  data() {
    return {
      character: {
        id: 0,
        name: "",
        age: 0,
        description: "",
        imageUrl: "",
        status: ""
      },
      submitted: false
    };
  },
  methods: {
    saveCharacter() {
      var data = {
        name: this.character.name,
        age: this.character.age,
        description: this.character.description,
        imageUrl: this.character.imageUrl,
        status: this.character.status
      };
 
      http
        .post("/characters/save", data)
        .then(response => {
          this.character.id = response.data.id;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
 
      this.submitted = true;
    },
    newCharacter() {
      this.submitted = false;
      this.character = {};
    }
  }
};
</script>
 
<style>
.submitform {
  max-width: 300px;
  margin: auto;
}
</style>