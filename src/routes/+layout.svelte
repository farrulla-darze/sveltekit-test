<script>
	import '../app.css';

	const company_name = 'Pepino';

	let navLinks = [
		{ name: 'About', href: '/about' },
		{ name: 'Blog', href: '/blog' },
		{ name: 'Contact', href: '/contact' },
		{ name: 'Sign-in', href: '/signin' }
	];
</script>

<nav class="flex justify-between items-center p-5 bg-white shadow-md rounded-b-xl">
	<div>
		<h1 class="text-3xl font-ibm text-violet-800"><a href="/">{company_name}</a></h1>
	</div>
	<div>
		{#each navLinks as link (link.name)}
			<a href={link.href} class="p-2 text-violet-500 hover:text-violet-200">{link.name}</a>
		{/each}
	</div>
</nav>

<slot />

<footer class="bg-blue-500 text-white p-5 mt-auto">
	<div class="container mx-auto flex justify-between items-center">
		<div>
			<h1 class="font-bold text-xl">{company_name}</h1>
			<p>© {new Date().getFullYear()} All rights reserved.</p>
		</div>
		<div>
			<a href="#" class="mr-4">Privacy Policy</a>
			<a href="#">Terms of Service</a>
		</div>
	</div>
</footer>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.violet.300);
	}
</style>
