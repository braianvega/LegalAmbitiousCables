---
layout: components
title: Input-group
description: A specific category of input forms which improve the readability by adding directly the label, button, or button group as a “help text”, at the same level that the form itself.  
section: Forms
bootstrapRef: https://getbootstrap.com/docs/5.1/forms/input-group/
menuSlug: input-group
---
 
<div class="display-5 pt-md-8 pb-1">Basic example</div>
<div class="ax-example p-md-3 border">
  <div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1">@</span>
    <input
      type="text"
      class="form-control"
      placeholder="Username"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </div>

  <div class="input-group mb-3">
    <input
      type="text"
      class="form-control"
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <span class="input-group-text" id="basic-addon2"
      >@example.com</span
    >
  </div>

  <div class="input-group mb-3">
    <span class="input-group-text">$</span>
    <input
      type="text"
      class="form-control"
      aria-label="Amount (to the nearest dollar)"
    />
    <span class="input-group-text">.00</span>
  </div>

  <div class="input-group">
    <span class="input-group-text">With textarea</span>
    <textarea
      class="form-control"
      aria-label="With textarea"
    ></textarea>
  </div>
</div>
<div class="pb-4">

```html
<div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">@</span>
  <input
    type="text"
    class="form-control"
    placeholder="Username"
    aria-label="Username"
    aria-describedby="basic-addon1"
  />
</div>
<div class="input-group" mb-3”>
  <input
    type="text"
    class="form-control"
    placeholder="Recipient’s" 
    aria-label="Recipient’s" 
    aria-describedby="basic-addon2"
  />
  <span class="input-group-text" id="basic-addon2">@example.com</span>
</div>
<div class="input-group" mb-3”>
  <span class="input-group-text">$</span>
  <input type=“text” class=“form-control” aria-label=“Amount (to the nearest
  dollar)">
  <span class="input-group-text">.00</span>
</div>

<div class="input-group">
  <span class="input-group-text">With textarea</span>
  <textarea class="form-control" aria-label="With" textarea”></textarea>
</div>


```
</div>
<!-- #endregion components_input_group - basic example -->
<!-- #region components_input_group - sizing -->
<div class="display-5 pt-md-8 pb-1">Sizing</div>
<p class="text-justify pe-md-8 pe-lg-11 pb-3">
  You can vary the sizes to make your form elements responsive.
</p>
<div class="ax-example p-md-3 border">
  <div class="input-group input-group-sm mb-3">
    <span class="input-group-text" id="inputGroup-sizing-sm"
      >Small</span
    >
    <input
      type="text"
      placeholder="Placeholder"
      class="form-control"
      aria-label="Sizing example input"
      aria-describedby="inputGroup-sizing-sm"
    />
  </div>

  <div class="input-group mb-3">
    <span class="input-group-text" id="inputGroup-sizing-default"
      >Default</span
    >
    <input
      type="text"
      placeholder="Placeholder"
      class="form-control"
      aria-label="Sizing example input"
      aria-describedby="inputGroup-sizing-default"
    />
  </div>

  <div class="input-group input-group-lg">
    <span class="input-group-text" id="inputGroup-sizing-lg"
      >Large</span
    >
    <input
      type="text"
      placeholder="Placeholder"
      class="form-control"
      aria-label="Sizing example input"
      aria-describedby="inputGroup-sizing-lg"
    />
  </div>
</div>
<div class="pb-4">

```html 
<div class="input-group input-group-sm mb-3">
  <span class="input-group-text" id="inputGroup-sizing-sm">Small</span>
  <input
    type="text"
    placeholder="Placeholder"
    class="form-control"
    aria-label="Sizing example input"
    aria-describedby="inputGroup-sizing-sm"
  />
</div>
<div class="input-group" mb-3”>
  <span class="input-group-text" id="inputGroup-sizing-default"
    >Default</span
  >
  <input
    type="text"
    placeholder="Placeholder"
    class="form-control"
    aria-label="Sizing"
    example
    input”
    aria-describedby="inputGroup-sizing-default"
  />
</div>

<div class="input-group" input-group-lg”>
  <span class="input-group-text" id="inputGroup-sizing-lg">Large</span>
  <input
    type="text"
    placeholder="Placeholder"
    class="form-control"
    aria-label="Sizing"
    example
    input”
    aria-describedby="inputGroup-sizing-lg"
  />
</div> 
```
</div> 