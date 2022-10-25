<template>
  <div class="">
    <h1 class="title">Atualização cadastral</h1>
    <MessageConfirm :msg="msg" v-show="msg" />
    <form class="row g-3 needs-validation" novalidate>
      <div class="col-md-4">
        <label for="validationCustom01" class="form-label">Nome</label>
        <input
          v-model="formDate.firstName"
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
          v-model="formDate.lastName"
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
          v-model="formDate.phoneNumber"
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
            v-model="formDate.email"
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
            v-model="formDate.cpf"
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
          v-model="formDate.birthDate"
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
            v-model="formDate.state"
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
          v-model="formDate.city"
          type="text"
          class="form-control"
          id="validationCustom05"
          required
        />
      </div>
      <div class="col-12">
        <button class="btn btn-primary" type="submit" @click="updateUser()">
          Atualizar cadastro
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
      msg: null,
      formDate: {
        firstName: null,
        lastName: null,
        state: null,
        city: null,
        email: null,
        phoneNumber: null,
        cpf: null,
        birthDate: null,
      },
    }
  },
  mounted() {
    axios
      .get(`https://localhost:7284/client/${this.$route.params.id}`, {
        headers: {
          Authorization: 'Access-Control-Allow-Origin',
        },
      })
      .then((response) => {
        this.formDate = response.data
        console.log(this.formDate)
      })
  },
  methods: {
    updateUser(){
        axios
      .put(`https://localhost:7284/client/${this.$route.params.id}`,
      this.formDate,
      {
        headers: {
          Authorization: 'Access-Control-Allow-Origin',
        },
      })
      .then((response) => {
          console.log(response.status);
          this.status = response.status;
          if (this.status == 200) {
            this.msg = `Cadastro atualizado com sucesso.`;
            setTimeout(() => (this.msg = null), 2000);
          }
        });
    }
  },
  components: {
    MessageConfirm,
  },
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
