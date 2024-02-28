---
layout: components
title: Checkbox 
description: Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.
section: Forms
bootstrapRef: https://getbootstrap.com/docs/5.1/forms/overview/
menuSlug: checkbox

---

<!-- #region Checkboxes and radios -->
<div class="display-5 pt-md-8 pb-1">Checkboxes</div>
<h1 class="pt-3">Default (stacked)</h1>
<div class="ax-example p-md-3 border">
  <div class="form-check">
    <input
      type="checkbox"
      class="form-check-input"
      id="defaultCheck1"
    />
    <label class="form-check-label" for="defaultCheck1"
      >Check this checkbox</label
    >
  </div>
  <div class="form-check">
    <input
      type="checkbox"
      class="form-check-input"
      id="disabledCheck1"
      disabled
    />
    <label class="form-check-label" for="disabledCheck1"
      >Disabled checkbox</label
    >
  </div>
</div>
<div class="pb-4">

```html
<div class="form-check">
  <input type="checkbox" class="form-check-input" id="defaultCheck1" />
  <label class="form-check-label" for="defaultCheck1">Check this checkbox</label>
</div>
<div class="form-check">
  <input type="checkbox" class="form-check-input" id="disabledCheck1" disabled/>
  <label class="form-check-label" for="disabledCheck1">Disabled checkbox</label>
</div>
</div>
```

</div>
 
