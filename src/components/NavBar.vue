<template>
  <div class="div">
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <nav class="navbar bg-light">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                <i class="fa-solid fa-hotel"></i>
                
              </a>
            </div>
          </nav>
          <router-link to="/" class="navbar-brand" href="#">Home</router-link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link to="/rooms" class="nav-link active" aria-current="page" href="#">
                  Quartos
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/client" class="nav-link">
                  Clientes
                </router-link>
              </li>
             
              <li class="nav-item">
                <a class="nav-link">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  </div>
</template>

<script>
export default {
  name: 'MenuHome',
  components: {},
}
</script>

<style>
.d-inline-block{
  margin-right: 1em !important;
}
.fa-hotel{
  font-size: 2em;
}
</style>
