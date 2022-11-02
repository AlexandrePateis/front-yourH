<template>
  <div class="home">
    <div class="cardsdash">
      <CardDashboard />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CardDashboard from '@/components/CardDashboard.vue'

export default {
  name: 'HomeView',
  components: {
    CardDashboard,
  },
}
</script>

<style>
.cardsdash{
  display: flex;
  justify-content: center;
  gap: 2em;
  margin-top: 0;
}
</style>