---
layout: components
title: Range
description: Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.
section: Forms
bootstrapRef: https://getbootstrap.com/docs/5.1/forms/overview/
menuSlug: range

---

<!-- #region range input -->
<div class="display-5 pt-md-8 pb-1">Range Input</div>
<p class="text-justify pe-md-8 pe-lg-11 pb-3">
  Create custom <code>&lt;input type="range"&gt;</code> controls
  with <code>.form-range.</code> The track (the background) and
  thumb (the value) are both styled to appear the same across
  browsers. As only Firefox support “filling” their track from the
  left or right of the thumb as a means to visually indicate
  progress, we do not currently support it.
</p>
<div class="ax-example p-md-3 border">
  <label for="customRange1" class="form-label"
    >Example range</label
  >
  <input type="range" class="form-range" id="customRange1" />
</div>
<div class="pb-4">

```html
<label for="customRange1" class="form-label">Example range</label>
<input type="range" class="form-range" id="customRange1" />
```

</div>
<div class="ax-example p-md-3 border">
  <label for="disabledRange" class="form-label"
    >Disabled range</label
  >
  <input
    type="range"
    class="form-range"
    id="disabledRange"
    disabled
  />
</div>
<div class="pb-4">

```html
<label for="disabledRange" class="form-label">Disabled range</label>
<input type="range" class="form-range" id="disabledRange" disabled />
```

</div>
<!-- #endregion range input -->