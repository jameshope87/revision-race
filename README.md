# A-Z Revision Race

Classroom revision game built with React + Vite.

Students guess an A-Z keyword from an image or hint, answer short questions, and then unlock the next letter using a teacher code.

## Features

- Subject selector for Chemistry, Biology, and Computer Science.
- A-Z progression with one challenge card per letter.
- Keyword guessing with support for alternate accepted terms (via keyword list).
- Short-answer question stage for quick classroom pacing.
- Teacher code gate between letters.
- Teacher reference panel to view all generated letter codes.
- Visual progress tracker and completion screen.
- Light/dark theme toggle.
- Theme preference saved in local storage and restored on reload.

## Tech Stack

- React 19
- Vite 8
- ESLint 10

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run in development

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

## Scripts

- `npm run dev` - Start Vite dev server.
- `npm run build` - Build production assets.
- `npm run preview` - Preview the built app locally.
- `npm run lint` - Run ESLint.

## Gameplay Flow

1. Pick a subject.
2. Guess the keyword shown by the image card.
3. Answer the short questions on a mini whiteboard.
4. Enter the teacher code to unlock the next letter.
5. Repeat until all letters are complete.

The theme toggle is available from the subject picker and during the game.

Teacher panel password is currently:

`default`

## Data Format

Each letter entry should use this structure:

```js
{
	letter: "A",
	keywords: ["activation energy", "activation energies"],
	hint: "Short hint shown when player taps hint",
	image: aImg, // may also be null for text-only cards
	questions: [
		"Short question 1",
		"Short question 2",
		"Short question 3"
	]
}
```

## Project Structure

```text
src/
	App.jsx                 # Subject selector and app shell
	ThemeContext.jsx        # Theme state and localStorage persistence
	themes.js               # Light/dark theme token definitions
	components/
		Game.jsx              # Main game loop, stages, teacher panel
	data/
		chemistry.js          # Chemistry A-Z data
		biology.js            # Biology A-Z data
		cs.js                 # Computer Science A-Z data
	assets/
		chemistry/            # Chemistry letter images
		compsci/              # Computer Science images
```

## Current Content Status

- Chemistry: full A-Z set with short-answer prompts.
- Biology: full A-Z set.
- Computer Science: full A-Z set.

## Notes

- Game logic currently reads `keywords` (array) for answer matching.
- Theme preference is stored under `theme` in local storage.
- Some entries can use `image: null` and still work because the hint/question flow remains available.
