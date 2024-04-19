<script>
	import '../app.css';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';

	
</script>

<Navbar>
	<NavBrand href="/">
	  <img src="/assets/bitcoin.svg" class="me-3 h-6 sm:h-9" alt="Bitcoin Logo" />
	  <span class="self-center whitespace-nowrap text-xl font-semibold">bitcoin-qr</span>
	</NavBrand>
	<NavHamburger  />
	<NavUl >
		<NavLi href="/" >playground</NavLi>
		<NavLi href="/gallery" >gallery</NavLi>
		<NavLi href="https://github.com/thebrandonlucas/bitcoin-qr" target="_blank">github</NavLi>
		<NavLi href="https://www.npmjs.com/package/bitcoin-qr" target="_blank" >npm</NavLi>
	</NavUl>
  </Navbar>


  <div>

	<slot />
  </div>

