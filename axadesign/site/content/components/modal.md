---
layout: components
title: Modal
description: A modal focus the user’s attention by adding an overlay which
    needs an immediate action from the user. This task to complete
    or piece of information to validate pops on top of the page
    content. 
bootstrapRef: https://getbootstrap.com/docs/5.1/components/modal/
section: Component
menuSlug: modal
---

<div class="display-5 pt-md-8 pb-1">Examples</div> 
<div class="h1 pb-1 text-capitalize">modal components</div>
<p class="text-justify pe-md-8 pe-lg-11 pb-3">
  The modal component is displayed on top of any content. It can be easily
  closed if the user clicks on the cross and can allow for strong validation
  steps.
</p>
<div class="ax-example p-md-3 border">
  <div class="modal" tabindex="-1" style="position: relative; display: block">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title">Modal title</h2>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p>Modal body text goes here.</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-sm btn-outline-primary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-sm btn-primary">
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="pb-4">

```html
<div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title">Modal title</h2>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-outline-primary"
          data-bs-dismiss="modal"
        >
          Close
        </button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>  
```
</div>
<!-- #endregion components_modal - examples - modal components -->
<!-- #region components_modal - examples - live demo -->
<div class="h1 pb-1 text-capitalize">live demo</div>
<div class="ax-example p-md-3 border">
  <!-- Button trigger modal -->
  <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
  >
    Launch demo modal
  </button>
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title" id="exampleModalLabel">Modal title</h2>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p>Modal body text goes here.</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-sm btn-outline-primary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-sm btn-primary">
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="pb-4">

```html
<!-- Button trigger modal -->
<button
  type="button"
  class="btn btn-primary"
  data-bs-toggle="modal"
  data-bs-target="#exampleModal"
>
  Launch demo modal
</button>
<!-- Modal -->
<div
  class="modal fade"
  id="exampleModal"
  tabindex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title" id="exampleModalLabel">Modal title</h2>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-sm btn-outline-primary"
          data-bs-dismiss="modal"
        >
          Close
        </button>
        <button type="button" class="btn btn-sm btn-primary">
          Save changes
        </button>
      </div>
    </div>
  </div>
</div> 
```
</div>

 