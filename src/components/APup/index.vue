<template>
     <div class="bg-white">
    <div class="mx-auto max-w-7xl overflow-hidden py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div class="py-6 sm:flex sm:items-baseline sm:justify-between">
        <h2 class="text-2xl font-bold tracking-tight text-gray-600"> Featured Pups</h2>
      </div>
      <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
        <slot name="pup-items"></slot>
      </div>
    </div>
  </div>
</template>