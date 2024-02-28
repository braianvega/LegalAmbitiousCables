---
layout: components
title: Tooltips
description: It displays a label explaining the function of a user interface element or feature when the user hover over, focus on, or tap an element.
section: Components
bootstrapRef: https://getbootstrap.com/docs/5.1/components/tooltips/
menuSlug: tooltips
---

  <!-- #region components_tooltips - example -->
  <div class="display-5 pt-md-8 pb-1">Example</div>
  <!-- <div class="h1 pb-1 text-capitalize">Tooltip component</div>
    <div class="ax-example border px-3 py-10">
      <div class="tooltip show" style="will-change: transform;" x-placement="top">
        <div class="tooltip-inner">Tooltip sample</div>
      </div>
    </div>
    <div class="h1 py-1 text-capitalize">Live demo</div> -->
  <div class="ax-example p-md-3 pb-3 border">
    <button
      type="button"
      class="btn btn-primary tooltip-demo"
      data-bs-toggle="tooltip"
      data-bs-placement="top"
      title="Tooltip on top"
    >
      Tooltip on top
    </button>
    <button
      type="button"
      class="btn btn-primary tooltip-demo"
      data-bs-toggle="tooltip"
      data-bs-placement="right"
      title="Tooltip on right"
    >
      Tooltip on right
    </button>
    <button
      type="button"
      class="btn btn-primary tooltip-demo"
      data-bs-toggle="tooltip"
      data-bs-placement="bottom"
      title="Tooltip on bottom"
    >
      Tooltip on bottom
    </button>
    <button
      type="button"
      class="btn btn-primary tooltip-demo"
      data-bs-toggle="tooltip"
      data-bs-placement="left"
      title="Tooltip on left"
    >
      Tooltip on left
    </button>
  </div>
  <div class="pb-4">

```html
<button
  type="button"
  class="btn btn-primary tooltip-demo"
  data-bs-toggle="tooltip"
  data-bs-placement="top"
  title="Tooltip on top"
>
  Tooltip on top
</button>
<button
  type="button"
  class="btn btn-primary tooltip-demo"
  data-bs-toggle="tooltip"
  data-bs-placement="right"
  title="Tooltip on right"
>
  Tooltip on right
</button>
<button
  type="button"
  class="btn btn-primary tooltip-demo"
  data-bs-toggle="tooltip"
  data-bs-placement="bottom"
  title="Tooltip on bottom"
>
  Tooltip on bottom
</button>
<button
  type="button"
  class="btn btn-primary tooltip-demo"
  data-bs-toggle="tooltip"
  data-bs-placement="left"
  title="Tooltip on left"
>
  Tooltip on left
</button>
```

```html
<!-- script to add after loading all required js dependencies (axaDesignSystemLib/popper) -->

<script>
  // Enable tooltips everywhere
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
</script>
```

  </div>
