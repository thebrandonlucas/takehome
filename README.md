# Deck of Cards!
There are two folders, `deck` and `pre-svelte`.


`pre-svelte` contains just the raw files and Jest tests. To run, cd into the folder and then run:

```
npm install
npm test
```

`deck` is a svelte project that utilizes the same scripts to expose an API to return the top 5 cards after the deck has been shuffled. To run,

```
npm install
npm run dev
```

Then go to `localhost:3000` in your browser and try refreshing the page!