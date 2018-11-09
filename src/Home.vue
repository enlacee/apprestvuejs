<template>
	<div id="home">

		<header>
			<div class="container">
				<nav class="navbar navbar-expand-sm navbar-dark bg-primary">

					<a class="navbar-brand" href="#">ApplicationREST </a>
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>

					<div class="collapse navbar-collapse" id="navbarTogglerDemo01">
						<!-- Menu  -->
						<ul class="navbar-nav mr-auto mt-2 mt-lg-0">
						</ul>
					</div>
				</nav>
			</div>
		</header>

		<main class="container">
			<section>
				<br>
				<h1>{{ dataTitle }}</h1>
				<!-- <button  @click="loadUsers">Cargar Usuarios</button> -->
			</section>

			<section class="user-list">
				<div class="user-list-content" style="">
					<div class="card" style="width: 15rem; margin: 0 9px 9px 0;" v-for="user in lists">
						<div class="card-body">
							<h5 class="card-title">{{ user.name }}</h5>
							<h6 class="card-subtitle mb-2 text-muted">{{ user.email }}</h6>
							<br>
							<p class="card-text">
								<strong>Ciudad:</strong> {{ user.address.city }}<br>
								<strong>Sitio Web:</strong> <a :href="'http://' + user.website" target="_blank">{{ user.website }}</a>
								<strong>Telefono:</strong> {{ user.phone }}<br/>
							</p>
							<a :href="'http://' + user.website" target="_blank" class="card-link">Ver más</a>
						</div>
					</div>
				</div>
			</section>
		</main>

		<footer>
			<!-- footer text -->
			<div>Derechos reservados 2018</div>
		</footer>
	</div>
</template>

<script>
export default {
	name: 'home',
	data: function(){
		return {
			lists: [],
			dataTitle: 'Lista de Usuarios'
		}
	},
	methods: {
		loadUsers: function() {
			this.$http.get( 'https://jsonplaceholder.typicode.com/users' ).then( function( response ){
				if ( response.status === 200 ) {
					this.lists = response.body;
				} else {
					this.lists = [];
				}
			});
		}
	},
	created: function () {
		this.loadUsers();
	}
};
</script>

<style lang="scss">
	@import './styles/custom-bootstrap.scss';
	@import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>
