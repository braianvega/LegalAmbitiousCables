---
layout: components
title: Radio Buttons
description: Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.
section: Forms
bootstrapRef: https://getbootstrap.com/docs/5.1/forms/overview/
menuSlug: radio-buttons

---

<div class="ax-example p-md-3 border">
  <div class="form-check">
    <input
      class="form-check-input"
      type="radio"
      name="exampleRadios"
      id="exampleRadios1"
      value="option1"
      checked
    />
    <label class="form-check-label" for="exampleRadios1">
      Toggle this radio
    </label>
  </div>
  <div class="form-check">
    <input
      class="form-check-input"
      type="radio"
      name="exampleRadios"
      id="exampleRadios2"
      value="option2"
    />
    <label class="form-check-label" for="exampleRadios2">
      Or toggle this other radio
    </label>
  </div>
  <div class="form-check">
    <input
      class="form-check-input"
      type="radio"
      name="exampleRadios"
      id="exampleRadios3"
      value="option3"
      disabled
    />
    <label class="form-check-label" for="exampleRadios3">
      Disabled other radio
    </label>
  </div>
</div>
<div class="pb-4">

```html
<div class="form-check">
  <input
    class="form-check-input"
    type="radio"
    name="exampleRadios"
    id="exampleRadios1"
    value="option1"
    checked
  />
  <label class="form-check-label" for="exampleRadios1">
    Toggle this radio
  </label>
</div>
<div class="form-check">
  <input
    class="form-check-input"
    type="radio"
    name="exampleRadios"
    id="exampleRadios2"
    value="option2"
  />
  <label class="form-check-label" for="exampleRadios2">
    Or toggle this other radio
  </label>
</div>
<div class="form-check">
  <input
    class="form-check-input"
    type="radio"
    name="exampleRadios"
    id="exampleRadios3"
    value="option3"
    disabled
  />
  <label class="form-check-label" for="exampleRadios3">
    Disabled other radio
  </label>
</div>
```

</div>
<!-- #endregion Checkboxes and radios -->