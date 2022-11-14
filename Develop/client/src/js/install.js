const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
	// Store the triggered events
	window.deferredPrompt = event;
	// Remove the hidden class from the button
	butInstall.classList.toggle("hidden", false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
	const promptEvent = window.deferredPrompt;
	if (!promptEvent) {
		return;
	}

	// Show Prompt
	promptEvent.prompt();

	// Reset deferred prompt variable - note: it can only be used ONCE!!
	window.deferredPrompt = null;

	butInstall.classList.toggle("hidden", true);
});

// TODO: Add an handler for the `appinstalled` event
// Clearing Prompt
window.addEventListener("appinstalled", (event) => {
	window.deferredPrompt = null;
});
