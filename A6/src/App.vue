<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

import fixtures from './fixtures.json'
</script>


<template>
  <header>
    <div class="wrapper">
      <nav>
        <b-button variant="light" v-for="(fixture, route) in this.fixtures"><RouterLink :to="`/weather/${route}`">{{ fixture.name }}</RouterLink></b-button>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script>

</script>
