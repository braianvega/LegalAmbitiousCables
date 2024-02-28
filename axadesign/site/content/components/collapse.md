---
layout: components
title: Collapse
description: A good way to display a long section of content by hiding it or
  revealing under a block thanks to the action of the user. This
  is mainly used for secondary content and it’s important to avoid
  hiding important information into this block.
section: Components
bootstrapRef: https://getbootstrap.com/docs/5.1/components/collapse/
menuSlug: collapse
---

  <div class="display-5 pt-md-8 pb-1">Example</div>
  <div class="ax-example p-md-3 border">
    <p>
      <a
        class="btn btn-primary me-1 mb-md-0 mb-1"
        data-bs-toggle="collapse"
        href="#collapseExample"
        role="button"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        Link with href
      </a>
      <button
        class="btn btn-primary mb-md-0 mb-1"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseExample"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        Button with data-bs-target
      </button>
    </p>
    <div class="collapse" id="collapseExample">
      <div class="border py-4 px-3">
        Some placeholder content for the collapse component. This
        panel is hidden by default but revealed when the user
        activates the relevant trigger.
      </div>
    </div>
  </div>

  <div class="pb-4">
      
  ```html 
  <p>
    <a
      class="btn btn-primary"
      data-bs-toggle="collapse"
      href="#collapseExample"
      role="button"
      aria-expanded="false"
      aria-controls="collapseExample"
    >
      Link with href
    </a>
    <button
      class="btn btn-primary"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapseExample"
      aria-expanded="false"
      aria-controls="collapseExample"
    >
      Button with data-bs-target
    </button>
  </p>
  <div class="collapse" id="collapseExample">
    <div class="card card-body">
      Some placeholder content for the collapse component. This panel is hidden by
      default but revealed when the user activates the relevant trigger.
    </div>
  </div> 
  ```

  </div>
  
  <div class="display-5 pt-md-8 pb-1">Multiple targets</div>
  <p class="text-justify pe-md-8 pe-lg-11 pb-3">
    The buttons can also open several targets depending on the
    content.
  </p>
  <div class="ax-example p-md-3 border">
    <p>
      <a
        class="btn btn-primary"
        data-bs-toggle="collapse"
        href="#multiCollapseExample1"
        role="button"
        aria-expanded="false"
        aria-controls="multiCollapseExample1"
        >Toggle first element</a
      >
      <button
        class="btn btn-primary"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#multiCollapseExample2"
        aria-expanded="false"
        aria-controls="multiCollapseExample2"
      >
        Toggle second element
      </button>
      <button
        class="btn btn-primary"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target=".multi-collapse"
        aria-expanded="false"
        aria-controls="multiCollapseExample1 multiCollapseExample2"
      >
        Toggle both elements
      </button>
    </p>
    <div class="row">
      <div class="col">
        <div
          class="collapse multi-collapse"
          id="multiCollapseExample1"
        >
          <div class="border py-4 px-3">
            Some placeholder content for the first collapse
            component of this multi-collapse example. This panel is
            hidden by default but revealed when the user activates
            the relevant trigger.
          </div>
        </div>
      </div>
      <div class="col">
        <div
          class="collapse multi-collapse"
          id="multiCollapseExample2"
        >
          <div class="border py-4 px-3">
            Some placeholder content for the second collapse
            component of this multi-collapse example. This panel is
            hidden by default but revealed when the user activates
            the relevant trigger.
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="pb-4">

```html
<p>
  <a
    class="btn btn-primary"
    data-bs-toggle="collapse"
    href="#multiCollapseExample1"
    role="button"
    aria-expanded="false"
    aria-controls="multiCollapseExample1"
    >Toggle first element</a
  >
  <button
    class="btn btn-primary"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#multiCollapseExample2"
    aria-expanded="false"
    aria-controls="multiCollapseExample2"
  >
    Toggle second element
  </button>
  <button
    class="btn btn-primary"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target=".multi-collapse"
    aria-expanded="false"
    aria-controls="multiCollapseExample1 multiCollapseExample2"
  >
    Toggle both elements
  </button>
</p>
<div class="row">
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample1">
      <div class="border py-4 px-3">
        Some placeholder content for the first collapse component of this
        multi-collapse example. This panel is hidden by default but revealed
        when the user activates the relevant trigger.
      </div>
    </div>
  </div>
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample2">
      <div class="border py-4 px-3">
        Some placeholder content for the second collapse component of this
        multi-collapse example. This panel is hidden by default but revealed
        when the user activates the relevant trigger.
      </div>
    </div>
  </div>
</div>
```

  </div>
  <!-- #endregion components_collapse - multiple targets -->
  
