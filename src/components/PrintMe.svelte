<button on:click={() => window.print()} class="printButton">Print me!</button>

<style>
	.printButton {
		background: red;
		border: 3px double black;
		color: white;
		text-align: center;
		font-family: 'IBM Plex Mono', monospace;
		font-size: larger;
		height: 6rem;
		width: 6rem;
		margin: 5px;
		border-radius: 100%;
		transform: rotate(-10deg);
		position: fixed;
		bottom: 0;
		right: 0;
		z-index: 1;
	}

	.printButton:hover {
		background: white;
		border: 3px double red;
		color: black;
	}
</style>
