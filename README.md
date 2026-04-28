# SillyBunny Group Utilities

SillyBunny Group Utilities is a bundled fork of four group-chat focused SillyTavern extensions, adapted to work together as one SillyBunny extension.

This project exists to make group chats in [SillyBunny](https://github.com/platberlitz/SillyBunny) smoother by combining presence tracking, group-specific greetings, shared group context utilities, and quick `/sendas` support without requiring users to install and manage several separate extensions.

## Bundled Extensions

This extension is based on and credits the following upstream projects:

- [SillyTavern Presence](https://github.com/leandrojofre/SillyTavern-Presence) by [leandrojofre](https://github.com/leandrojofre).
- [Extension-GroupGreetings](https://github.com/SillyTavern/Extension-GroupGreetings) by [Cohee](https://github.com/Cohee1207).
- [st-group-utils](https://github.com/DummyTBanana/st-group-utils) by [city-unit](https://github.com/city-unit).
- [SillyTavern GroupSendAs](https://github.com/SillyTavern/SillyTavern-GroupSendAs) by [Cohee](https://github.com/Cohee1207).

## Features

- Presence tracking for group chats, so characters can remember messages they were present for.
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
- The original Presence member-list **Ignore Presence** button is intentionally removed from this bundle to keep SillyBunny's member controls stable.
- Presence settings, group utility settings, group greetings, and SendAs behavior remain available from the bundled extension.

## Usage

### Presence

Presence activates in group chats. New messages receive presence data showing which group members were present for that message. Hovering over a message's presence tracker expands the icons so you can manually adjust who remembers that message.

Presence also includes slash commands from the original extension:

- `/presenceForget`
- `/presenceForgetAll`
- `/presenceRemember`
- `/presenceRememberAll`
- `/presenceReplace`
- `/presenceCopy`
- `/presenceLockHiddenMessages`
- `/presenceForceAllPresent`
- `/presenceForceNonePresent`

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
