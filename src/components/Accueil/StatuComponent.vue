<template>
  <div class="mb-10">
    <v-textarea
      label="say something"
      auto-grow
      outlined
      rows="5"
      row-height="25"
      shaped
    ></v-textarea>
    <div class="text-center">
      <v-btn class="mx-2" fab dark small color="primary">
        <v-icon dark> mdi-share </v-icon>
      </v-btn>
      <v-btn class="mx-2" fab dark small color="primary">
        <v-icon dark> mdi-image </v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
    name:'StatuComponent'
};
</script>

<style>
</style>