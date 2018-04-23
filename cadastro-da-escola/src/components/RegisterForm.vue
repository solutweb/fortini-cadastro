<template>
  <div class="registration-form">
    <div class="container">
      <form>
        <div class="columns">
          <div class="column is-2">
            <div class="illustration">
              <img class="svg" src="../assets/form/add_user.svg">
            </div>
          </div>
          <div class="column">
            <div class="columns bottom-margin">
              <div class="column is-4 ">
                <div class="form-group">
                  <label for="responsible" class="smaller-text" :class="{ 'up-label': responsible.full_name }">{{responsibleLabel}}</label>
                  <input type="text" :class="{ filled: responsible.full_name }" id="responsible" name="responsible" v-model="responsible.full_name" :placeholder="responsibleLabel">
                </div>
              </div>
              <div class="column is-4">
                <div class="form-group">
                  <label for="responsiblePhone" class="smaller-text" :class="{ 'up-label': responsible.phone, invalid: !validatePhone('responsible', responsible.phone) }">{{phoneLabel}}</label>
                  <the-mask :mask="['(##) ####.####', '(##) #####.####']" :masked="true" :class="{ filled: responsible.phone }" id="responsiblePhone" name="responsiblePhone" v-model="responsible.phone" :placeholder="phoneLabel" />
                </div>
              </div>
              <div class="column is-4">
                <div class="form-group">
                  <label for="responsibleMail" class="smaller-text" :class="{ 'up-label': responsible.mail, invalid: !validateMail('responsible', responsible.mail) }">{{mailLabel}}</label>
                  <input type="text" :class="{ filled: responsible.mail, invalid: !validateMail('responsible', responsible.mail) }" id="responsibleMail" name="responsibleMail" v-model="responsible.mail" :placeholder="mailLabel">
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column is-4 ">
                <div class="form-group">
                  <label for="school" class="smaller-text" :class="{ 'up-label': school.full_name }">{{schoolLabel}}</label>
                  <input type="text" :class="{ filled: school.full_name }" id="school" name="school" v-model="school.full_name" :placeholder="schoolLabel">
                </div>
              </div>
              <div class="column is-2">
                <div class="form-group">
                  <label for="school-cnpj" class="smaller-text" :class="{ 'up-label': school.cnpj, invalid: !cnpjValidAndUnique }">{{cnpjLabel}}</label>
                  <the-mask :mask="['##.###.###/####-##']" :masked="true" :class="{ filled: school.cnpj }" id="school-cnpj" name="school-cnpj" v-model="school.cnpj" :placeholder="cnpjLabel" @blur.native="validateCNPJ(school.cnpj)" />
                </div>
              </div>
              <div class="column is-2">
                <div class="form-group">
                  <label for="school-phone" class="smaller-text" :class="{ 'up-label': school.phone, invalid: !validatePhone('school', school.phone) }">{{phoneLabel}}</label>
                  <the-mask :mask="['(##) ####.####', '(##) #####.####']" :masked="true" :class="{ filled: school.phone }" id="school-phone" name="school-phone" v-model="school.phone" :placeholder="phoneLabel" />
                </div>
              </div>
              <div class="column is-4">
                <div class="form-group">
                  <label for="school-mail" class="smaller-text" :class="{ 'up-label': school.mail, invalid: !validateMail('school', school.mail) }">{{mailLabel}}</label>
                  <input type="text" :class="{ filled: school.mail, invalid: !validateMail('school', school.mail) }" id="school-mail" name="school-mail" v-model="school.mail" :placeholder="mailLabel">
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column is-4 ">
                <div class="form-group">
                  <label for="school-director" class="smaller-text" :class="{ 'up-label': school.director.full_name }">{{directorLabel}}</label>
                  <input type="text" :class="{ filled: school.director.full_name }" id="school-director" name="school-director" v-model="school.director.full_name" :placeholder="directorLabel">
                </div>
              </div>
              <div class="column is-4">
                <div class="form-group">
                  <label for="school-director-phone" class="smaller-text" :class="{ 'up-label': school.director.phone, invalid: !validatePhone('director', school.director.phone) }">{{phoneLabel}}</label>
                  <the-mask :mask="['(##) ####.####', '(##) #####.####']" :masked="true" :class="{ filled: school.director.phone }" id="school-director-phone" name="school-director-phone" v-model="school.director.phone" :placeholder="phoneLabel" />
                </div>
              </div>
              <div class="column is-4">
                <div class="form-group">
                  <label for="school-director-mail" class="smaller-text" :class="{ 'up-label': school.director.mail, invalid: !validateMail('director', school.director.mail) }">{{mailLabel}}</label>
                  <input type="text" :class="{ filled: school.director.mail, invalid: !validateMail('director', school.director.mail) }" id="school-director-mail" name="school-director-mail" v-model="school.director.mail" :placeholder="mailLabel">
                </div>
              </div>
            </div>
            <div class="columns bottom-margin">
              <div class="column is-4 ">
                <div class="form-group">
                  <label for="school-vice-director" class="smaller-text" :class="{ 'up-label': school.viceDirector.full_name }">{{viceDirectorLabel}}</label>
                  <input type="text" :class="{ filled: school.viceDirector.full_name }" id="school-vice-director" name="school-vice-director" v-model="school.viceDirector.full_name" :placeholder="viceDirectorLabel">
                </div>
              </div>
              <div class="column is-4">
                <div class="form-group">
                  <label for="school-vice-director-phone" class="smaller-text" :class="{ 'up-label': school.viceDirector.phone, invalid: !validatePhone('viceDirector', school.viceDirector.phone) }">{{phoneLabel}}</label>
                  <the-mask :mask="['(##) ####.####', '(##) #####.####']" :masked="true" :class="{ filled: school.viceDirector.phone }" id="school-vice-director-phone" name="school-vice-director-phone" v-model="school.viceDirector.phone" :placeholder="phoneLabel" />
                </div>
              </div>
              <div class="column is-4">
                <div class="form-group">
                  <label for="viceDirector" class="smaller-text" :class="{ 'up-label': school.viceDirector.mail, invalid: !validateMail('viceDirector', school.viceDirector.mail) }">{{mailLabel}}</label>
                  <input type="text" :class="{ filled: school.viceDirector.mail, invalid: !validateMail('viceDirector', school.viceDirector.mail) }" id="schoolDirectorMail" name="viceDirector" v-model="school.viceDirector.mail" :placeholder="mailLabel">
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1 class="question-label bottom-margin">1) Indique abaixo a quantidade de alunos e professores que a escola tem em cada turno:</h1>
        <div class="columns bottom-margin">
          <div class="column">
            <div class="shift" :class="{ active: school.shifts.morning.enabled, filled: school.shifts.morning.filled }">
              <div class="time" @click="school.shifts.morning.enabled = !school.shifts.morning.enabled">
                <img src="../assets/time/sunrise.svg" width="96" height="96" title="Clique para preencher o turno da manhã">
                <span class="img-label">Manhã</span>
              </div>
              <div class="time-morning">
                <ul>
                  <li>
                    <strong>Fundamental de 1º ao 5º ano</strong><br>
                    <input type="text" class="form-inline" :class="{ filled: school.shifts.morning.firstToFifth }" id="mfirstToFifth" name="mfirstToFifth" v-model="school.shifts.morning.firstToFifth" placeholder="0" maxlength="4"> alunos
                    <span class="and">e</span>
                    <input type="text" class="form-inline" :class="{ filled: school.shifts.morning.firsttoFifthTeachers }" id="mfirsttoFifthTeachers" name="mfirsttoFifthTeachers" v-model="school.shifts.morning.firsttoFifthTeachers" placeholder="0" maxlength="4"> professores
                  </li>
                  <li>
                    <strong>Fundamental de 6º ao 9º ano</strong><br>
                    <input type="text" class="form-inline" :class="{ filled: school.shifts.morning.sixthToNinth }" id="msixthToNinth" name="msixthToNinth" v-model="school.shifts.morning.sixthToNinth" placeholder="0" maxlength="4"> alunos
                    <span class="and">e</span>
                    <input type="text" class="form-inline" :class="{ filled: school.shifts.morning.sixthToNinthTeachers }" id="msixthToNinthTeachers" name="msixthToNinthTeachers" v-model="school.shifts.morning.sixthToNinthTeachers" placeholder="0" maxlength="4"> professores
                  </li>
                  <li>
                    <strong>Médio: do 1º ao 3º ano</strong><br>
                    <input type="text" class="form-inline" :class="{ filled: school.shifts.morning.firstToThird }" id="mfirstToThird" name="mfirstToThird" v-model="school.shifts.morning.firstToThird" placeholder="0" maxlength="4"> alunos
                    <span class="and">e</span>
                    <input type="text" class="form-inline" :class="{ filled: school.shifts.morning.firstToThirdTeachers }" id="mfirstToThirdTeachers" name="mfirstToThirdTeachers" v-model="school.shifts.morning.firstToThirdTeachers" placeholder="0" maxlength="4"> professores
                  </li>
                  <li>
                    <strong>EJA</strong><br>
                    <input type="text" class="form-inline" :class="{ filled: school.shifts.morning.eja }" id="meja" name="meja" v-model="school.shifts.morning.eja" placeholder="0" maxlength="4"> alunos
                    <span class="and">e</span>
                    <input type="text" class="form-inline" :class="{ filled: school.shifts.morning.ejaTeachers }" id="mejaTeachers" name="mejaTeachers" v-model="school.shifts.morning.ejaTeachers" placeholder="0" maxlength="4"> professores.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="shift" :class="{ active: school.shifts.afternoon.enabled, filled: school.shifts.afternoon.filled }">
              <div class="time" @click="school.shifts.afternoon.enabled = !school.shifts.afternoon.enabled">
                <img src="../assets/time/sun.svg" width="96" height="96" title="Clique para preencher o turno da tarde">
                <span class="img-label">Tarde</span>
              </div>
              <div class="time-afternoon">
                <ul>
                  <li>
                    <strong>Fundamental de 1º ao 5º ano</strong><br>
                    <input type="text" class="form-inline" :class="{ filled: school.shifts.afternoon.firstToFifth }" id="afirstToFifth" name="afirstToFifth" v-model="school.shifts.afternoon.firstToFifth" placeholder="0" maxlength="4"> alunos
                    <span class="and">e</span>
                    <input type="text" class="form-inline" :class="{ filled: school.shifts.afternoon.firsttoFifthTeachers }" id="afirsttoFifthTeachers" name="afirsttoFifthTeachers" v-model="school.shifts.afternoon.firsttoFifthTeachers" placeholder="0" maxlength="4"> professores
                  </li>
                  <li>
                    <strong>Fundamental de 6º ao 9º ano</strong><br>
                    <input type="text" class="form-inline" :class="{ filled: school.shifts.afternoon.sixthToNinth }" id="asixthToNinth" name="asixthToNinth" v-model="school.shifts.afternoon.sixthToNinth" placeholder="0" maxlength="4"> alunos
                    <span class="and">e</span>
                    <input type="text" class="form-inline" :class="{ filled: school.shifts.afternoon.sixthToNinthTeachers }" id="asixthToNinthTeachers" name="asixthToNinthTeachers" v-model="school.shifts.afternoon.sixthToNinthTeachers" placeholder="0" maxlength="4"> professores
                  </li>
                  <li>
                    <strong>Médio: do 1º ao 3º ano</strong><br>
                    <input type="text" class="form-inline" :class="{ filled: school.shifts.afternoon.firstToThird }" id="afirstToThird" name="afirstToThird" v-model="school.shifts.afternoon.firstToThird" placeholder="0" maxlength="4"> alunos
                    <span class="and">e</span>
                    <input type="text" class="form-inline" :class="{ filled: school.shifts.afternoon.firstToThirdTeachers }" id="afirstToThirdTeachers" name="afirstToThirdTeachers" v-model="school.shifts.afternoon.firstToThirdTeachers" placeholder="0" maxlength="4"> professores
                  </li>
                  <li>
                    <strong>EJA</strong><br>
                    <input type="text" class="form-inline" :class="{ filled: school.shifts.afternoon.eja }" id="aeja" name="aeja" v-model="school.shifts.afternoon.eja" placeholder="0" maxlength="4"> alunos
                    <span class="and">e</span>
                    <input type="text" class="form-inline" :class="{ filled: school.shifts.afternoon.ejaTeachers }" id="aejaTeachers" name="aejaTeachers" v-model="school.shifts.afternoon.ejaTeachers" placeholder="0" maxlength="4"> professores.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="column time-column">
            <div class="shift" :class="{ active: school.shifts.night.enabled, filled: school.shifts.night.filled }">
              <div class="time" @click="school.shifts.night.enabled = !school.shifts.night.enabled">
                <img src="../assets/time/cloudy.svg" width="96" height="96" title="Clique para preencher o turno da noite">
                <span class="img-label">Noite</span>
              </div>
              <div class="time-night">
                <ul>
                  <li>
                    <strong>Fundamental de 1º ao 5º ano</strong><br>
                    <input type="text" class="form-inline" :class="{ filled: school.shifts.night.firstToFifth }" id="nfirstToFifth" name="nfirstToFifth" v-model="school.shifts.night.firstToFifth" placeholder="0" maxlength="4"> alunos
                    <span class="and">e</span>
                    <input type="text" class="form-inline" :class="{ filled: school.shifts.night.firsttoFifthTeachers }" id="nfirsttoFifthTeachers" name="nfirsttoFifthTeachers" v-model="school.shifts.night.firsttoFifthTeachers" placeholder="0" maxlength="4"> professores
                  </li>
                  <li>
                    <strong>Fundamental de 6º ao 9º ano</strong><br>
                    <input type="text" class="form-inline" :class="{ filled: school.shifts.night.sixthToNinth }" id="nsixthToNinth" name="nsixthToNinth" v-model="school.shifts.night.sixthToNinth" placeholder="0" maxlength="4"> alunos
                    <span class="and">e</span>
                    <input type="text" class="form-inline" :class="{ filled: school.shifts.night.sixthToNinthTeachers }" id="nsixthToNinthTeachers" name="nsixthToNinthTeachers" v-model="school.shifts.night.sixthToNinthTeachers" placeholder="0" maxlength="4"> professores
                  </li>
                  <li>
                    <strong>Médio: do 1º ao 3º ano</strong><br>
                    <input type="text" class="form-inline" :class="{ filled: school.shifts.night.firstToThird }" id="nfirstToThird" name="nfirstToThird" v-model="school.shifts.night.firstToThird" placeholder="0" maxlength="4"> alunos
                    <span class="and">e</span>
                    <input type="text" class="form-inline" :class="{ filled: school.shifts.night.firstToThirdTeachers }" id="nfirstToThirdTeachers" name="nfirstToThirdTeachers" v-model="school.shifts.night.firstToThirdTeachers" placeholder="0" maxlength="4"> professores
                  </li>
                  <li>
                    <strong>EJA</strong><br>
                    <input type="text" class="form-inline" :class="{ filled: school.shifts.night.eja }" id="neja" name="neja" v-model="school.shifts.night.eja" placeholder="0" maxlength="4"> alunos
                    <span class="and">e</span>
                    <input type="text" class="form-inline" :class="{ filled: school.shifts.night.ejaTeachers }" id="nejaTeachers" name="nejaTeachers" v-model="school.shifts.night.ejaTeachers" placeholder="0" maxlength="4"> professores.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column has-text-centered is-2">
            <div class="illustration">
              <img class="svg" src="../assets/form/growing.svg">
            </div>
          </div>
          <div class="column">
            <h1 class="question-label bottom-margin">2) Existe algum projeto dentro desta escola para melhorar o seu índice da educação básica (IDEB)?</h1>
          </div>
        </div>
        <textarea class="bottom-margin" id="project" name="project" :placeholder="projectLabel" v-model="school.form.project" rows="4"></textarea>
        <div class="columns">
          <div class="column has-text-centered is-2">
            <div class="illustration">
              <img class="svg" src="../assets/form/data.svg">
            </div>
          </div>
          <div class="column">
            <h1 class="question-label bottom-margin">3) De que maneira você acredita que a Fortini pode contribuir com esta escola, a partir de um projeto socioeducativo?</h1>
          </div>
        </div>
        <textarea class="bottom-margin" id="suggestion" name="suggestion" :placeholder="suggestionLabel" v-model="school.form.suggestion"  rows="4"></textarea>
        <div class="columns">
          <div class="column has-text-centered is-2">
            <div class="illustration">
              <img class="svg" src="../assets/form/calendar.svg">
            </div>
          </div>
          <div class="column">
            <h1 class="question-label bottom-margin">4) Há disponibilidade por parte dos diretores, professores e ou supervisores para reunir ao menos uma vez por mês para acompanhamento do projeto? Se sim, qual o melhor dia e horário?</h1>
          </div>
        </div>
        <textarea class="bottom-margin" id="availability" name="availability" :placeholder="availabilityLabel" v-model="school.form.availability" rows="4"></textarea>
        <div class="control bottom-margin">
          <button type="button" class="button is-primary" @click="submitSchool()">Concluir cadastro</button>
        </div>

        <div class="modal" :class="{ 'is-active' : errorMessage || successMessage }">
          <div class="modal-background" @click="closeModal()"></div>
          <div class="modal-content">
            <div class="notification" :class="{ 'is-warning' : errorMessage, 'is-primary' : successMessage }">
              {{errorMessage}}{{successMessage}}
            </div>
          </div>
          <button type="button" class="modal-close is-large" aria-label="close" @click="closeModal()"></button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {TheMask} from 'vue-the-mask'
import { schoolRegistration, firebaseApp } from '../firebase'

export default {
  name: 'RegisterForm',
  firebase: {
    registrations: schoolRegistration
  },

  components: {
    TheMask
  },

  data () {
    return {
      timeStamp: '',
      responsible: {
        full_name: '',
        phone: '',
        mail: ''
      },
      school: {
        cnpj: '',
        full_name: '',
        phone: '',
        mail: '',
        director: {
          full_name: '',
          phone: '',
          mail: ''
        },
        viceDirector: {
          full_name: '',
          phone: '',
          mail: ''
        },
        form: {
          project: '',
          suggestion: '',
          availability: ''
        },
        shifts: {
          morning: {
            enabled: false,
            filled: false,
            firstToFifth: null,
            firsttoFifthTeachers: null,
            sixthToNinth: null,
            sixthToNinthTeachers: null,
            firstToThird: null,
            firstToThirdTeachers: null,
            eja: null,
            ejaTeachers: null
          },
          afternoon: {
            enabled: false,
            filled: false,
            firstToFifth: null,
            firsttoFifthTeachers: null,
            sixthToNinth: null,
            sixthToNinthTeachers: null,
            firstToThird: null,
            firstToThirdTeachers: null,
            eja: null,
            ejaTeachers: null
          },
          night: {
            enabled: false,
            filled: false,
            firstToFifth: null,
            firsttoFifthTeachers: null,
            sixthToNinth: null,
            sixthToNinthTeachers: null,
            firstToThird: null,
            firstToThirdTeachers: null,
            eja: null,
            ejaTeachers: null
          }
        }
      },
      responsibleLabel: 'Nome completo da pessoa responsável pelo contato',
      schoolLabel: 'Nome completo da escola',
      cnpjLabel: 'CNPJ da escola',
      directorLabel: 'Nome completo do diretor da escola',
      viceDirectorLabel: 'Nome completo do vice-diretor da escola',
      phoneLabel: 'Respectivo telefone',
      mailLabel: 'Respectivo e-mail',
      projectLabel: 'Responda aqui',
      availabilityLabel: 'Responda aqui',
      suggestionLabel: 'Responda aqui',
      errorMessage: null,
      successMessage: null,
      cnpjValidAndUnique: false,
      isLogged: false
    }
  },
  methods: {
    closeModal: function () {
      this.errorMessage = null
      this.successMessage = null
    },
    validateForm: function () {
      // Validate contacts information
      if (!this.responsible.full_name || !this.responsible.phone || !this.responsible.mail || !this.validateMail('responsible', this.responsible.mail)) {
        this.errorMessage = 'Por favor preencha todos os campos do formulário corretamente.'
        return false
      }

      if (!this.school.full_name || !this.school.phone || !this.school.mail || !this.validateMail('school', this.school.mail) || !this.school.cnpj) {
        this.errorMessage = 'Por favor preencha todos os campos do formulário corretamente.'
        return false
      }

      if (!this.validateCNPJ(this.school.cnpj)) {
        this.errorMessage = 'Este CNPJ já está cadastrado. Se não foi você quem cadastrou ou se deseja atualizar alguma informação, por favor entre em contato através do telefone (31) 99229.6485 (Maiara) ou maiara@fortini.com.br.'
        return false
      }

      if (!this.school.director.full_name || !this.school.director.phone || !this.school.director.mail || !this.validateMail('director', this.school.director.mail)) {
        this.errorMessage = 'Por favor preencha todos os campos do formulário corretamente.'
        return false
      }

      if (!this.school.viceDirector.full_name || !this.school.viceDirector.phone || !this.school.viceDirector.mail || !this.validateMail('viceDirector', this.school.viceDirector.mail)) {
        this.errorMessage = 'Por favor preencha todos os campos do formulário corretamente.'
        return false
      }

      // Validate school shifts
      if (!this.school.shifts.morning.filled && !this.school.shifts.afternoon.filled && !this.school.shifts.night.filled) {
        this.errorMessage = 'É necessário preencher as informações sobre o(s) turno(s) (manhã, tarde ou noite).'
        return false
      }

      // Validate school form
      if (!this.school.form.project || !this.school.form.suggestion || !this.school.form.availability) {
        this.errorMessage = 'É necessário responder todas as perguntas.'
        return false
      }

      return true
    },
    validateShifts: function () {
      let morningCount = 0
      Object.keys(this.school.shifts.morning).forEach(morningShifts => {
        if (morningShifts !== 'enabled' && morningShifts !== 'filled') {
          if (this.school.shifts.morning[morningShifts] > 0) {
            morningCount += 1
          }
        }
      })

      morningCount > 0 ? this.school.shifts.morning.filled = true : this.school.shifts.morning.filled = false

      let afternoonCount = 0
      Object.keys(this.school.shifts.afternoon).forEach(afternoonShifts => {
        if (afternoonShifts !== 'enabled' && afternoonShifts !== 'filled') {
          if (this.school.shifts.afternoon[afternoonShifts] > 0) {
            afternoonCount += 1
          }
        }
      })

      afternoonCount > 0 ? this.school.shifts.afternoon.filled = true : this.school.shifts.afternoon.filled = false

      let nightCount = 0
      Object.keys(this.school.shifts.night).forEach(nightShifts => {
        if (nightShifts !== 'enabled' && nightShifts !== 'filled') {
          if (this.school.shifts.night[nightShifts] > 0) {
            nightCount += 1
          }
        }
      })

      nightCount > 0 ? this.school.shifts.night.filled = true : this.school.shifts.night.filled = false

      return (this.school.shifts.morning.filled || this.school.shifts.afternoon.filled || this.school.shifts.night.filled)
    },
    validateCNPJ: function (cnpj) {
      const repeatedCnpj = this.registrations.filter(registration => {
        return (registration.school.cnpj === this.school.cnpj)
      })

      if (repeatedCnpj.length > 0) {
        this.cnpjValidAndUnique = false
        this.errorMessage = 'Este CNPJ já está cadastrado. Se não foi você quem cadastrou ou se deseja atualizar alguma informação, por favor entre em contato através do telefone (31) 99229.6485 (Maiara) ou maiara@fortini.com.br.'
        return false
      }

      const b = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
      let i = 0
      let n = 0

      if ((cnpj = cnpj.replace(/[^\d]/g, '')).length !== 14) {
        this.cnpjValidAndUnique = false
        return false
      }

      if (/0{14}/.test(cnpj)) {
        this.cnpjValidAndUnique = false
        return false
      }

      for (i = 0, n = 0; i < 12; n += cnpj[i] * b[++i]);
      if (Number(cnpj[12]) !== (((n %= 11) < 2) ? 0 : 11 - n)) {
        this.cnpjValidAndUnique = false
        return false
      }

      for (i = 0, n = 0; i <= 12; n += cnpj[i] * b[i++]);
      if (Number(cnpj[13]) !== (((n %= 11) < 2) ? 0 : 11 - n)) {
        this.cnpjValidAndUnique = false
        return false
      }

      this.cnpjValidAndUnique = true
      return true
    },
    validatePhone: function (source, phone) {
      let phoneNumber = phone.match(/\d/g)
      let phoneLength = 0
      if (phoneNumber) {
        phoneLength = phoneNumber.join('').length
      }

      if (source === 'responsible') {
        return !(phoneLength < 10)
      }
      if (source === 'school') {
        return !(phoneLength < 10)
      }
      if (source === 'director') {
        return !(phoneLength < 10)
      }
      if (source === 'viceDirector') {
        return !(phoneLength < 10)
      }

      // todo Corrigir validação de phone e substituir componente mask pelo the-vue-mask
    },
    validateMail: function (source, mail) {
      let mailValidation = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

      if (source === 'responsible') {
        return mailValidation.test(mail)
      }
      if (source === 'school') {
        return mailValidation.test(mail)
      }
      if (source === 'director') {
        return mailValidation.test(mail)
      }
      if (source === 'viceDirector') {
        return mailValidation.test(mail)
      }
    },
    getTimeStamp: function () {
      const time = new Date().toLocaleTimeString('pt-BR')
      const date = new Date().toLocaleDateString('pt-BR')
      return (`${date} às ${time}`)
    },
    phoneMask: function (value) {
      let phone = value.match(/\d/g)
      let phoneLength = 0
      if (phone) {
        phoneLength = phone.join('').length
      }

      if (phoneLength > 10) {
        return ['(', /[1-9]/, /[1-9]/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
      } else {
        return ['(', /[1-9]/, /[1-9]/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/]
      }
    },
    submitSchool: function () {
      this.timeStamp = this.getTimeStamp()
      this.validateShifts()
      if (this.validateForm()) {
        const school = {
          responsible: this.responsible,
          school: this.school,
          timeStamp: this.timeStamp
        }

        firebaseApp.auth().onAuthStateChanged(user => {
          if (user) {
            if (schoolRegistration.push(school)) {
              this.errorMessage = null
              this.successMessage = 'O cadastro foi efetuado com sucesso. Em breve entraremos em contato.'
              return
              // this.successMessage = 'O cadastro foi efetuado com sucesso. Em breve você receberá uma confirmação por e-mail.'
            }
            this.successMessage = null
            this.errorMessage = 'Ocorreu um erro ao tentar enviar o cadastro. Por favor tente novamente nos próximos minutos.'
          }
        })

        firebaseApp.auth().signInAnonymously()
          .catch(error => {
            const errorCode = error.code
            const errorMessage = error.message

            this.errorMessage = `Ocorreu um erro: (${errorCode}) ${errorMessage}`
          })
      }
    }
  }
  // watch: {
  //   'school.shifts.morning': {
  //     handler: function () {
  //       if (this.school.shifts.morning.firstToFifth && this.school.shifts.morning.firsttoFifthTeachers && this.school.shifts.morning.firstToThird && this.school.shifts.morning.firstToThirdTeachers && this.school.shifts.morning.sixthToNinth && this.school.shifts.morning.sixthToNinthTeachers && this.school.shifts.morning.eja && this.school.shifts.morning.ejaTeachers) {
  //         this.school.shifts.morning.filled = true
  //       } else {
  //         this.school.shifts.morning.filled = false
  //       }
  //     },
  //     deep: true
  //   },
  //   'school.shifts.afternoon': {
  //     handler: function () {
  //       if (this.school.shifts.afternoon.firstToFifth && this.school.shifts.afternoon.firsttoFifthTeachers && this.school.shifts.afternoon.firstToThird && this.school.shifts.afternoon.firstToThirdTeachers && this.school.shifts.afternoon.sixthToNinth && this.school.shifts.afternoon.sixthToNinthTeachers && this.school.shifts.afternoon.eja && this.school.shifts.afternoon.ejaTeachers) {
  //         this.school.shifts.afternoon.filled = true
  //       } else {
  //         this.school.shifts.afternoon.filled = false
  //       }
  //     },
  //     deep: true
  //   },
  //   'school.shifts.night': {
  //     handler: function () {
  //       this.validateShifts()
  //       if (this.school.shifts.night.filled) {
  //         console.log('Preencheu algo')
  //         return
  //       }
  //       console.log('nada consta')
  //       // if (this.school.shifts.night.firstToFifth && this.school.shifts.night.firsttoFifthTeachers && this.school.shifts.night.firstToThird && this.school.shifts.night.firstToThirdTeachers && this.school.shifts.night.sixthToNinth && this.school.shifts.night.sixthToNinthTeachers && this.school.shifts.night.eja && this.school.shifts.night.ejaTeachers) {
  //       //   this.school.shifts.night.filled = true
  //       // } else {
  //       //   this.school.shifts.night.filled = false
  //       // }
  //     },
  //     deep: true
  //   }
  // }
}
</script>

<style lang="scss" scoped>
// Question label
.question-label {
  font-family: 'Satisfy', sans-serif;
  font-weight: 400;
  font-size: 28px;
  color: #24dbdd;
  filter: drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.2));
  width: 100%;
  height: 90%;
  display:flex;
  align-items: center;
  justify-content: center;
}

// SVG Column
.illustration {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90%;

  .svg {
    max-height: 128px;
  }
}

// Form
input {
  width: 100%;
  padding: 10px 8px;
  border: none;
  border-bottom: 1px solid #EEE;
  -webkit-transition: all 0.375s ease;
  -moz-transition: all 0.375s ease;
  -ms-transition: all 0.375s ease;
  -o-transition: all 0.375s ease;
  transition: all 0.375s ease;

  &.form-inline {
    display: inline-block;
    width: 55px;
    text-align: center;
  }

  &.filled,
  &:focus,
  &:active,
  &:hover {
    border-bottom: 1px solid #24dbdd;
  }

  &.filled {
    &.invalid {
      border-bottom: 1px solid red;
    }
  }
}

label {
  position: absolute;
  top: 0;
  left: 10px;
  color: #999;
  visibility: hidden;
  opacity: 0;
  -webkit-transition: all 0.375s ease;
  -moz-transition: all 0.375s ease;
  -ms-transition: all 0.375s ease;
  -o-transition: all 0.375s ease;
  transition: all 0.375s ease;

  &.up-label {
    color: #454545;
    left: 10px;
    top: -20px;
    visibility: visible;
    opacity: 1;

    &.invalid {
      color: red;
    }
  }
}

textarea {
  width: 100%;
  line-height: 30px;
  padding: 20px;
  resize: none;
  border-radius: 4px;
  font-size: 16px;
  border: 1px solid #D5D5D5;

  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  &::-webkit-scrollbar {
    width: 12px;
    background-color: #F5F5F5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #CCC;
  }

  &:focus {
    border: 1px solid #CCC;
  }
}
</style>
