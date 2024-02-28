---
layout: components
title: Accordeon
description: A good way to display a long section of content by hiding it or
  revealing under a block thanks to the action of the user. This
  is mainly used for secondary content and it’s important to avoid
  hiding important information into this block.
section: Components
bootstrapRef: https://getbootstrap.com/docs/5.1/components/collapse/
menuSlug: accordeon
---

<!-- #region components_collapse - accordion example -->
  <div class="display-5 pt-md-8 pb-1">Accordion example</div>
  <p class="text-justify pe-md-8 pe-lg-11 pb-3">
    A more classic accordion version with disclosure to maximise
    space and display information only when requested by the user.
  </p>
  <div class="ax-example p-md-3 border">
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <div class="accordion-header" id="headingOne">
          <button
            class="btn accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            ACCORDION ITEM #1
          </button>
        </div>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            Some placeholder content for the first accordion panel.
            This panel is shown by default, thanks to the
            <code>.show</code> class.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <div class="accordion-header" id="headingTwo">
          <button
            class="btn accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            ACCORDION ITEM #2
          </button>
        </div>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            Some placeholder content for the second accordion panel.
            This panel is hidden by default.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <div class="accordion-header" id="headingThree">
          <button
            class="btn accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            ACCORDION ITEM #3
          </button>
        </div>
        <div
          id="collapseThree"
          class="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            Some placeholder content for the second accordion panel.
            This panel is hidden by default.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <div class="accordion-header" id="headingFour">
          <button
            class="btn accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFour"
            aria-expanded="false"
            aria-controls="collapseFour"
            disabled
          >
            ACCORDION ITEM #4 (DISABLED)
          </button>
        </div>
        <div
          id="collapseFour"
          class="accordion-collapse collapse"
          aria-labelledby="headingFour"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            Some placeholder content for the second accordion panel.
            This panel is hidden by default.
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="pb-4">
   
```html 
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button
        class="btn accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne"
      >
        ACCORDION ITEM #1
      </button>
    </h2>
    <div
      id="collapseOne"
      class="accordion-collapse collapse show"
      aria-labelledby="headingOne"
      data-bs-parent="#accordionExample"
    >
      <div class="accordion-body">
        Some placeholder content for the first accordion panel. This panel is
        shown by default, thanks to the code.show/code class.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button
        class="btn accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseTwo"
        aria-expanded="false"
        aria-controls="collapseTwo"
      >
        ACCORDION ITEM #2
      </button>
    </h2>
    <div
      id="collapseTwo"
      class="accordion-collapse collapse"
      aria-labelledby="headingTwo"
      data-bs-parent="#accordionExample"
    >
      <div class="accordion-body">
        Some placeholder content for the second accordion panel. This panel is
        hidden by default.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button
        class="btn accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseThree"
        aria-expanded="false"
        aria-controls="collapseThree"
      >
        ACCORDION ITEM #3
      </button>
    </h2>
    <div
      id="collapseThree"
      class="accordion-collapse collapse"
      aria-labelledby="headingThree"
      data-bs-parent="#accordionExample"
    >
      <div class="accordion-body">
        Some placeholder content for the second accordion panel. This panel is
        hidden by default.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingFour">
      <button
        class="btn accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseFour"
        aria-expanded="false"
        aria-controls="collapseFour"
        disabled
      >
        ACCORDION ITEM #4 (DISABLED)
      </button>
    </h2>
    <div
      id="collapseFour"
      class="accordion-collapse collapse"
      aria-labelledby="headingFour"
      data-bs-parent="#accordionExample"
    >
      <div class="accordion-body">
        Some placeholder content for the second accordion panel. This panel is
        hidden by default.
      </div>
    </div>
  </div>
</div> 

```
</div>
 