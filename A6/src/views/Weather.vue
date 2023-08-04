<script>
import fixtures from '../fixtures.json'
export default {
  name: 'Weather',
}
</script>
<!-- weather images are from: https://www.figma.com/community/file/1055423831380090925/3D-Weather-Icons---(Community) -->
<!-- background gradients are from Unsplash -->
<template>
  <RouterView>
    <!-- <h1>{{ this.$route }}</h1> -->
    <!-- <h1>City: {{this.fixtures[this.$route.params.city_link].name}}</h1>
    <h1>High: {{this.fixtures[this.$route.params.city_link].high}}</h1>
    <b-card :img-src="`${this.baseDir}images/${this.fixtures[this.$route.params.city_link].img}`"></b-card> -->
    <b-card overlay style = "max-width: 100%;" :title= this.fixtures[this.$route.params.city_link].name :img-src="`${this.baseDir}images/${this.fixtures[this.$route.params.city_link].bg}`">
      <b-card-text>{{ this.fixtures[this.$route.params.city_link].description }}</b-card-text>
      <div id="image">
        <b-img :width=300 :src="`${this.baseDir}images/${this.fixtures[this.$route.params.city_link].img}`"></b-img>
      </div>
      <hr>
      <h3>Now: {{ this.fixtures[this.$route.params.city_link].current }}</h3>
      <h3>High: {{ this.fixtures[this.$route.params.city_link].high }}</h3>
      <h3>Low: {{ this.fixtures[this.$route.params.city_link].low }}</h3>
      <hr>

        <b-button variant ="light"><RouterLink to="/">Home</RouterLink></b-button>
      <!-- <b-button variant="light"><RouterLink>Home</RouterLink></b-button> -->
    </b-card>
  </RouterView>

</template>
<style>
  #image {
    background: rgba(255,255,255, .5);
    border-radius: 10px;
    margin:auto;
    display: flex;
    justify-content: center;
  }

</style>
