<template>
  <div class="h-screen">
    <main class="relative isolate min-h-full">
      <img src="../assets/svg/404.svg" alt="404" class="absolute inset-0 -z-10 h-full w-full object-cover object-top">
      <div class="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
        <p class="text-base font-bold leading-8 text-tertiary">404</p>
        <h1 class="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-5xl">Página não encontrada</h1>
        <p class="mt-4 text-base text-tertiary sm:mt-6">Desculpe, não encontramos a página que você está procurando.</p>
        <div class="mt-10 flex justify-center">
          <router-link to="/" class="text-sm font-bold leading-7 text-tertiary"><span aria-hidden="true">&larr;</span> Home</router-link>
        </div>
      </div>
    </main>
  </div>
</template>
