<template>
  <div class="blog-list">
    <div v-for="blog in blogs" :key="blog.id" class="blog-card">
      <img :src="blog.thumbnailUrl" alt="Blog Image" />
      <h3>{{ blog.title }}</h3>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { useBlogStore } from '../store/blogs'; // Adjusted import path

export default {
  setup() {
    const blogStore = useBlogStore();

    onMounted(async () => {
      await blogStore.fetchBlogs();
    });

    return {
      blogs: blogStore.blogs,
    };
  },
};
</script>

<style scoped>
.blog-list {
  display: flex;
  flex-wrap: wrap;
}

.blog-card {
  flex: 1 1 calc(33.333% - 1em);
  margin: 0.5em;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 1em;
  box-sizing: border-box;
  background-color: #e0fae3; /* Light blue background color */
}

.blog-card img {
  max-width: 100%;
  height: auto;
  display: block;
}

.blog-card h3 {
  margin-top: 0.5em;
}
</style>
