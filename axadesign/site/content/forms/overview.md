---
layout: components
title: Overview
description: Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.
section: Forms
bootstrapRef: https://getbootstrap.com/docs/5.1/forms/overview/
menuSlug: overview
---

<div class="display-5 pt-md-8 pb-1">Overview</div>
<div class="ax-example p-md-3 border">
<form>
    <div class="mb-4">
    <label for="exampleInputEmail1" class="form-label">
        <strong>Email address</strong>
    </label>
    <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp1"
    />
    <div id="emailHelp1" class="form-text">
        We will never share your email with anyone else.
    </div>
    </div>
    <div class="mb-4">
    <label for="exampleInputPassword1" class="form-label"
        ><strong>Password</strong></label>
    <input
        type="password"
        class="form-control"
        id="exampleInputPassword1"
    />
    </div>
    <div class="mb-4 form-check">
    <input
        type="checkbox"
        class="form-check-input"
        id="exampleCheck1"
    />
    <label class="form-check-label" for="exampleCheck1">
        Check this custom checkbox
    </label>
    </div>
    <button type="submit" class="btn btn-primary">submit</button>
</form>
</div>
<div class="pb-4">

```html
<form>
  <div class="mb-4">
    <label for="exampleInputEmail1" class="form-label">
      <strong>Email address</strong>
    </label>
    <input
      type="email"
      class="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp1"
    />
    <div id="emailHelp1" class="form-text">
      We will never share your email with anyone else.
    </div>
  </div>
  <div class="mb-4">
    <label for="exampleInputPassword1" class="form-label">
      <strong>Password</strong>
    </label>
    <input type="password" class="form-control" id="exampleInputPassword1" />
  </div>
  <div class="mb-4 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">
      Check this custom checkbox
    </label>
  </div>
  <button type="submit" class="btn btn-primary">submit</button>
</form>
```

</div>
<!-- #endregion Overview -->
