<template>
    <div>
      <div>
        <v-lazy-image class="h-48 w-full object-cover lg:h-72" :src="profile.backgroundImage" alt="" />
      </div>
      <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
          <div class="flex">
            <v-lazy-image class="h-auto w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32" :src="profile.avatar" alt="" />
          </div>
          <div class="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
            <div class="mt-6 min-w-0 flex-1 sm:hidden md:block">
              <h1 class="truncate text-2xl font-bold text-gray-600">{{ profile.name }}</h1>
            </div>
            <div class="justify-stretch mt-6 flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
    <div class="relative mt-1 rounded-md shadow-sm border pr-3">
      <div>
 <slot name="select"></slot>
  </div>
    </div>
         
            </div>
          </div>
        </div>
        <div class="mt-6 hidden min-w-0 flex-1 sm:block md:hidden">
          <h1 class="truncate text-2xl font-bold text-gray-900">{{ profile.name }}</h1>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
import VLazyImage from "v-lazy-image";
  const profile = {
    name: 'PUPS+',
    avatar:
      'https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    backgroundImage:
      'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2946&q=80',

  }
  </script>