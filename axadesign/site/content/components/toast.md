---
layout: components
title: Toast
description: A push notification that appears at the bottom of the screen and
    provides information, feedback, alert on the outcome of an
    action without interrupting the user experience.
section: Components
bootstrapRef: https://getbootstrap.com/docs/5.1/components/toasts/
menuSlug: toast
---
 
  <div class="display-5 pt-md-8 pb-1">Examples</div>
  <!-- #region components_toast - examples - basic -->
  <div class="h1 pb-1 text-capitalize">basic</div>
  <div class="ax-example p-md-3 border" id="basictoast">
    <div
      class="toast fade show"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="toast-header toast-confirmative" >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.9987 0.333313C3.3187 0.333313 0.332031 3.31998 0.332031 6.99998C0.332031 10.68 3.3187 13.6666 6.9987 13.6666C10.6787 13.6666 13.6654 10.68 13.6654 6.99998C13.6654 3.31998 10.6787 0.333313 6.9987 0.333313ZM6.33203 10.3333V6.33331H7.66536V10.3333H6.33203ZM6.33203 3.66665V4.99998H7.66536V3.66665H6.33203Z" fill="white"/></svg>
        <div class="toast-body">
         This is a toast description.
        </div>
        <button type="button" class="btn toast-button">
          button
        </button>
        <svg  class="toast-cls-btn" data-bs-dismiss="toast"width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9.66537 1.27325L8.72537 0.333252L4.9987 4.05992L1.27203 0.333252L0.332031 1.27325L4.0587 4.99992L0.332031 8.72659L1.27203 9.66659L4.9987 5.93992L8.72537 9.66659L9.66537 8.72659L5.9387 4.99992L9.66537 1.27325Z" fill="white"/></svg>
      </div>
    </div>
  </div>
  <div class="pb-4">

```html
 <div
      class="toast fade show"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="toast-header toast-confirmative" >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.9987 0.333313C3.3187 0.333313 0.332031 3.31998 0.332031 6.99998C0.332031 10.68 3.3187 13.6666 6.9987 13.6666C10.6787 13.6666 13.6654 10.68 13.6654 6.99998C13.6654 3.31998 10.6787 0.333313 6.9987 0.333313ZM6.33203 10.3333V6.33331H7.66536V10.3333H6.33203ZM6.33203 3.66665V4.99998H7.66536V3.66665H6.33203Z" fill="white"/></svg>
        <div class="toast-body">
         This is a toast description.
        </div>
        <button type="button" class="btn toast-button">
          button
        </button>
        <svg  class="toast-cls-btn" data-bs-dismiss="toast"width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9.66537 1.27325L8.72537 0.333252L4.9987 4.05992L1.27203 0.333252L0.332031 1.27325L4.0587 4.99992L0.332031 8.72659L1.27203 9.66659L4.9987 5.93992L8.72537 9.66659L9.66537 8.72659L5.9387 4.99992L9.66537 1.27325Z" fill="white"/></svg>
      </div>
    </div>


```
  </div>


 <div class="h1 pb-1 text-capitalize">Variants</div>
  <div class="ax-example p-md-3 border" id="basictoast">
    <div
      class="toast fade show"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="toast-header toast-confirmative" >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.9987 0.333313C3.3187 0.333313 0.332031 3.31998 0.332031 6.99998C0.332031 10.68 3.3187 13.6666 6.9987 13.6666C10.6787 13.6666 13.6654 10.68 13.6654 6.99998C13.6654 3.31998 10.6787 0.333313 6.9987 0.333313ZM6.33203 10.3333V6.33331H7.66536V10.3333H6.33203ZM6.33203 3.66665V4.99998H7.66536V3.66665H6.33203Z" fill="white"/></svg>
        <div class="toast-body">
         This is a confirmative toast description.
        </div>
        <svg  class="toast-cls-btn" data-bs-dismiss="toast"width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9.66537 1.27325L8.72537 0.333252L4.9987 4.05992L1.27203 0.333252L0.332031 1.27325L4.0587 4.99992L0.332031 8.72659L1.27203 9.66659L4.9987 5.93992L8.72537 9.66659L9.66537 8.72659L5.9387 4.99992L9.66537 1.27325Z" fill="white"/></svg>
      </div>
    </div>
    <div
      class="toast fade show"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="toast-header toast-informative" >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.9987 0.333313C3.3187 0.333313 0.332031 3.31998 0.332031 6.99998C0.332031 10.68 3.3187 13.6666 6.9987 13.6666C10.6787 13.6666 13.6654 10.68 13.6654 6.99998C13.6654 3.31998 10.6787 0.333313 6.9987 0.333313ZM6.33203 10.3333V6.33331H7.66536V10.3333H6.33203ZM6.33203 3.66665V4.99998H7.66536V3.66665H6.33203Z" fill="white"/></svg>
        <div class="toast-body">
         This is an informative toast description.
        </div>
        <svg  class="toast-cls-btn" data-bs-dismiss="toast"width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9.66537 1.27325L8.72537 0.333252L4.9987 4.05992L1.27203 0.333252L0.332031 1.27325L4.0587 4.99992L0.332031 8.72659L1.27203 9.66659L4.9987 5.93992L8.72537 9.66659L9.66537 8.72659L5.9387 4.99992L9.66537 1.27325Z" fill="white"/></svg>
      </div>
    </div>
    <div
      class="toast fade show"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="toast-header toast-error" >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.9987 0.333313C3.3187 0.333313 0.332031 3.31998 0.332031 6.99998C0.332031 10.68 3.3187 13.6666 6.9987 13.6666C10.6787 13.6666 13.6654 10.68 13.6654 6.99998C13.6654 3.31998 10.6787 0.333313 6.9987 0.333313ZM6.33203 10.3333V6.33331H7.66536V10.3333H6.33203ZM6.33203 3.66665V4.99998H7.66536V3.66665H6.33203Z" fill="white"/></svg>
        <div class="toast-body">
         This is an error toast description.
        </div>
        <svg  class="toast-cls-btn" data-bs-dismiss="toast"width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9.66537 1.27325L8.72537 0.333252L4.9987 4.05992L1.27203 0.333252L0.332031 1.27325L4.0587 4.99992L0.332031 8.72659L1.27203 9.66659L4.9987 5.93992L8.72537 9.66659L9.66537 8.72659L5.9387 4.99992L9.66537 1.27325Z" fill="white"/></svg>
      </div>
    </div>
  </div>
  <div class="pb-4">

```html
  <div class="ax-example p-md-3 border">
    <div
      class="toast fade show"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="toast-header toast-confirmative" >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.9987 0.333313C3.3187 0.333313 0.332031 3.31998 0.332031 6.99998C0.332031 10.68 3.3187 13.6666 6.9987 13.6666C10.6787 13.6666 13.6654 10.68 13.6654 6.99998C13.6654 3.31998 10.6787 0.333313 6.9987 0.333313ZM6.33203 10.3333V6.33331H7.66536V10.3333H6.33203ZM6.33203 3.66665V4.99998H7.66536V3.66665H6.33203Z" fill="white"/></svg>
        <div class="toast-body">
         This is a confirmative toast description.
        </div>
        <svg  class="toast-cls-btn" data-bs-dismiss="toast"width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9.66537 1.27325L8.72537 0.333252L4.9987 4.05992L1.27203 0.333252L0.332031 1.27325L4.0587 4.99992L0.332031 8.72659L1.27203 9.66659L4.9987 5.93992L8.72537 9.66659L9.66537 8.72659L5.9387 4.99992L9.66537 1.27325Z" fill="white"/></svg>
      </div>
    </div>
    <div
      class="toast fade show"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="toast-header toast-informative" >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.9987 0.333313C3.3187 0.333313 0.332031 3.31998 0.332031 6.99998C0.332031 10.68 3.3187 13.6666 6.9987 13.6666C10.6787 13.6666 13.6654 10.68 13.6654 6.99998C13.6654 3.31998 10.6787 0.333313 6.9987 0.333313ZM6.33203 10.3333V6.33331H7.66536V10.3333H6.33203ZM6.33203 3.66665V4.99998H7.66536V3.66665H6.33203Z" fill="white"/></svg>
        <div class="toast-body">
         This is an informative toast description.
        </div>
        <svg  class="toast-cls-btn" data-bs-dismiss="toast"width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9.66537 1.27325L8.72537 0.333252L4.9987 4.05992L1.27203 0.333252L0.332031 1.27325L4.0587 4.99992L0.332031 8.72659L1.27203 9.66659L4.9987 5.93992L8.72537 9.66659L9.66537 8.72659L5.9387 4.99992L9.66537 1.27325Z" fill="white"/></svg>
      </div>
    </div>
    <div
      class="toast fade show"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="toast-header toast-error" >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.9987 0.333313C3.3187 0.333313 0.332031 3.31998 0.332031 6.99998C0.332031 10.68 3.3187 13.6666 6.9987 13.6666C10.6787 13.6666 13.6654 10.68 13.6654 6.99998C13.6654 3.31998 10.6787 0.333313 6.9987 0.333313ZM6.33203 10.3333V6.33331H7.66536V10.3333H6.33203ZM6.33203 3.66665V4.99998H7.66536V3.66665H6.33203Z" fill="white"/></svg>
        <div class="toast-body">
         This is an error toast description.
        </div>
        <svg  class="toast-cls-btn" data-bs-dismiss="toast"width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9.66537 1.27325L8.72537 0.333252L4.9987 4.05992L1.27203 0.333252L0.332031 1.27325L4.0587 4.99992L0.332031 8.72659L1.27203 9.66659L4.9987 5.93992L8.72537 9.66659L9.66537 8.72659L5.9387 4.99992L9.66537 1.27325Z" fill="white"/></svg>
      </div>
    </div>
  </div>


```
  </div>






  <!-- #endregion components_toast - examples - basic -->
  <!-- #region components_toast - examples - live -->
  <div class="h1 pb-1 text-capitalize">Live demo</div>
  <div class="ax-example p-md-3 border">
    <button type="button" class="btn btn-primary" id="liveToastBtn">
      Show live toast
    </button>
    <div
      class="position-fixed bottom-0 right-0 p-3"
      style="z-index: 5; right: 0; bottom: 0"
    >
    <div
      id="liveToast"
      class="toast hide"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      data-delay="4000"
    >
      <div class="toast-header toast-confirmative" >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.9987 0.333313C3.3187 0.333313 0.332031 3.31998 0.332031 6.99998C0.332031 10.68 3.3187 13.6666 6.9987 13.6666C10.6787 13.6666 13.6654 10.68 13.6654 6.99998C13.6654 3.31998 10.6787 0.333313 6.9987 0.333313ZM6.33203 10.3333V6.33331H7.66536V10.3333H6.33203ZM6.33203 3.66665V4.99998H7.66536V3.66665H6.33203Z" fill="white"/></svg>
        <div class="toast-body">
         This is a toast description.
        </div>
        <button type="button" class="btn toast-button">
          button
        </button>
        <svg  class="toast-cls-btn" data-bs-dismiss="toast"width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9.66537 1.27325L8.72537 0.333252L4.9987 4.05992L1.27203 0.333252L0.332031 1.27325L4.0587 4.99992L0.332031 8.72659L1.27203 9.66659L4.9987 5.93992L8.72537 9.66659L9.66537 8.72659L5.9387 4.99992L9.66537 1.27325Z" fill="white"/></svg>
      </div>
    </div>
    </div>
  </div>
  <div class="pb-4">

  
```html
<button type="button" class="btn btn-primary" id="liveToastBtn">
  Show live toast
</button>
<div
  class="position-fixed bottom-0 right-0 p-3"
  style="z-index: 5; right: 0; bottom: 0"
>
   <div
      id="liveToast"
      class="toast hide"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      data-delay="4000"
    >
      <div class="toast-header toast-confirmative" >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.9987 0.333313C3.3187 0.333313 0.332031 3.31998 0.332031 6.99998C0.332031 10.68 3.3187 13.6666 6.9987 13.6666C10.6787 13.6666 13.6654 10.68 13.6654 6.99998C13.6654 3.31998 10.6787 0.333313 6.9987 0.333313ZM6.33203 10.3333V6.33331H7.66536V10.3333H6.33203ZM6.33203 3.66665V4.99998H7.66536V3.66665H6.33203Z" fill="white"/></svg>
        <div class="toast-body">
         This is a toast description.
        </div>
        <button type="button" class="btn toast-button">
          button
        </button>
        <svg  class="toast-cls-btn" data-bs-dismiss="toast"width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9.66537 1.27325L8.72537 0.333252L4.9987 4.05992L1.27203 0.333252L0.332031 1.27325L4.0587 4.99992L0.332031 8.72659L1.27203 9.66659L4.9987 5.93992L8.72537 9.66659L9.66537 8.72659L5.9387 4.99992L9.66537 1.27325Z" fill="white"/></svg>
      </div>
    </div>
</div>  

```

```html
<!-- script to add after loading axaDesignSystemLib js dependencie -->
<script>
// Enable toast
var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
   // var toast = new axalib.Toast(toastLiveExample)
   // toast.show()
  })
}
</script> 
```
</div>
 