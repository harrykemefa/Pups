<template>
    <!--
      This example requires updating your template:
  
      ```
      <html class="h-full">
      <body class="h-full">
      ```
    -->
    <div class="flex min-h-full flex-col bg-white lg:relative">
      <div class="flex flex-grow flex-col">
        <main class="flex flex-grow flex-col bg-white">
          <div class="mx-auto flex w-full max-w-7xl flex-grow flex-col px-6 lg:px-8">
            <div class="flex-shrink-0 pt-10 sm:pt-16">
              <router-link to="/" class="inline-flex">
                <span class="sr-only bg-red text-lg">PUPS+</span>
               <h2 class="text-2xl font-bold text-gray-600">PUPS+</h2>
              </router-link>
            </div>
            <div class="my-auto flex-shrink-0 py-16 sm:py-32">
              <h1 class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">{{ $store.state.pupInfo.breed }} </h1>
              <p class="mt-2 text-base text-gray-500">This is a picture of a {{ $store.state.pupInfo.breed }} breed dog.</p>
              <div class="mt-6">
                <router-link to="/" class="text-base cursor-pointer font-medium text-gray-600 hover:text-gray-500">
                  Go back to Pups
                  <span aria-hidden="true"> &rarr;</span>
                </router-link>
              </div>
            </div>
          </div>
        </main>
        <footer class="flex-shrink-0 bg-white">
          <div class="mx-auto w-full max-w-7xl py-16 px-6 lg:px-8">
          </div>
        </footer>
      </div>
      <div class="relative lg:absolute inset-y-0 lg:right-0 block lg:w-1/2">
        <v-lazy-image  class="absolute inset-0 lg:h-full w-full object-cover" :src="$store.state.pupInfo.image" />
      </div>
    </div>
  </template>

  <script setup> 
  import VLazyImage from "v-lazy-image";
  import { useStore } from 'vuex';
  const store = useStore();
  </script>