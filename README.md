# SillyBunny Group Utilities

SillyBunny Group Utilities is a bundled fork of four group-chat focused SillyTavern extensions, adapted to work together as one SillyBunny extension.

This project exists to make group chats in [SillyBunny](https://github.com/platberlitz/SillyBunny) smoother by combining group-specific greetings, shared group context utilities, and quick `/sendas` support without requiring users to install and manage several separate extensions.

## Updates

### Version 1.8

- Removed the Presence module. Presence was saving group chats a second time at the same moment SillyBunny saved them, which caused "Temp file rename failed ... EPERM" errors on Windows and could interrupt chat saving. With Presence gone, those errors stop. The per-message presence indicator icons (the little member avatars at the top of each message) are also removed, since they were part of Presence.
- Group Greetings, Group Utilities, and Send As are unchanged and continue to work as before.
- Improved how the extension loads its files so updates apply cleanly instead of running stale cached copies.
- Removed leftover Presence styling.

Upgrading from an older version (please read):

- Delete your existing "SillyBunny-GroupUtilities" folder and reinstall it fresh. Do not unzip a new copy on top of the old one, or old Presence files can be left behind.
- Check BOTH extension locations and remove any duplicate copy, then keep only one:
  - public/scripts/extensions/third-party/SillyBunny-GroupUtilities
  - data/user/extensions/SillyBunny-GroupUtilities
- After reinstalling, hard refresh the server.

## Bundled Extensions

This extension is based on and credits the following upstream projects:

- [SillyTavern Presence](https://github.com/leandrojofre/SillyTavern-Presence) by [leandrojofre](https://github.com/leandrojofre).
- [Extension-GroupGreetings](https://github.com/SillyTavern/Extension-GroupGreetings) by [Cohee](https://github.com/Cohee1207).
- [st-group-utils](https://github.com/DummyTBanana/st-group-utils) by [city-unit](https://github.com/city-unit).
- [SillyTavern GroupSendAs](https://github.com/SillyTavern/SillyTavern-GroupSendAs) by [Cohee](https://github.com/Cohee1207).

## Features

- Group-only greetings for character cards, with random or manual selection modes.
- Group utility prompts that can share character information and group notes during generation.
- Quick group member SendAs button that inserts a `/sendas name="Character"` template.
- Compact SillyBunny-specific current-member layout so Model Override and action buttons fit together more cleanly.

## Installation

Install through SillyBunny's built-in extension installer:

1. Open SillyBunny.
2. Go to **Extensions**.
3. Use the extension installer.
4. Paste this repository URL.
5. Install and enable **SillyBunny Group Utilities**.
6. Restart or hard refresh SillyBunny after installation.

Do not install the four original standalone extensions alongside this bundle. This extension already includes their bundled behavior, and running both can cause duplicate buttons, duplicate event handlers, or repeated slash command registration.

## Notes For SillyBunny

This is not a direct drop-in zip of the original extensions. It is a compatibility bundle with SillyBunny-specific changes:

- The four extensions load from one manifest and one extension entry.
- Member-row controls are coordinated so they do not fight SillyBunny's **Model Override** field.
- Presence has been fully removed from this bundle. Its files no longer ship, so it cannot load at runtime (even from a stale browser cache). It was the source of duplicate group-chat saves that raced SillyBunny's own JSONL writes and produced `EPERM` temp-file errors on Windows. The original lives upstream at [SillyTavern-Presence](https://github.com/leandrojofre/SillyTavern-Presence) and may return after a race-safe rewrite.
- Group utility notes are injected through SillyBunny's extension-prompt API instead of mutating the live generation chat array.
- Group utility settings, group greetings, and SendAs behavior remain available from the bundled extension.

## Usage

### Group Greetings

Open a character card or character creation form, then use the group greetings button near the first-message controls. You can add group-only greetings and choose whether SillyBunny picks one randomly or asks you to choose when starting a group chat.

### Group Utilities

Configure group utility options from the extensions settings panel. These tools can add group notes and shared character information to group chat context during generation.

### Group SendAs

In the current members list, use the SendAs button for a character to insert a `/sendas name="Character"` template into the message box.

## Credits

All credit for the original extension ideas and implementations belongs to their upstream authors and contributors:

- [Cohee](https://github.com/Cohee1207)
- [leandrojofre](https://github.com/leandrojofre)
- [city-unit](https://github.com/city-unit)

This bundle adapts their work for a SillyBunny-focused workflow. Original repositories are linked in the **Bundled Extensions** section above.

## License

This bundle contains code from upstream projects containing licenses AGPL-3.0 and CC BY-SA.
