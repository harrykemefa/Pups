<template>
  <main>
   <AHeader />
  <APup>
    <template #pup-items>
      <APupItem v-for="(pup, index) in state.pups" :key="index" :pup="pup" />
    </template>
  </APup>
  </main>
</template>

<script setup>
import AHeader from '@/components/AHeader/index.vue';
import APup from '@/components/APup/index.vue';
import APupItem from '@/components/APupItem/index.vue';
import { onMounted, reactive, computed } from 'vue'
import { useStore } from 'vuex';
const store = useStore();


const state = reactive({
  pups: computed(() => store.state.all),
});

onMounted(() => {
  store.dispatch('fetchPups')
});

</script>
