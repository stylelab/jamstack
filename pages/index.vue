<template>
  <ul>
    <li v-for="content in contents" :key="content.id">
      <nuxt-link :to="`/${content.id}`">
        {{ content.title }} <br />
        {{ content.title2 }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
import axios from "axios";
export default {
  async asyncData() {
    const { data } = await axios.get(
      "https://stylelab-jamstacktest.microcms.io/api/v1/news",
      {
        headers: { "X-API-KEY": "e0c83144-fb8b-4ddc-84cd-e0ecd86a7337" }
      }
    );
    return data;
  }
};
</script>
