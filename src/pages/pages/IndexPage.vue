<template>
  <div>
    <h1>Blog Posts</h1>
    <BlogList />
  </div>
</template>

<script>
import BlogList from '../components/BlogList.vue'; // Adjusted import path

export default {
  components: {
    BlogList,
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 1em;
}
</style>
