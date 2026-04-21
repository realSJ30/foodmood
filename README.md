# FoodMood

FoodMood is a React app for browsing recipe ideas and food details from the Spoonacular API.

## Scripts

- `npm start` or `npm run dev` starts the Vite dev server.
- `npm run build` creates a production build.
- `npm run preview` serves the production build locally.

## Environment Variables

Create a local `.env` file with:

```bash
VITE_API_ENDPOINT=...
VITE_API_KEY=...
```

The app previously used CRA-style `REACT_APP_*` variables. After the Vite migration, use the `VITE_*` names above instead.
