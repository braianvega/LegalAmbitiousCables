---
layout: components
title: Dropdown
description: A dropdown displays a list of links with an overlay from which a
  user can select one or several options.

section: Components
bootstrapRef: https://getbootstrap.com/docs/5.1/components/dropdowns/
menuSlug: dropdown
---

  <div class="display-5 pt-md-8 pb-1">Single button</div>
  <p class="text-justify pe-md-8 pe-lg-11 pb-3">
    The simplest version uses a button. The latter can be adapted to
    the colours present in the default theme.
  </p>
  <div class="ax-example p-md-3 border">
    <div class="dropdown">
      <button
        class="btn btn-primary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        primary button
      </button>
      <div
        class="dropdown-menu"
        aria-labelledby="dropdownMenuButton"
      >
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
      </div>
    </div>
  </div>
  <div class="pb-4">
    
```html 
<div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    primary button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div> 
```

</div>
<!-- #endregion components_dropmdown - single button -->
<!-- #region components_dropmdown - split button -->
<div class="display-5 pt-md-8 pb-1">Split button</div>
<p class="text-justify pe-md-8 pe-lg-11 pb-3">
  You can also use the split button to make a first selection
  before submitting.
</p>
<div class="ax-example p-md-3 border">
  <div class="btn-group">
    <button type="button" class="btn btn-primary">
      primary button
    </button>
    <button
      type="button"
      class="btn btn-primary dropdown-toggle dropdown-toggle-split"
      data-bs-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
    </div>
  </div>
</div>
<div class="pb-4">

```html
<div class="btn-group">
  <button type="button" class="btn btn-primary">primary button</button>
  <button
    type="button"
    class="btn btn-primary dropdown-toggle dropdown-toggle-split"
    data-bs-toggle="dropdown"
    aria-haspopup="true"
    aria-expanded="false"
  >
    <span class="visually-hidden">Toggle Dropdown</span>
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
```

</div>
<!-- #endregion components_dropmdown - split button -->
<!-- #region components_dropmdown - directions -->
<div class="display-5 pt-md-8 pb-1">Directions</div>
<p class="text-justify pe-md-8 pe-lg-11 pb-3">
  The directions allow the unfolded menu to be displayed according
  to the position of the component.
</p>
<!-- #region components_dropmdown - directions - dropup -->
<div class="h1 pt-md-5 pb-1">Dropup</div>
<div class="ax-example p-md-3 border">
  <div class="dropdown dropup">
    <button
      class="btn btn-primary dropdown-toggle"
      type="button"
      id="dropdownMenuButton1"
      data-bs-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      primary button
    </button>
    <div
      class="dropdown-menu"
      aria-labelledby="dropdownMenuButton1"
    >
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
    </div>
  </div>
</div>
<div class="pb-4">

```html
<div class="dropdown dropup">
  <button
    class="btn btn-primary dropdown-toggle"
    type="button"
    id="dropdownMenuButton1"
    data-bs-toggle="dropdown"
    aria-haspopup="true"
    aria-expanded="false"
  >
    primary button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
```

</div>
<!-- #endregion components_dropmdown - directions - dropup -->
<!-- #region components_dropmdown - directions - dropright -->
<div class="h1 pt-md-5 pb-1">Dropright</div>
<div class="ax-example p-md-3 border">
  <div class="dropdown dropend">
    <button
      class="btn btn-primary dropdown-toggle"
      type="button"
      id="dropdownMenuButton2"
      data-bs-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      primary button
    </button>
    <div
      class="dropdown-menu"
      aria-labelledby="dropdownMenuButton2"
    >
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
    </div>
  </div>
</div>
<div class="pb-4">

```html
<div class="dropdown dropend">
  <button
    class="btn btn-primary dropdown-toggle"
    type="button"
    id="dropdownMenuButton2"
    data-bs-toggle="dropdown"
    aria-haspopup="true"
    aria-expanded="false"
  >
    primary button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
```

</div>
<!-- #endregion components_dropmdown - directions - dropright -->
<!-- #region components_dropmdown - directions - dropleft -->
<div class="h1 pt-md-5 pb-1">Dropleft</div>
<div class="ax-example p-md-3 border">
  <div class="dropdown dropstart">
    <span class="d-inline-block w-25">&nbsp;</span>
    <button
      class="btn btn-primary dropdown-toggle"
      type="button"
      id="dropdownMenuButton3"
      data-bs-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      primary button
    </button>
    <div
      class="dropdown-menu"
      aria-labelledby="dropdownMenuButton3"
    >
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
    </div>
  </div>
</div>
<div class="pb-4">
 
```html

<div class="dropdown dropstart">
  <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    primary button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton3">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>

````


</div>
<!-- #endregion components_dropmdown - directions - dropleft -->
<!-- #endregion components_dropmdown - directions -->

<!-- #region components_dropmdown - menu items -->
<div class="display-5 pt-md-8 pb-1">Menu items</div>
<div class="ax-example p-md-3 border">
  <div style="height: 160px; width: 200px">
    <div
      class="dropdown-menu"
      style="position: static; display: block"
    >
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
    </div>
  </div>
</div>
<div class="pb-4" style="display: block">

```html 
<div class="dropdown-menu">
  <a class="dropdown-item" href="#">Action</a>
  <a class="dropdown-item" href="#">Another action</a>
  <a class="dropdown-item" href="#">Something else here</a>
</div> 

```

</div>
<!-- #region components_dropmdown - menu items - active -->
<div class="h1 pt-md-5 pb-1">Active</div>
<div class="ax-example p-md-3 border">
  <div style="height: 160px; width: 200px">
    <div
      class="dropdown-menu"
      style="position: static; display: block"
    >
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item active" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
    </div>
  </div>
</div>
<div class="pb-4">

```html 
<div class="dropdown-menu">
  <a class="dropdown-item" href="#">Action</a>
  <a class="dropdown-item active" href="#">Another action</a>
  <a class="dropdown-item" href="#">Something else here</a>
</div> 
```

</div>
<!-- #endregion components_dropmdown - menu items - active -->
<!-- #region components_dropmdown - menu items - disabled -->
<div class="h1 pt-md-5 pb-1">Disabled</div>
<div class="ax-example p-md-3 border">
  <div style="height: 160px; width: 200px">
    <div
      class="dropdown-menu"
      style="position: static; display: block"
    >
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item disabled" href="#"
        >Another action</a
      >
      <a class="dropdown-item" href="#">Something else here</a>
    </div>
  </div>
</div>
<div class="pb-4">


```html
 
<div class="dropdown-menu">
  <a class="dropdown-item" href="#">Action</a>
  <a class="dropdown-item disabled" href="#">Another action</a>
  <a class="dropdown-item" href="#">Something else here</a>
</div>
 
```
</div>
<!-- #endregion components_dropmdown - menu items - disabled -->
<!-- #endregion components_dropmdown - menu items -->

<!-- #region components_dropmdown - menu content -->
<div class="display-5 pt-md-8 pb-1">Menu content</div>
<!-- #region components_dropmdown - menu content - header -->
<div class="h1 pt-md-5 pb-1">Header</div>
<p class="text-justify pe-md-8 pe-lg-11 pb-3">
  You can add headings inside the unfolded menu to better separate
  your list items.
</p>
<div class="ax-example p-md-3 border">
  <div style="height: 180px; width: 200px">
    <div
      class="dropdown-menu"
      style="position: static; display: block"
    >
      <h5 class="dropdown-header">Dropdown header</h5>
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
    </div>
  </div>
</div>
<div class="pb-4">

  ```html 
  <div class="dropdown-menu">
    <h5 class="dropdown-header">Dropdown header</h5>
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
 
  ```
</div>
<!-- #endregion components_dropmdown - menu content - header -->
<!-- #region components_dropmdown - menu content - dividers -->
<div class="h1 pt-md-5 pb-1">Dividers</div>
<p class="text-justify pe-md-8 pe-lg-11 pb-3">
  You can also add separators to separate entries.
</p>
<div class="ax-example p-md-3 border">
  <div style="height: 200px; width: 200px">
    <div
      class="dropdown-menu"
      style="position: static; display: block"
    >
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div>
</div>
<div class="pb-4">

```html
<div class="dropdown-menu">
  <a class="dropdown-item" href="#">Action</a>
  <a class="dropdown-item" href="#">Another action</a>
  <a class="dropdown-item" href="#">Something else here</a>
  <div class="dropdown-divider"></div>
  <a class="dropdown-item" href="#">Separated link</a>
</div>

````

</div>
