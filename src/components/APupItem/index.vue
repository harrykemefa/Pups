<template>
       <a @click="viewdetails(pup)" class="group text-sm">
          <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
            <v-lazy-image :src="pup" class="h-60 w-full object-cover object-center cursor-pointer" />
          </div>
          <!-- <h3 class="mt-4 font-medium text-gray-900">{{ pup.name }}</h3> -->
        </a>
</template>

<script setup>
import { defineEmits } from 'vue'
import VLazyImage from "v-lazy-image";
const props = defineProps({
pup: {
type: String,
required: true,
},
})

const emit = defineEmits(['viewdetails']);
function viewdetails(pup){
  emit('viewdetails', pup)
}
</script>