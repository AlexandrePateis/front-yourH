<template>
  <div>
    <div class="actions-req">
      <router-link to="/new_client" class="btn btn-primary">Novo hospede</router-link >
    </div>
    <table class="table">
      <thead class="table-light">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Cpf</th>
          <th scope="col">Telefone</th>
          <th scope="col">Data nascimento</th>
          <th scope="col" class="col-1">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in info" :key="item.id">
          <th scope="row">{{ item.id }}</th>
          <td>{{ item.name }}</td>
          <td>{{ item.email }}</td>
          <td>{{item.cpf}}</td>
          <td>{{item.phoneNumber}}</td>
          <td>{{item.birthDate}}</td>
          <td>
            <div class="btn-options">
              <button class="btn btn-primary" @click="EditAction(item.id)">
                Edit
              </button>
              <!-- Button trigger modal -->
              <button
                type="button"
                class="myButton btn btn-danger"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Delete
              </button>
              <i class="fa-solid fa-eye"></i>

              <!-- Modal -->
              <div
                class="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="staticBackdropLabel">
                        Tem certeza que deseja excluir ?
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      Essa ação não poderá ser desfeita!
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        class="btn btn-danger"
                        @click="DeletUser(item.id)"
                      >
                        Excluir
                      </button>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'ViewClient',
  data(){
    return{
      info: null,
    };
  },
  mounted(){
    axios.get("https://localhost:7284/client",{
      headers:{
        Authorization: 'Access-Control-Allow-Origin',
      }
    })
    .then((response) => {
      this.info = response.data;
      console.log(this.info);
    })
    
  },
  components: {},
}
</script>

<style>
.table{
  width: 70%;
  margin: 0 auto;
  margin-top: 3em;
}
.actions-req{
  width: 70%;
  margin: 0 auto;
  margin-top: 1em;
}
.btn-options{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap:4px;
}
.btn{
  font-size: 10px !important;
}
</style>
