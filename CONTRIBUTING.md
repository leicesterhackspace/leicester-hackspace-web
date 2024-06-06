# Hackspace
This project welcomes contributions in the form of issues and pull requests from anyone. However, before you submit
anything, please read the guidelines below to ensure you understand how to use this repo, and that your contributions
meet this projects standards.

# Hugo
This site uses [Hugo Static Site generation](https://gohugo.io/) to render mark down into the static HTML pages that
make up the site.

Please find documentation for using hugo here: [https://gohugo.io/documentation/](https://gohugo.io/documentation/)

# Project Layout
Some guidance is provided for where to find each component of the site and how they work is detailed below:

## Page Content
The markdown files that determine the content of the pages can be found in `/content`. These are converted into the
static html pages but are not automatically added to the navbar, you can find that in [navbar](#navbar) below.

### List Pages
List pages are pages that have lots of "articles" that are paginated. Currently, the site only has one list page: the
News Page. More information can be found in [news](#news-posts) below.

These work slightly differently from regular pages. To create one, create a folder with the intended html name in
`content`, then create an `_index.md` file in that new directory. That `_index.md` file doesn't have to contain anything
other than front matter, but it does need to be there. Any content in that `_index.md` file will be displayed at the top
of each paginated page.

Posts for the list page can then be created by adding a subdirectory with any name, then adding to that subdirectory an
`_index.md` file with `type = "posts"` in the front matter.

For the Leicester Hackspace Theme, all the posts on the list page will be embedded onto the page, 5 at a time, instead
of being linked to.

## Navbar
The navbar content is controlled with the `/hugo.toml` file. To add a new menu entry, add:

```toml
[[menus.main]]
name = 'PAGE NAME'          # The name of the page that appears in the navbar
pageRef = '/PAGE PATH.html' # The path to the page, starting in the content directory
weight = 40                 # The weight used to order the nav bar, these should just go in ascending for ease
```

For list pages, the `pageRef` is the name of the folder, with `.html` on the end still. For example, the news page's
`pageRef` is `/news.html`.

## Archetypes
Archetypes are templates for new pages created through the command line. This site has a template for news posts.

In order to use an Archetype, you would use a command similar to the below:
```
hugo new intended/path/of/content
```

Depending on the path, hugo will use the archetype that matches the path, or use the default if no matches are found.

Archetypes can be found in `/archetypes`.

## Theme
The Leicester Hackspace website uses a custom theme. This can be found in `/themes/hackspace-theme`.

The theme contains the majority of the html and styling of the site, except for some exception circumstances (which do
not yet exist).

### Layouts
Layouts for the site can be found in `/themes/hackspace-theme/layouts/_default`. These are used to control the html of
the pages, where the markdown from [Page Content](#page-content) replaces `{{ .Content }}`.

The `baseof.html` layout determines the main html layout. `Home.html`, `List.html`, and `Single.html`, determine the
`body` layout of the homepage, list pages, and all other pages, respectively.

These layouts use partials from `/themes/hackspace-theme/layouts/partials`. These partials are essentially reusable
snippets of html. Though they are mainly used for breaking down the content of the pages into manageable snippets.

### Shortcodes
Some [shortcodes](https://gohugo.io/content-management/shortcodes/) have been created in
`/themes/hackspace-theme/layouts/shortcodes`. These are small functions that can be called from markdown files to
produce some html. Their purposes are documented in the shortcode file.

Shortcodes can be called in markdown with the following syntax:

```markdown
{{< SHORTCODE-NAME arg1 arg2... >}}
```

where `SHORTCODE-NAME` is the name of the shortcode file without the `.html`" extension.

An example usage of the `icon` shortcode would be

```markdown
{{< icon fas-bars >}}
```

### Style
This site uses sass/scss to help with styling. The majority of the site's styling can be found in
`/themes/hackspace-theme/assets/sass/`, with some specific site content being moved outside of the theme and into
`/assets/sass/custom.scss`.

The main style can be found in `main.scss`, with some content for specific page types (e.g list pages) or for specific
complex content (e.g. the nav) being split out into their own files and imported into `main.scss`.

### Javascript
Javascript for the theme can be found in `/themes/hackspace-theme/assets/js/`.

### Icons
Some [Font Awesome](https://fontawesome.com/) Icons are available at `/themes/hackspace-theme/static/icons/`.

# Style guide
TODO

## HTML
* 2 space tabs

## CSS
* 2 space tabs
* Avoid bootstrap style single use classes

## Markdown
* Readability over conciseness

## Images

* SVGs should be in a human-readable format
* When possible (e.g. for icons), colour should be set to `currentColor` in order to allow styling with css
*

## Comments

*

# News posts
The `news` content page is a [list page](#list-pages).

## Creating
To create a new news post, please use the following steps:

1. Run the command `hugo new news/YYYY-M-topic` which will generate the relevant folder and a _index.md file for you. It will use the predefined archetype found at `archetypes/news/_index.md`
   * YYYY represents the relevant year. e.g. `2024`
   * M represents a month in text form, it is the first three letters. e.g. `jan`
   * If in doubt, have a look at the existing names that are found in the `content/news/` directory, and use them as a reference
2. Update the date so that it is accurate to the relevant to the post. If possible, replace the time of the post with `00:00:00Z`, as it will initially use the time of creation
3. Add content to the post, underneath the frontmatter (the `+++`). Make sure to follow good markdown practices ([markdown style guide](#markdown))
   * If the post includes any images, videos, or other extra content, store them in the post directory
4. Once happy with the content, remove the `draft = true` section from the frontmatter at the top of the document
5. Create a new branch from develop (e.g. `git checkout -b add-news-post`)
   * 'add-news-post' should be swapped with a description fitting of the news post being added
6. Run `git add` on the files you have added (e.g. `git add content/news/*`) 
7. Commit your changes to the new branch (e.g. `git commit -m "Add new news post"`)
   * Update the message that is in quotes to a description fitting of the news post being added
8. Push your local branch to the remote repository (e.g. `git push origin add-news-post`)
9. Create a pull request for the new branch
   * Ensure the PR is reviewed by at least one other person, preferably 2, to ensure the post is up to standards.
## Modifying
When modifying an existing post, please use the following steps:

1. Make you're changes to the post
2. Add a `LastMod` entry to the frontmatter value for the current date and time
3. Commit the change to a new branch
4. Make a pull request (Get it reviewed, etc)

# Running Locally

## Dependencies
This project has a couple of dependencies that must be setup before it can be used:

* [Git (duh)](https://git-scm.com/)
* [Hugo](https://gohugo.io/installation/)
* [dartsass](https://sass-lang.com/install/)

## Dev Environment
To run the site locally use:

```shell
hugo server -D
```

This will host a local webserver with the site's content.

## Release Build
To generate the static site content, run:

```shell
hugo
```

This will output the static HTML into `/public`.

# Releases
Releases are performed automatically, using github actions.

The basic release process is:

* Build the site
