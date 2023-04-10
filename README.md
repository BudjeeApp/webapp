# Webapp

Welcome to the webapp of Budjee. This is a Typescript/React project bootstrapped with [Next.js](https://nextjs.org/).
We are using the latest version of Next.js and React (v13.2.4 and v18.2.0 respectively at the time of writing).
And we are using Next.js's the experimental `/app` which introduces new concepts of layouts, loading and error components, 
and leverages React's server components. All of which I do not understand its implications and its advantages.
I just figured it would be cool to use the latest.
Please read this [_Rendering Fundamentals_](https://beta.nextjs.org/docs/rendering/fundamentals) to get started on what Next.js 13 brings

We follow the [atomic design principle](https://bradfrost.com/blog/post/atomic-web-design/) for building Webapp.

I'm very new to writing frontend so if there's anything that you think should be changed. Let's talk about it and make the update!

## Frameworks & Libraries

* [Next.js](https://nextjs.org/) (Rendering framework)
* [Tailwind CSS](https://tailwindcss.com/) (CSS framework)
* [Storybook](https://storybook.js.org/) (UI dev tool)
* [Jest](https://jestjs.io/) (Unit test framework)
* [Playwright](https://playwright.dev/) (E2E test framework) 


## Getting Started

We use node v18.15.0 and [pnpm](https://pnpm.io/) as our package manager.

After installing the packages with `pnpm install`, you can run the development server by running

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Storybook

We use Storybook to build and test our components in isolation. You can run storybook by running
```bash
pnpm storybook
```

## Testing

### _To Be Implemented_

We use playwright to e2e test our webapp.