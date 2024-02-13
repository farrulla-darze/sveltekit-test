<script>
	import { goto } from '$app/navigation';
</script>

<div class="flex items-center justify-center h-screen">
	<div class="flex flex-col justify-center h-screen space-y-5">
		<h1 class="text-4xl font-ibm text-violet-800">Bem vindo ao Pepino.ai</h1>
		<p class="font-ibm text-violet-800">A gente resolve e você relaxa.</p>
		<button
			class="bg-black text-white font-ibm text-base py-2 px-4 border border-black hover:bg-white hover:text-black"
			on:click={() => goto('/from')}>Resolver Problema</button
		>
	</div>
</div>

<div class=" bg-white h-screen w-full text-center space-y-4">
	<h2 class="make me an example with a relational databasefont-ibm text-3xl text-violet-800">
		O que você pode resolver conosco
	</h2>
	<p class="w-full md:w-1/2 lg:w-1/3 mx-auto">
		Grandes empresas possuem clausulas abusivas e processos falhos que causam grandes problemas para
		o consumidor. O time do Pepino.ai está aqui para te ajudar a resolver esses problemas.
	</p>
	<div class="flex justify-center space-x-4 container mx-auto px-4">
		<div class="w-1/2">
			<ul>
				<li><a href="#">Item 1</a></li>
				<li><a href="#">Item 2</a></li>
				<li><a href="#">Item 3</a></li>
			</ul>
		</div>
		<div class="w-1/2">
			<ul>
				<li><a href="#">Item 4</a></li>
				<li><a href="#">Item 5</a></li>
				<li><a href="#">Item 6</a></li>
			</ul>
		</div>
	</div>
</div>
