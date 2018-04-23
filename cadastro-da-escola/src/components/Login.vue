<template>
  <div class="container">
    <div class="login">
      <form>
        <div class="field has-addons">
          <p class="control has-icons-left">
            <input class="input" type="text" placeholder="E-mail" v-model="email">
            <span class="icon is-small is-left">
              <i class="fas fa-envelope fa-xs"></i>
            </span>
          </p>
          <p class="control">
            <a class="button is-static is-primary">
              @fortini.com.br
            </a>
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input class="input" id="password" type="password" placeholder="Senha" v-model="password">
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control">
            <button class="button is-primary" @click="login()">
              Acessar
            </button>
          </p>
        </div>
      </form>
    </div>

    <div class="modal" :class="{ 'is-active' : errorMessage }">
      <div class="modal-background" @click="onCloseModal()"></div>
      <div class="modal-content is-primary">
        <div class="notification" :class="{ 'is-warning' : errorMessage }">
          {{errorMessage}}
        </div>
      </div>
      <button type="button" class="modal-close is-large" aria-label="close" @click="onCloseModal()"></button>
    </div>
  </div>
</template>

<script>
import { firebaseApp } from '../firebase'

export default {
  name: 'LoginForm',
  data () {
    return {
      email: null,
      password: null,
      errorMessage: null
    }
  },
  methods: {
    onCloseModal: function () {
      this.errorMessage = null
    },
    login: function () {
      if (!this.email || !this.password) {
        this.errorMessage = 'Preencha as informações de e-mail e senha.'
        return
      }

      firebaseApp.auth().signInWithEmailAndPassword(`${this.email}@fortini.com.br`, this.password)
        .then(user => {
          this.errorMessage = null
          this.$router.push('/admin')
        },
        err => {
          err.message.includes('invalid') ? this.errorMessage = 'A senha informada é inválida. Tente novamente.' : this.errorMessage = 'Ocorreu algum erro. Por favor tente novamente mais tarde.'
        })
    }
  }
}
</script>

<style lang="scss" scoped>
input {
  font-size: 16px;
}

.login {
  width: 400px;
  margin: 0 auto;
  padding: 50px 0;

  #password {
    width: 360px;
  }
}
</style>
