---
layout: components
title: Validation
description: Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.
section: Forms
bootstrapRef: https://getbootstrap.com/docs/5.1/forms/overview/
menuSlug: validation

---
<!-- #region Validation -->
<div class="display-5 pt-md-8 pb-1">Validation</div>
<p class="text-justify pe-md-8 pe-lg-11 pb-3">
  Provide valuable, actionable feedback to your users with HTML5
  form validation
</p>
<div class="ax-example p-md-3 border">
  <form class="row needs-validation" novalidate>
    <div class="col-12 mb-4">
      <label for="validationCustom01" class="form-label"
        ><strong>First name</strong></label
      >
      <input
        type="text"
        class="form-control"
        id="validationCustom01"
        value="Mark"
        required
      />
      <div class="valid-feedback">Looks good!</div>
      <div class="invalid-feedback">First name required.</div>
    </div>
    <div class="col-12 mb-4">
      <label for="validationCustom02" class="form-label"
        ><strong>Last name</strong></label
      >
      <input
        type="text"
        class="form-control"
        id="validationCustom02"
        value="Otto"
        required
      />
      <div class="valid-feedback">Looks good!</div>
      <div class="invalid-feedback">Last name required.</div>
    </div>
    <div class="col-12 mb-4">
      <label for="validationCustom04" class="form-label"
        ><strong>States</strong></label
      >
      <select
        class="form-select"
        id="validationCustom04"
        required
      >
        <option selected="" disabled="" value="">
          Choose...
        </option>
        <option>...</option>
      </select>
      <div class="invalid-feedback">
        Please select a valid state.
      </div>
    </div>
    <div class="col-12 mb-4">
      <div class="form-check">
        <input
          type="checkbox"
          class="form-check-input"
          id="invalidCheck"
          required
        />
        <label class="form-check-label" for="invalidCheck"
          >Agree to terms and conditions</label
        >
        <div class="invalid-feedback">
          You must agree before submitting.
        </div>
      </div>
    </div>
    <div class="col-12">
      <button class="btn btn-primary" type="submit">
        submit
      </button>
    </div>
  </form>
  <script>
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (function () {
      "use strict";
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.querySelectorAll(".needs-validation");
      // Loop over them and prevent submission
      Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (!form.checkValidity()) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    })();
  </script>
</div>
<div class="pb-4">

```html 
<form class="row needs-validation" novalidate>
  <div class="col-12 mb-4">
    <label for="validationCustom01" class="form-label">
      <strong>First name</strong>
    </label>
    <input
      type="text"
      class="form-control"
      id="validationCustom01"
      value="Mark"
      required
    />
    <div class="valid-feedback">Looks good!</div>
    <div class="invalid-feedback">First name required.</div>
  </div>
  <div class="col-12 mb-4">
    <label for="validationCustom02" class="form-label">
      <strong>Last name</strong>
    </label>
    <input
      type="text"
      class="form-control"
      id="validationCustom02"
      value="Otto"
      required
    />
    <div class="valid-feedback">Looks good!</div>
    <div class="invalid-feedback">Last name required.</div>
  </div>
  <div class="col-12 mb-4">
    <label for="validationCustom04" class="form-label">
      <strong>States</strong>
    </label>
    <select class="form-select" id="validationCustom04" required>
      <option selected="" disabled="" value="">Choose...</option>
      <option>...</option>
    </select>
    <div class="invalid-feedback">Please select a valid state.</div>
  </div>
  <div class="col-12 mb-4">
    <div class="form-check">
      <input
        type="checkbox"
        class="form-check-input"
        id="invalidCheck"
        required
      />
      <label class="form-check-label" for="invalidCheck"
        >Agree to terms and conditions</label
      >
      <div class="invalid-feedback">You must agree before submitting.</div>
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">submit</button>
  </div>
</form>
```
```js
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
"use strict";
// Fetch all the forms we want to apply custom Bootstrap validation styles to
var forms = document.querySelectorAll('.needs-validation')
// Loop over them and prevent submission
Array.prototype.slice.call(forms).forEach(function (form) {
  form.addEventListener('submit', function (event) {
    if (!form.checkValidity()) {
      event.preventDefault()
      event.stopPropagation()
    } 
    form.classList.add('was-validated')
  }, false)
})
})();
```
</div>
<!-- #endregion Validation -->