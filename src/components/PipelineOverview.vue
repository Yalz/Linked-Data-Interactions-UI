<template>
  <v-layout class="d-flex">
    <v-table>
      <thead>
      <tr>
        <th class="text-left">Name</th>
        <th class="text-left">Description</th>
        <th class="text-left">Input</th>
        <th class="text-left">Transformers</th>
        <th class="text-left">Outputs</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="pipeline in pipelines"
          :key="pipeline.name">
        <td>{{ pipeline.name }}</td>
        <td>{{ pipeline.description }}</td>
        <td>{{ pipeline.input.name }}</td>
        <td>{{ pipeline.transformers.map((transformer) => {return transformer.name}) }}</td>
        <td>{{ pipeline.outputs.map((output) => {return output.name}) }}</td>
      </tr>
      </tbody>
    </v-table>
  </v-layout>

</template>

<script>
import axios from 'axios'

export default {
  name: 'PipelineOverview',
  mounted() {
    axios
        .get('http://localhost:8080/admin/api/v1/pipeline/overview')
        .then((response) => {
          this.pipelines = response.data
          console.log(response.data)
        })
  },
  data() {
    return {
      pipelines: []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
