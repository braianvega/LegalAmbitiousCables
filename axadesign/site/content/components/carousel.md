---
layout: components
title: Carousel
description:
  A slideshow component allowing you to scroll horizontally through images and
  texts. Be careful with the type of image used in order to avoid a poor
  readability of your content. It’s recommended not to push too much content,
  the more there is the less the user will go to the end and some content will
  be missed.

section: Components
bootstrapRef: https://getbootstrap.com/docs/5.1/components/carousel/
menuSlug: carousel
---

  <div class="display-5 pt-md-8 pb-1">Example</div>
  <div class="h1 pt-md-1">With caption</div>
  <p class="text-justify pe-md-8 pe-lg-11 pb-3">
    Includes only a caption for the information to be displayed.
  </p>
  <div class="ax-example p-md-3 border">
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="false"
    >
      <ol class="carousel-indicators">
        <li
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
        ></li>
        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="d-block w-100 carousel-img1-bg"></div>
          <div class="carousel-caption d-md-block">
            <h3>First slide label</h3>
            <p>
              <small
                >Some representative placeholder content for the first
                slide.</small
              >
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <div class="d-block w-100 carousel-img2-bg"></div>
          <div class="carousel-caption d-md-block">
            <h3>Second slide label</h3>
            <p>
              <small
                >Some representative placeholder content for the second
                slide.</small
              >
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <div class="d-block w-100 carousel-img3-bg"></div>
          <div class="carousel-caption d-md-block">
            <h3>Third slide label</h3>
            <p>
              <small
                >Some representative placeholder content for the third
                slide.</small
              >
            </p>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </a>
      </div>
    </div>
  </div>
  <div class="pb-4">
   
```html
<div
  id="carouselExampleCaptions"
  class="carousel slide"
  data-bs-ride="carousel"
  data-bs-interval="false"
>
  <ol class="carousel-indicators">
    <li
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="0"
      class="active"
    ></li>
    <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
    <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div
        style="
          height: 400px;
          background-image: url('...');
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
        "
      ></div>
      <div class="carousel-caption">
        <h3>First slide label</h3>
        <p>
          <small
            >Some representative placeholder content for the first slide.</small
          >
        </p>
      </div>
    </div>
    <div class="carousel-item">
      <div
        style="
          height: 400px;
          background-image: url('...');
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
        "
      ></div>
      <div class="carousel-caption">
        <h3>Second slide label</h3>
        <p>
          <small
            >Some representative placeholder content for the second
            slide.</small
          >
        </p>
      </div>
    </div>
    <div class="carousel-item">
      <div
        style="
          height: 400px;
          background-image: url('...');
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
        "
      ></div>
      <div class="carousel-caption">
        <h3>Third slide label</h3>
        <p>
          <small
            >Some representative placeholder content for the third slide.</small
          >
        </p>
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselExampleCaptions"
      role="button"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselExampleCaptions"
      role="button"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </a>
  </div>
</div>

````

  </div>
  <!-- #endregion components_carousel - example - with caption -->

  <!-- #region components_carousel - example - with title -->
  <div class="h1 pt-md-1">With Title</div>
  <p class="text-justify pe-md-8 pe-lg-11 pb-3">
    Use the new AXA class <code>carousel-title</code> to add titles elements at
    the center of the carousel.
  </p>
  <div class="ax-example p-md-3 border">
    <div
      id="carouselExampleTitle"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-bs-target="#carouselExampleTitle"
          data-bs-slide-to="0"
          class="active"
        ></li>
        <li data-bs-target="#carouselExampleTitle" data-bs-slide-to="1"></li>
        <li data-bs-target="#carouselExampleTitle" data-bs-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="d-block w-100 carousel-img1-bg"></div>
          <div class="carousel-title d-block">
            <h5 class="mb-3">subtitle</h5>
            <p class="display-4">Carousel main title</p>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <div class="d-block w-100 carousel-img2-bg"></div>
          <div class="carousel-title d-block">
            <h5 class="mb-3">subtitle</h5>
            <p class="display-4">Carousel second title</p>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <div class="d-block w-100 carousel-img3-bg"></div>
          <div class="carousel-title d-block">
            <h5 class="mb-3">subtitle</h5>
            <p class="display-4">Carousel third title</p>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleTitle"
          role="button"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleTitle"
          role="button"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </a>
      </div>
    </div>
  </div>
  <div class="pb-4">

  ```html
  <div id="carouselExampleTitle" class="carousel slide" data-bs-ride="carousel">
  <ol class="carousel-indicators">
    <li
      data-bs-target="#carouselExampleTitle"
      data-bs-slide-to="0"
      class="active"
    ></li>
    <li data-bs-target="#carouselExampleTitle" data-bs-slide-to="1"></li>
    <li data-bs-target="#carouselExampleTitle" data-bs-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div
        class=""
        style="
          min-width: 800px;
          min-height: 400px;
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
          background-image: url('...');
        "
      ></div>
      <div class="carousel-title d-block">
        <h5 class="mb-3">subtitle</h5>
        <p class="display-4">Carousel main title</p>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <div
        style="
          height: 400px;
          background-image: url('...');
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
        "
      ></div>
      <div class="carousel-title d-block">
        <h5 class="mb-3">subtitle</h5>
        <p class="display-4">Carousel second title</p>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <div
        style="
          height: 400px;
          background-image: url('...');
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
        "
      ></div>
      <div class="carousel-title d-block">
        <h5 class="mb-3">subtitle</h5>
        <p class="display-4">Carousel third title</p>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselExampleTitle"
      role="button"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselExampleTitle"
      role="button"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </a>
  </div>
</div>
````

  </div>
  <!-- #endregion components_carousel - example - with title -->

  <!-- #region components_carousel - example - with mask -->
  <div class="h1 pt-md-1">With mask</div>
  <p class="text-justify pe-md-8 pe-lg-11 pb-3">
    Use the new AXA class <code>carousel-mask</code> to add opacity for each
    elements required inside <code>carousel-item</code> (images, etc.).
  </p>
  <div class="ax-example p-md-3 border">
    <div
      id="carouselExampleCaptionsMask"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-bs-target="#carouselExampleCaptionsMask"
          data-bs-slide-to="0"
          class="active"
        ></li>
        <li
          data-bs-target="#carouselExampleCaptionsMask"
          data-bs-slide-to="1"
        ></li>
        <li
          data-bs-target="#carouselExampleCaptionsMask"
          data-bs-slide-to="2"
        ></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="carousel-mask d-block w-100 carousel-img1-bg"></div>
          <div class="carousel-caption d-none d-md-block">
            <h3>First slide label</h3>
            <p>
              <small
                >Some representative placeholder content for the first
                slide.</small
              >
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <div class="carousel-mask d-block w-100 carousel-img2-bg"></div>
          <div class="carousel-caption d-none d-md-block">
            <h3>Second slide label</h3>
            <p>
              <small
                >Some representative placeholder content for the second
                slide.</small
              >
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <div class="carousel-mask d-block w-100 carousel-img3-bg"></div>
          <div class="carousel-caption d-none d-md-block">
            <h3>Third slide label</h3>
            <p>
              <small
                >Some representative placeholder content for the third
                slide.</small
              >
            </p>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleCaptionsMask"
          role="button"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleCaptionsMask"
          role="button"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </a>
      </div>
    </div>
  </div>
  <div class="ax-example p-md-3 border">
    <div
      id="carouselExampleTitleMask"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-bs-target="#carouselExampleTitleMask"
          data-bs-slide-to="0"
          class="active"
        ></li>
        <li
          data-bs-target="#carouselExampleTitleMask"
          data-bs-slide-to="1"
        ></li>
        <li
          data-bs-target="#carouselExampleTitleMask"
          data-bs-slide-to="2"
        ></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="carousel-mask d-block w-100 carousel-img1-bg"></div>
          <div class="carousel-title d-block">
            <h5 class="mb-3">subtitle</h5>
            <p class="display-4">Carousel main title</p>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <div class="carousel-mask d-block w-100 carousel-img2-bg"></div>
          <div class="carousel-title d-block">
            <h5 class="mb-3">subtitle</h5>
            <p class="display-4">Carousel second title</p>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <div class="carousel-mask d-block w-100 carousel-img3-bg"></div>
          <div class="carousel-title d-block">
            <h5 class="mb-3">subtitle</h5>
            <p class="display-4">Carousel third title</p>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleTitleMask"
          role="button"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleTitleMask"
          role="button"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </a>
      </div>
    </div>
  </div>
  <div class="pb-4">
    
```html 
<div
  id="carouselExampleTitleMask"
  class="carousel slide"
  data-bs-ride="carousel"
>
  <ol class="carousel-indicators">
    <li
      data-bs-target="#carouselExampleTitleMask"
      data-bs-slide-to="0"
      class="active"
    ></li>
    <li data-bs-target="#carouselExampleTitleMask" data-bs-slide-to="1"></li>
    <li data-bs-target="#carouselExampleTitleMask" data-bs-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div
        class="carousel-mask"
        style="
          height: 400px;
          background-image: url('...');
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
        "
      ></div>
      <div class="carousel-title d-block">
        <h5 class="mb-3">subtitle</h5>
        <p class="display-4">Carousel main title</p>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <div
        class="carousel-mask"
        style="
          height: 400px;
          background-image: url('...');
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
        "
      ></div>
      <div class="carousel-title d-block">
        <h5 class="mb-3">subtitle</h5>
        <p class="display-4">Carousel second title</p>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <div
        class="carousel-mask"
        style="
          height: 400px;
          background-image: url('...');
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
        "
      ></div>
      <div class="carousel-title d-block">
        <h5 class="mb-3">subtitle</h5>
        <p class="display-4">Carousel third title</p>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselExampleTitleMask"
      role="button"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselExampleTitleMask"
      role="button"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </a>
  </div>
</div>
 
```

  </div>
  <!-- #endregion components_carousel - example - with mask -->

  <!-- #region components_carousel - example - dark mode-->
  <div class="h1 pt-md-1">Dark mode</div>
  <p class="text-justify pe-md-8 pe-lg-11 pb-3">
    Use the new AXA class <code>carousel-dark</code> to set carousel texts,
    indicators and icons in dark mode.
  </p>
  <div class="ax-example p-md-3 border">
    <div
      id="carouselExampleTitleDarkMode"
      class="carousel slide carousel-dark"
      data-bs-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-bs-target="#carouselExampleTitleDarkMode"
          data-bs-slide-to="0"
          class="active"
        ></li>
        <li
          data-bs-target="#carouselExampleTitleDarkMode"
          data-bs-slide-to="1"
        ></li>
        <li
          data-bs-target="#carouselExampleTitleDarkMode"
          data-bs-slide-to="2"
        ></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="d-block w-100 carousel-img1-bg"></div>
          <div class="carousel-title d-block">
            <h5 class="mb-3">subtitle</h5>
            <p class="display-4">Carousel main title</p>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <div class="d-block w-100 carousel-img2-bg"></div>
          <div class="carousel-title d-block">
            <h5 class="mb-3">subtitle</h5>
            <p class="display-4">Carousel second title</p>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <div class="d-block w-100 carousel-img3-bg"></div>
          <div class="carousel-title d-block">
            <h5 class="mb-3">subtitle</h5>
            <p class="display-4">Carousel third title</p>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleTitleDarkMode"
          role="button"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleTitleDarkMode"
          role="button"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </a>
      </div>
    </div>
  </div>
  <div class="ax-example p-md-3 border">
    <div
      id="carouselExampleCaptionDarkMode"
      class="carousel slide carousel-dark"
      data-bs-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-bs-target="#carouselExampleCaptionDarkMode"
          data-bs-slide-to="0"
          class="active"
        ></li>
        <li
          data-bs-target="#carouselExampleCaptionDarkMode"
          data-bs-slide-to="1"
        ></li>
        <li
          data-bs-target="#carouselExampleCaptionDarkMode"
          data-bs-slide-to="2"
        ></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="d-block w-100 carousel-img1-bg"></div>
          <div class="carousel-caption d-none d-md-block">
            <h3>First slide label</h3>
            <p>
              <small
                >Some representative placeholder content for the first
                slide.</small
              >
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <div class="d-block w-100 carousel-img2-bg"></div>
          <div class="carousel-caption d-none d-md-block">
            <h3>Second slide label</h3>
            <p>
              <small
                >Some representative placeholder content for the second
                slide.</small
              >
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <div class="d-block w-100 carousel-img3-bg"></div>
          <div class="carousel-caption d-none d-md-block">
            <h3>Third slide label</h3>
            <p>
              <small
                >Some representative placeholder content for the third
                slide.</small
              >
            </p>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleCaptionDarkMode"
          role="button"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleCaptionDarkMode"
          role="button"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </a>
      </div>
    </div>
  </div>
  <div class="pb-4">
   
```html
 
<div  id="carouselExampleCaptionDarkMode" class="carousel slide carousel-dark" data-bs-ride="carousel" >
  <ol class="carousel-indicators">
    <li
      data-bs-target="#carouselExampleCaptionDarkMode"
      data-bs-slide-to="0"
      class="active" >
    </li>
    <li
      data-bs-target="#carouselExampleCaptionDarkMode"
      data-bs-slide-to="1">
    </li>
    <li
      data-bs-target="#carouselExampleCaptionDarkMode"
      data-bs-slide-to="2">
    </li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div
        style="
          height: 400px;
          background-image: url('...');
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
        "
      ></div>
      <div class="carousel-caption">
        <h3>First slide label</h3>
        <p>
          <small
            >Some representative placeholder content for the first slide.</small
          >
        </p>
      </div>
    </div>
    <div class="carousel-item">
      <div
        style="
          height: 400px;
          background-image: url('...');
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
        "
      ></div>
      <div class="carousel-caption">
        <h3>Second slide label</h3>
        <p>
          <small
            >Some representative placeholder content for the second
            slide.</small
          >
        </p>
      </div>
    </div>
    <div class="carousel-item">
      <div
        style="
          height: 400px;
          background-image: url('...');
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
        "
      ></div>
      <div class="carousel-caption">
        <h3>Third slide label</h3>
        <p>
          <small
            >Some representative placeholder content for the third slide.</small
          >
        </p>
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselExampleCaptionDarkMode"
      role="button"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselExampleCaptionDarkMode"
      role="button"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </a>
  </div>
</div>
 
```


  </div>
  <!-- #endregion components_carousel - example - dark mode -->

  <!-- #region components_carousel - example - dark mode with mask -->
  <div class="h1 pt-md-1">Dark mode with mask</div>
  <p class="text-justify pe-md-8 pe-lg-11 pb-3">
    Adding a dark or light mask can help make the text more readable.
  </p>
  <div class="ax-example p-md-3 border">
    <div
      id="carouselExampleTitleDarkModeMask"
      class="carousel slide carousel-dark"
      data-bs-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-bs-target="#carouselExampleTitleDarkModeMask"
          data-bs-slide-to="0"
          class="active"
        ></li>
        <li
          data-bs-target="#carouselExampleTitleDarkModeMask"
          data-bs-slide-to="1"
        ></li>
        <li
          data-bs-target="#carouselExampleTitleDarkModeMask"
          data-bs-slide-to="2"
        ></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="carousel-mask d-block w-100 carousel-img1-bg"></div>
          <div class="carousel-title d-block">
            <h5 class="mb-3">subtitle</h5>
            <p class="display-4">Carousel main title</p>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <div class="carousel-mask d-block w-100 carousel-img2-bg"></div>
          <div class="carousel-title d-block">
            <h5 class="mb-3">subtitle</h5>
            <p class="display-4">Carousel second title</p>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <div class="carousel-mask d-block w-100 carousel-img3-bg"></div>
          <div class="carousel-title d-block">
            <h5 class="mb-3">subtitle</h5>
            <p class="display-4">Carousel third title</p>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleTitleDarkModeMask"
          role="button"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleTitleDarkModeMask"
          role="button"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </a>
      </div>
    </div>
  </div>
  <div class="ax-example p-md-3 border">
    <div
      id="carouselExampleCaptionDarkModeMask"
      class="carousel slide carousel-dark"
      data-bs-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-bs-target="#carouselExampleCaptionDarkModeMask"
          data-bs-slide-to="0"
          class="active"
        ></li>
        <li
          data-bs-target="#carouselExampleCaptionDarkModeMask"
          data-bs-slide-to="1"
        ></li>
        <li
          data-bs-target="#carouselExampleCaptionDarkModeMask"
          data-bs-slide-to="2"
        ></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="carousel-mask d-block w-100 carousel-img1-bg"></div>
          <div class="carousel-caption d-none d-md-block">
            <h3>First slide label</h3>
            <p>
              <small
                >Some representative placeholder content for the first
                slide.</small
              >
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <div class="carousel-mask d-block w-100 carousel-img2-bg"></div>
          <div class="carousel-caption d-none d-md-block">
            <h3>Second slide label</h3>
            <p>
              <small
                >Some representative placeholder content for the second
                slide.</small
              >
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <div class="carousel-mask d-block w-100 carousel-img3-bg"></div>
          <div class="carousel-caption d-none d-md-block">
            <h3>Third slide label</h3>
            <p>
              <small
                >Some representative placeholder content for the third
                slide.</small
              >
            </p>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleCaptionDarkModeMask"
          role="button"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleCaptionDarkModeMask"
          role="button"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </a>
      </div>
    </div>
  </div>
  <div class="pb-4">
    
```html 
<div
  id="carouselExampleCaptionDarkModeMask"
  class="carousel slide carousel-dark carousel-mask"
  data-bs-ride="carousel" >
  <ol class="carousel-indicators">
    <li
      data-bs-target="#carouselExampleCaptionDarkModeMask"
      data-bs-slide-to="0"
      class="active"
    ></li>
    <li
      data-bs-target="#carouselExampleCaptionDarkModeMask"
      data-bs-slide-to="1"
    ></li>
    <li
      data-bs-target="#carouselExampleCaptionDarkModeMask"
      data-bs-slide-to="2"
    ></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div
        class="carousel-mask"
        style="
          height: 400px;
          background-image: url('...');
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
        "
      ></div>
      <div class="carousel-caption">
        <h3>First slide label</h3>
        <p>
          <small
            >Some representative placeholder content for the first slide.</small
          >
        </p>
      </div>
    </div>
    <div class="carousel-item">
      <div
        class="carousel-mask"
        style="
          height: 400px;
          background-image: url('...');
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
        "
      ></div>
      <div class="carousel-caption">
        <h3>Second slide label</h3>
        <p>
          <small
            >Some representative placeholder content for the second
            slide.</small
          >
        </p>
      </div>
    </div>
    <div class="carousel-item">
      <div
        class="carousel-mask"
        style="
          height: 400px;
          background-image: url('...');
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
        "
      ></div>
      <div class="carousel-caption">
        <h3>Third slide label</h3>
        <p>
          <small
            >Some representative placeholder content for the third slide.</small
          >
        </p>
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselExampleCaptionDarkModeMask"
      role="button"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselExampleCaptionDarkModeMask"
      role="button"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </a>
  </div>
</div>
```
</div>
