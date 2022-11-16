# Blog

Writing things I learn and come across.

Created using svelte, sveltekit and mdsvex.

## Developing

Install dependencies: `npm install`

Start dev server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Build project: `npm run build`

Preview production build: `npm run preview`

## Create gh-pages branch

`git subtree push --prefix build origin gh-pages`

# TODO:

- Create line chart
- Move `post*.md` files to `routes/blog/[blogpost]/blogposts/`
  - Change `routes/api/posts/+server.js`
  - Change `routes/blog/[blogpost]/+page.js`
- Implement mdsvex layout (can force no layout also with layout:false in front matter)
