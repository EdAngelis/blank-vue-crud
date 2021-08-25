<template>
<div class="container">
	<v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="user.name"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="user.email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="register"
    >
      Registrar
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="goToPage('/')"
    >
      Voltar
    </v-btn>
  </v-form>
</div>
</template>

<script>

export default {
  data: () => ({
    user : {
        name:'',
        email:'',
      },
    valid: true,
    nameRules: [
      v => !!v || 'Insira Seu Nome',
    ],
    emailRules: [
      v => !!v || 'Insira seu E-mail',
      v => /.+@.+\..+/.test(v) || 'E-mail não é valido',
    ],
  }),

  methods: {
    validate () {
      this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
    register () {
      const valid = this.$refs.form.validate()
      if (valid) {
        this.axios.post(`${process.env.VUE_APP_ROOT_API}/user/create`, this.user)
        .then( resp => {
           console.log(resp)
           this.$router.push('/')
           })
      }
      
    },
    goToPage(page){
        this.$router.push(page);
      },
  },
}

</script>

<style lang="scss" scoped>

</style>