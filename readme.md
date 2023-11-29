# Welcome to Arya's Art Museum!

## Setup
Make sure to install the dependencies:

```bash
yarn install
```

## Development Server

Start the development server:

```bash
yarn dev
```


### Technologies used
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/)
- [Tailwind](https://tailwindcss.com/)
- [React query/ TanStack query](https://tanstack.com/query/latest/docs/react/overview)
- [Heroicons](https://heroicons.com/)
- [Sharp](https://github.com/lovell/sharp)

## Important notes:
**Images from the API were too large:**
I noticed once I started working that the API returns massive images and this made the browser essentially unusable. I decided to make a tiny backend that proxies these images and turns them into thumbnails, as a result, the browser has far less data to process. 

Usage: You can go to `http://localhost:3333/https%3A%2F%2Flh3.googleusercontent.com%2FXQEKF5YaUJRPZwjsWebFnnnB_10ck5OLNM7jkInPGK2cxWkQ3jx2FzVVZ9CMBHqifzYQIRRi70Agt4gUkrj-oyVK0w%3Ds0` and it spits out a 400px (fixed, for now) wide image.

## Ideas I would have liked to implement if I had more time:
- Toasts/notification animation when you add a painting to favourites
- Unit and e2e tests
- Error toasts / better error handling
- Storybook, more component examples or documentation
- A more interesting/complex art viewing experience (see below)
- More microanimations (like when closing the modal)
- Keyboard navigation
- A11y, screen readers etc
- Download and share links
- Mobile support
- Reflect chosen filters or opened artworks in the url so you can save bookmarks and use forward/back
- Zooming and panning in modal
- Better feedback for no results, or when you've reached the end

## Cooler art viewing experience ideas:
I also came up with some alternative ideas for the art viewing experience. This assignment made me really excited (which is not something I have often) and I came up with a lot of cool ideas. However, I had to keep in mind that I needed to work within the limits of the time given, so I decided to go with a more simple approach.
- **Using ThreeJS-fiber or CSS to create an abstract 3D experience:**
    - The paintings float around in a 3D space. When you click on them, it zooms in, becomes larger, and an overlay in react explains more details about the painting. On hover the paintings move around and skew based on where your cursor is.
    - This could also have been done with CSS, however, it would take more time than I had available.
- **CSS idea, realistic museum walkthrough experience:**
    - Render a 3d museum floor and wall using CSS. You can navigate left and right as if you are moving through the museum looking at a long wall/hallway. The floor could be skewed to really make it look like you're walking around.
    - This would have taken more time than I had available.
- **A game where you see a painting and have to guess the correct artist's name**
- **A game where you have a timeline and need to place a set of random paintings in the correct order chronologically. Maybe it could have all even been from one selected artist.**
  - ^ could have been like worldle, where you compete with your art-loving friends
