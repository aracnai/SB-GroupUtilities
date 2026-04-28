// @ts-check

const bundleState = window.SillyBunnyGroupUtilities ??= {};

async function loadBundledModule(name, loader) {
    if (bundleState.loadedModules?.has(name)) return;

    bundleState.loadedModules ??= new Set();
    await loader();
    bundleState.loadedModules.add(name);
}

jQuery(async () => {
    if (bundleState.loaderStarted) return;
    bundleState.loaderStarted = true;

    await loadBundledModule("group-greetings", async () => {
        if (!document.getElementById("Extension-GroupGreetings-button")) {
            await import("./vendor/group-greetings/dist/index.js");
        }
    });

    await loadBundledModule("presence", async () => import("./presence.js"));
    await loadBundledModule("group-utils", async () => import("./groupUtils.js"));
    await loadBundledModule("group-send-as", async () => import("./groupSendAs.js"));

    document.body.classList.add("sbu-group-utilities-loaded");
});
