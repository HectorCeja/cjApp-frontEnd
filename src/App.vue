<template>
    <div id="app" class="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="" id="logoFontTitle"> 
              <img src="./assets/wolf.png" width="40" height="40" class="d-inline-block align-top" alt="">
              WikiThrones
            </a>
            <router-link tag="a" class="black nav-item nav-link active font-white" to="/">
            Personajes
            </router-link>
            <router-link tag="a" class="nav-item nav-link active font-white" to="/add">
            Agregar
            </router-link>
            <router-link tag="a" class="nav-item nav-link active font-white" to="/search">
            Buscar
            </router-link>
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

#logoFontTitle{
  font-size: 25px;
}

.font-white{
  color: white;
}
 
.btn-primary {
  margin-right: 5px;
}
 
.container-fluid {
  text-align: center;
}
</style>