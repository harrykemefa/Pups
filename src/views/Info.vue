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
              <p class="text-base font-semibold text-indigo-600">German Sherpherds</p>
              <h1 class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Info</h1>
              <p class="mt-2 text-base text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti ut voluptate hic, vero molestias ad itaque eum. Provident vero, quam accusamus numquam laborum suscipit fuga error commodi voluptatem, libero mollitia?.</p>
              <div class="mt-6">
                <router-link to="/" class="text-base font-medium text-indigo-600 hover:text-indigo-500">
                  Go back home
                  <span aria-hidden="true"> &rarr;</span>
                </router-link>
              </div>
            </div>
          </div>
        </main>
        <footer class="flex-shrink-0 bg-gray-50">
          <div class="mx-auto w-full max-w-7xl py-16 px-6 lg:px-8">
            <nav class="flex space-x-4">
              <a href="#" class="text-sm font-medium text-gray-500 hover:text-gray-600">Contact Support</a>
              <span class="inline-block border-l border-gray-300" aria-hidden="true" />
              <a href="#" class="text-sm font-medium text-gray-500 hover:text-gray-600">Status</a>
              <span class="inline-block border-l border-gray-300" aria-hidden="true" />
              <a href="#" class="text-sm font-medium text-gray-500 hover:text-gray-600">Twitter</a>
            </nav>
          </div>
        </footer>
      </div>
      <div class="hidden lg:absolute lg:inset-y-0 lg:right-0 lg:block lg:w-1/2">
        <img class="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2946&q=80" alt="" />
      </div>
    </div>
  </template>
  