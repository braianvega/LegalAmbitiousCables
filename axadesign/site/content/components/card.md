---
layout: components
title: Card
description: Cards are pieces of elements that serve editorial content. They
  can be used in several ways and work with strong visual content.

section: Components
bootstrapRef: https://getbootstrap.com/docs/5.1/components/card/
menuSlug: card
---

<div class="display-5 pt-md-8 pb-1">Card basic</div>
<div class="h1 pt-md-1">Simple</div>
<p class="text-justify pe-md-8 pe-lg-11 pb-3">
  This is the simplest card component, it does not contain a description and
  only displays a title, a date and a super-title.
</p>
<div class="h3 pt-md-1">Image at top</div>
<div class="ax-example p-md-3 border">
  <div class="card" style="width: 288px">
    <svg
      class="card-img-top"
      width="100%"
      height="180"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Placeholder: Image cap"
      preserveAspectRatio="xMidYMid slice"
      focusable="false"
    > <title>Placeholder</title> <rect width="100%" height="100%" fill="#ccc"></rect> </svg>
    <div class="card-body pt-4">
      <h3 class="card-subtitle text-secondary">subhead</h3>
      <h2 class="card-title">This is the card title</h2>
      <p class="h4 text-muted card-text">21/03/2021</p>
    </div>
  </div>
</div>

<div class="pb-4">

```html
<div class="card" style="width: 288px;">
  <img src="..." alt="..." />
  <div class="card-body pt-4">
    <h3 class="card-subtitle text-secondary">subhead</h3>
    <h2 class="card-title">This is the card title</h2>
    <p class="h4 text-muted card-text">21/03/2021</p>
  </div>
</div>
```

</div>

<div class="h3 pt-md-1">Image at left</div>
<div class="ax-example p-md-3 border">
  <div class="card" style="max-width: 440px">
    <div class="row g-0">
      <div class="col-auto">
        <svg
          width="150"
          height="150"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: Image cap"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        ><title>Placeholder</title><rect width="100%" height="100%" fill="#ccc"></rect></svg>
      </div>
      <div class="col">
        <div class="card-body py-0 ps-4">
          <h3 class="card-subtitle text-secondary">subhead</h3>
          <h2 class="card-title">This is the card title</h2>
          <p class="h4 text-muted card-text">21/03/2021</p>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="pb-4">

```html
<div class="card" style="max-width: 440px;">
  <div class="row g-0">
    <div class="col-auto">
      <img src="..." alt="..." />
    </div>
    <div class="col">
      <div class="card-body py-0 ps-4">
        <h3 class="card-subtitle text-secondary">subhead</h3>
        <h2 class="card-title">This is the card title</h2>
        <p class="h4 text-muted card-text">21/03/2021</p>
      </div>
    </div>
  </div>
</div>
```

</div>

<div class="h3 pt-md-1">Image at right</div>
<div class="ax-example p-md-3 border">
  <div class="card" style="max-width: 440px">
    <div class="row g-0">
      <div class="col">
        <div class="card-body py-0 pe-4">
          <h3 class="card-subtitle text-secondary">subhead</h3>
          <h2 class="card-title">This is the card title</h2>
          <p class="h4 text-muted card-text">21/03/2021</p>
        </div>
      </div>
      <div class="col-auto">
        <svg
          width="150"
          height="150"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: Image cap"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        > <title>Placeholder</title> <rect width="100%" height="100%" fill="#ccc"></rect> </svg>
      </div>
    </div>
  </div>
</div>
<div class="pb-4">

```html
<div class="card" style="max-width: 440px;">
  <div class="row g-0">
    <div class="col">
      <div class="card-body py-0 pe-4">
        <h3 class="card-subtitle text-secondary">subhead</h3>
        <h2 class="card-title">This is the card title</h2>
        <p class="h4 text-muted card-text">21/03/2021</p>
      </div>
    </div>
    <div class="col-auto">
      <img src="..." alt="..." />
    </div>
  </div>
</div>
```

</div>
<!-- #endregion components_card - card basic - simple -->
<!-- #region components_card - card basic - advanced -->
<div class="h1 pt-md-1">Advanced</div>
<p class="text-justify pe-md-8 pe-lg-11 pb-3">
  The advanced version adds a description to the card, a link (which can also
  become a button).
</p>
<div class="h3 pt-md-1">Image at top</div>
<div class="ax-example p-md-3 border">
  <div class="card" style="width: 288px">
    <svg
      class="card-img-top"
      width="100%"
      height="180"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Placeholder: Image cap"
      preserveAspectRatio="xMidYMid slice"
      focusable="false"
    > <title>Placeholder</title> <rect width="100%" height="100%" fill="#ccc"></rect></svg>
    <div class="card-body pt-4">
      <h3 class="card-subtitle text-secondary">
        subhead <span class="text-muted">- 21/03/2021</span>
      </h3>
      <h2 class="card-title">This is the card title</h2>
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the content f the card.
      </p>
      <a href="#" class="card-link btn btn-link-secondary text-nowrap"
        >secondary link<i class="icon-east valign-btn-icon ms-1"></i>
      </a>
    </div>
  </div>
</div>
<div class="pb-4">
  
```html 
<div class="card">
  <img src="..." alt="...">
  <div class="card-body pt-4">
    <h3 class="card-subtitle text-secondary">subhead <span class="text-muted">- 21/03/2021</span></h3>
    <h2 class="card-title">This is the card title</h2>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the content of the card.</p>
    <a href="#" class="card-link btn btn-link-secondary text-nowrap">
    secondary link
    <i class="icon-east ms-1"></i>
    </a>
  </div>
</div>

````

</div>
<div class="h3 pt-md-1">Image at left</div>
<div class="ax-example p-md-3 border">
<div class="card" style="max-width: 540px; min-width: 350px">
  <div class="row g-0">
    <div class="col-auto">
      <svg
        width="150"
        height="150"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Placeholder: Image cap"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      ><title>Placeholder</title><rect width="100%" height="100%" fill="#ccc"></rect></svg>
    </div>
    <div class="col">
      <div class="card-body py-0 ps-4">
        <h3 class="card-subtitle text-secondary">
          subhead <span class="text-muted">- 21/03/2021</span>
        </h3>
        <h2 class="card-title">This is the card title</h2>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the content of the card.
        </p>
        <a href="#" class="card-link btn btn-link-secondary text-nowrap"
          >secondary link<i class="icon-east valign-btn-icon ms-1"></i>
        </a>
      </div>
    </div>
  </div>
</div>
</div>
<div class="pb-4">

```html
<div class="card">
  <div class="row g-0">
    <div class="col-auto">
      <img src="..." alt="...">
    </div>
    <div class="col">
      <div class="card-body py-0 ps-4">
        <h3 class="card-subtitle text-secondary">subhead <span class="text-muted">- 21/03/2021</span></h3>
        <h2 class="card-title">This is the card title</h2>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the content of the card.</p>
        <a href="#" class="card-link btn btn-link-secondary text-nowrap">
        secondary link
        <i class="icon-east ms-1"></i>
        </a>
      </div>
    </div>
  </div>
</div>
````

</div>
<div class="h3 pt-md-1">Image at right</div>
<div class="ax-example p-md-3 border">
<div class="card" style="max-width: 540px; min-width: 350px">
  <div class="row g-0">
    <div class="col">
      <div class="card-body py-0 pe-4">
        <h3 class="card-subtitle text-secondary">
          subhead <span class="text-muted">- 21/03/2021</span>
        </h3>
        <h2 class="card-title">This is the card title</h2>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the content of the card.
        </p>
        <a href="#" class="card-link btn btn-link-secondary text-nowrap"
          >secondary link<i class="icon-east valign-btn-icon ms-1"></i>
        </a>
      </div>
    </div>
    <div class="col-auto">
      <svg
        width="150"
        height="150"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Placeholder: Image cap"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      > <title>Placeholder</title> <rect width="100%" height="100%" fill="#ccc"></rect> </svg>
    </div>
  </div>
</div>
</div>
<div class="pb-4">

```html
<div class="card">
  <div class="row g-0">
    <div class="col">
      <div class="card-body py-0 pe-4">
        <h3 class="card-subtitle text-secondary">
          subhead <span class="text-muted">- 21/03/2021</span>
        </h3>
        <h2 class="card-title">This is the card title</h2>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the content of the card.
        </p>
        <a href="#" class="card-link btn btn-link-secondary text-nowrap">
          secondary link
          <i class="icon-east ms-1"></i>
        </a>
      </div>
    </div>
    <div class="col-auto">
      <img src="..." alt="..." />
    </div>
  </div>
</div>
```

</div>
<!-- #endregion components_card - card basic - advanced -->
<!-- #endregion components_card - card basic -->

<!-- #region components_card - card highlight -->
<div class="display-5 pt-md-8 pb-1">Card highlight</div>
<p class="text-justify pe-md-8 pe-lg-11 pb-3">
The "highlight" version uses Publico title levels and can take more prominence
in your content stream.
</p>
<!-- #region components_card - card highlight - with buttons -->
<div class="h1 pt-md-1">With buttons</div>
<div class="h3 pt-md-1">Image at top</div>
<div class="ax-example p-md-3 border">
<div class="card" style="width: 388px">
  <svg
    class="card-img-top"
    width="100%"
    height="180"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Placeholder: Image cap"
    preserveAspectRatio="xMidYMid slice"
    focusable="false"
  > <title>Placeholder</title> <rect width="100%" height="100%" fill="#ccc"></rect> </svg>
  <div class="card-body pt-4">
    <h3 class="card-subtitle text-secondary">
      subhead <span class="text-muted">- 21/03/2021</span>
    </h3>
    <p class="card-title display-5">This is the card title</p>
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk
      of the content of the card.
    </p>
    <p>
      <a href="#" class="btn btn-secondary">secondary link</a>
    </p>
    <p>
      <a href="#" class="btn btn-outline-secondary">secondary link</a>
    </p>
  </div>
</div>
</div>
<div class="pb-4">

```html
<div class="card">
  <img src="..." alt="..." />
  <div class="card-body pt-4">
    <h3 class="card-subtitle text-secondary">
      subhead <span class="text-muted">- 21/03/2021</span>
    </h3>
    <p class="card-title display-5">This is the card title</p>
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the content of the card.
    </p>
    <p><a href="#" class="btn btn-secondary">secondary link</a></p>
    <p><a href="#" class="btn btn-outline-secondary">secondary link</a></p>
  </div>
</div>
```

</div>
<div class="h3 pt-md-1">Image at left</div>
<div class="ax-example p-md-3 border">
<div class="card" style="max-width: 600px; min-width: 370px">
  <div class="row g-0">
    <div class="col-auto">
      <svg
        width="200"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Placeholder: Image cap"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      > <title>Placeholder</title> <rect width="100%" height="100%" fill="#ccc"></rect> </svg>
    </div>
    <div class="col">
      <div class="card-body py-0 ps-4">
        <h3 class="card-subtitle text-secondary">
          subhead <span class="text-muted">- 21/03/2021</span>
        </h3>
        <p class="card-title display-5">This is the card title</p>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the content of the card.
        </p>
        <p>
          <a href="#" class="btn btn-secondary">secondary link</a>
        </p>
        <p>
          <a href="#" class="btn btn-outline-secondary">secondary link</a>
        </p>
      </div>
    </div>
  </div>
</div>
</div>
<div class="pb-4">

```html
<div class="card">
  <div class="row g-0">
    <div class="col-auto">
      <img src="..." alt="..." />
    </div>
    <div class="col">
      <div class="card-body py-0 ps-4">
        <h3 class="card-subtitle text-secondary">
          subhead <span class="text-muted">- 21/03/2021</span>
        </h3>
        <p class="card-title display-5">This is the card title</p>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the content of the card.
        </p>
        <p><a href="#" class="btn btn-secondary">secondary link</a></p>
        <p><a href="#" class="btn btn-outline-secondary">secondary link</a></p>
      </div>
    </div>
  </div>
</div>
```

</div>
<div class="h3 pt-md-1">Image at right</div>
<div class="ax-example p-md-3 border">
<div class="card" style="max-width: 600px; min-width: 370px">
  <div class="row g-0">
    <div class="col">
      <div class="card-body py-0 pe-4">
        <h3 class="card-subtitle text-secondary">
          subhead <span class="text-muted">- 21/03/2021</span>
        </h3>
        <p class="card-title display-5">This is the card title</p>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the content of the card.
        </p>
        <p>
          <a href="#" class="btn btn-secondary">secondary link</a>
        </p>
        <p>
          <a href="#" class="btn btn-outline-secondary">secondary link</a>
        </p>
      </div>
    </div>
    <div class="col-auto">
      <svg
        width="200"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Placeholder: Image cap"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      > <title>Placeholder</title> <rect width="100%" height="100%" fill="#ccc"></rect> </svg>
    </div>
  </div>
</div>
</div>
<div class="pb-4">

```html
<div class="card">
  <div class="row g-0">
    <div class="col">
      <div class="card-body py-0 pe-4">
        <h3 class="card-subtitle text-secondary">
          subhead <span class="text-muted">- 21/03/2021</span>
        </h3>
        <p class="card-title display-5">This is the card title</p>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the content of the card.
        </p>
        <p><a href="#" class="btn btn-secondary">secondary link</a></p>
        <p><a href="#" class="btn btn-outline-secondary">secondary link</a></p>
      </div>
    </div>
    <div class="col-auto">
      <img src="..." alt="..." />
    </div>
  </div>
</div>
```

</div>
<!-- #endregion components_card - card highlight - with buttons -->
<!-- #region components_card - card highlight - with link -->
<div class="h1 pt-md-1">With link</div>
<div class="h3 pt-md-1">Image at top</div>
<div class="ax-example p-md-3 border">
<div class="card" style="width: 388px">
  <svg
    class="card-img-top"
    width="100%"
    height="180"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Placeholder: Image cap"
    preserveAspectRatio="xMidYMid slice"
    focusable="false"
  > <title>Placeholder</title> <rect width="100%" height="100%" fill="#ccc"></rect> </svg>
  <div class="card-body pt-4">
    <h3 class="card-subtitle text-secondary">
      subhead <span class="text-muted">- 21/03/2021</span>
    </h3>
    <p class="card-title display-5">This is the card title</p>
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk
      of the content of the card.
    </p>
    <a href="#" class="card-link btn btn-link-secondary text-nowrap"
      >secondary link<i class="icon-east valign-btn-icon ms-1"></i>
    </a>
  </div>
</div>
</div>
<div class="pb-4">

```html
<div class="card">
  <img src="..." alt="..." />
  <div class="card-body pt-4">
    <h3 class="card-subtitle">
      subhead <span class="text-muted">- 21/03/2021</span>
    </h3>
    <p class="card-title display-5">This is the card title</p>
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the content of the card.
    </p>
    <a href="#" class="card-link btn btn-link-secondary text-nowrap">
      secondary link
      <i class="icon-east ms-1"></i>
    </a>
  </div>
</div>
```

</div>
<div class="h3 pt-md-1">Image at left</div>
<div class="ax-example p-md-3 border">
<div class="card" style="max-width: 600px; min-width: 390px">
  <div class="row g-0">
    <div class="col-auto">
      <svg
        width="200"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Placeholder: Image cap"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      > <title>Placeholder</title> <rect width="100%" height="100%" fill="#ccc"></rect> </svg>
    </div>
    <div class="col">
      <div class="card-body py-0 ps-4">
        <h3 class="card-subtitle text-secondary">
          subhead <span class="text-muted">- 21/03/2021</span>
        </h3>
        <p class="card-title display-5">This is the card title</p>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the content of the card.
        </p>
        <a href="#" class="card-link btn btn-link-secondary text-nowrap"
          >secondary link<i class="icon-east valign-btn-icon ms-1"></i>
        </a>
      </div>
    </div>
  </div>
</div>
</div>
<div class="pb-4">

```html
<div class="card">
  <div class="row g-0">
    <div class="col-auto">
      <img src="..." alt="..." />
    </div>
    <div class="col">
      <div class="card-body py-0 ps-4">
        <h3 class="card-subtitle text-secondary">
          subhead <span class="text-muted">- 21/03/2021</span>
        </h3>
        <p class="card-title display-5">This is the card title</p>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the content of the card.
        </p>
        <a href="#" class="card-link btn btn-link-secondary text-nowrap">
          secondary link
          <i class="icon-east ms-1"></i>
        </a>
      </div>
    </div>
  </div>
</div>
```

</div>
<div class="h3 pt-md-1">Image at right</div>
<div class="ax-example p-md-3 border">
<div class="card" style="max-width: 600px; min-width: 390px">
  <div class="row g-0">
    <div class="col">
      <div class="card-body py-0 pe-4">
        <h3 class="card-subtitle text-secondary">
          subhead <span class="text-muted">- 21/03/2021</span>
        </h3>
        <p class="card-title display-5">This is the card title</p>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the content of the card.
        </p>
        <a href="#" class="card-link btn btn-link-secondary text-nowrap"
          >secondary link<i class="icon-east valign-btn-icon ms-1"></i>
        </a>
      </div>
    </div>
    <div class="col-auto">
      <svg
        width="200"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Placeholder: Image cap"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      ><title>Placeholder</title> <rect width="100%" height="100%" fill="#ccc"></rect> </svg>
    </div>
  </div>
</div>
</div>

<div class="pb-4">

```html
<div class="card">
  <div class="row g-0">
    <div class="col">
      <div class="card-body py-0 pe-4">
        <h3 class="card-subtitle text-secondary">
          subhead <span class="text-muted">- 21/03/2021</span>
        </h3>
        <p class="card-title display-5">This is the card title</p>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the content of the card.
        </p>
        <a href="#" class="card-link btn btn-link-secondary text-nowrap">
          secondary link
          <img src="..." alt="..." />
        </a>
      </div>
    </div>
    <div class="col-auto">
      <img src="..." alt="..." />
    </div>
  </div>
</div>
```

</div>

<!-- #endregion components_card - card highlight - with link -->
<!-- #region components_card - card highlight - inside -->
<div class="h1 pt-md-1">Inside</div>
<p class="text-justify pe-md-8 pe-lg-11 pb-3">
This alternative integrates the title, super-title, date, description and call
to action elements directly into the image overlay. Don't forget to check the
contrast level to maintain a good level of accessibility.
</p>
<div class="h3 pt-md-1">with buttons</div>
<div class="ax-example p-md-3 border">
<div class="card text-white" style="min-width: 470px">
  <img
    alt="image in a card"
    class="card-img"
    src="/images/img-carousel-slide1.jpg"
  />
  <div class="card-img-mask"></div>
  <div class="card-img-overlay p-1 p-md-3 p-lg-6">
    <h3 class="card-subtitle">subhead - 21/03/2021</h3>
    <p class="card-title display-5">This is the card title</p>
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk
      of the content of the card.
    </p>
    <p><a href="#" class="btn btn-light">light button</a></p>
    <p class="mb-0">
      <a href="#" class="btn btn-outline-light">light button</a>
    </p>
  </div>
</div>
</div>
<div class="pb-4">

```html
<div class="card text-white">
  <img class="card-img" src="..." alt="..." />
  <div class="card-img-mask"></div>
  <div class="card-img-overlay">
    <h3 class="card-subtitle">subhead - 21/03/2021</h3>
    <p class="card-title display-5">This is the card title</p>
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the content of the card.
    </p>
    <p><a href="#" class="btn btn-light">light button</a></p>
    <p class="mb-0">
      <a href="#" class="btn btn-outline-light">light button</a>
    </p>
  </div>
</div>
```

</div>
<div class="h3 pt-md-1">with link</div>
<div class="ax-example p-md-3 border">
<div class="card text-white" style="min-width: 340px">
  <img
    alt="image in a card"
    class="card-img"
    src="/images/img-carousel-slide1.jpg"
  />
  <div class="card-img-mask"></div>
  <div class="card-img-overlay p-1 p-md-3 p-lg-6">
    <h3 class="card-subtitle">subhead - 21/03/2021</h3>
    <p class="card-title display-5">This is the card title</p>
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk
      of the content of the card.
    </p>
    <a href="#" class="card-link btn btn-link-light">
      Light link
      <i class="icon-east valign-btn-icon ms-1"></i>
    </a>
  </div>
</div>
</div>
<div class="pb-4">

```html
<div class="card text-white">
  <img class="card-img" src="..." alt="..." />
  <div class="card-img-mask"></div>
  <div class="card-img-overlay">
    <h3 class="card-subtitle">subhead - 21/03/2021</h3>
    <p class="card-title display-5">This is the card title</p>
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the content of the card.
    </p>
    <a href="#" class="card-link btn btn-link-light">
      Light link
      <img src="..." alt="..." />
    </a>
  </div>
</div>
```

</div>
<!-- #endregion components_card - card highlight - inside -->
<!-- #endregion components_card - card highlight -->
<!-- #region components_card - card link -->
<div class="display-5 pt-md-8 pb-1">Card link</div>
<p class="text-justify pe-md-8 pe-lg-11 pb-3">
This version is more compact but allows for a grid of several elements to
optimise space.
</p>
<div class="ax-example p-3 border">
<div class="card card-bg" style="width: 288px">
  <div class="card-body p-4">
    <h3 class="card-subtitle text-muted">subhead</h3>
    <h1 class="card-title mb-5">This is the card title</h1>
    <a href="#" class="card-link btn btn-link-secondary stretched-link"
      >secondary link<i class="icon-add valign-btn-icon ms-1"></i>
    </a>
  </div>
</div>
</div>

<div class="pb-4"> 

  ```html
  <div class="card card-bg">
    <div class="card-body p-4">
      <h3 class="card-subtitle text-muted">subhead</h3>
      <h1 class="card-title mb-5">This is the card title</h1>
      <a href="#" class="card-link btn btn-link-secondary stretched-link">
        secondary link
        <i class="icon-add ms-1"></i>
      </a>
    </div>
  </div>
  ``` 
</div>
<!-- #endregion components_card - card link -->
