---
layout: components
title: Progress
description: Display the completion of a task by showing visually how much is
    done and how much is left. The longer or difficult the journey
    is, the higher the progress bar will be useful to guide the user
    to the end. 
section: Components
bootstrapRef: https://getbootstrap.com/docs/5.1/components/progress/
menuSlug: progress
---

 
  <!-- #region components_progress - example -->
  <div class="display-5 pt-md-8 pb-1">Example</div>
  <div class="ax-example p-md-3 border">
    <div class="progress">
      <div
        class="progress-bar"
        role="progressbar"
        aria-valuenow="0"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
    <div class="progress">
      <div
        class="progress-bar"
        role="progressbar"
        style="width: 75%"
        aria-valuenow="75"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
    <div class="progress">
      <div
        class="progress-bar bg-secondary"
        role="progressbar"
        style="width: 55%"
        aria-valuenow="55"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  </div>
  <div class="pb-4">

```html 
<div class="progress">
  <div
    class="progress-bar"
    role="progressbar"
    aria-valuenow="0"
    aria-valuemin="0"
    aria-valuemax="100"
  ></div>
</div>
<div class="progress">
  <div
    class="progress-bar"
    role="progressbar"
    style="width: 75%"
    aria-valuenow="75"
    aria-valuemin="0"
    aria-valuemax="100"
  ></div>
</div>
<div class="progress">
  <div
    class="progress-bar bg-secondary"
    role="progressbar"
    style="width: 55%"
    aria-valuenow="55"
    aria-valuemin="0"
    aria-valuemax="100"
  ></div>
</div>

```
  </div>
  <!-- #endregion components_progress - example -->
 