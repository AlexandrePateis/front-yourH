<template>
  <div class="">
    <h1 class="title">Cadastro de novo hospede</h1>
    <form class="row g-3 needs-validation" novalidate>
      <div class="col-md-4">
        <label for="validationCustom01" class="form-label">Nome completo</label>
        <input
          type="text"
          class="form-control"
          id="validationCustom01"
          required
        />
        <div class="valid-feedback">
          Looks good!
        </div>
      </div>
      <div class="col-md-4">
        <label for="validationCustom02" class="form-label">CPF</label>
        <input
          type="text"
          class="form-control"
          id="validationCustom02"
          required
        />
        <div class="valid-feedback">
          Looks good!
        </div>
      </div>
      <div class="col-md-4">
        <label for="validationCustomUsername" class="form-label">
          Email
        </label>
        <div class="input-group has-validation">
          <input
            type="email"
            class="form-control"
            id="validationCustomUsername"
            aria-describedby="inputGroupPrepend"
            required
          />
          <div class="invalid-feedback">
            Please choose a username.
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <label for="validationCustom03" class="form-label">Data Nascimento</label>
        <input
          type="date"
          class="form-control"
          id="validationCustom03"
          required
        />
        <div class="invalid-feedback">
          Please provide a valid city.
        </div>
      </div>
      <div class="col-md-3">
        <label for="validationCustom04" class="form-label">State</label>
        <select class="form-select" id="validationCustom04" required>
          <option selected disabled value="">Escolha...</option>
          <option v-for="state in states" :key="state.id">{{state.nome}}</option>
        </select>
        <div class="invalid-feedback">
          Please select a valid state.
        </div>
      </div>
      <div class="col-md-3">
        <label for="validationCustom05" class="form-label">Cidade</label>
        <input
          type="text"
          class="form-control"
          id="validationCustom05"
          required
        />
      </div>
      
      <div class="col-12">
        <button class="btn btn-primary" type="submit">Criar Hospede</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
    
  name: 'CreateClient',
  data() {
    return {
        states:null
    }
  },
  mounted()
  {
    axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then((response =>{
        this.states = response.data;
        console.log(this.states)
    }))
  }
}
</script>

<style>
.needs-validation{
    width: 65% !important;
    margin: 0 auto;
}
.title{
    text-align: center;
    font-size: 1.7em;
}
</style>