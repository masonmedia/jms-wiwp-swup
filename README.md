# **Workshops in Wild Places**

The official website of Workshops in Wild Places, an international art teaching initiative developed by Canadian artist and educator Janice Mason Steeves. Travel to remote locations throughout the world to connect with the beauty and power of the wild landscape.

For more information see [workshopsinwildplaces.com](https://workshopsinwildplaces.com) and [janicemasonsteeves.com](https://janicemasonsteeves.com).

## **Layout and Frameworks**

The site uses Bootstrap 4.1, flexbox, and functional css.

## **PHP**

PHP is used for header and footer includes.

## **CSS**

1. Functional [Atomic] css: the site employs the atomic css approach where small, single purpose classes are used based on visual function. Classes are referenced once in the CSS then used repeatedly in the HTML for DRY code.

4. Naming conventions: 

    - titles and headings: `site-title`, `page-title`, `section-title`, `section-sub-title`
    - fonts: `Raleway` is the primary theme font.
    - background images: `bg-img...`
    - background colors: `bg-...`

## **JS**

1. SWUP: an ajax plugin that hijacks http requests, swapping page content out without page refresh. Significantly improves view change speed and performance in addition to allowing for entrance and exit animation classes to be added for page transitions. All content is wrapped in an ID of "swup", which takes care of injecting and removing content without reload. The css class `.transition-fade` provides the base fading transition animation, while a host of other options (currently not used) are available in the stylesheet under `SWUP transition animations`. 

2. AOS ("animate on scroll"). A simple css/js based animation library that activates a variety of css animations on scroll.

## **Schema/Google structured data/SEO**
    
1. Schema structured data exists in the header.php file in a script tag as JSON-LD. This data gives Google/search engines more content about the site, company, product, founder, etc. when displaying search results. This allows the site to return "rich-snippets" including photos, video, blog post carousels, and information about Janice when searched as opposed to simple page and meta description content. 

Refer to [schema.org](https://schema.org/docs/gs.html), [Google structured data]( https://codelabs.developers.google.com/codelabs/structured-data/index.html#0), and test structured data [here](https://search.google.com/structured-data/testing-tool/u/0/).

## **.htaccess**

1. An .htaccess rewrite is employed to remove .php for pretty urls.