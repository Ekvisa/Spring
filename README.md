# 🌸 Spring

_Inspired by [Fruits Basket](https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://en.wikipedia.org/wiki/Fruits_Basket&ved=2ahUKEwjO7orTus6TAxWnUMMIHZZyNikQFnoECBoQAQ&usg=AOvVaw1wHoCjU1L5UE5EmNFoTJ2Q) anime and online psychological services._

_In the original story, the characters break free from toxic bonds. But what happens next? Here, characters speak as if they’ve already taken a step further._

_Live: https://ekvisa.github.io/Spring/_

## ✨ Features

### 🎡 Interactive circle

- Navigate between characters
- Each one is connected to a psychological theme and a test
- The UI is built as an emotional exploration, not just navigation

#### Why a circle?

The circular layout came from an interesting test assignment where I implemented a similar UI. I decided to improve it's realsation and find a use for it.

#### Why not a library?

The circular UI could be implemented using existing carousel or animation libraries.

However, it was built from scratch to:

- make the math cleaner
- make positioning more consistent
- connect layout logic with CSS
- avoid unnecessary abstraction

### 🧩 Reusable geometry

The circle is built in a way that makes it reusable.

By changing:

- circle radius
- sector radius
- number of sectors
- active angle

the same logic can be applied to other interfaces.

This turns the component into a small layout system rather than a one-off solution.

### 🎨 Separation of logic and UI

Core values (radius, angles, positions) are calculated in JavaScript,
while actual rendering is handled via SCSS using CSS variables.

This allows:

- keeping calculations predictable and centralized
- adjusting visuals without touching logic

## ⚙️ Tech

- React + TypeScript
- React Router
- GitHub Pages (deployed under `/Spring`)

### Routing

Uses `BrowserRouter` with basename:

```tsx
<BrowserRouter basename="/Spring">
```

### Images

Images are stored in `public/characters`.

Paths are built using:

```ts
process.env.PUBLIC_URL;
```

This ensures correct behavior both locally and in production.

### Dynamic pages

All problem pages are generated from a data array:

```
/problems/:id
```

One component handles all cases.
