<template>
  <main>
   <AHeader />
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
  pups: computed(() => store.state.all),
  isLoading: computed(() => store.state.loading),
});

onMounted(async () => {
  await store.dispatch('fetchPups')
});

</script>
