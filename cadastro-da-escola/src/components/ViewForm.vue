<template>
  <div class="container">
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Selecione a escola</label>
      </div>
      <div class="field-body">
        <div class="field">
          <div class="control has-icons-left">
            <div class="select" :class="{ 'is-loading' : loading }">
              <select v-model="partnerRegistration">
                <option selected hidden disabled :value="null" v-if="loading">Carregando..</option>
                <option selected hidden disabled :value="null" v-else>Clique para escolher</option>
                <option v-for="registration of registrations" v-bind:key="registration['.key']" v-bind:value="registration">
                  {{registration.school.full_name}}
                </option>
              </select>
            </div>
            <div class="icon is-small is-left">
              <i class="fas fa-book"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="hero is-primary is-small" v-if="partnerRegistration && partnerRegistration.school">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{partnerRegistration.school.full_name}}
          </h1>
          <h2 class="subtitle">
            {{partnerRegistration.school.cnpj || 'Cadastro da Escola Parceira'}}
          </h2>
        </div>
      </div>
    </section>

    <div class="container is-fluid" v-if="partnerRegistration && partnerRegistration.timeStamp">
      <div class="content">
        <span class="tag is-primary">Preenchido em {{partnerRegistration.timeStamp}}</span>
      </div>
    </div>

    <div class="container is-fluid" v-if="partnerRegistration && partnerRegistration.responsible">
      <!-- Responsável -->
      <div class="columns margin-bottom">
        <div class="column is-4">
          <div class="field">
            <div class="control">
              <label class="label">Responsável pelo contato</label>
              <span class="limit-text" :title="partnerRegistration.responsible.full_name">{{partnerRegistration.responsible.full_name}}</span>
            </div>
          </div>
        </div>

        <div class="column is-3">
          <div class="field">
            <div class="control">
              <label class="label">E-mail</label>
              <span class="limit-text" :title="partnerRegistration.responsible.mail">{{partnerRegistration.responsible.mail}}</span>
            </div>
          </div>
        </div>

        <div class="column is-2">
          <div class="field">
            <div class="control">
              <label class="label">Telefone</label>
              <span>{{partnerRegistration.responsible.phone}}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Escola - Informações básicas -->
      <div class="columns">
        <div class="column is-4">
          <div class="field">
            <div class="control">
              <label class="label">Nome da escola</label>
              <span class="limit-text" :title="partnerRegistration.school.full_name">{{partnerRegistration.school.full_name}}</span>
            </div>
          </div>
        </div>

        <div class="column is-3">
          <div class="field">
            <div class="control">
              <label class="label">E-mail da escola</label>
              <span class="limit-text" :title="partnerRegistration.school.mail">{{partnerRegistration.school.mail}}</span>
            </div>
          </div>
        </div>

        <div class="column is-2" v-if="partnerRegistration.school && partnerRegistration.school.cnpj">
          <div class="field">
            <div class="control">
              <label class="label">CNPJ da escola</label>
              <span>{{partnerRegistration.school.cnpj}}</span>
            </div>
          </div>
        </div>

        <div class="column is-2">
          <div class="field">
            <div class="control">
              <label class="label">Telefone da escola</label>
              <span>{{partnerRegistration.school.phone}}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Escola - Diretor -->
      <div class="columns">
        <div class="column is-4">
          <div class="field">
            <div class="control">
              <label class="label">Nome do diretor</label>
              <span class="limit-text" :title="partnerRegistration.school.director.full_name">{{partnerRegistration.school.director.full_name}}</span>
            </div>
          </div>
        </div>

        <div class="column is-3">
          <div class="field">
            <div class="control">
              <label class="label">E-mail do diretor</label>
              <span class="limit-text" :title="partnerRegistration.school.director.mail">{{partnerRegistration.school.director.mail}}</span>
            </div>
          </div>
        </div>

        <div class="column is-2">
          <div class="field">
            <div class="control">
              <label class="label">Telefone do diretor</label>
              <span>{{partnerRegistration.school.director.phone}}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Escola - Vice-diretor -->
      <div class="columns margin-bottom">
        <div class="column is-4">
          <div class="field">
            <div class="control">
              <label class="label">Nome do vice-diretor</label>
              <span class="limit-text" :title="partnerRegistration.school.viceDirector.full_name">{{partnerRegistration.school.viceDirector.full_name}}</span>
            </div>
          </div>
        </div>

        <div class="column is-3">
          <div class="field">
            <div class="control">
              <label class="label">E-mail do vice-diretor</label>
              <span class="limit-text" :title="partnerRegistration.school.viceDirector.mail">{{partnerRegistration.school.viceDirector.mail}}</span>
            </div>
          </div>
        </div>

        <div class="column is-2">
          <div class="field">
            <div class="control">
              <label class="label">Telefone do vice-diretor</label>
              <span>{{partnerRegistration.school.viceDirector.phone}}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="content">
        <h1 class="title is-4 has-text-weight-semibold has-text-primary">1) Alunos e professores por turno</h1>
      </div>

      <div class="columns margin-bottom">
        <div class="column">
          <div class="shift" :class="{ active: partnerRegistration.school.shifts.morning.enabled, filled: partnerRegistration.school.shifts.morning.filled }">
            <div class="time" @click="partnerRegistration.school.shifts.morning.enabled = !partnerRegistration.school.shifts.morning.enabled">
              <img src="../assets/time/sunrise.svg" width="96" height="96" title="Clique para preencher o turno da manhã">
              <span class="img-label">Manhã</span>
            </div>
            <div class="time-morning">
              <ul>
                <li>
                  <strong>Fundamental de 1º ao 5º ano</strong><br>
                  <span class="has-text-weight-semibold" :class="{ 'has-text-primary': partnerRegistration.school.shifts.morning.firstToFifth > 0, 'has-text-grey-light': !partnerRegistration.school.shifts.morning.firstToFifth }">
                    {{partnerRegistration.school.shifts.morning.firstToFifth || 0}}
                  </span>
                  alunos e
                  <span class="has-text-weight-semibold" :class="{ 'has-text-primary': partnerRegistration.school.shifts.morning.firsttoFifthTeachers > 0, 'has-text-grey-light': !partnerRegistration.school.shifts.morning.firsttoFifthTeachers }">
                    {{partnerRegistration.school.shifts.morning.firsttoFifthTeachers || 0}}
                  </span>
                    professores
                </li>
                <li>
                  <strong>Fundamental de 6º ao 9º ano</strong><br>
                  <span class="has-text-weight-semibold" :class="{ 'has-text-primary': partnerRegistration.school.shifts.morning.sixthToNinth > 0, 'has-text-grey-light': !partnerRegistration.school.shifts.morning.sixthToNinth }">
                    {{partnerRegistration.school.shifts.morning.sixthToNinth || 0}}
                  </span>
                  alunos e
                  <span class="has-text-weight-semibold" :class="{ 'has-text-primary': partnerRegistration.school.shifts.morning.sixthToNinthTeachers > 0, 'has-text-grey-light': !partnerRegistration.school.shifts.morning.sixthToNinthTeachers }">
                    {{partnerRegistration.school.shifts.morning.sixthToNinthTeachers || 0}}
                  </span>
                    professores
                </li>
                <li>
                  <strong>Médio: do 1º ao 3º ano</strong><br>
                  <span class="has-text-weight-semibold" :class="{ 'has-text-primary': partnerRegistration.school.shifts.morning.firstToThird > 0, 'has-text-grey-light': !partnerRegistration.school.shifts.morning.firstToThird }">
                    {{partnerRegistration.school.shifts.morning.firstToThird || 0}}
                  </span>
                  alunos e
                  <span class="has-text-weight-semibold" :class="{ 'has-text-primary': partnerRegistration.school.shifts.morning.firstToThirdTeachers > 0, 'has-text-grey-light': !partnerRegistration.school.shifts.morning.firstToThirdTeachers }">
                    {{partnerRegistration.school.shifts.morning.firstToThirdTeachers || 0}}
                  </span>
                    professores
                </li>
                <li>
                  <strong>EJA</strong><br>
                  <span class="has-text-weight-semibold" :class="{ 'has-text-primary': partnerRegistration.school.shifts.morning.eja > 0, 'has-text-grey-light': !partnerRegistration.school.shifts.morning.eja }">
                    {{partnerRegistration.school.shifts.morning.eja || 0}}
                  </span>
                  alunos e
                  <span class="has-text-weight-semibold" :class="{ 'has-text-primary': partnerRegistration.school.shifts.morning.ejaTeachers > 0, 'has-text-grey-light': !partnerRegistration.school.shifts.morning.ejaTeachers }">
                    {{partnerRegistration.school.shifts.morning.ejaTeachers || 0}}
                  </span>
                    professores
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="shift" :class="{ active: partnerRegistration.school.shifts.afternoon.enabled, filled: partnerRegistration.school.shifts.afternoon.filled }">
            <div class="time" @click="partnerRegistration.school.shifts.afternoon.enabled = !partnerRegistration.school.shifts.afternoon.enabled">
              <img src="../assets/time/sun.svg" width="96" height="96" title="Clique para preencher o turno da tarde">
              <span class="img-label">Tarde</span>
            </div>
            <div class="time-afternoon">
              <ul>
                <li>
                  <strong>Fundamental de 1º ao 5º ano</strong><br>
                  <span class="has-text-weight-semibold" :class="{ 'has-text-primary': partnerRegistration.school.shifts.afternoon.firstToFifth > 0, 'has-text-grey-light': !partnerRegistration.school.shifts.afternoon.firstToFifth }">
                    {{partnerRegistration.school.shifts.afternoon.firstToFifth || 0}}
                  </span>
                  alunos e
                  <span class="has-text-weight-semibold" :class="{ 'has-text-primary': partnerRegistration.school.shifts.afternoon.firsttoFifthTeachers > 0, 'has-text-grey-light': !partnerRegistration.school.shifts.afternoon.firsttoFifthTeachers }">
                    {{partnerRegistration.school.shifts.afternoon.firsttoFifthTeachers || 0}}
                  </span>
                    professores
                </li>
                <li>
                  <strong>Fundamental de 6º ao 9º ano</strong><br>
                  <span class="has-text-weight-semibold" :class="{ 'has-text-primary': partnerRegistration.school.shifts.afternoon.sixthToNinth > 0, 'has-text-grey-light': !partnerRegistration.school.shifts.afternoon.sixthToNinth }">
                    {{partnerRegistration.school.shifts.afternoon.sixthToNinth || 0}}
                  </span>
                  alunos e
                  <span class="has-text-weight-semibold" :class="{ 'has-text-primary': partnerRegistration.school.shifts.afternoon.sixthToNinthTeachers > 0, 'has-text-grey-light': !partnerRegistration.school.shifts.afternoon.sixthToNinthTeachers }">
                    {{partnerRegistration.school.shifts.afternoon.sixthToNinthTeachers || 0}}
                  </span>
                    professores
                </li>
                <li>
                  <strong>Médio: do 1º ao 3º ano</strong><br>
                  <span class="has-text-weight-semibold" :class="{ 'has-text-primary': partnerRegistration.school.shifts.afternoon.firstToThird > 0, 'has-text-grey-light': !partnerRegistration.school.shifts.afternoon.firstToThird }">
                    {{partnerRegistration.school.shifts.afternoon.firstToThird || 0}}
                  </span>
                  alunos e
                  <span class="has-text-weight-semibold" :class="{ 'has-text-primary': partnerRegistration.school.shifts.afternoon.firstToThirdTeachers > 0, 'has-text-grey-light': !partnerRegistration.school.shifts.afternoon.firstToThirdTeachers }">
                    {{partnerRegistration.school.shifts.afternoon.firstToThirdTeachers || 0}}
                  </span>
                    professores
                </li>
                <li>
                  <strong>EJA</strong><br>
                  <span class="has-text-weight-semibold" :class="{ 'has-text-primary': partnerRegistration.school.shifts.afternoon.eja > 0, 'has-text-grey-light': !partnerRegistration.school.shifts.afternoon.eja }">
                    {{partnerRegistration.school.shifts.afternoon.eja || 0}}
                  </span>
                  alunos e
                  <span class="has-text-weight-semibold" :class="{ 'has-text-primary': partnerRegistration.school.shifts.afternoon.ejaTeachers > 0, 'has-text-grey-light': !partnerRegistration.school.shifts.afternoon.ejaTeachers }">
                    {{partnerRegistration.school.shifts.afternoon.ejaTeachers || 0}}
                  </span>
                    professores
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="column time-column">
          <div class="shift" :class="{ active: partnerRegistration.school.shifts.night.enabled, filled: partnerRegistration.school.shifts.night.filled }">
            <div class="time" @click="partnerRegistration.school.shifts.night.enabled = !partnerRegistration.school.shifts.night.enabled">
              <img src="../assets/time/cloudy.svg" width="96" height="96" title="Clique para preencher o turno da noite">
              <span class="img-label">Noite</span>
            </div>
            <div class="time-night">
              <ul>
                <li>
                  <strong>Fundamental de 1º ao 5º ano</strong><br>
                  <span class="has-text-weight-semibold" :class="{ 'has-text-primary': partnerRegistration.school.shifts.night.firstToFifth > 0, 'has-text-grey-light': !partnerRegistration.school.shifts.night.firstToFifth }">
                    {{partnerRegistration.school.shifts.night.firstToFifth || 0}}
                  </span>
                  alunos e
                  <span class="has-text-weight-semibold" :class="{ 'has-text-primary': partnerRegistration.school.shifts.night.firsttoFifthTeachers > 0, 'has-text-grey-light': !partnerRegistration.school.shifts.night.firsttoFifthTeachers }">
                    {{partnerRegistration.school.shifts.night.firsttoFifthTeachers || 0}}
                  </span>
                    professores
                </li>
                <li>
                  <strong>Fundamental de 6º ao 9º ano</strong><br>
                  <span class="has-text-weight-semibold" :class="{ 'has-text-primary': partnerRegistration.school.shifts.night.sixthToNinth > 0, 'has-text-grey-light': !partnerRegistration.school.shifts.night.sixthToNinth }">
                    {{partnerRegistration.school.shifts.night.sixthToNinth || 0}}
                  </span>
                  alunos e
                  <span class="has-text-weight-semibold" :class="{ 'has-text-primary': partnerRegistration.school.shifts.night.sixthToNinthTeachers > 0, 'has-text-grey-light': !partnerRegistration.school.shifts.night.sixthToNinthTeachers }">
                    {{partnerRegistration.school.shifts.night.sixthToNinthTeachers || 0}}
                  </span>
                    professores
                </li>
                <li>
                  <strong>Médio: do 1º ao 3º ano</strong><br>
                  <span class="has-text-weight-semibold" :class="{ 'has-text-primary': partnerRegistration.school.shifts.night.firstToThird > 0, 'has-text-grey-light': !partnerRegistration.school.shifts.night.firstToThird }">
                    {{partnerRegistration.school.shifts.night.firstToThird || 0}}
                  </span>
                  alunos e
                  <span class="has-text-weight-semibold" :class="{ 'has-text-primary': partnerRegistration.school.shifts.night.firstToThirdTeachers > 0, 'has-text-grey-light': !partnerRegistration.school.shifts.night.firstToThirdTeachers }">
                    {{partnerRegistration.school.shifts.night.firstToThirdTeachers || 0}}
                  </span>
                    professores
                </li>
                <li>
                  <strong>EJA</strong><br>
                  <span class="has-text-weight-semibold" :class="{ 'has-text-primary': partnerRegistration.school.shifts.night.eja > 0, 'has-text-grey-light': !partnerRegistration.school.shifts.night.eja }">
                    {{partnerRegistration.school.shifts.night.eja || 0}}
                  </span>
                  alunos e
                  <span class="has-text-weight-semibold" :class="{ 'has-text-primary': partnerRegistration.school.shifts.night.ejaTeachers > 0, 'has-text-grey-light': !partnerRegistration.school.shifts.night.ejaTeachers }">
                    {{partnerRegistration.school.shifts.night.ejaTeachers || 0}}
                  </span>
                    professores
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="content margin-bottom">
        <h1 class="title is-4 has-text-weight-semibold has-text-primary">
          2) Existe algum projeto dentro desta escola para melhorar o seu índice da educação básica (IDEB)?
        </h1>
        <span class="has-text-grey">Re:</span> <span class="is-size-5">{{partnerRegistration.school.form.project}}</span>
      </div>

      <div class="content margin-bottom">
        <h1 class="title is-4 has-text-weight-semibold has-text-primary">
          3) De que maneira você acredita que a Fortini pode contribuir com esta escola, a partir de um projeto socioeducativo?
        </h1>
        <span class="has-text-grey">Re:</span> <span class="is-size-5">{{partnerRegistration.school.form.suggestion}}</span>
      </div>

      <div class="content margin-bottom">
        <h1 class="title is-4 has-text-weight-semibold has-text-primary">
          4) Há disponibilidade por parte dos diretores, professores e ou supervisores para reunir ao menos uma vez por mês para acompanhamento do projeto? Se sim, qual o melhor dia e horário?
        </h1>
        <span class="has-text-grey">Re:</span> <span class="is-size-5">{{partnerRegistration.school.form.availability}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { schoolRegistration } from '../firebase'

export default {
  name: 'ViewForm',
  firebase: {
    registrations: schoolRegistration
  },

  data () {
    return {
      loading: true,
      partnerRegistration: null
    }
  },
  updated: function () {
    this.loading = false
  }
}
</script>

<style lang="scss" scoped>
  section {
    margin: 30px;
  }
  .container {
    padding-bottom: 20px;
  }
  .columns {
    &.margin-bottom {
      margin-bottom: 30px;
    }
  }
  .select {
    option {
      line-height: 50px;
      height: 50px;
    }
  }
</style>
