---
layout: components
title: Buttons & Links
description: 'Buttons are divided into two main component groups : buttons and
  links. Buttons are more likely to be used for principal and
  secondary calls to action. Links are for complementary
  information such as "read more" and external links.'
section: Components
bootstrapRef: https://getbootstrap.com/docs/5.1/components/buttons/
menuSlug: buttons
---
 
  <div class="display-5 pt-md-8 pb-1">Examples</div>
  <p class="text-justify pe-md-8 pe-lg-11 pb-3">
    We recommend using the buttons associated with the colours
    "primary", "secondary" and "light" as a priority.
  </p>
  <div class="ax-example p-md-3 border bg-gray mb-3">
    <p>Main theme buttons</p>
    <button type="button" class="btn btn-primary me-1">
      Primary
    </button>
    <button type="button" class="btn btn-secondary me-1">
      Secondary
    </button>
    <button type="button" class="btn btn-light">Light</button>
  </div>
  <div class="pb-4">
   
  ```html 
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-light">Light</button> 
  ```
  </div>
  <!-- #endregion buttons - examples -->
  <!-- #region buttons - outline buttons -->
  <div class="display-5 pt-md-8 pb-1">Outline buttons</div>
  <p class="text-justify pe-md-8 pe-lg-11 pb-3">
    These buttons can be declined in outlines.
  </p>
  <div class="ax-example p-md-3 bg-gray mb-3 border">
    <button type="button" class="btn btn-outline-primary me-1">
      Primary
    </button>
    <button type="button" class="btn btn-outline-secondary me-1">
      Secondary
    </button>
    <button type="button" class="btn btn-outline-light">
      Light
    </button>
  </div>
  <div class="pb-4">
 
  ```html 
<button type="button" class="btn btn-outline-primary">Primary</button>
<button type="button" class="btn btn-outline-secondary">Secondary</button>
<button type="button" class="btn btn-outline-light">Light</button> 
  ```
  </div>

  <div class="display-5 pt-md-8 pb-1">Size</div>
  <p class="text-justify pe-md-8 pe-lg-11 pb-3">
    The size depends on the use, we prefer large buttons for
    prominent actions to smaller buttons for secondary actions.
  </p>
  <div class="ax-example p-md-3 border">
    <button type="button" class="btn btn-primary btn-sm">
      Small button
    </button>
    <button type="button" class="btn btn-primary">
      Standard button
    </button>
    <button type="button" class="btn btn-primary btn-lg">
      Large button
    </button>
  </div>
  <div class="pb-4">
   
   ```html 
<button type="button" class="btn btn-primary btn-sm">Small button</button>
<button type="button" class="btn btn-primary">Standard button</button>
<button type="button" class="btn btn-primary btn-lg">Large button</button> 
   ```
  </div>
  <!-- #endregion buttons - outline buttons -->
  <!-- #region buttons - block level buttons -->
  <p class="text-justify pe-md-8 pe-lg-11 pb-3">
    Create block level buttons—those that span the full width of a
    parent—by adding <code>.btn-block</code>.
  </p>
  <div class="ax-example p-md-3 border">
    <div class="row bg-gray">
      <button type="button" class="btn btn-primary btn-block">
        Block level button
      </button>
      <button type="button" class="btn btn-secondary btn-block">
        Block level button
      </button>
      <button type="button" class="btn btn-light btn-block">
        Block level button
      </button>
      <button
        type="button"
        class="btn btn-outline-primary btn-block"
      >
        Block level button
      </button>
      <button
        type="button"
        class="btn btn-outline-secondary btn-block"
      >
        Block level button
      </button>
      <button type="button" class="btn btn-outline-light btn-block">
        Block level button
      </button>
    </div>
  </div>
  <div class="pb-4">
    
  ```html 
<button type="button" class="btn btn-primary btn-block">Block level button</button>
<button type="button" class="btn btn-secondary btn-block">Block level button</button>
<button type="button" class="btn btn-light btn-block">Block level button</button>
<button type="button" class="btn btn-outline-primary btn-block">Block level button</button>
<button type="button" class="btn btn-outline-secondary btn-block">Block level button</button>
<button type="button" class="btn btn-outline-light btn-block">Block level button</button>
 
  ```


  </div>
  <!-- #endregion buttons - block level buttons -->
  <!-- #region buttons - buttons with icons -->
  <div class="display-5 pt-md-8 pb-1">Buttons with icons</div>
  <p class="text-justify pe-md-8 pe-lg-11 pb-3">
    You can add an icon to your button to reinforce its meaning.
  </p>
  <div class="ax-example p-md-3 border">
    <button type="button" class="btn btn-primary">
      Primary<i class="icon-add valign-btn-icon ms-1"></i>
    </button>
    <button type="button" class="btn btn-primary">
      <i class="icon-add valign-btn-icon me-1"></i>Primary
    </button>
    <button type="button" class="btn btn-primary">
      <i class="icon-add valign-btn-icon"></i>
    </button>
  </div>

  
  <div class="pb-4">
    

```html 
<button type="button" class="btn btn-primary">
  Primary <i class="icon-add ms-1"></i>
</button>

<button type="button" class="btn btn-primary">
  <i class="icon-add me-1" ></i> Primary
</button>

<button type="button" class="btn btn-primary">
  <i class="icon-add"></i>
</button> 
```

  </div>

  <!-- #endregion buttons - buttons with icons -->
  <!-- #region buttons - buttons & links -->
  <div class="display-5 pt-md-8 pb-1">Buttons & links</div>
  <p class="text-justify pe-md-8 pe-lg-11 pb-3">
    If the button component is too bulky, you can use its "link"
    version. The same color rules apply.
  </p>
  <div class="ax-example p-md-3 bg-gray">
    <div class="row justify-content-md-center">
      <div class="col-md-auto">
        <a class="btn btn-link-primary" href="#" role="button"
          >Link primary</a
        >
      </div>
      <div class="col-md-auto">
        <a class="btn btn-link-secondary" href="#" role="button"
          >Link secondary<i
            class="icon-east valign-btn-icon ms-1"
          ></i>
        </a>
      </div>
      <div class="col-md-auto">
        <a class="btn btn-link-light" href="#" role="button">
          <i class="icon-add valign-btn-icon me-1"></i>Link light</a
        >
      </div>
    </div>
  </div>

  <div class="pb-4">

  ```html
<a class="btn btn-link-primary" href="#" role="button">Link primary</a>
<a class="btn btn-link-secondary" href="#" role="button">Link secondary<i class="icon-east valign-btn-icon ms-1"></i></a>
<a class="btn btn-link-light" href="#" role="button"><i class="icon-add valign-btn-icon me-1"></i>Link light</a> 
  ```
  </div>
  
  <!-- #endregion buttons - buttons & links -->
  <!-- #region buttons - disabled state -->
  <div class="display-5 pt-md-8 pb-1">Disabled state</div>
  <p class="text-justify pe-md-8 pe-lg-11 pb-3">
    The disabled state allows a button to be displayed while waiting
    for a valid condition to reactivate it.
  </p>
  <div class="ax-example p-md-3 border">
    <button type="button" class="btn btn-primary" disabled>
      Primary
    </button>
    <button type="button" class="btn btn-secondary" disabled>
      Secondary
    </button>
    <button type="button" class="btn btn-light" disabled>
      Light
    </button>
    <button type="button" class="btn btn-outline-primary" disabled>
      Primary outline
    </button>
    <button
      type="button"
      class="btn btn-outline-secondary"
      disabled
    >
      Secondary outline
    </button>
    <button type="button" class="btn btn-link-primary" disabled>
      Primary link
    </button>
    <button type="button" class="btn btn-link-secondary" disabled>
      Secondary link
    </button>
  </div>
  <div class="pb-4">
   
   ```html 
<button type="button" class="btn btn-primary" disabled>Primary</button>
<button type="button" class="btn btn-secondary" disabled>Secondary</button>
<button type="button" class="btn btn-light" disabled>Light</button>
<button type="button" class="btn btn-outline-primary" disabled>Primary outline</button>
<button type="button" class="btn btn-outline-secondary" disabled>Secondary outline</button>
<button type="button" class="btn btn-link-primary" disabled>Primary link</button>
<button type="button" class="btn btn-link-secondary" disabled>Secondary link</button>

```
</div>


```
