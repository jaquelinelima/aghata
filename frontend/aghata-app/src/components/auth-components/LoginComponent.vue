<template>
  <div class="flex flex-1 h-screen">
    <div class="flex flex-1 flex-col justify-center bg-gray-100 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <div class="mx-auto w-full max-w-sm lg:w-96">
        <div class="text-center mt-5">
          <div class="grid place-items-center ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-auto h-12 text-primary"><path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>
          </div>
          <h2 class="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">Faça seu login</h2>
        </div>
        <div class="mt-10">
          <div>
            <form action="#" method="POST" class="space-y-6">
              <div>
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">E-mail</label>
                <div class="mt-2">
                  <input v-model="loginForm.email" id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div>
                <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Senha</label>
                <div class="mt-2">
                  <input v-model="loginForm.password" id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-tertiary focus:ring-tertiary" />
                  <label for="remember-me" class="ml-3 block text-sm leading-6 text-gray-700">Lembrar de mim</label>
                </div>
                <div class="text-sm leading-6">
                  <router-link to="/forgotpassword" class="font-semibold text-primary hover:text-tertiary">Esqueci a senha.</router-link>
                </div>
              </div>
              <div>
                <button  @click="submitLoginUser" type="submit" class="flex w-full justify-center rounded-md bg-secundary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-tertiary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Entrar</button>
              </div>
            </form>
          </div>
          <div class="mt-10 text-center mb-20">
            <p class="mt-2 text-sm leading-6 text-gray-500">Não tem um conta cadastrada?{{ ' ' }}
              <router-link to="/register" class="font-semibold text-primary hover:text-tertiary">Cadastre-se aqui</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="relative hidden w-0 flex-1 lg:block">
      <img class="absolute inset-0 h-full w-full object-fill" src="../../assets/svg/login.svg">
    </div>
  </div>
</template>
<script>
import LoginService from '../../services/LoginService';
import swal from 'sweetalert';

export default {
  name: 'LoginComponent',
  data() {
    return {
      loginForm: {
        email: null,
        password: null,
      },
      isSubmitted: false,
    };
  },
  
  methods: {
    loginSubmitUserForm() { },

    async submitLoginUser() {
      try {
        this.isSubmitted = true;
        this.$v.$touch();
        if (this.$v.$invalid) {
          swal({
            title: 'Oops!',
            text: 'Você precisa incluir todos os campos obrigatórios!',
            icon: 'error',
          });
          return;
        }
        await LoginService.loginUser(this.loginForm);
        this.$router.push('/');
      } catch (error) {
        swal({
          title: 'Oops!',
          text: 'Alguma coisa deu errado aqui!',
          icon: 'error',
        });
        this.$router.push('/login');
      }
    },

  },
}
</script>