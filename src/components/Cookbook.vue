<template>
  <v-card class="w-75">
    <v-card-title>Cookbook:</v-card-title>
    <v-list density="compact">
      <v-list-group value="Inputs">
        <template v-slot:activator="{ props }">
          <v-list-item
              v-bind="props"
              title="Inputs"
          ></v-list-item>
        </template>

        <v-list-item
            v-for="(item, i) in options.inputs"
            :key="i"
            :value="item"
            color="primary"
        >
          <v-row no-gutters>
            <v-col cols="1">
              <v-sheet class="pa-2 ma-2">
                <a href="https://informatievlaanderen.github.io/VSDS-Linked-Data-Interactions/ldio/ldio-inputs">
                  <v-img :src="myImage"  v-if="isLdioComponent(item)" />
                </a>
                <v-icon icon="mdi-help" v-if="!isLdioComponent(item)"/>
              </v-sheet>
            </v-col>
            <v-col>
              <v-sheet class="pa-2 ma-2">
                <v-list-item-title v-text="item" class="w-100" style="text-align: right"></v-list-item-title>
              </v-sheet>
            </v-col>
          </v-row>

        </v-list-item>

      </v-list-group>
      <v-list-group value="Adapters" class="w-100">
        <template v-slot:activator="{ props }">
          <v-list-item
              v-bind="props"
              title="Adapters"
          ></v-list-item>
        </template>

        <v-list-item
            v-for="(item, i) in options.adapters"
            :key="i"
            :value="item"
            color="primary"
            class="w-100"
        >
          <v-row no-gutters>
            <v-col cols="1">
              <v-sheet class="pa-2 ma-2">
                <a href="https://informatievlaanderen.github.io/VSDS-Linked-Data-Interactions/ldio/ldio-adapters">
                  <v-img :src="myImage"  v-if="isLdioComponent(item)" />
                </a>
                <v-icon icon="mdi-help" v-if="!isLdioComponent(item)"/>
              </v-sheet>
            </v-col>
            <v-col>
              <v-sheet class="pa-2 ma-2">
                <v-list-item-title v-text="item" class="w-100" style="text-align: right"></v-list-item-title>
              </v-sheet>
            </v-col>
          </v-row>

        </v-list-item>

      </v-list-group>
      <v-list-group value="Transformers">
        <template v-slot:activator="{ props }">
          <v-list-item
              v-bind="props"
              title="Transformers"
          ></v-list-item>
        </template>

        <v-list-item
            v-for="(item, i) in options.transformers"
            :key="i"
            :value="item"
            color="primary"
        >
          <v-row no-gutters>
            <v-col cols="1">
              <v-sheet class="pa-2 ma-2">
                <a href="https://informatievlaanderen.github.io/VSDS-Linked-Data-Interactions/ldio/ldio-transformers">
                  <v-img :src="myImage"  v-if="isLdioComponent(item)" />
                </a>
                <v-icon icon="mdi-help" v-if="!isLdioComponent(item)"/>
              </v-sheet>
            </v-col>
            <v-col>
              <v-sheet class="pa-2 ma-2">
                <v-list-item-title v-text="item" class="w-100" style="text-align: right"></v-list-item-title>
              </v-sheet>
            </v-col>
          </v-row>
        </v-list-item>

      </v-list-group>

      <v-list-group value="Outputs">
        <template v-slot:activator="{ props }">
          <v-list-item
              v-bind="props"
              title="Outputs"
          ></v-list-item>
        </template>

        <v-list-item
            v-for="(item, i) in options.outputs"
            :key="i"
            :value="item"
            color="primary"
        >
          <v-row no-gutters>
            <v-col cols="1">
              <v-sheet class="pa-2 ma-2">
                <a href="https://informatievlaanderen.github.io/VSDS-Linked-Data-Interactions/ldio/ldio-outputs">
                  <v-img :src="myImage"  v-if="isLdioComponent(item)" />
                </a>
                <v-icon icon="mdi-help" v-if="!isLdioComponent(item)"/>
              </v-sheet>
            </v-col>
            <v-col>
              <v-sheet class="pa-2 ma-2">
                <v-list-item-title v-text="item" class="w-100" style="text-align: right"></v-list-item-title>
              </v-sheet>
            </v-col>
          </v-row>
        </v-list-item>

      </v-list-group>

    </v-list>
  </v-card>

</template>

<script>
import axios from 'axios'

export default {
  name: 'CookBook',
  mounted() {
    axios.get('http://localhost:8080/admin/api/v1/catalog/inputs')
        .then((response) => {
          this.options.inputs = response.data
        })
    axios.get('http://localhost:8080/admin/api/v1/catalog/adapters')
        .then((response) => {
          this.options.adapters = response.data
        })
    axios.get('http://localhost:8080/admin/api/v1/catalog/transformers')
        .then((response) => {
          this.options.transformers = response.data
        })
    axios.get('http://localhost:8080/admin/api/v1/catalog/outputs')
        .then((response) => {
          this.options.outputs = response.data
        })

  },
  data() {
    return {
      options: {
        inputs: [],
        adapters: [],
        transformers: [],
        outputs: [],
      },
      myImage: require('@/assets/flanders.png')
    }
  },
  methods: {
    isLdioComponent: function (item) {
      return item.includes('be.vlaanderen.informatievlaanderen.ldes.ldio');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
