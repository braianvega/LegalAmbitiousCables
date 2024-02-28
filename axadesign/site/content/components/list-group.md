---
layout: components
title: List-group
description: Lists groups are a serie of vertical content. They display items
  with the same level of hierarchy. They improve the readability
  of the different items by creating a better structured
  organisation.
bootstrapRef: https://getbootstrap.com/docs/5.1/components/list-group/
section: Component
menuSlug: list-group

---
 
<div class="display-5 pt-md-8 pb-1">Basic example</div>
<div class="ax-example p-md-3 border">
  <ul
    class="list-group list-group-flush"
    style="max-width: 400px"
  >
    <li class="list-group-item">An item</li>
    <li class="list-group-item">An item</li>
    <li class="list-group-item">An item</li>
    <li class="list-group-item">An item</li>
    <li class="list-group-item">An item</li>
  </ul>
</div>
<div class="pb-4">

```html 
<ul class="list-group list-group-flush">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">An item</li>
  <li class="list-group-item">An item</li>
  <li class="list-group-item">An item</li>
  <li class="list-group-item">An item</li>
</ul>
```
</div>
<!-- #endregion components_list_group - basic example -->

<!-- #region components_list_group - active items -->
<div class="display-5 pt-md-8 pb-1">Active items</div>
<div class="ax-example p-md-3 border">
  <ul
    class="list-group list-group-flush"
    style="max-width: 400px"
  >
    <li class="list-group-item active" aria-current="true">
      An item
    </li>
    <li class="list-group-item">An item</li>
    <li class="list-group-item">An item</li>
    <li class="list-group-item">An item</li>
    <li class="list-group-item">An item</li>
  </ul>
</div>
<div class="pb-4">

```html  
<ul class="list-group list-group-flush">
  <li class="list-group-item active" aria-current="true">An item</li>
  <li class="list-group-item">An item</li>
  <li class="list-group-item">An item</li>
  <li class="list-group-item">An item</li>
  <li class="list-group-item">An item</li>
</ul>


```
</div>
<!-- #endregion components_list_group - active items -->

<!-- #region components_list_group - disabled items -->
<div class="display-5 pt-md-8 pb-1">Disabled items</div>
<div class="ax-example p-md-3 border">
  <ul
    class="list-group list-group-flush"
    style="max-width: 400px"
  >
    <li class="list-group-item disabled" aria-disabled="true">
      An item
    </li>
    <li class="list-group-item">An item</li>
    <li class="list-group-item">An item</li>
    <li class="list-group-item">An item</li>
    <li class="list-group-item">An item</li>
  </ul>
</div>
<div class="pb-4">

```html  
<ul class="list-group list-group-flush">
  <li class="list-group-item disabled" aria-disabled="true">An item</li>
  <li class="list-group-item">An item</li>
  <li class="list-group-item">An item</li>
  <li class="list-group-item">An item</li>
  <li class="list-group-item">An item</li>
</ul> 

```
</div>
<!-- #endregion components_list_group - disabled items -->
<!-- #region components_list_group - Links -->
<div class="display-5 pt-md-8 pb-1">List with links</div>
<div class="ax-example p-md-3 border">
  <div
    class="list-group list-group-flush"
    style="max-width: 400px"
  >
    <a
      href="#"
      class="list-group-item list-group-item-action active"
      aria-current="true"
      >An item</a
    >
    <a href="#" class="list-group-item list-group-item-action"
      >An item</a
    >
    <a href="#" class="list-group-item list-group-item-action"
      >An item</a
    >
    <a href="#" class="list-group-item list-group-item-action"
      >An item</a
    >
    <a
      class="list-group-item list-group-item-action disabled"
      aria-disabled="true"
      >An item</a
    >
  </div>
</div>
<div class="pb-4">

```html 
<div class="list-group list-group-flush">
  <a href="#" class="list-group-item list-group-item-action active" aria-current="true">An item</a>
  <a href="#" class="list-group-item list-group-item-action">An item</a>
  <a href="#" class="list-group-item list-group-item-action">An item</a>
  <a href="#" class="list-group-item list-group-item-action">An item</a>
  <a href="#" class="list-group-item list-group-item-action disabled" aria-disabled="true">An item</a>
</div> 
```
</div>
<!-- #endregion components_list_group - Links -->
<!-- #region components_list_group - links & buttons -->
<div class="display-5 pt-md-8 pb-1">
  List with links & buttons
</div>
<p class="text-justify pe-md-8 pe-lg-11 pb-6">
  Specific to AXA design : use <code>&lt;a&gt;</code> and add
  classes <code>.btn</code>, <code>.btn-link-secondary</code> and
  <code>.list-group-item</code>
</p>
<div class="ax-example p-md-3 border">
  <div
    class="list-group list-group-flush"
    style="max-width: 400px"
  >
    <a
      href="#"
      class="btn btn-link-secondary list-group-item mb-0"
      aria-current="true"
    >
      <div class="d-flex w-100 justify-content-between">
        <span>An item</span>
        <i class="icon-east valign-btn-icon ms-1"></i>
      </div>
    </a>
    <a
      href="#"
      class="btn btn-link-secondary list-group-item mb-0"
    >
      <div class="d-flex w-100 justify-content-between">
        <span>An item</span>
        <i class="icon-east valign-btn-icon ms-1"></i>
      </div>
    </a>
    <a
      href="#"
      class="btn btn-link-secondary list-group-item mb-0"
    >
      <div class="d-flex w-100 justify-content-between">
        <span>An item</span>
        <i class="icon-east valign-btn-icon ms-1"></i>
      </div>
    </a>
    <a
      href="#"
      class="btn btn-link-secondary list-group-item mb-0"
    >
      <div class="d-flex w-100 justify-content-between">
        <span>An item</span>
        <i class="icon-east valign-btn-icon ms-1"></i>
      </div>
    </a>
    <a
      class="btn btn-link-secondary list-group-item mb-0 disabled"
      aria-disabled="true"
    >
      <div class="d-flex w-100 justify-content-between">
        <span>An item</span>
        <i class="icon-east valign-btn-icon ms-1"></i>
      </div>
    </a>
  </div>
</div>
<div class="pb-4">

```html
<div class="list-group list-group-flush">
  <a
    href="#"
    class="btn btn-link-secondary list-group-item mb-0"
    aria-current="true"
  >
    <div class="d-flex w-100 justify-content-between">
      <span>An item</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="valign-btn-icon ms-1"
        viewBox="0 0 16 16"
      ><path
          fill-rule="evenodd"
          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
        /></svg>
    </div>
  </a>
  <a href="#" class="btn btn-link-secondary list-group-item mb-0">
    <div class="d-flex w-100 justify-content-between">
      <span>An item</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="valign-btn-icon ms-1"
        viewBox="0 0 16 16"
      ><path
          fill-rule="evenodd"
          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
        /></svg>
    </div>
  </a>
  <a href="#" class="btn btn-link-secondary list-group-item mb-0">
    <div class="d-flex w-100 justify-content-between">
      <span>An item</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
        fill="currentColor"
        class="valign-btn-icon ms-1"
        viewBox="0 0 16 16"
      ><path
          fill-rule="evenodd"
          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
        /></svg>
    </div>
  </a>
  <a href="#" class="btn btn-link-secondary list-group-item mb-0">
    <div class="d-flex w-100 justify-content-between">
      <span>An item</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="valign-btn-icon ms-1"
        viewBox="0 0 16 16"
      ><path
          fill-rule="evenodd"
          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
        /></svg>
    </div>
  </a>
  <a
    href="#"
    class="btn btn-link-secondary list-group-item mb-0 disabled"
    aria-disabled="true"
  >
    <div class="d-flex w-100 justify-content-between">
      <span>An item</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="valign-btn-icon ms-1"
        viewBox="0 0 16 16"
      ><path
          fill-rule="evenodd"
          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
        /></svg>
    </div>
  </a>
</div>
  
```

</div>
<!-- #endregion components_list_group - links & buttons -->
<!-- #region components_list_group - Buttons -->
<!-- <div class="display-5 pt-md-8 pb-1">List with buttons</div>
  <p class="text-justify pe-md-8 pe-lg-11 pb-6">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
    risus. Suspendisse lectus tortor, dignissim sit amet,
  </p>
  <div class="ax-example p-md-3 border">
    <div class="list-group list-group-flush" style="max-width: 400px;">
      <button type="button" class="list-group-item list-group-item-action h3 mb-0">An item</button>
      <button type="button" class="list-group-item list-group-item-action h3 mb-0">An item</button>
      <button type="button" class="list-group-item list-group-item-action h3 mb-0">An item</button>
      <button type="button" class="list-group-item list-group-item-action h3 mb-0">An item</button>
      <button type="button" class="list-group-item list-group-item-action h3 mb-0">An item</button>
    </div>
  </div>
  <div class="pb-4">
    <pre class="p-md-2"><code class="language-html" data-lang="html">&lt;div class="list-group list-group-flush"&gt;
&lt;button type="button" class="list-group-item list-group-item-action h3 mb-0"&gt;An item&lt;/button&gt;
&lt;button type="button" class="list-group-item list-group-item-action h3 mb-0"&gt;An item&lt;/button&gt;
&lt;button type="button" class="list-group-item list-group-item-action h3 mb-0"&gt;An item&lt;/button&gt;
&lt;button type="button" class="list-group-item list-group-item-action h3 mb-0"&gt;An item&lt;/button&gt;
&lt;button type="button" class="list-group-item list-group-item-action h3 mb-0"&gt;An item&lt;/button&gt;
&lt;/div&gt;</code></pre>
  </div> -->
<!-- #endregion components_list_group - Buttons -->
<!-- #region components_list_group - articles -->
<div class="display-5 pt-md-8 pb-1">List article</div>
<p class="text-justify pe-md-8 pe-lg-11 pb-6">
  List article elements are specifically designed for editorial
  content.
</p>
<div class="ax-example p-md-3 border">
  <div class="list-group list-group-flush">
    <a
      href="#"
      class="list-group-item list-group-item-action px-3 py-4"
    >
      <div class="d-flex w-100 justify-content-start">
        <h4 class="w-25 pt-2">3 days ago</h4>
        <div>
          <div class="display-5 mb-2">
            List group item heading
          </div>
          <p>
            Some placeholder content in a paragraph. And some
            small print.
          </p>
          <span class="h4 muted"
            >And some muted small print.</span
          >
        </div>
      </div>
    </a>
    <a
      href="#"
      class="list-group-item list-group-item-action px-3 py-4"
    >
      <div class="d-flex w-100 justify-content-start">
        <h4 class="w-25 pt-2">3 days ago</h4>
        <div>
          <div class="display-5 mb-2">
            List group item heading
          </div>
          <p>
            Some placeholder content in a paragraph. And some
            small print.
          </p>
          <span class="h4 muted"
            >And some muted small print.</span
          >
        </div>
      </div>
    </a>
    <a
      href="#"
      class="list-group-item list-group-item-action px-3 py-4"
    >
      <div class="d-flex w-100 justify-content-start">
        <h4 class="w-25 pt-2">3 days ago</h4>
        <div>
          <div class="display-5 mb-2">
            List group item heading
          </div>
          <p>
            Some placeholder content in a paragraph. And some
            small print.
          </p>
          <span class="h4 muted"
            >And some muted small print.</span
          >
        </div>
      </div>
    </a>
    <a
      href="#"
      class="list-group-item list-group-item-action px-3 py-4"
    >
      <div class="d-flex w-100 justify-content-start">
        <h4 class="w-25 pt-2">3 days ago</h4>
        <div>
          <div class="display-5 mb-2">
            List group item heading
          </div>
          <p>
            Some placeholder content in a paragraph. And some
            small print.
          </p>
          <span class="h4 muted"
            >And some muted small print.</span
          >
        </div>
      </div>
    </a>
  </div>
</div>
<div class="pb-4">

```html
<div class="list-group list-group-flush">
  <a href="#" class="list-group-item list-group-item-action px-3 py-4">
    <div class="d-flex w-100 justify-content-start">
      <h4 class="w-25 pt-2">3 days ago</h4>
      <div>
        <div class="display-5 mb-2">List group item heading</div>
        <p>Some placeholder content in a paragraph. And some small print.</p>
        <span class="h4 muted">And some muted small print.</span>
      </div>
    </div>
  </a>
  <a href="#" class="list-group-item list-group-item-action px-3 py-4">
    <div class="d-flex w-100 justify-content-start">
      <h4 class="w-25 pt-2">3 days ago</h4>
      <div>
        <div class="display-5 mb-2">List group item heading</div>
        <p>Some placeholder content in a paragraph. And some small print.</p>
        <span class="h4 muted">And some muted small print.</span>
      </div>
    </div>
  </a>
  <a href="#" class="list-group-item list-group-item-action px-3 py-4">
    <div class="d-flex w-100 justify-content-start">
      <h4 class="w-25 pt-2">3 days ago</h4>
      <div>
        <div class="display-5 mb-2">List group item heading</div>
        <p>Some placeholder content in a paragraph. And some small print.</p>
        <span class="h4 muted">And some muted small print.</span>
      </div>
    </div>
  </a>
  <a href="#" class="list-group-item list-group-item-action px-3 py-4">
    <div class="d-flex w-100 justify-content-start">
      <h4 class="w-25 pt-2">3 days ago</h4>
      <div>
        <div class="display-5 mb-2">List group item heading</div>
        <p>Some placeholder content in a paragraph. And some small print.</p>
        <span class="h4 muted">And some muted small print.</span>
      </div>
    </div>
  </a>
</div>


```

</div>
 