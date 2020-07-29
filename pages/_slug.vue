<template>	
 <section class="container">
   <p class="back">
     <nuxt-link to="/">⟵ Back to Home</nuxt-link>
   </p>
   <h1>{{ post.fields.title }}</h1>
   <p class="author">By {{ post.fields.author.fields.name }}</p>
   <div
     class="image"
     :style="
       `background: url(https:${post.fields.heroImage.fields.file.url}) center center no-repeat`
     "
   >
   <article v-html="$md.render(post.fields.body)"></article>
   </div>
 </section>

</template>

<script>
export default {
data() {
   return {
     slug: this.$route.params.slug
   };
 },
 computed: {
   post() {
     let post = this.$store.state.posts.filter(
       el => el.fields.slug === this.slug
     );
     return post[0];
   }
 },
 head() {
   return {
     title: this.post.fields.title
   };
 }
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
