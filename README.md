# goit-js-hw-10

A vanilla JavaScript web app built with Vite that demonstrates:

- a date-time countdown timer using `flatpickr`
- toast notifications for promise results using `iziToast`

## Features

### Timer page
- select a future date and time
- start a live countdown
- displays days, hours, minutes, and seconds
- disables start button until a valid future date is selected
- shows an error toast if the selected date is in the past

### Snackbar page
- enter a delay in milliseconds
- choose promise state: fulfilled or rejected
- creates toast notifications on promise resolution or rejection

## Project structure

- `src/index.html` - landing page / navigation
- `src/1-timer.html` - timer demo page
- `src/2-snackbar.html` - snackbar / notification demo page
- `src/js/1-timer.js` - timer logic
- `src/js/2-snackbar.js` - promise notification logic
- `src/css/` - shared styles
- `package.json` - project scripts and dependencies

## Setup

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Dependencies

- `vite`
- `flatpickr`
- `izitoast`
- `vite-plugin-full-reload`
- `vite-plugin-html-inject`

## Notes

The project is configured with `type: module` and uses ES module imports for JavaScript.

> Build output is served with the base path `/goit-js-hw-10/`.
