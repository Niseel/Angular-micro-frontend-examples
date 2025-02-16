# Module Bundlers in Javasript

- [Overview](#overview)
- [Introduce](#introduce)
- [Module Bundler](#modulebundler)
- [Webpack](#webpack)
- [Usage](#usage)
- [Reference](#reference)
### What is a Module Bundler?
---

## Overview

What do you need to build a simple website?

HTML + CSS + JS ?
![alt text](/examples/basic-module-bundlers/assets/image_1.png)

That's right! That's basically it. As we move forward to make the website more accessible to both users and developers, we've got a lot of cool stuff.

- HTML will be generated from JSX for example
- CSS will be more flexible if there's a preprocessor like SASS
- JS also needs to be more tightly coupled with TS

![alt text](/examples/basic-module-bundlers/assets/image_2.png)

You also need support packages from 3rd party libraries to speed up software development without having to start everything from scratch.

![alt text](/examples/basic-module-bundlers/assets/image_3.png)

It's make managing these dependencies can become overwhelming due to issues such as browser compatibility, large file sizes, and code optimization.

### Introduce

For [example](/examples/basic-module-bundlers/), what I want to do in this article is simple.

I have Javascript, I have tried using basic function handler like lodash for example. I want to embed it in `<script>` of [index.html](/examples/basic-module-bundlers/public/index.html) And require it to run normally.

![alt text](/examples/basic-module-bundlers/assets/image_4.png)

### Module Bundler
#### What is a Module Bundler?

A module bundler simplifies the development process by addressing these challenges:

- **Dependency Management**: It resolves and includes all necessary dependencies in your project.
- **Code Optimization**: Minifies and optimizes your code for faster load times.
- **Browser Compatibility**: Ensures that modern JavaScript features work across different browsers by using transpilers like Babel.
- **Asset Handling**: Processes various assets like CSS, SCSS, images, and more.

Popular module bundlers include:

- **Webpack**: Known for its flexibility and extensive plugin ecosystem.
- **Rollup**: Efficient for bundling libraries and smaller projects.
- **Parcel**: A zero-configuration bundler that's easy to set up.
- **Snowpack**: Focuses on speed by serving individual files directly to the browser during development.

#### Why Use a Module Bundler?

1. **Simplified Dependency Management**: Automatically resolves and includes all dependencies.
2. **Optimized Code**: Reduces file sizes and improves performance.
3. **Cross-Browser Compatibility**: Transpiles modern JavaScript into versions compatible with older browsers.
4. **Enhanced Development Workflow**: Provides tools like hot module replacement and live reloading.

![alt text](/examples/basic-module-bundlers/assets/image_5.png)

---

## Webpack

[Webpack](https://webpack.js.org/concepts/) is one of the most popular module bundlers. We can manually implement this with [webpack] and [webpack-cli]


The most fundamental thing they do is take multiple Javascript files and combine them into a single large file can use in the browser to load your Javascript applications.

![alt text](/examples/basic-module-bundlers/assets/image_6.png)


> [!NOTE]
>
> Angular use Webpack You can check the dependencies of Angular [@angular-devkit/build-angular](https://www.npmjs.com/package/@angular-devkit/build-angular?activeTab=dependencies) to we it aldready using Webpack for build.
> 


## Usage

### With files non-js?

[Loader](https://webpack.js.org/loaders/) is way to pre-precess a file

![alt text](/examples/basic-module-bundlers/assets/image_9.png)

>
> Each type of file will need different processing, we have loaders to handle each case. For example, here will process scss style file

`npm i -D css-loader style-loader sass-loader node-sass` 
> 

### Visualize bundle size

To analyze and see how much space the library packages are taking up in your application when bundled you can use this package [webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer)

![alt text](/examples/basic-module-bundlers/assets/image_7.png)


### Setup Development Mode

To make the application reloadable when there are changes, convenient for software development without having to rerun the project, we can setup [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server)

![alt text](/examples/basic-module-bundlers/assets/image_10.png)


>
> Very useful for analyzing and reducing bundle size in Angular
> 

### Reference
- [Module Bundlers Explained](https://www.youtube.com/watch?v=5IG4UmULyoA)
- [Webpack](https://webpack.js.org/)
