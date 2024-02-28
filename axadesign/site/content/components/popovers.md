---
layout: components
title: Popovers
description: Popover displays an overlay giving the user access to additional
  content and action by hover over, focus on, or tap an element.
section: Components
bootstrapRef: https://getbootstrap.com/docs/5.1/components/popovers/
menuSlug: popovers
---

  <!-- #region components_popovers - example -->
  <div class="display-5 pt-md-8 pb-1">Example</div>
  <div class="ax-example p-md-3 border">
    <button
      type="button"
      class="btn btn-secondary"
      data-bs-toggle="popover"
      title="Popover title"
      data-bs-content="And here's some amazing content. It's very engaging. Right?"
    >
      Click to toggle popover
    </button>
  </div>
  <div class="pb-4">

```html
<button
  type="button"
  class="btn btn-secondary"
  data-bs-toggle="popover"
  title="Popover title"
  data-bs-content="And here's some amazing content. It's very engaging. Right?"
>
  Click to toggle popover
</button>  

<!–- script to add after loading all required js dependencies (axaDesignSystemLib/popper) –->
<script>
  // Enable popover everywhere
  var popoverTriggerList = [].slice.call(document.querySelectorAll(’[data-bs-toggle=“popover”]’))
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl) }
    )
</script>
```

  </div>
  <!-- #endregion components_popovers - example -->
  <!-- #region components_popovers - four directions -->
  <div class="display-5 pt-md-8 pb-1">Four directions</div>
  <p class="text-justify pe-md-8 pe-lg-11 pb-3">
    You can define the position where the popover will be displayed.
  </p>
  <div class="ax-example p-md-3 border">
    <button
      type="button"
      class="btn btn-primary m-1"
      data-bs-container="body"
      data-bs-toggle="popover"
      data-bs-placement="top"
      data-bs-content="Top popover"
    >
      Popover on top
    </button>
    <button
      type="button"
      class="btn btn-primary m-1"
      data-bs-container="body"
      data-bs-toggle="popover"
      data-bs-placement="right"
      data-bs-content="Right popover"
    >
      Popover on right
    </button>
    <button
      type="button"
      class="btn btn-primary m-1"
      data-bs-container="body"
      data-bs-toggle="popover"
      data-bs-placement="bottom"
      data-bs-content="Bottom popover"
    >
      Popover on bottom
    </button>
    <button
      type="button"
      class="btn btn-primary m-1"
      data-bs-container="body"
      data-bs-toggle="popover"
      data-bs-placement="left"
      data-bs-content="Left popover"
    >
      Popover on left
    </button>
  </div>
  <div class="pb-4">

```html
<button
  type="button"
  class="btn btn-primary m-1"
  data-bs-container="body"
  data-bs-toggle="popover"
  data-bs-placement="top"
  data-bs-content="Top popover"
>
  Popover on top
</button>
<button
  type="button"
  class="btn btn-primary m-1"
  data-bs-container="body"
  data-bs-toggle="popover"
  data-bs-placement="right"
  data-bs-content="Right popover"
>
  Popover on right
</button>
<button
  type="button"
  class="btn btn-primary m-1"
  data-bs-container="body"
  data-bs-toggle="popover"
  data-bs-placement="bottom"
  data-bs-content="Bottom popover"
>
  Popover on bottom
</button>
<button
  type="button"
  class="btn btn-primary m-1"
  data-bs-container="body"
  data-bs-toggle="popover"
  data-bs-placement="left"
  data-bs-content="Left popover"
>
  Popover on left
</button>
```

  </div>
  <!-- #endregion components_popovers - four directions -->
  <!-- #region components_popovers - four directions - bottom with title -->
  <div class="h1 pt-md-5 pb-1">Bottom with title</div>
  <p class="text-justify pe-md-8 pe-lg-11 pb-3">
    Add custom <code>data-bs-template</code> to change arrow color
    when popover with title shown at the bottom (arrow with same
    gray color as title background)
  </p>
  <div class="ax-example p-md-3 border">
    <button
      type="button"
      class="btn btn-primary"
      data-bs-container="body"
      data-bs-toggle="popover"
      data-bs-placement="bottom"
      title="Popover title"
      data-bs-content="Bottom popover"
    >
      Popover on bottom
    </button>
  </div>
  <div class="pb-4">

  ```html 
  <button 
    type="button" 
    class="btn btn-primary"
    data-bs-container="body"
    data-bs-toggle="popover"
    data-bs-placement="bottom"
    title="Popover title"
    data-bs-content="Bottom popover"
  >
    Popover on bottom
  </button> 
  ```
  </div>
