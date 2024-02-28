---
layout: components
title: Switches
description: Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.
section: Forms
bootstrapRef: https://getbootstrap.com/docs/5.1/forms/overview/
menuSlug: switches

---


<h1 class="pt-3">Switches</h1>
<p class="text-justify pe-md-8 pe-lg-11 pb-3">
  A switch has the markup of a custom checkbox but uses the
  <code>.form-switch</code> class to render a toggle switch.
  Consider using role="switch" to more accurately convey the
  nature of the control to assistive technologies that support
  this role. In older assistive technologies, it will simply be
  announced as a regular checkbox as a fallback. Switches also
  support the <code>disabled</code> attribute.
</p>
<div class="ax-example p-md-3 border">
  <div class="form-check form-switch">
    <input
      type="checkbox"
      class="form-check-input"
      role="switch"
      id="customSwitch1"
    />
    <label class="form-check-label" for="customSwitch1"
      >Toggle this switch element</label
    >
  </div>
  <div class="form-check form-switch">
    <input
      class="form-check-input"
      type="checkbox"
      role="switch"
      id="flexSwitchCheckChecked"
      checked
    />
    <label class="form-check-label" for="flexSwitchCheckChecked"
      >Checked switch element</label
    >
  </div>
  <div class="form-check form-switch">
    <input
      type="checkbox"
      class="form-check-input"
      role="switch"
      id="customSwitcdiv"
      disabled
    />
    <label class="form-check-label" for="customSwitcdiv"
      >Disabled switch element</label
    >
  </div>
  <div class="form-check form-switch">
    <input
      class="form-check-input"
      type="checkbox"
      role="switch"
      id="flexSwitchCheckCheckedDisabled"
      checked
      disabled
    />
    <label
      class="form-check-label"
      for="flexSwitchCheckCheckedDisabled"
      >Disabled checked switch element</label
    >
  </div>
</div>
<div class="pb-4">

```html 
<div class="form-check form-switch">
  <input type="checkbox" class="form-check-input" role="switch" id="customSwitch1" />
  <label class="form-check-label" for="customSwitch1">Toggle this switch element</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
  <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch element</label>
</div>
<div class="form-check form-switch">
  <input type="checkbox" class="form-check-input" role="switch" id="customSwitcdiv" disabled/>
  <label class="form-check-label" for="customSwitcdiv">Disabled switch element</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckCheckedDisabled" checked disabled>
  <label class="form-check-label" for="flexSwitchCheckCheckedDisabled">Disabled checked switch element</label>
</div>
 
```
</div>
