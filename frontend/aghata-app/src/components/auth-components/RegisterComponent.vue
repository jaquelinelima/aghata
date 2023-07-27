<template>
  <div class="flex h-screen flex-1">
    <div class="flex flex-1 flex-col justify-center bg-gray-100 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <div class="mx-auto w-full max-w-sm lg:w-96">
        <div class="text-center">
          <h2 class="mt-10 text-2xl font-bold leading-9 tracking-tight text-gray-900">Faça seu cadastro</h2>
        </div>
        <div class="mt-10">
          <div>
            <form action="#" method="POST" class="space-y-6">
              <div>
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Nome</label>
                <div class="mt-2">
                  <input id="email" name="email" type="email" autocomplete="email" required="" class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div>
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">E-mail</label>
                <div class="mt-2">
                  <input id="email" name="email" type="email" autocomplete="email" required="" class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div>
                <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Senha</label>
                <div class="mt-2">
                  <input id="password" name="password" type="password" autocomplete="current-password" required="" class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div>
                <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Confirmação de senha</label>
                <div class="mt-2">
                  <input id="password" name="password" type="password" autocomplete="current-password" required="" class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div>
                <button type="submit" class="flex w-full justify-center rounded-md bg-secundary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-tertiary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Cadastrar</button>
              </div>
            </form>
          </div>
          <div class="mt-10 text-center mb-20">            
            <p class="mt-2 text-sm leading-6 text-gray-500">Já tem uma conta? {{ ' ' }}
              <router-link to="/login" class="font-semibold text-primary hover:text-tertiary">Entre aqui.</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="relative hidden w-0 flex-1 lg:block">
      <img class="absolute inset-0 h-full w-full object-fill" src="../../assets/svg/register.svg">
    </div>
  </div>
</template>
<script>
import swal from 'sweetalert';
import RegisterService from '../../services/RegisterService';

export default {
  name: 'RegisterComponent',
  data() {
    return {
      registerForm: {
        name: null,
        email: null,
        password: null,
      },
      isSubmitted: false,
    };
  },

  methods: {
    registerSubmitUserForm() { },

    async submitRegisterUser() {
      try {
        this.isSubmitted = true;
        this.$v.$touch();
        if (this.$v.$invalid) {
          swal({
            title: 'Oops!',
            text: 'Você precisa incluir todos os dados obrigatórios!',
            icon: 'error',
          });
          return;
        }
        await RegisterService.registerNewUser(this.registerForm);
        this.$router.push('/');
      } catch (error) {
        swal({
          title: 'Oops!',
          text: 'Erro ao criar novo cadastro!',
          icon: 'error',
        });
      }
    },

  },
};
</script>