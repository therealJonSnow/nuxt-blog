<template>	
<div class="container">
	<h1 class="title">The Lost Buoy</h1>
	<section v-for="post in posts" :key="post.fields.slug">
		<h2 class="title">
			<nuxt-link :to="post.fields.slug">{{ post.fields.title }}</nuxt-link>
		</h2>
		<p class="author">By {{ post.fields.author.fields.name }}</p>
		<p class="description">
			{{ post.fields.description }}<br />
			<nuxt-link :to="post.fields.slug" class="more">Read more ⟶</nuxt-link>
		</p>
	</section>
</div>

</template>

<script>
export default {
  computed: {
    posts() {
		console.log(this.$store.state.posts);
      return this.$store.state.posts;
    }
  },
  head: {
    title: "The Lost Buoy"
  }
};
</script>

<style lang="scss" scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  text-align: left;
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
