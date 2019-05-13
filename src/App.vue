<template>
    <div id="app" class="container-fluid">
        <div class="site-info">
            <h1>WikiThrones</h1>
        </div>
        <nav>
            <router-link class="btn btn-primary" to="/">Personajes</router-link>
            <router-link class="btn btn-primary" to="/add">Agregar</router-link>
            <router-link class="btn btn-primary" to="/search">Buscar</router-link>
        </nav>
        <br/>
        <router-view/>
    </div>
</template>
 
<script>
export default {
  name: "app"
};
</script>
 
<style>
.site-info {
  color: blue;
  margin-bottom: 20px;
}
 
.btn-primary {
  margin-right: 5px;
}
 
.container-fluid {
  text-align: center;
}
</style>