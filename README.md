# Question_App

Simple question, answer billboard built with Nuxt.js. It uses a custom build responsive grid layout solution, viewable at /ui route. The /components/ui forlder contains all of the general UI components. 

I did not fully implement question/answer submission, the vuex store has the actions and mutations to preform these actions, but I did not want to implement a detected express server to provide the required api end-points. It does use a simple server-middleware to get the list of questions on initialization.

## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
