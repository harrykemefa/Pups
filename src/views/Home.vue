<template>
  <main>
   <AHeader />
   <div class="bg-white">
    <div class="mx-auto max-w-7xl overflow-hidden py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
        <APupItem v-for="pup in pups" :key="pup.id" :pup="pup" />
      </div>
    </div>
  </div>
  </main>
</template>

<script setup>
import AHeader from '@/components/AHeader/index.vue';
import APupItem from '@/components/APupItem/index.vue';
const pups = [
  {
    id: 1,
    name: 'Bull Dog',
   imageSrc: 'https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80',
   
  },
  {
    id: 2,
    name: 'Chiwawa',
    imageSrc: 'https://images.unsplash.com/photo-1625316708582-7c38734be31d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
   
  },
  {
    id: 3,
    name: 'German Sherpherd',
    imageSrc: 'https://images.unsplash.com/photo-1540411003967-af56b79be677?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  
  },
  // More products...
]
</script>
