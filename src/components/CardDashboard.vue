<template>
  <body>
    <div class="header">
      <h1>Your Dashboard</h1>
    </div>
    <div class="row1-container">
      <div class="box box-down cyan">
        <h2>Hospedes cadastrados</h2>
        <p>Hospedes cadastrados: {{length}}<br>Hospedes em ocupação: </p>
        <img
          src="https://assets.codepen.io/2301174/icon-supervisor.svg"
          alt=""
        />
        <router-link to="/client" class="link"  href="#">
          Acessar controle
        </router-link>
      </div>

      <div class="box red">
        <h2>Quartos</h2>
        <p>
          Total cadastrados: 15 <br>
          Total ocupados: 8 <br>
          Total livres: 4
        </p>
        <img
          src="https://assets.codepen.io/2301174/icon-team-builder.svg"
          alt=""
        />
        <router-link to="/rooms" class="link"  href="#">
          Acessar controle
        </router-link>
      </div>

      <div class="box box-down blue">
        <h2>Reservas</h2>
        <p>{{date}} - {{time}}</p>
        <p>Uses data from past projects to provide better delivery estimates</p>
        <img
          src="https://assets.codepen.io/2301174/icon-calculator.svg"
          alt=""
        />
      </div>
    </div>
    <div class="row2-container">
      <div class="box orange">
        <h2>Relatórios</h2>
        <p>Veja os relatórios financeiros do seu hotel</p>
        <img src="https://assets.codepen.io/2301174/icon-karma.svg" alt="" />
        <router-link to="/rooms" class="link"  href="#">
          Acessar relatórios
        </router-link>
      </div>
    </div>
    <footer>
    <p class="attribution">
      Todos os direitos <a href="" target="_blank">Alexandre Pateis</a>.
      Feito por <a href="#">YourHotel.net</a>
    </p>
  </footer>
  </body>
</template>

<script>
import axios from 'axios'
export default {
  name: 'CardDashboard',
  data: () => ({
    date: null,
    time: null,
    year: null,
    timestamp: null,
    fulldatetime: null,
    day: null,
    info:null,
    length:null
  }),
  methods: {
    printDate() {
      return new Date().toLocaleDateString()
    },
    printTime() {
      return new Date().toLocaleTimeString()
    },
  },
  mounted() {
    this.date = this.printDate()
    this.time = this.printTime()
  
  axios.get('https://localhost:7284/client', {
        headers: {
          Authorization: 'Access-Control-Allow-Origin',
        },
      })
      .then((response) => {
        this.info = response.data
        this.length = this.info.length;
      })
}
}
</script>
<style>
:root {
  --red: hsl(0, 78%, 62%);
  --cyan: hsl(180, 62%, 55%);
  --orange: hsl(34, 97%, 64%);
  --blue: hsl(212, 86%, 64%);
  --varyDarkBlue: hsl(234, 12%, 34%);
  --grayishBlue: hsl(229, 6%, 66%);
  --veryLightGray: hsl(0, 0%, 98%);
  --weight1: 200;
  --weight2: 600;
  --weight3: 600;
}

body {
  font-size: 15px;
  font-family: 'Poppins', sans-serif;
  background-color: var(--veryLightGray);
}
.header h1{
  font-size: 2em;
}
.attribution {
  font-size: 11px;
  text-align: center;
}
.attribution a {
  color: hsl(228, 45%, 44%);
}
.link{
  text-decoration: none;
  color:rgb(121, 117, 117);
  border-bottom: solid 1px rgb(122, 121, 121);
  transition: linear 0.2s;
}
.link:hover{
  color: rgb(0, 0, 0)
}
h1:first-of-type {
  font-weight: var(--weight1);
  color: var(--varyDarkBlue);
}

h1:last-of-type {
  color: var(--varyDarkBlue);
}

@media (max-width: 400px) {
  h1 {
    font-size: 1.5rem;
  }
}

.header {
  text-align: center;
  line-height: 0.8;
  margin-bottom: 20px;
  margin-top: 0;
}

.header p {
  margin: 0 auto;
  line-height: 2;
  color: var(--grayishBlue);
}

.box p {
  color: var(--grayishBlue);
}

.box {
  border-radius: 5px;
  box-shadow: 0px 30px 40px -20px var(--grayishBlue);
  padding: 35px;
  width: 25em !important;
  height: 18em !important;
  margin: 20px;
}

img {
  float: right;
}

@media (max-width: 450px) {
  .box {
    height: 200px;
  }
}

@media (max-width: 950px) and (min-width: 450px) {
  .box {
    text-align: center;
    height: 180px;
  }
}

.cyan {
  border-top: 3px solid var(--cyan);
}
.red {
  border-top: 3px solid var(--red);
}
.blue {
  border-top: 3px solid var(--blue);
}
.orange {
  border-top: 3px solid var(--orange);
}

h2 {
  color: var(--varyDarkBlue);
  font-weight: var(--weight3);
}

@media (min-width: 950px) {
  .row1-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .row2-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .box-down {
    position: relative;
    top: 150px;
  }
  .box {
    width: 20%;
  }
  .header p {
    width: 30%;
  }
}
</style>
