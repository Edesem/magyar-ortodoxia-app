# Magyar Ortodoxia: Imakönyv

An Expo React Native application focused on Hungarian Orthodox content and resources.

This repository contains the mobile app source code built with Expo, TypeScript, and React Native.

## Quick links

- [package.json](/Users/edes/Developer/products/magyar-ortodoxia-app.worktrees/build-readme-file/package.json)
- [app/](/Users/edes/Developer/products/magyar-ortodoxia-app.worktrees/build-readme-file/app)
- [components/](/Users/edes/Developer/products/magyar-ortodoxia-app.worktrees/build-readme-file/components)
- [assets/](/Users/edes/Developer/products/magyar-ortodoxia-app.worktrees/build-readme-file/assets)
- [tsconfig.json](/Users/edes/Developer/products/magyar-ortodoxia-app.worktrees/build-readme-file/tsconfig.json)

## Requirements

- Node.js (recommended LTS)
- npm (or yarn)
- Expo CLI (optional — the project uses the Expo SDK; install globally with `npm install -g expo-cli` or use `npx expo`)
- For native builds and testing on devices/emulators: Android Studio (for Android) or Xcode (for iOS)
- If using EAS (managed builds), the EAS CLI and an Expo account

## Setup (first time)

1. Clone the repository and change into the project directory.

2. Install dependencies:

   npm install

   or with yarn:

   yarn

3. (Optional) If using Expo Dev Client or EAS features, follow Expo/EAS setup guides and log in:

   npx expo login

## Available scripts

See [package.json](/Users/edes/Developer/products/magyar-ortodoxia-app.worktrees/build-readme-file/package.json) for the canonical list. Common commands:

- npm run start — Start the Expo development server (Metro) and open the Expo Devtools.
- npm run android — Build and run the app on a connected Android device/emulator (via `expo run:android`).
- npm run ios — Build and run the app on a connected iOS simulator/device (macOS + Xcode required).
- npm run web — Run the web version with Expo for Web.
- npm run test — Run Jest in watch mode for tests in `__tests__/`.
- npm run test:once — Run Jest tests once.
- npm run typecheck — Run TypeScript type checking (`tsc --noEmit`).

## Project structure

- app/ — Expo router app routes and screens
- components/ — Reusable UI components
- assets/ — Images, fonts and other static assets
- constants/ — App-wide constants
- services/ — API and business-logic services
- hooks/ — Custom React hooks
- utils/ — Utility functions
- types/ — Shared TypeScript types
- __tests__/ — Jest test cases

## Fonts & Assets

This project uses Expo font packages (see [package.json](/Users/edes/Developer/products/magyar-ortodoxia-app.worktrees/build-readme-file/package.json)) and local assets in the [assets/](/Users/edes/Developer/products/magyar-ortodoxia-app.worktrees/build-readme-file/assets) folder. If new fonts are added, ensure they are loaded at app startup (check `app` entry files).

## Building for production

- For simple managed workflow builds, use EAS Build (recommended for production apps):

  1. Install EAS CLI: `npm install -g eas-cli`
  2. Configure eas.json and app.json if needed (e.g., credentials, build profiles).
  3. Run `eas build --platform android` or `eas build --platform ios`.

- Alternatively, use `expo run:android` / `expo run:ios` for local native builds (requires native toolchains).

## Testing

Unit and component tests are run with Jest and @testing-library/react-native. Run:

npm run test

For one-off CI-style runs use:

npm run test:once

## Type checking

TypeScript checks can be executed with:

npm run typecheck

Fix or update types if tsc reports errors.

## Troubleshooting

- Metro bundler or dev server issues: stop existing servers and run `npm run start` again.
- iOS build failures: ensure Xcode command-line tools are installed and Cocoapods are up to date (if using native modules).
- Android emulator issues: confirm Android SDK and emulator images are installed and a device is available.
- Dependency issues: delete `node_modules` and `package-lock.json` (or `yarn.lock`) and reinstall.

## Contributing

- Open issues or pull requests against this repository.
- Keep changes focused and document behavior in code or tests.
- Run `npm run typecheck` and `npm run test` before opening a pull request.

## License & Privacy

This repository is marked as private (see [package.json](/Users/edes/Developer/products/magyar-ortodoxia-app.worktrees/build-readme-file/package.json)). Add a LICENSE file if the project will be made public.

## Contact

For questions about the repository structure or getting started, reach out to the project maintainer or leave an issue in the tracker.

---

Generated README for development and contributor onboarding.
