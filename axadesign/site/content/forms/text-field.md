---
layout: components
title: Text Field
description: Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.
section: Forms
bootstrapRef: https://getbootstrap.com/docs/5.1/forms/overview/
menuSlug: text-field
---

<!-- #region form control -->
<div class="display-5 pt-md-8 pb-1">Form control</div>
  <p class="text-justify pe-md-8 pe-lg-11 pb-3">
    Give textual form controls like <code>&lt;input&gt;</code>s and
    <code>&lt;textarea&gt;</code>s an upgrade with custom styles,
    sizing, focus states, and more.
  </p>
  <div class="ax-example p-md-3 border">
    <form>
      <div class="mb-4">
        <label for="exampleFormControlInput1" class="form-label">
            <strong>Email address</strong>
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
        <div id="emailHelp" class="form-text">
          We will never share your email with anyone else.
        </div>
      </div>
      <div class="mb-4">
        <label for="exampleFormControlSelect1" class="form-label">
          <strong>Label</strong>
        </label>
        <select
          class="form-select"
          id="exampleFormControlSelect1"
          aria-label="Default select example"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <div id="emailHelp" class="form-text">Help text</div>
      </div>
      <div class="mb-4">
        <label for="exampleFormControlTextarea1" class="form-label">
            <strong>Label</strong>
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Placeholder"
        ></textarea>
      </div>
    </form>
  </div>
  <div class="pb-4">
   
```html 
<form>
  <div class="mb-4">
    <label for="exampleFormControlInput1" class="form-label">
      <strong>Email address</strong>
    </label>
    <input
      type="email"
      class="form-control"
      id="exampleFormControlInput1"
      placeholder="name@example.com"
    />
    <div id="emailHelp" class="form-text">
      We will never share your email with anyone else.
    </div>
  </div>
  <div class="mb-4">
    <label for="exampleFormControlSelect1" class="form-label">
      <strong>Label</strong>
    </label>
    <select
      class="form-select"
      id="exampleFormControlSelect1"
      aria-label="Default select example"
    > 
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
    <div id="emailHelp" class="form-text">Help text</div>
  </div>
  <div class="mb-4">
    <label for="exampleFormControlTextarea1" class="form-label">
      <strong>Label</strong>
    </label>
    <textarea
      class="form-control"
      id="exampleFormControlTextarea1"
      rows="3"
      placeholder="Placeholder"
    ></textarea>
  </div>
</form>

````
</div>
 
<!-- #endregion form control -->
<!-- #region sizing -->
<div class="display-5 pt-md-8 pb-1">Sizing</div>
<p class="text-justify pe-md-8 pe-lg-11 pb-3">
  Set heights using classes like <code>.form-control-lg</code> and
  <code>.form-control-sm</code> in <code>&lt;input&gt;</code>.
</p>
<div class="ax-example p-md-3 border">
  <input
    class="form-control form-control-lg"
    type="text"
    placeholder=".form-control-lg"
    aria-label=".form-control-lg example"
  />
  <br />
  <input
    class="form-control"
    type="text"
    placeholder="Default input"
  />
  <br />
  <input
    class="form-control form-control-sm"
    type="text"
    placeholder=".form-control-sm"
    aria-label=".form-control-sm example"
  />
</div>
<div class="pb-4">

```html
<input
  class="form-control form-control-lg"
  type="text"
  placeholder=".form-control-lg"
  aria-label=".form-control-lg example"
/>
<input class="form-control" type="text" placeholder="Default input" />
<input
  class="form-control form-control-sm"
  type="text"
  placeholder=".form-control-sm"
  aria-label=".form-control-sm example"
/>
```

</div>

<!-- #endregion sizing -->
 
<!-- #region Disabled forms -->
<div class="display-5 pt-md-8 pb-1">Disabled forms</div>
<p class="text-justify pe-md-8 pe-lg-11 pb-3">
  Add the <code>disabled</code> boolean attribute on an input to
  prevent user interactions and make it appear lighter.
</p>
<div class="ax-example p-md-3 border">
  <input
    class="form-control"
    id="disabledInput"
    type="text"
    placeholder="Disabled input here..."
    disabled
  />
</div>
<div class="pb-4">

```html
<input
  class="form-control"
  id="disabledInput"
  type="text"
  placeholder="Disabled input here..."
  disabled
/>
```

</div>
<p class="text-justify pe-md-8 pe-lg-11 pb-3">
  Add the <code>disabled</code> attribute to a
  <code>&lt;fieldset&gt;</code> to disable all the controls
  within.
</p>
<div class="ax-example p-md-3 border">
  <form>
    <fieldset disabled>
      <div class="mb-4">
        <label for="exampleInputEmail1_1" class="form-label"
          ><strong>Email address</strong></label
        >
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1_1"
          aria-describedby="emailHelp"
          placeholder="Disabled input"
        />
        <div id="emailHelp1_1" class="form-text">
          We will never share your email with anyone else.
        </div>
      </div>
      <div class="mb-4">
        <label for="exampleInputPassword1_1" class="form-label"
          ><strong>Password</strong></label
        >
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1_1"
          placeholder="Disabled input"
        />
      </div>
      <div class="mb-4 form-check">
        <input
          type="checkbox"
          class="form-check-input"
          id="exampleCheck1_1"
        />
        <label class="form-check-label" for="exampleCheck1_1"
          >Check me out</label
        >
      </div>
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </fieldset>
  </form>
</div>
<div class="pb-4">

```html

<fieldset disabled>
  <div class="mb-4">
    <label for="exampleInputEmail1_1" class="form-label">
      <strong>Email address</strong>
    </label>
    <input
      type="email"
      class="form-control"
      id="exampleInputEmail1_1"
      aria-describedby="emailHelp"
      placeholder="Disabled input"
    />
    <div id="emailHelp1_1" class="form-text">
      We will never share your email with anyone else.
    </div>
  </div>
  <div class="mb-4">
    <label for="exampleInputPassword1_1" class="form-label">
      <strong>Password</strong>
    </label>
    <input
      type="password"
      class="form-control"
      id="exampleInputPassword1_1"
      placeholder="Disabled input"
    />
  </div>
  <div class="mb-4 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1_1" />
    <label class="form-check-label" for="exampleCheck1_1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</fieldset> 
```
</div>
<!-- #endregion Disabled forms -->