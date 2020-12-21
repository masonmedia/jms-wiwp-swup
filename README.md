# **Workshops in Wild Places**

<img src="assets/img/jms-artist-studio-blue.jpeg"
     alt="Workshops in Wild Places homepage banner photo"
     style="width: 100%; float: left; margin: 0 auto;" />

The official website of Workshops in Wild Places, an international art teaching initiative developed by Canadian artist and educator Janice Mason Steeves. Travel to remote locations throughout the world to connect with the beauty and power of the wild landscape.

For more information see [workshopsinwildplaces.com](https://workshopsinwildplaces.com) and [janicemasonsteeves.com](https://janicemasonsteeves.com).

## **Layout and Frameworks**

The site uses Bootstrap 4.1, flexbox, functional css, and the SWUP library (see below).

## **SWUP**

WIWP uses the [SWUP](https://github.com/gmrchk/swup) library for AJAX page transitions and the addition of entrance/exit animation classes. This gives the site an app-like user experience: pages do not reload, view changes are fast, the initial page load is light, and it is easily extensible with simple (or complex) css and js animations.

SWUP works by wrapping main page content (any content you want changed without refresh) in a swup id `id="swup"`. This alone works to swap out content without reload. The addition of a `.transition-` class then offers great flexibility in creating custom animation options (refer the SWUP API). The base class for fading in and out is `.transition-fade`.

## **PHP**

PHP is used for header and footer includes (located in the `includes` folder).

## **CSS**

1. Functional [Atomic] css: the site employs the atomic css approach where small, single purpose classes are used based on visual function. Classes are referenced once in the CSS then used repeatedly in the HTML for DRY code.

4. Naming conventions: 

    - titles and headings: `site-title`, `page-title`, `section-title`, `section-sub-title`
    - fonts: `Raleway` is the primary theme font.
    - background images: `bg-img...`
    - background colors: `bg-...`

## **JS**

1. AOS ("animate on scroll"). A simple css/js based animation library that activates a variety of css animations on scroll.

## **Mailchimp signup form**

1. A mailchimp newsletter signup form is added to each page to increase visibility and build mailing list.

## **Schema/Google structured data/SEO**
    
1. Schema structured data exists in the header.php file in a script tag as JSON-LD. This data gives Google/search engines more content about the site, company, product, founder, etc. when displaying search results. This allows the site to return "rich-snippets" including photos, video, blog post carousels, and information about Janice when searched as opposed to simple page and meta description content. 

Refer to [schema.org](https://schema.org/docs/gs.html), [Google structured data]( https://codelabs.developers.google.com/codelabs/structured-data/index.html#0), and test structured data [here](https://search.google.com/structured-data/testing-tool/u/0/).

## **.htaccess**

1. An .htaccess rewrite is employed to remove .php file extensions for pretty urls.