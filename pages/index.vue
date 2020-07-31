<template>	
<div class="container">
	<h1 class="title">The Lost Buoy</h1>
	<!-- <section v-for="post in posts" :key="post.fields.slug">
		<h2 class="title">
			<nuxt-link :to="post.fields.slug">{{ post.fields.title }}</nuxt-link>
		</h2>
		<p class="author">By {{ post.fields.author.fields.name }}</p>
		<p class="description">
			{{ post.fields.description }}<br />
			<nuxt-link :to="post.fields.slug" class="more">Read more ⟶</nuxt-link>
		</p>
	</section> -->
  <div v-for="post in posts" :key="post.fields.slug" class="max-w-sm w-full lg:max-w-full lg:flex">
    <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('/img/card-left.jpg')" title="Woman holding a mug">
    </div>
    <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
      <div class="mb-8">
        <p class="text-sm text-gray-600 flex items-center">
          <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
          </svg>
          Members only
        </p>
        <div class="text-gray-900 font-bold text-xl mb-2"><nuxt-link :to="post.fields.slug">{{ post.fields.title }}</nuxt-link></div>
        <p class="text-gray-700 text-base">{{ post.fields.description }}</p>
      </div>
      <div class="flex items-center">
        <img class="w-10 h-10 rounded-full mr-4" src="/img/jonathan.jpg" alt="Avatar of Jonathan Reinink">
        <div class="text-sm">
          <p class="text-gray-900 leading-none"><nuxt-link :to="post.fields.slug" class="more">Read more ⟶</nuxt-link></p>
        </div>
      </div>
    </div>
  </div>
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
    'Indie Flower',
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
