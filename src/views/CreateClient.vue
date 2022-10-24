<template>
  <div class="">
    <h1 class="title">Cadastro de novo hospede</h1>
    <MessageConfirm :msg="msg" v-show="msg" />
    <form class="row g-3 needs-validation" novalidate>
      <div class="col-md-4">
        <label for="validationCustom01" class="form-label">Nome</label>
        <input
          v-model="formDate.FirstName"
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
        <label for="validationCustom02" class="form-label">Sobrenome</label>
        <input
          v-model="formDate.LastName"
          type="text"
          class="form-control"
          id="validationCustom01"
          required
        />
      </div>
      <div class="col-md-4">
        <label for="validationCustom02" class="form-label">
          Número de telefone
        </label>
        <input
          v-model="formDate.PhoneNumber"
          type="text"
          class="form-control"
          id="validationCustom02"
          required
        />
      </div>
      <div class="col-md-4">
        <label for="validationCustomUsername" class="form-label">
          Email
        </label>
        <div class="input-group has-validation">
          <input
            v-model="formDate.Email"
            type="email"
            class="form-control"
            id="validationCustomUsername"
            aria-describedby="inputGroupPrepend"
            required
          />
        </div>
      </div>
      <div class="col-md-4">
        <label for="validationCustomUsername" class="form-label">
          CPF
        </label>
        <div class="input-group has-validation">
          <input
            v-model="formDate.Cpf"
            type="email"
            class="form-control"
            id="validationCustomUsername"
            aria-describedby="inputGroupPrepend"
            required
          />
        </div>
      </div>
      <div class="col-md-4">
        <label for="validationCustom03" class="form-label">
          Data Nascimento
        </label>
        <input
          v-model="formDate.BirthDate"
          type="date"
          class="form-control"
          id="validationCustom03"
          required
        />
      </div>
      <div class="col-md-4">
        <label for="validationCustomUsername" class="form-label">
          Estado
        </label>
        <div class="input-group has-validation">
          <input
            v-model="formDate.State"
            type="text"
            class="form-control"
            id="validationCustomUsername"
            aria-describedby="inputGroupPrepend"
            required
          />
        </div>
      </div>
      <div class="col-md-4">
        <label for="validationCustom05" class="form-label">Cidade</label>
        <input
          v-model="formDate.City"
          type="text"
          class="form-control"
          id="validationCustom05"
          required
        />
      </div>
      <div class="col-12">
        <button class="btn btn-primary" type="submit" @click="newClient()">
          Criar Hospede
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import MessageConfirm from '../components/MessageConfirm.vue'

export default {
  name: 'CreateClient',
  data() {
    return {
      statesGet: null,
      status: null,
      msg:null,
      formDate: {
        FirstName: null,
        LastName: null,
        State: null,
        City: null,
        Email: null,
        PhoneNumber: null,
        Cpf: null,
        BirthDate: null,
      },
    }
  },
  mounted() {
    axios
      .get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .then((response) => {
        this.statesGet = response.data
      })
  },
  methods: {
    newClient() {
      axios
        .post('https://localhost:7284/client', this.formDate, {
          headers: {
            ContentType: 'application/json',
          },
        })
        .then((response) => {
          this.status = response.status
          if (this.status == 200) {
            this.msg = `Cadastro realizado com sucesso.`
            setTimeout(() => (this.msg = null), 2000)
          }
          setTimeout(
            () => (
              (this.formDate.FirstName = null),
              (this.formDate.LastName = null),
              (this.formDate.Email = null),
              (this.formDate.City = null),
              (this.formDate.State = null),
              (this.formDate.PhoneNumber = null),
              (this.formDate.Cpf = null),
              (this.formDate.BirthDate = null)
            ),
            2000,
          )
        })
    },
  },
  components: {
    MessageConfirm,
  }
}
</script>

<style>
.needs-validation {
  width: 65% !important;
  margin: 0 auto;
}
.title {
  text-align: center;
  font-size: 1.7em;
}
</style>
