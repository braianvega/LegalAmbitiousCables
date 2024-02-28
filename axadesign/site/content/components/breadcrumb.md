---
layout: components
title: Breadcrumb
description: Breadcrumbs serve as an effective visual aid, indicating the
  location of the user within the website’s hierarchy, making them
  a great source of contextual information for landing pages.
  Also, breadcrumbs allow for easy navigation to higher-level
  pages.
section: Components
bootstrapRef: https://getbootstrap.com/docs/5.1/components/breadcrumb/
menuSlug: breadcrumb 
---

<h6 class="display-5 pt-md-8 ">Examples</h6>
<div class="ax-example p-md-3 border">
  <nav aria-label="breadcrumb" class="text-uppercase h3">
    <ol class="breadcrumb">
      <li class="breadcrumb-item active" aria-current="page">
        Home
      </li>
    </ol>
  </nav>

  <nav aria-label="breadcrumb" class="text-uppercase h3">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#">Home</a></li>
      <li class="breadcrumb-item active" aria-current="page">
        Library
      </li>
    </ol>
  </nav>

  <nav aria-label="breadcrumb" class="text-uppercase h3">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#">Home</a></li>
      <li class="breadcrumb-item"><a href="#">Library</a></li>
      <li class="breadcrumb-item active" aria-current="page">
        Data
      </li>
    </ol>
  </nav>

  <nav aria-label="breadcrumb" class="text-uppercase h3">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#">Home</a></li>
      <li class="breadcrumb-item"><a href="#">...</a></li>
      <li class="breadcrumb-item active" aria-current="page">
        Data
      </li>
    </ol>
  </nav>
</div>
<div class="pb-4">
 
```html 
<nav aria-label="breadcrumb" class="text-uppercase h3">
  <ol class="breadcrumb">
    <li class="breadcrumb-item active" aria-current="page">
      Home
    </li>
  </ol>
</nav>

<nav aria-label="breadcrumb" class="text-uppercase h3">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">
      Library
    </li>
  </ol>
</nav>

<nav aria-label="breadcrumb" class="text-uppercase h3">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page">
      Data
    </li>
  </ol>
</nav>

<nav aria-label="breadcrumb" class="text-uppercase h3">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">...</a></li>
    <li class="breadcrumb-item active" aria-current="page">
      Data
    </li>
  </ol>
</nav>

``` 
 </div>