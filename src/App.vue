<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar
        color="teal-darken-4"
        image="https://www.w3.org/comm/assets/stock/shutterstock_728178127-500px.jpg"
    >
      <template v-slot:image>
        <v-img
            gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>Linked Data Interactions Orchestrator</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>



    <v-navigation-drawer>
      <v-list>
        <v-list-item><router-link to="/">Home</router-link></v-list-item>
        <v-list-item><router-link to="/create">Pipeline Creation</router-link></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center">
      <router-view></router-view>
    </v-main>
  </v-layout>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
</style>
