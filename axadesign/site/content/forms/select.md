---
layout: components
title: Select
description: Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.
section: forms
bootstrapRef: https://getbootstrap.com/docs/5.1/forms/overview/
menuSlug: select
---
 
<div class="display-5 pt-md-8 pb-1">Select</div>
 <p class="text-justify pe-md-8 pe-lg-11 pb-3">
  Set heights using classes like <code>.form-select-lg</code> and
  <code>.form-select-sm</code> in <code>&lt;input&gt;</code>.
</p>
<div class="ax-example p-md-3 border">
  <select
    class="form-select form-select-lg"
    aria-label=".form-select-lg example"
  >
    <option>Placeholder</option>
  </select>
  <br />
  <select class="form-select">
    <option>Placeholder</option>
  </select>
  <br />
  <select
    class="form-select form-select-sm"
    aria-label=".form-select-sm example"
  >
    <option>Placeholder</option>
  </select>
</div>
<div class="pb-4">

```html
<select class="form-select form-select-lg" aria-label=".form-select-lg example">
  <option>Placeholder</option>
</select>
<select class="form-select">
  <option>Placeholder</option>
</select>
<select class="form-select form-select-sm" aria-label=".form-select-sm example">
  <option>Placeholder</option>
</select>
```

</div>