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
              <select v-model="partnerRegistration" @change="onSelectSchool()">
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
            Cadastro da Escola Parceira
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
        <div class="column">
          <div class="field">
            <div class="control">
              <label class="label">Responsável pelo contato</label>
              <span>{{partnerRegistration.responsible.full_name}}</span>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="field">
            <div class="control">
              <label class="label">E-mail</label>
              <span>{{partnerRegistration.responsible.mail}}</span>
            </div>
          </div>
        </div>

        <div class="column">
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
        <div class="column">
          <div class="field">
            <div class="control">
              <label class="label">Nome da escola</label>
              <span>{{partnerRegistration.school.full_name}}</span>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="field">
            <div class="control">
              <label class="label">E-mail da escola</label>
              <span>{{partnerRegistration.school.mail}}</span>
            </div>
          </div>
        </div>

        <div class="column">
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
        <div class="column">
          <div class="field">
            <div class="control">
              <label class="label">Nome do diretor</label>
              <span>{{partnerRegistration.school.director.full_name}}</span>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="field">
            <div class="control">
              <label class="label">E-mail do diretor</label>
              <span>{{partnerRegistration.school.director.mail}}</span>
            </div>
          </div>
        </div>

        <div class="column">
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
        <div class="column">
          <div class="field">
            <div class="control">
              <label class="label">Nome do vice-diretor</label>
              <span>{{partnerRegistration.school.viceDirector.full_name}}</span>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="field">
            <div class="control">
              <label class="label">E-mail do vice-diretor</label>
              <span>{{partnerRegistration.school.viceDirector.mail}}</span>
            </div>
          </div>
        </div>

        <div class="column">
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
                  <span class="has-text-weight-semibold" :class="{ 'has-text-primary': partnerRegistration.school.shifts.morning.firstToFifth > 0, 'has-text-grey-light': partnerRegistration.school.shifts.morning.firstToFifth == 0,  }">
                    {{partnerRegistration.school.shifts.morning.firstToFifth}}
                  </span>
                  alunos e
                  <span class="has-text-weight-semibold" :class="{ 'has-text-primary': partnerRegistration.school.shifts.morning.firsttoFifthTeachers > 0, 'has-text-grey-light': partnerRegistration.school.shifts.morning.firsttoFifthTeachers == 0,  }">
                    {{partnerRegistration.school.shifts.morning.firsttoFifthTeachers}}
                  </span>
                    professores
                </li>
                <li>
                  <strong>Fundamental de 6º ao 9º ano</strong><br>
                  <span class="has-text-weight-semibold" :class="{ 'has-text-primary': partnerRegistration.school.shifts.morning.sixthToNinth > 0, 'has-text-grey': partnerRegistration.school.shifts.morning.sixthToNinth == 0,  }">
                    {{partnerRegistration.school.shifts.morning.sixthToNinth}}
                  </span>
                  alunos e
                  <span class="has-text-weight-semibold" :class="{ 'has-text-primary': partnerRegistration.school.shifts.morning.sixthToNinthTeachers > 0, 'has-text-grey-light': partnerRegistration.school.shifts.morning.sixthToNinthTeachers == 0,  }">
                    {{partnerRegistration.school.shifts.morning.sixthToNinthTeachers}}
                  </span>
                    professores
                </li>
                <li>
                  <strong>Médio: do 1º ao 3º ano</strong><br>
                  <span class="has-text-weight-semibold" :class="{ 'has-text-primary': partnerRegistration.school.shifts.morning.firstToThirdTeachers > 0, 'has-text-grey-light': partnerRegistration.school.shifts.morning.firstToThird == 0,  }">
                    {{partnerRegistration.school.shifts.morning.firstToThird}}
                  </span>
                  alunos e
                  <span class="has-text-weight-semibold" :class="{ 'has-text-primary': partnerRegistration.school.shifts.morning.firstToThirdTeachers > 0, 'has-text-grey-light': partnerRegistration.school.shifts.morning.firstToThirdTeachers == 0,  }">
                    {{partnerRegistration.school.shifts.morning.firstToThirdTeachers}}
                  </span>
                    professores
                </li>
                <li>
                  <strong>EJA</strong><br>
                  <span class="has-text-weight-semibold" :class="{ 'has-text-primary': partnerRegistration.school.shifts.morning.eja > 0, 'has-text-grey-light': partnerRegistration.school.shifts.morning.eja == 0,  }">
                    {{partnerRegistration.school.shifts.morning.eja}}
                  </span>
                  alunos e
                  <span class="has-text-weight-semibold" :class="{ 'has-text-primary': partnerRegistration.school.shifts.morning.ejaTeachers > 0, 'has-text-grey-light': partnerRegistration.school.shifts.morning.ejaTeachers == 0,  }">
                    {{partnerRegistration.school.shifts.morning.ejaTeachers}}
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
                  <span class="has-text-weight-semibold" :class="{ 'has-text-primary': partnerRegistration.school.shifts.afternoon.firstToFifth > 0, 'has-text-grey-light': partnerRegistration.school.shifts.afternoon.firstToFifth == 0,  }">
                    {{partnerRegistration.school.shifts.afternoon.firstToFifth}}
                  </span>
                  alunos e
                  <span class="has-text-weight-semibold" :class="{ 'has-text-primary': partnerRegistration.school.shifts.afternoon.firsttoFifthTeachers > 0, 'has-text-grey-light': partnerRegistration.school.shifts.afternoon.firsttoFifthTeachers == 0,  }">
                    {{partnerRegistration.school.shifts.afternoon.firsttoFifthTeachers}}
                  </span>
                    professores
                </li>
                <li>
                  <strong>Fundamental de 6º ao 9º ano</strong><br>
                  <span class="has-text-weight-semibold" :class="{ 'has-text-primary': partnerRegistration.school.shifts.afternoon.sixthToNinth > 0, 'has-text-grey': partnerRegistration.school.shifts.afternoon.sixthToNinth == 0,  }">
                    {{partnerRegistration.school.shifts.afternoon.sixthToNinth}}
                  </span>
                  alunos e
                  <span class="has-text-weight-semibold" :class="{ 'has-text-primary': partnerRegistration.school.shifts.afternoon.sixthToNinthTeachers > 0, 'has-text-grey-light': partnerRegistration.school.shifts.afternoon.sixthToNinthTeachers == 0,  }">
                    {{partnerRegistration.school.shifts.afternoon.sixthToNinthTeachers}}
                  </span>
                    professores
                </li>
                <li>
                  <strong>Médio: do 1º ao 3º ano</strong><br>
                  <span class="has-text-weight-semibold" :class="{ 'has-text-primary': partnerRegistration.school.shifts.afternoon.firstToThirdTeachers > 0, 'has-text-grey-light': partnerRegistration.school.shifts.afternoon.firstToThird == 0,  }">
                    {{partnerRegistration.school.shifts.afternoon.firstToThird}}
                  </span>
                  alunos e
                  <span class="has-text-weight-semibold" :class="{ 'has-text-primary': partnerRegistration.school.shifts.afternoon.firstToThirdTeachers > 0, 'has-text-grey-light': partnerRegistration.school.shifts.afternoon.firstToThirdTeachers == 0,  }">
                    {{partnerRegistration.school.shifts.afternoon.firstToThirdTeachers}}
                  </span>
                    professores
                </li>
                <li>
                  <strong>EJA</strong><br>
                  <span class="has-text-weight-semibold" :class="{ 'has-text-primary': partnerRegistration.school.shifts.afternoon.eja > 0, 'has-text-grey-light': partnerRegistration.school.shifts.afternoon.eja == 0,  }">
                    {{partnerRegistration.school.shifts.afternoon.eja}}
                  </span>
                  alunos e
                  <span class="has-text-weight-semibold" :class="{ 'has-text-primary': partnerRegistration.school.shifts.afternoon.ejaTeachers > 0, 'has-text-grey-light': partnerRegistration.school.shifts.afternoon.ejaTeachers == 0,  }">
                    {{partnerRegistration.school.shifts.afternoon.ejaTeachers}}
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
                  <span class="has-text-weight-semibold" :class="{ 'has-text-primary': partnerRegistration.school.shifts.night.firstToFifth > 0, 'has-text-grey-light': partnerRegistration.school.shifts.night.firstToFifth == 0,  }">
                    {{partnerRegistration.school.shifts.night.firstToFifth}}
                  </span>
                  alunos e
                  <span class="has-text-weight-semibold" :class="{ 'has-text-primary': partnerRegistration.school.shifts.night.firsttoFifthTeachers > 0, 'has-text-grey-light': partnerRegistration.school.shifts.night.firsttoFifthTeachers == 0,  }">
                    {{partnerRegistration.school.shifts.night.firsttoFifthTeachers}}
                  </span>
                    professores
                </li>
                <li>
                  <strong>Fundamental de 6º ao 9º ano</strong><br>
                  <span class="has-text-weight-semibold" :class="{ 'has-text-primary': partnerRegistration.school.shifts.night.sixthToNinth > 0, 'has-text-grey': partnerRegistration.school.shifts.night.sixthToNinth == 0,  }">
                    {{partnerRegistration.school.shifts.night.sixthToNinth}}
                  </span>
                  alunos e
                  <span class="has-text-weight-semibold" :class="{ 'has-text-primary': partnerRegistration.school.shifts.night.sixthToNinthTeachers > 0, 'has-text-grey-light': partnerRegistration.school.shifts.night.sixthToNinthTeachers == 0,  }">
                    {{partnerRegistration.school.shifts.night.sixthToNinthTeachers}}
                  </span>
                    professores
                </li>
                <li>
                  <strong>Médio: do 1º ao 3º ano</strong><br>
                  <span class="has-text-weight-semibold" :class="{ 'has-text-primary': partnerRegistration.school.shifts.night.firstToThirdTeachers > 0, 'has-text-grey-light': partnerRegistration.school.shifts.night.firstToThird == 0,  }">
                    {{partnerRegistration.school.shifts.night.firstToThird}}
                  </span>
                  alunos e
                  <span class="has-text-weight-semibold" :class="{ 'has-text-primary': partnerRegistration.school.shifts.night.firstToThirdTeachers > 0, 'has-text-grey-light': partnerRegistration.school.shifts.night.firstToThirdTeachers == 0,  }">
                    {{partnerRegistration.school.shifts.night.firstToThirdTeachers}}
                  </span>
                    professores
                </li>
                <li>
                  <strong>EJA</strong><br>
                  <span class="has-text-weight-semibold" :class="{ 'has-text-primary': partnerRegistration.school.shifts.night.eja > 0, 'has-text-grey-light': partnerRegistration.school.shifts.night.eja == 0,  }">
                    {{partnerRegistration.school.shifts.night.eja}}
                  </span>
                  alunos e
                  <span class="has-text-weight-semibold" :class="{ 'has-text-primary': partnerRegistration.school.shifts.night.ejaTeachers > 0, 'has-text-grey-light': partnerRegistration.school.shifts.night.ejaTeachers == 0,  }">
                    {{partnerRegistration.school.shifts.night.ejaTeachers}}
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
  props: ['school-id'],
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
  },
  methods: {
    onSelectSchool: function () {

    }
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
