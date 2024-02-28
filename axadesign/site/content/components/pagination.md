---
layout: components
title: Pagination
description: Pagination indicates a collection of related content divided into multiple pages.
section: Components
bootstrapRef: https://getbootstrap.com/docs/5.1/components/pagination/ 
menuSlug: pagination
---
 
<!-- #region components_pagination - overview -->
<div class="display-5 pt-md-8 pb-1">Overview</div>
<div class="ax-example p-md-3 border">
  <nav aria-label="Page navigation example">
    <ul class="pagination text-uppercase h3">
      <li class="page-item">
        <a class="page-link pe-4" href="#">Previous</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">1</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">2</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">3</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">...</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">33</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">34</a>
      </li>
      <li class="page-item active" aria-current="page">
        <a class="page-link" href="#">35</a>
      </li>
      <li class="page-item">
        <a class="page-link ps-4" href="#">Next</a>
      </li>
    </ul>
  </nav>
</div>
<div class="pb-4">

```html  
<nav aria-label="Page navigation example">
  <ul class="pagination text-uppercase h3">
    <li class="page-item"><a class="page-link pe-4" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">...</a></li>
    <li class="page-item"><a class="page-link" href="#">33</a></li>
    <li class="page-item"><a class="page-link" href="#">34</a></li>
    <li class="page-item active" aria-current="page"><a class="page-link" href="#">35</a></li>
    <li class="page-item"><a class="page-link ps-4" href="#">Next</a></li>
  </ul>
</nav> 
```
</div>
<!-- #endregion components_pagination - overview -->
<!-- #region components_pagination - icons -->
<div class="display-5 pt-md-8 pb-1">Working with icons</div>
<p class="text-justify pe-md-8 pe-lg-11 pb-3">
  @AXA specific new class
  <code>pagination-control-prev-icon</code> and
  <code>pagination-control-prev-icon</code>
</p>
<div class="ax-example p-md-3 border">
  <nav aria-label="Page navigation example">
    <ul class="pagination text-uppercase h3">
      <li class="page-item">
        <a
          class="page-link pe-4 pagination-control-prev-icon"
          href="#"
        >
          <span class="visually-hidden">Previous</span>
        </a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">2</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">3</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">4</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">5</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">6</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">...</a>
      </li>
      <li class="page-item active" aria-current="page">
        <a class="page-link" href="#">35</a>
      </li>
      <li class="page-item">
        <a
          class="page-link ps-4 pagination-control-next-icon"
          href="#"
        >
          <span class="visually-hidden">Next</span>
        </a>
      </li>
    </ul>
  </nav>
</div>
<div class="pb-4">

```html 
<nav aria-label="Page navigation example">
  <ul class="pagination text-uppercase h3">
    <li class="page-item">
      <a class="page-link pe-4 pagination-control-prev-icon" href="#">
        <span class="visually-hidden">Previous</span>
      </a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">2</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">3</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">4</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">5</a>
    </li>  
    <li class="page-item">
      <a class="page-link" href="#">6</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">...</a>
    </li>
    <li class="page-item active" aria-current="page">
      <a class="page-link" href="#">35</a>
    </li>
    <li class="page-item">
      <a class="page-link ps-4 pagination-control-next-icon" href="#">
        <span class="visually-hidden">Next</span>
      </a>
    </li>
  </ul>
</nav> 
```
</div>
<!-- #endregion components_pagination - icons -->
<!-- #region components_pagination - disabled and active states -->
<div class="display-5 pt-md-8 pb-1">
  Disabled and active states
</div>
<div class="ax-example p-md-3 border">
  <nav aria-label="Page navigation example">
    <ul class="pagination text-uppercase h3">
      <li class="page-item disabled">
        <a class="page-link pe-4" href="#">Previous</a>
      </li>
      <li class="page-item active" aria-current="page">
        <a class="page-link" href="#">1</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">2</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">3</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">4</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">5</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">6</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">...</a>
      </li>
      <li class="page-item">
        <a class="page-link ps-4" href="#">Next</a>
      </li>
    </ul>
  </nav>
</div>
<div class="pb-4">

```html
<nav aria-label="Page navigation example">
  <ul class="pagination text-uppercase h3">
    <li class="page-item disabled">
      <a class="page-link pe-4" href="#">Previous</a>
    </li>
    <li class="page-item active" aria-current="page">
      <a class="page-link" href="#">1</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">4</a></li>
    <li class="page-item"><a class="page-link" href="#">5</a></li>
    <li class="page-item"><a class="page-link" href="#">6</a></li>
    <li class="page-item"><a class="page-link" href="#">...</a></li>
    <li class="page-item"><a class="page-link ps-4" href="#">Next</a></li>
  </ul>
</nav>


```
</div>
<div class="ax-example p-md-3 border">
  <nav aria-label="Page navigation example">
    <ul class="pagination text-uppercase h3">
      <li class="page-item disabled">
        <a
          class="page-link pe-4 pagination-control-prev-icon"
          href="#"
        >
          <span class="visually-hidden">Previous</span>
        </a>
      </li>
      <li class="page-item active" aria-current="page">
        <a class="page-link" href="#">1</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">2</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">3</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">...</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">33</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">34</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">35</a>
      </li>
      <li class="page-item">
        <a
          class="page-link ps-4 pagination-control-next-icon"
          href="#"
        >
          <span class="visually-hidden">Next</span>
        </a>
      </li>
    </ul>
  </nav>
</div>
<div class="pb-4">

```html
<nav aria-label="Page navigation example">
  <ul class="pagination text-uppercase h3">
    <li class="page-item disabled">
      <a class="page-link pe-4 pagination-control-prev-icon" href="#">
        <span class="visually-hidden">Previous</span>
      </a>
    </li>
    <li class="page-item active" aria-current="page">
      <a class="page-link" href="#">1</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">...</a></li>
    <li class="page-item"><a class="page-link" href="#">33</a></li>
    <li class="page-item"><a class="page-link" href="#">34</a></li>
    <li class="page-item"><a class="page-link" href="#">35</a></li>
    <li class="page-item">
      <a class="page-link ps-4 pagination-control-next-icon" href="#">
        <span class="visually-hidden">Next</span>
      </a>
    </li>
  </ul>
</nav>  
```
</div>
 