// @ts-check

// Cache-busting token for this bundle's own modules.
//
// SillyBunny fetches the entry file (index.js) as `index.js?v=<app-version>`,
// so the entry is only re-fetched when SillyBunny itself updates — never when
// THIS extension updates. Worse, the relative sub-imports below carry no
// version at all, so after an extension update the browser will keep serving
// stale cached copies of our modules. Bumping ASSET_VERSION on every release
// forces a re-fetch. Keep it in sync with manifest.json "version".
const ASSET_VERSION = "0.1.8";

const bundleState = window.SillyBunnyGroupUtilities ??= {};

async function loadBundledModule(name, loader) {
    if (bundleState.loadedModules?.has(name)) return;

    bundleState.loadedModules ??= new Set();
    try {
        await loader();
        bundleState.loadedModules.add(name);
    } catch (error) {
        console.error(`[SillyBunny Group Utilities] Failed to load ${name}`, error);
    }
}

jQuery(async () => {
    if (bundleState.loaderStarted) return;
    bundleState.loaderStarted = true;

    await loadBundledModule("group-greetings", async () => {
        if (!document.getElementById("Extension-GroupGreetings-button")) {
            await import(`./vendor/group-greetings/dist/index.js?v=${ASSET_VERSION}`);
        }
    });

    // Presence has been fully removed from this bundle. Its files (presence.js,
    // src/js/eventListeners.js, src/js/slashCommands.js, html/presence-settings.html)
    // no longer ship, so it cannot run even if a stale cached index.js tries to
    // import it. The original lives upstream (SillyTavern-Presence) for a future,
    // race-safe rewrite.
    await loadBundledModule("group-utils", async () => import(`./groupUtils.js?v=${ASSET_VERSION}`));
    await loadBundledModule("group-send-as", async () => import(`./groupSendAs.js?v=${ASSET_VERSION}`));

    document.body.classList.add("sbu-group-utilities-loaded");
});
