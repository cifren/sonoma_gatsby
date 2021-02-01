# Sonoma HTML website

## 🚀 Quick start

This project has a gitpod file that will start on server build. So you can have a look how start the project.

Start the project with : https://gitpod.io/#https://github.com/cifren/sonoma_gatsby

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-project/
    gatsby develop

    or

    npm run develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data.
    Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

    Open the `my-project` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── public
    ├── src
        ├── components
        ├── images
        ├── markdown-pages
        ├── pages
        ├── pdf
        ├── templates
    ├── .gitignore
    ├── .gitpod.yml
    ├── .prettierrc
    ├── build.cmd
    ├── build.ps1
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

  **`/public`**: Result that is generated after running the build, it will be deployed on the web server.

  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.
  
  **`/src/components`**: All components that are part of the pages

  **`/src/images`**: All raw images used, that will be transformed on during the build

  **`/src/markdown-pages`**: All pages contents that is used to generate static content, it will be merged with a template

  **`/src/pages`**: Pages that use special formating, special content

  **`/src/templates`**: Same as pages, but it will be duplicated depending on their content during build

  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

  **`.gitpod.yml`**: Instance that will be created on GITPOD.IO, It will sumarize what needs to be installed/run in order to use the project.

  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

  **`build.cmd`**: Executable command that will be trigger on demand by user

  **`build.ps1`**: Used by build.cmd, it will execute `npm run build` command

  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).

  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

  **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

  **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.
