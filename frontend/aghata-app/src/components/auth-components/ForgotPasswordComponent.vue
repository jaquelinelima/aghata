<template>
  <div class="flex flex-1 h-screen">
    <div class="flex flex-1 flex-col justify-center bg-gray-100 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <div class="mx-auto w-full max-w-sm lg:w-96">
        <div class="text-center mt-15">
          <h2 class="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">Esqueceu a senha?</h2>
          <p class="mt-5 text-sm leading-6 text-gray-500">Insira seu e-mail e receba um código de recuperação.</p>
        </div>
        <div class="mt-10">
          <div>
            <form action="#" method="POST" class="space-y-6">
              <div>
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">E-mail</label>
                <div class="mt-2">
                  <input id="email" name="email" type="email" autocomplete="email" required="" class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div>
                <button type="submit" class="flex w-full justify-center rounded-md bg-secundary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-tertiary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Enviar</button>
              </div>
            </form>
          </div>
          <div class="mt-10 text-center mb-20">
            <p class="mt-2 text-sm leading-6 text-gray-500">Não tem um conta cadastrada? {{ ' ' }}
              <router-link to="/register" class="font-semibold text-primary hover:text-tertiary">Cadastre-se aqui</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="relative hidden w-0 flex-1 lg:block">
      <img class="absolute inset-0 h-full w-full object-fill" src="../../assets/svg/forgot.svg">
    </div>
  </div>
</template>