# Leicester Hackspace Hugo Theme
The custom theme used by the [Leicester Hackspace website](https://leicesterhackspace.org.uk/).

## Features
* Mobile aware responsive layout
* Automatic Navbar
* Paginated lists
  * Post content embedded on the list page
  * Smart list page navigation
* Shortcodes
  * `img`
    * Embed an image with multiple sizes for different monitor sizes, plus other params
  * `groupimg`
    * Embed a group of images in a grid. Each image can be opened in full size as a modal
  * `iframe`
    * Embed an iframe with style params
  * `svg`
    * Embed an svg
  * `wrap`
    * Wrap some content within a div

[//]: # (## Installation)

## Configuration

### params

| Param        | Description                                             | Default       |
|--------------|---------------------------------------------------------|---------------|
| siteImage    | The image at the front of the navbar on the mobile site | /img/icon.svg |
| siteFavImage | The favicon of the site                                 | /img/icon.svg |

### params.pagination

| Param         | Description                                                                                  | Default Value |
|---------------|----------------------------------------------------------------------------------------------|---------------|
| postsPerPage  | The maximum number of posts on each page of the pagination                                   | 5             |
| adjacentLinks | The number of page links on the pagination pages bar to have either side of the current page | 3             |
