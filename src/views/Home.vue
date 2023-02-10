<template>
  <main>
   <AHeader>
    <template #select>
      <select v-model="state.selectedBreed" @change="handleBreedSelection" class="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
      <option value="all">All Dogs</option>
      <option v-for="breed in state.breeds" :key="breed" :value="breed">{{ breed }}</option>
    </select>
    </template>
   </AHeader>
  <APup>
    <template v-if="state.isLoading" #loader>  <ALoader  /></template>
    <template v-else #pup-items>
      <APupItem  v-for="(pup, index) in state.pups" :key="index" :pup="pup" />
    </template>
  </APup>
  </main>
</template>

<script setup>
import AHeader from '@/components/AHeader/index.vue';
import APup from '@/components/APup/index.vue';
import APupItem from '@/components/APupItem/index.vue';
import ALoader from '@/components/ALoader/index.vue';
import { onMounted, reactive, computed } from 'vue'
import { useStore } from 'vuex';
const store = useStore();


const state = reactive({
  pups: store.state.all,
  breeds: computed(() => store.state.breeds),
  isLoading: computed(() => store.state.loading),
  selectedBreed: 'all'
});


const handleBreedSelection = async (breed) => {
  if (state.selectedBreed !== 'all') {
      await store.dispatch('fetchBreedDogs', state.selectedBreed);
      state.pups = store.state.selectedBreed;
      } else {
        state.pups = store.state.all
      }
}

onMounted(async () => {
  await store.dispatch('fetchPups');
  store.dispatch('fetchBreeds')
});

</script>
