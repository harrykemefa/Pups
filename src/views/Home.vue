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
      <APupItem  v-for="(pup, index) in state.pups" :key="index" :pup="pup"  @viewdetails="handleViewDetails" />
    </template>
  </APup>
  </main>
</template>

<script setup>
// Components
import AHeader from '@/components/AHeader/index.vue';
import APup from '@/components/APup/index.vue';
import APupItem from '@/components/APupItem/index.vue';
import ALoader from '@/components/ALoader/index.vue';

// Imports
import { onMounted, reactive, computed, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex';

const store = useStore();
const router = useRouter();
// State
const state = reactive({
  pups: store.state.all,
  breeds: computed(() => store.state.breeds),
  isLoading: computed(() => store.state.loading),
  selectedBreed: 'all',
  isDataLoaded: store.state.isDataLoaded,
});

// Filter Pups by Breed
const handleBreedSelection = async () => {
  if (state.selectedBreed !== 'all') {
      await store.dispatch('fetchBreedDogs', state.selectedBreed);
      state.pups = store.state.selectedBreed;
      } else {
        state.pups = store.state.all
      }
}

const handleViewDetails = (pup) => {
  store.dispatch('fetchSinglePup', pup);
  router.push(`/info/${store.state.pupInfo.breed}`);
}

// Fetch Pup Data
const fetchPupData = async () => {
  // Ensure fetching is done once
  if(!state.isDataLoaded){
    const [pups, breeds] = await Promise.all([
    store.dispatch('fetchPups'),
    store.dispatch('fetchBreeds')
  ]);
  }

  handleBreedSelection()
    
}


onMounted(() => {
  fetchPupData();
});

</script>
