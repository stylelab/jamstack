<template>
  <main class="main">
    <h1 class="title">{{ title }}</h1>
    <h2>{{body}}</h2>
    <p class="publishedAt">{{ publishedAt }}</p>
  </main>
</template>

<script>
import axios from "axios";

export default {
  async asyncData({ params }) {
    const { data } = await axios.get(
      `https://stylelab-jamstacktest.microcms.io/api/v1/detail/${params.slug}`,
      {
        headers: { "X-API-KEY": "e0c83144-fb8b-4ddc-84cd-e0ecd86a7337" }
      }
    );
    return data;
  }
};
</script>
