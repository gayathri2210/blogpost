import { defineStore } from 'pinia';
import axios from 'axios';

export const useBlogStore = defineStore('blogStore', {
  state: () => ({
    blogs: [],
  }),
  actions: {
    async fetchBlogs() {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/photos'
        );
        console.log(response.data); // Log the response to verify
        this.blogs = response.data.slice(0, 30); // Fetching only the first 30 posts for demonstration
      } catch (error) {
        console.error('Failed to fetch blogs:', error);
      }
    },
  },
});
