<template>
  <main class="main">
    <h1 class="title">{{ data.title }}</h1>
    <p class="publishedAt">{{ data.publishedAt }}</p>
  </main>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      data: {}
    };
  },
  async created() {
    const query = this.$route.query;
    if (query.id === undefined || query.draftKey === undefined) {
      return;
    }
    const { data } = await axios.get(
      `https://stylelab-jamstacktest.microcms.io/api/v1/news/${query.id}?draftKey=${query.draftKey}`,
      {
        headers: { "X-API-KEY": "e0c83144-fb8b-4ddc-84cd-e0ecd86a7337" }
      }
    );
    this.data = data;
  }
};
</script>
