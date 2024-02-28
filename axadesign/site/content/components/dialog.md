---
layout: components
title: Dialog
description: A Dialog focus the user’s attention by adding an overlay which
    needs an immediate action from the user. This task to complete
    or piece of information to validate pops on top of the page
    content. 
bootstrapRef: https://getbootstrap.com/docs/5.1/components/modal/
section: Component
menuSlug: dialog
---

<div class="display-5 pt-md-8 pb-1">Examples</div> 
<div class="h1 pb-1 text-capitalize">Dialog components</div>
<p class="text-justify pe-md-8 pe-lg-11 pb-3">
  The Dialog component is displayed on top of any content. It can be easily
  closed if the user clicks on the cross and can allow for strong validation
  steps.
</p>
<div class="ax-example p-md-3 border">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title">Dialogs title</h2>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p>Dialogs  body text goes here.</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-sm btn-outline-primary"
            data-bs-dismiss="modal"
          >
            button 1
          </button>
          <button type="button" class="btn btn-sm btn-primary">
            button 2
          </button>
        </div>
    </div>
  </div>
</div>
<div class="pb-4">

```html
  <div class="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title">Dialogs title</h2>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p>Dialogs  body text goes here.</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-sm btn-outline-primary"
            data-bs-dismiss="modal"
          >
            button 1
          </button>
          <button type="button" class="btn btn-sm btn-primary">
            button 2
          </button>
        </div>
      </div>
    </div>
  </div>
```
</div>



<div class="display-5 pt-md-8 pb-1">Variants</div>
<p class="text-justify pe-md-8 pe-lg-11 pb-3">
  The Dialog component can have differents variants 
</p> 
<div class="h1 pb-1 text-capitalize">Confirmative or Informative dialog</div>

<div class="ax-example p-md-3 border">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title">Delete Message</h2>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p>All your edits and attachements will be deleted.</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-sm btn-outline-primary"
            data-bs-dismiss="modal"
          >
            button 1 
          </button>
          <button type="button" class="btn btn-sm btn-primary">
            button 2
          </button>
        </div>
      </div>
  </div>


</div>
<div class="pb-4">

```html
    <div class="modal" >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title">Delete Message</h2>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p>All your edits and attachements will be deleted.</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-sm btn-outline-primary"
            data-bs-dismiss="modal"
          >
            button 1 
          </button>
          <button type="button" class="btn btn-sm btn-primary">
            button 2
          </button>
        </div>
      </div>
    </div>
  </div>
```
</div>



<!-- #region Warning alert dialog -->
<div class="h1 pb-1 text-capitalize">Warning alert dialog</div>

<div class="ax-example p-md-3 border">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header row">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M23 21L12 2L1 21H23ZM11 18V16H13V18H11ZM11 14H13V10H11V14Z" fill="#FFBC11"/></svg>
                    <h2 class="modal-title">Unverified user </h2>
          </div>
        <div class="modal-body">
          <p>Sorry,'username1' has not been verified and maybe noot receive the message. Do you want to continue sending ?</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-sm btn-outline-primary"
            data-bs-dismiss="modal"
          >
            button 1 
          </button>
          <button type="button" class="btn btn-sm btn-primary">
            button 2
          </button>
        </div>
    </div>
  </div>


</div>
<div class="pb-4">

```html
  <div class="modal" >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header row">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M23 21L12 2L1 21H23ZM11 18V16H13V18H11ZM11 14H13V10H11V14Z" fill="#FFBC11"/></svg>
                    <h2 class="modal-title">Unverified user </h2>
          </div>
        <div class="modal-body">
          <p>Sorry, 'username1' has not been verified and maybe noot receive the message. Do you want to continue sending ?</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-sm btn-outline-primary"
            data-bs-dismiss="modal"
          >
            button 1 
          </button>
          <button type="button" class="btn btn-sm btn-primary">
            button 2
          </button>
        </div>
      </div>
    </div>
  </div>
```
</div>




<!-- #region Error  alert dialog -->
<div class="h1 pb-1 text-capitalize">Error  alert dialog</div>

<div class="ax-example p-md-3 border">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header row">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="#C91432"/></svg>
            <h2 class="modal-title">Upload failed  </h2>
          </div>
        <div class="modal-body">
          <p>An error occured while uploading. Please verify your permission and try again. </p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-sm btn-primary"
            data-bs-dismiss="modal"
          >
            button 1 
          </button>
        </div>
      </div>
  </div>
</div>
<div class="pb-4">

```html
  <div class="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header row">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="#C91432"/></svg>
            <h2 class="modal-title">Upload failed  </h2>
          </div>
        <div class="modal-body">
          <p>An error occured while uploading. Please verify your permission and try again. </p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-sm btn-primary"
            data-bs-dismiss="modal"
          >
            button 1 
          </button>
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
    Launch demo Dialog
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
          <h2 class="modal-title" id="exampleModalLabel">Dialog title</h2>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p>DIalog body text goes here.</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-sm btn-outline-primary"
            data-bs-dismiss="modal"
          >
            Button 1
          </button>
          <button type="button" class="btn btn-sm btn-primary">
            Button 2
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

 