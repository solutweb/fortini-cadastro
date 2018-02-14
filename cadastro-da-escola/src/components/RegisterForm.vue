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
                           <label for="responsiblePhone" class="smaller-text" :class="{ 'up-label': responsible.phone }">{{phoneLabel}}</label>
                           <masked-input type="text" :guide="true" :placeholderChar="'\u2000'" :mask="phoneMask(responsible.phone)" :class="{ filled: responsible.phone }" id="responsiblePhone" name="responsiblePhone" v-model="responsible.phone" :placeholder="phoneLabel"></masked-input>
                        </div>
                     </div>
                     <div class="column is-4">
                        <div class="form-group">
                           <label for="responsibleMail" class="smaller-text" :class="{ 'up-label': responsible.mail, invalid: !responsible.validMail }">{{mailLabel}}</label>
                           <input type="text" :class="{ filled: responsible.mail, invalid: !responsible.validMail }" id="responsibleMail" name="responsibleMail" v-model="responsible.mail" :placeholder="mailLabel" @blur="validateMail('responsible', responsible.mail)">
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
                     <div class="column is-4">
                        <div class="form-group">
                           <label for="school-phone" class="smaller-text" :class="{ 'up-label': school.phone }">{{phoneLabel}}</label>
                           <masked-input type="text" :guide="true" :placeholderChar="'\u2000'" :mask="phoneMask(school.phone)" :class="{ filled: school.phone }" id="school-phone" name="school-phone" v-model="school.phone" :placeholder="phoneLabel"></masked-input>
                        </div>
                     </div>
                     <div class="column is-4">
                        <div class="form-group">
                           <label for="school-mail" class="smaller-text" :class="{ 'up-label': school.mail, invalid: !school.validMail }">{{mailLabel}}</label>
                           <input type="text" :class="{ filled: school.mail, invalid: !school.validMail }" id="school-mail" name="school-mail" v-model="school.mail" :placeholder="mailLabel" @blur="validateMail('school', school.mail)">
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
                           <label for="school-director-phone" class="smaller-text" :class="{ 'up-label': school.director.phone }">{{phoneLabel}}</label>
                           <masked-input type="text" :guide="true" :placeholderChar="'\u2000'" :mask="phoneMask(school.director.phone)" :class="{ filled: school.director.phone }" id="school-director-phone" name="school-director-phone" v-model="school.director.phone" :placeholder="phoneLabel"></masked-input>
                        </div>
                     </div>
                     <div class="column is-4">
                        <div class="form-group">
                           <label for="school-director-mail" class="smaller-text" :class="{ 'up-label': school.director.mail, invalid: !school.director.validMail }">{{mailLabel}}</label>
                           <input type="text" :class="{ filled: school.director.mail, invalid: !school.director.validMail }" id="school-director-mail" name="school-director-mail" v-model="school.director.mail" :placeholder="mailLabel" @blur="validateMail('schoolDirector', school.director.mail)">
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
                           <label for="school-vice-director-phone" class="smaller-text" :class="{ 'up-label': school.viceDirector.phone }">{{phoneLabel}}</label>
                           <masked-input type="text" :guide="true" :placeholderChar="'\u2000'" :mask="phoneMask(school.viceDirector.phone)" :class="{ filled: school.viceDirector.phone }" id="school-vice-director-phone" name="school-vice-director-phone" v-model="school.viceDirector.phone" :placeholder="phoneLabel"></masked-input>
                        </div>
                     </div>
                     <div class="column is-4">
                        <div class="form-group">
                           <label for="viceDirector" class="smaller-text" :class="{ 'up-label': school.viceDirector.mail, invalid: !school.viceDirector.validMail }">{{mailLabel}}</label>
                           <input type="text" :class="{ filled: school.viceDirector.mail, invalid: !school.schoolViceDirector.validMail }" id="schoolDirectorMail" name="viceDirector" v-model="school.viceDirector.mail" :placeholder="mailLabel" @blur="validateMail('schoolViceDirector', school.viceDirector.mail)">
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <h1 class="question-label bottom-margin">1) Quantos alunos e professores em média esta escola tem por turno:</h1>
            <div class="columns bottom-margin">
               <div class="column">
                  <div class="shift" :class="{ active: school.shifts.morning.enabled, filled: school.shifts.morning.filled }">
                     <div class="time" @click="school.shifts.morning.enabled = !school.shifts.morning.enabled">
                        <img src="../assets/time/sunrise.svg" width="96" height="96">
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
                        <img src="../assets/time/sun.svg" width="96" height="96">
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
                        <img src="../assets/time/cloudy.svg" width="96" height="96">
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
            <textarea class="bottom-margin" id="project" name="project" :placeholder="school.form.project.label" v-model="school.form.project.value" rows="4"></textarea>
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
            <textarea class="bottom-margin" id="suggestion" name="suggestion" :placeholder="school.form.suggestion.label" v-model="school.form.suggestion.value"  rows="4"></textarea>
            <div class="columns">
               <div class="column has-text-centered is-2">
                  <div class="illustration">
                     <img class="svg" src="../assets/form/calendar.svg">
                  </div>
               </div>
               <div class="column">
                  <h1 class="question-label bottom-margin">4) Qual a disponibilidade dos professores, supervisores, diretores reunirem ao menos uma vez por mês para participar de uma formação específica? Em qual perído e dia do mês seria o mais viável?</h1>
               </div>
            </div>
            <textarea class="bottom-margin" id="availability" name="availability" :placeholder="school.form.availability.label" v-model="school.form.availability.value" rows="4"></textarea>
            <div class="control bottom-margin">
               <button type="button" class="button is-primary" @click="addSchool()">Concluir cadastro</button>
            </div>
         </form>
      </div>
   </div>
</template>

<script>
import MaskedInput from 'vue-text-mask'
import firebase from 'firebase'

let config = {
    apiKey: 'AIzaSyA_vU1K13d8EMpahiRPkYguhA3YOeCZcDc',
    authDomain: 'cadastro-da-escola.firebaseapp.com',
    databaseURL: 'https://cadastro-da-escola.firebaseio.com',
    projectId: 'cadastro-da-escola',
    storageBucket: 'cadastro-da-escola.appspot.com',
    messagingSenderId: '873838200049'
}

let app = firebase.initializeApp(config)
let db = app.database()

let schoolRegistration = db.ref('inscription')

export default {
    name: 'RegisterForm',
    firebase: {
        registration: schoolRegistration
    },

    components: {
        MaskedInput
    },

    data() {
        return {
            responsible: {
                full_name: '',
                phone: '',
                mail: '',
                validMail: true
            },
            school: {
                full_name: '',
                phone: '',
                mail: '',
                validMail: true,
                director: {
                    full_name: '',
                    phone: '',
                    mail: '',
                    validMail: true
                },
                viceDirector: {
                    full_name: '',
                    phone: '',
                    mail: '',
                    validMail: true
                },
                form: {
                    project: {
                        value: ''
                    },
                    suggestion: {
                        value: ''
                    },
                    availability: {
                        value: ''
                    }
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
            schoolLabeL: 'Nome completo da escola',
            directorLabel: 'Nome completo do diretor da escola',
            viceDirectorLabel: 'Nome completo do vice-diretor da escola',
            phoneLabel: 'Respectivo telefone',
            mailLabel: 'Respectivo e-mail',
            projectLabel: 'Responda aqui',
            availabilityLabel: 'Responda aqui',
            suggestionLabel: 'Responda aqui'
        }
    },
    methods: {
        addSchool: function() {
            const school = {
                responsible: this.responsible,
                school: this.school
            }
            schoolRegistration.push(school)
        },
        validateMail: function(source, mail) {
            let mailValidation = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

            if (source === 'responsible') {
                !mailValidation.test(mail) ? this.responsible.validMail = false : this.responsible.validMail = true
            }
            if (source === 'school') {
                !mailValidation.test(mail) ? this.school.validMail = false : this.school.validMail = true
            }
            if (source === 'schoolDirector') {
                !mailValidation.test(mail) ? this.school.schoolDirector.validMail = false : this.school.schoolDirector.validMail = true
            }
            if (source === 'schoolViceDirector') {
                !mailValidation.test(mail) ? this.school.schoolViceDirector.validMail = false : this.school.schoolViceDirector.validMail = true
            }
        },
        getYear: function() {
            return (new Date().getUTCFullYear())
        },
        phoneMask: function(value) {
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
        }
    },
    watch: {
        'school.shifts.morning': {
            handler: function() {
                if (this.school.shifts.morning.firstToFifth && this.school.shifts.morning.firsttoFifthTeachers && this.school.shifts.morning.firstToThird && this.school.shifts.morning.firstToThirdTeachers && this.school.shifts.morning.sixthToNinth && this.school.shifts.morning.sixthToNinthTeachers && this.school.shifts.morning.eja && this.school.shifts.morning.ejaTeachers) {
                    this.school.shifts.morning.filled = true
                } else {
                    this.school.shifts.morning.filled = false
                }
            },
            deep: true
        },
        'school.shifts.afternoon': {
            handler: function() {
                if (this.school.shifts.afternoon.firstToFifth && this.school.shifts.afternoon.firsttoFifthTeachers && this.school.shifts.afternoon.firstToThird && this.school.shifts.afternoon.firstToThirdTeachers && this.school.shifts.afternoon.sixthToNinth && this.school.shifts.afternoon.sixthToNinthTeachers && this.school.shifts.afternoon.eja && this.school.shifts.afternoon.ejaTeachers) {
                    this.school.shifts.afternoon.filled = true
                } else {
                    this.school.shifts.afternoon.filled = false
                }
            },
            deep: true
        },
        'school.shifts.night': {
            handler: function() {
                if (this.school.shifts.night.firstToFifth && this.school.shifts.night.firsttoFifthTeachers && this.school.shifts.night.firstToThird && this.school.shifts.night.firstToThirdTeachers && this.school.shifts.night.sixthToNinth && this.school.shifts.night.sixthToNinthTeachers && this.school.shifts.night.eja && this.school.shifts.night.ejaTeachers) {
                    this.school.shifts.night.filled = true
                } else {
                    this.school.shifts.night.filled = false
                }
            },
            deep: true
        }
    }
}
</script>

<style lang="scss" scoped>
// School shifts: Morning, Afternoon and Night
.shift {
  border-bottom: 0;
  border-radius: 4px;
  -webkit-transition: all 2.0s ease, max-height 0.60s ease-out;
  -moz-transition: all 2.0s ease, max-height 0.60s ease-out;
  -ms-transition: all 2.0s ease, max-height 0.60s ease-out;
  -o-transition: all 2.0s ease, max-height 0.60s ease-out;
  transition: all 2.0s ease, max-height 0.60s ease-out;
  overflow: hidden;

  .time {
    width: 96px;
    height: 96px;
    margin: 0 auto;
    border-radius: 50%;
    padding: 15px;
    cursor: pointer;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);

    &:hover {
      filter: none;
    }

    .img-label {
      display: block;
      font-family: 'Satisfy', sans-serif;
      font-size: 20px;
      margin: 15px auto;
      text-align: center;
    }
  }

  .time-morning, 
  .time-afternoon, 
  .time-night {
    visibility: hidden;
    opacity: 0;
    max-height: 0;
    margin-top: 35px;
    padding: 20px;
    border: 1px solid #E5E5E5;
    border-left: 0;
    border-right: 0;
    -webkit-transition: all 2.0s ease, max-height 0.60s ease-out;
    -moz-transition: all 2.0s ease, max-height 0.60s ease-out;
    -ms-transition: all 2.0s ease, max-height 0.60s ease-out;
    -o-transition: all 2.0s ease, max-height 0.60s ease-out;
    transition: all 2.0s ease, max-height 0.60s ease-out;
    overflow: hidden;

    ul {
      margin: -20px;

      li {
        text-align: center;
        padding: 10px;
        border-bottom: 1px solid #E5E5E5;
        border-left: 0;
        border-right: 0;

        &:nth-last-child(1) {
          border-bottom: 0;
        }
      }
    }

    .and {
      margin-left: 10px;
    }
  }

  &.active {
    margin-top: -1px;
    border: 1px solid #E5E5E5;
    border-bottom: 0;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);

    .time {
      filter: none;
    }

    .time-morning, .time-afternoon, .time-night {
      visibility: visible;
      opacity: 1;
      max-height: 460px;
    }

    &.filled {
      border: 1px solid #24dbdd;
      border-bottom: 0;
      box-shadow: 0 0 15px rgba(36,219,221, 0.4);

      .time-morning, 
      .time-afternoon, 
      .time-night {
        border: 1px solid #24dbdd;
        border-left: 0;
        border-right: 0;
        border-bottom: 0;
        ul {
          li {
            border-bottom: 1px solid #24dbdd;
            border-left: 0;
            border-right: 0;
          }
        }
      }
    }
  }
}

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
