---
layout: components
title: Header
description: The header is an essential component of the user
  interface. By displaying the logo and all the important sections
  of your website, it orients the user through the different pages
  of your site. Always visible at the top of an interface, it’s a
  distinctive component of the brand and it creates a familiar
  navigation across all the differents AXA products.

section: Components
bootstrapRef: https://getbootstrap.com/docs/5.1/components/navbar/
menuSlug: header
---

<!-- #region components_navbar - axa header -->
<div class="display-5 pt-md-8 pb-1">AXA Header</div>
<p class="text-justify pe-md-8 pe-lg-11 pb-3">
  The AXA header is an important element of the design system. It allows the
  general navigation on a site and is completely responsive on mobile phones.
  <br />
  It can be enriched with additional elements such as buttons or search bar.
</p>

<p class="text-justify pe-md-8 pe-lg-11 pb-3">
  <b>New @AXA :</b> The version 1.x of the design system comes with a complex header compliant with AXA’s guidelines. This header, presented bellow, can be used in your project, and decomposed into different components.
</p>
<ul>
  <li>A meta header allowing you to display a specific header’s navbar and access external links. This meta-header includes a language selection as well and a sign-in button if needed.</li>
  <li>A Header displaying the navbar and a search-bar.</li>
  <li>A dropdown opening on hover of the navbar items and displaying a description and the navigation relative to this item.</li>
</ul>
<p>The header is fully responsive and present an optimized behavior for mobile and desktop use.</p>

<h2>1- Opening of the dropdowns on hover.</h2>
<p>To achieve the expected behavior, a custom value for data-bs-toggle have been implemented for the navbar item opening the dropdown and the dropdown itself, allowing the user to navigate between the navbar items on hover.</p>

<p>You can find the code relative to this specific behavior on the snippet bellow the example presented on the library documentation for the Header component. In the opening of the dropdown component on hover, notice that:</p>
<ul>
  <li>The data-bs-toggle value for the item of the navbar should be data-bs-toggle="tab-hover"</li>
  <li>The data-bs-toggle value for the dropdown corresponding should be data-bs-toggle="tab-drop"</li>
</ul>

<h2>2- Close the responsive navbar and the search button at once</h2>

<p>The feature of closing the search-bar and navbar at the same time rely on a custom event listener. To make this feature work properly, make sure to respect the nomenclature of the id for the 3 following buttons:</p>
<ul>
  <li>Open the menu id='nav-burger'</li>
  <li>Close the menu id='nav-close'</li>
  <li>Open the search-bar id='inputSearch'</li>
</ul>

<h2>3- Fixed position on opening of the menu in responsive mode or at opening of the search-bar.</h2>

<p>To generate the expected behavior on hover of the menu in responsive mode, you will need to add in your project under the header the following div:</p>

```html 
  <div class="navbar-mask"></div>
````
<p class="mb-11">
The class <b>navbar-mask</b> will be used when opening the header to display a mask on the page. The expected behavior for the whole page (fixed position) will be provided through the class=“header-opened” applied to the body of the page.
</p>

<h2>4- Breakpoints</h2>

<p>The header compliant with AXA guidelines is responsif. You can find in the code presented the mention to the breakpoint xl (1176px), adapting the behavior of the compoment according to the device it's displayed on.</p>

<p>NB: The breakpoint used for the example bellow is <b>xxxl </b>(1670px) instead of xl <b>(1176px)</b> as advised by AXA's guidelines</b>. This modification is needed to adapt the view to the design of the documentation page.</p>

<div class="ax-example p-md-0 navbar-header">
  <!--DESKTOP-->
  <!-- *** meta header -->
  <div class="navbar-metaheader mx-auto d-none d-xxxl-flex">
    <div class="container m-auto row px-0 d-flex">
      <div class="col-5 d-none d-xxxl-flex d-print-block">
        <div class="nav h-100 meta-tab" id="nav-tab" role="tablist">
          <button
            class="btn btn-link-light dynamic-tab active"
            id="nav-individuals-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-individuals-2"
            role="tab"
            aria-controls="nav-individuals-2"
            aria-selected="true"
            >INDIVIDUALS</button
          >
          <button
            class="btn btn-link-light dynamic-tab"
            id="nav-small_business-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-small_business"
            role="tab"
            aria-controls="nav-small_business"
            aria-selected="false"
            >SMALL BUSINESS</button
          >
          <button
            class="btn btn-link-light dynamic-tab"
            id="nav-business-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-business"
            role="tab"
            aria-controls="nav-business"
            aria-selected="false"
            >BUSINESS</button
          >
        </div>
      </div>
      <div class="col-7 d-none d-xxxl-flex d-print-block flex-row-reverse">
        <!--Button to download asset-->
        <button
          type="button"
          class="btn px-3 py-0 me-3 btn-sm align-baseline btn-primary h-100 text-nowrap"
        >
          SIGN UP
        </button> 
        <!--Dropdown menu languages-->
        <div class="dropdown">
          <button
            type="button"
            class="btn p-0 px-3 btn-sm text-nowrap dropdown-toggle h-100"
            id="dropdownMenuMeta"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span class="language-toggler-icon align-text-bottom me-1"></span>
            ENGLISH
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuMeta">
            <a class="dropdown-item bold active" href="#"
              ><strong>English</strong></a
            >
            <a class="dropdown-item" href="#">Français</a>
            <a class="dropdown-item" href="#">Deutsch</a>
          </div>
        </div> 
        <!--Links to external websites-->
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          class="h5 px-3 my-auto border-end text-dark"
          >DOWNLOAD</a
        >
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          class="h5 mx-3 my-auto text-dark"
          >CONTACT</a
        >
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          class="h5 mx-3 my-auto text-dark"
          >FAQ</a
        >
      </div>
    </div>
  </div>
  <!-- *** Header -->
  <nav class="container navbar navbar-expand-xxxl  position-relative navbar-light px-0">
    <!-- LOGO -->
    <a class="navbar-brand" href="#"></a>
    <div
      class="pull-left mx-0 collapse d-xxxl-none toggle-close"
      id="inputSearch"
      style="flex-grow: 1"
    >
      <input
        class="form-control d-xxxl-none border-0 shadow-none px-0"
        placeholder="I'm looking for..."
        aria-label="Search"
      />
    </div>
    <!-- OPEN DROPDOWN -->
    <div id="currentnav" class="collapse d-flex show">
      <button
        id="btn-search"
        class="btn btn-link-light text-dark collapse show d-block d-xxxl-none me-9"
        type="button"
        data-bs-toggle="collapse-all"
        data-bs-target="#inputSearch, .nav-menu-responsif"
        aria-controls="navbar4_searchForm navbar4_buttonsForm"
        aria-expanded="false"
        aria-label="Toggle search form"
      >
        <i class="icon-search fs-xl pe-3 border-end border-gray"></i>
      </button> 
      <!-- Open -->
      <button
        id="nav-burger"
        class="nav-menu-responsif navbar-toggler collapse show position-absolute end-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target=".nav-menu-responsif, #navbarDropdown"
        aria-controls="navbarDropdown navbar4_searchForm navbar4_buttonsForm"
        aria-expanded="false"
        aria-label="Toggle navigation"
        style="top: 22px"
      >
        <span class="navbar-toggler-icon"></span>
      </button> 
      <!-- Close -->
      <button
        id="nav-close"
        class="nav-menu-responsif navbar-toggler collapse collapsed position-absolute end-0"
        type="button"
        data-bs-toggle="collapse-all"
        data-bs-target=".nav-menu-responsif, #navbarDropdown, #inputSearch"
        aria-controls="navbarDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
        style="top: 19px"
      >
        <i class="icon-close fs-xl"></i>
      </button>
    </div> 
    <div
      class="collapse navbar-collapse header-collapse toggle-close"
      id="navbarDropdown"
    >
      <div class="tab-content navbar-header-dropdown" id="nav-tabContent">
        <!-- dropdown responsive mode -->
        <div
          class="d-xxxl-none border-top border-bottom collapse multi-collapse navbar-dropdown-content w-100 navbar-nav"
          id="DropDownCollapseIndividual-profile"
        >
          <div
            class="py-4 bg-white d-block d-xxxl-none"
            id="BorderDropDownCollapse"
          >
            <div class="px-3">
              <a
                class="nav-link border-0 px-1 pt-0"
                href="#"
                data-bs-target="#DropDownCollapseIndividual-profile"
                data-bs-toggle="collapse"
                ><i class="d-block d-xxl-none icon-west float-sm-start pe-2"></i
                >BACK</a
              >
              <h5>INDIVIDUALS</h5>
              <p class="display-6">Get AXA's award-winning car insurance</p>
              <p
                >Get AXA's award-winning home insurance online and protect
                yourself from major risks like flooding and fire.</p
              >
              <a class="text-decoration-underline" href="#">Find out more</a>
            </div> 
            <div class="accordion mt-8" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="btn accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Individual insurance overview
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="card-body py-3">
                    <a href="#">Link 1</a>
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
                    aria-expanded="true"
                    aria-controls="collapseTwo"
                  >
                    Individual insurance price
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="card-body py-3">
                    <a href="#">Link 1</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
        <div
          class="d-xxxl-none border-top border-bottom collapse multi-collapse navbar-dropdown-content w-100 navbar-nav"
          id="DropDownCollapseIndividual-gallery"
        >
          <div
            class="py-4 bg-white d-block d-xxxl-none"
            id="BorderDropDownCollapse"
          >
            <div class="px-3">
              <a
                class="nav-link border-0 px-1 pt-0"
                href="#"
                data-bs-target="#DropDownCollapseIndividual-gallery"
                data-bs-toggle="collapse"
                ><i class="d-block d-xxl-none icon-west float-sm-start pe-2"></i
                >BACK</a
              >
              <h5>GALLERY</h5>
              <p class="display-6">Get AXA's award-winning car insurance</p>
              <p
                >Get AXA's award-winning home insurance online and protect
                yourself from major risks like flooding and fire.</p
              >
              <a class="text-decoration-underline" href="#">Find out more</a>
            </div> 
            <div class="accordion mt-8" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="btn accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="true"
                    aria-controls="collapseThree"
                  >
                    Individual insurance overview
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="card-body py-3">
                    <a href="#">Link 1</a>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="btn accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="true"
                    aria-controls="collapseFour"
                  >
                    Individual insurance price
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="card-body py-3">
                    <a href="#">Link 1</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
        <div
          class="d-xxxl-none border-top border-bottom collapse multi-collapse navbar-dropdown-content w-100 navbar-nav"
          id="DropDownCollapseSmallBusiness-profile"
        >
          <div
            class="py-4 bg-white d-block d-xxxl-none"
            id="BorderDropDownCollapse"
          >
            <div class="px-3">
              <a
                class="nav-link border-0 px-1 pt-0"
                href="#"
                data-bs-target="#DropDownCollapseSmallBusiness-profile"
                data-bs-toggle="collapse"
                ><i class="d-block d-xxl-none icon-west float-sm-start pe-2"></i
                >BACK</a
              >
              <h5>SMALL BUSINESS</h5>
              <p class="display-6">Get AXA's award-winning car insurance</p>
              <p
                >Get AXA's award-winning home insurance online and protect
                yourself from major risks like flooding and fire.</p
              >
              <a class="text-decoration-underline" href="#">Find out more</a>
            </div> 
            <div class="accordion mt-8" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFive">
                  <button
                    class="btn accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="true"
                    aria-controls="collapseFive"
                  >
                    Individual insurance overview
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="card-body py-3">
                    <a href="#">Link 1</a>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="btn accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                    aria-expanded="true"
                    aria-controls="collapseSix"
                  >
                    Individual insurance price
                  </button>
                </h2>
                <div
                  id="collapseSix"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="card-body py-3">
                    <a href="#">Link 1</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
        <div
          class="d-xxxl-none border-top border-bottom collapse multi-collapse navbar-dropdown-content w-100 navbar-nav"
          id="DropDownCollapseSmallBusiness-gallery"
        >
          <div
            class="py-4 bg-white d-block d-xxxl-none"
            id="BorderDropDownCollapse"
          >
            <div class="px-3">
              <a
                class="nav-link border-0 px-1 pt-0"
                href="#"
                data-bs-target="#DropDownCollapseSmallBusiness-gallery"
                data-bs-toggle="collapse"
                ><i class="d-block d-xxl-none icon-west float-sm-start pe-2"></i
                >BACK</a
              >
              <h5>SMALL BUSINESS GALLERY</h5>
              <p class="display-6">Get AXA's award-winning car insurance</p>
              <p
                >Get AXA's award-winning home insurance online and protect
                yourself from major risks like flooding and fire.</p
              >
              <a class="text-decoration-underline" href="#">Find out more</a>
            </div> 
            <div class="accordion mt-8" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="btn accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSeven"
                    aria-expanded="true"
                    aria-controls="collapseSeven"
                  >
                    Individual insurance overview
                  </button>
                </h2>
                <div
                  id="collapseSeven"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="card-body py-3">
                    <a href="#">Link 1</a>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="btn accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseEight"
                    aria-expanded="true"
                    aria-controls="collapseEight"
                  >
                    Individual insurance price
                  </button>
                </h2>
                <div
                  id="collapseEight"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="card-body py-3">
                    <a href="#">Link 1</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
        <div
          class="d-xxxl-none border-top border-bottom collapse multi-collapse navbar-dropdown-content w-100 navbar-nav"
          id="DropDownCollapseBusiness-profile"
        >
          <div
            class="py-4 bg-white d-block d-xxxl-none"
            id="BorderDropDownCollapse"
          >
            <div class="px-3">
              <a
                class="nav-link border-0 px-1 pt-0"
                href="#"
                data-bs-target="#DropDownCollapseBusiness-profile"
                data-bs-toggle="collapse"
                ><i class="d-block d-xxl-none icon-west float-sm-start pe-2"></i
                >BACK</a
              >
              <h5>BUSINESS</h5>
              <p class="display-6">Get AXA's award-winning car insurance</p>
              <p
                >Get AXA's award-winning home insurance online and protect
                yourself from major risks like flooding and fire.</p
              >
              <a class="text-decoration-underline" href="#">Find out more</a>
            </div> 
            <div class="accordion mt-8" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="btn accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseNine"
                    aria-expanded="true"
                    aria-controls="collapseNine"
                  >
                    Individual insurance overview
                  </button>
                </h2>
                <div
                  id="collapseNine"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="card-body py-3">
                    <a href="#">Link 1</a>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="btn accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTen"
                    aria-expanded="true"
                    aria-controls="collapseTen"
                  >
                    Individual insurance price
                  </button>
                </h2>
                <div
                  id="collapseTen"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="card-body py-3">
                    <a href="#">Link 1</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
        <div
          class="d-xxxl-none border-top border-bottom collapse multi-collapse navbar-dropdown-content w-100 navbar-nav"
          id="DropDownCollapseBusiness-gallery"
        >
          <div
            class="py-4 px-3 bg-white d-block d-xxxl-none"
            id="BorderDropDownCollapse"
          >
            <div class="px-3">
              <a
                class="nav-link border-0 px-1 pt-0"
                href="#"
                data-bs-target="#DropDownCollapseBusiness-gallery"
                data-bs-toggle="collapse"
                ><i class="d-block d-xxl-none icon-west float-sm-start pe-2"></i
                >BACK</a
              >
              <h5>BUSINESS GALLERY</h5>
              <p class="display-6">Get AXA's award-winning car insurance</p>
              <p
                >Get AXA's award-winning home insurance online and protect
                yourself from major risks like flooding and fire.</p
              >
              <a class="text-decoration-underline" href="#">Find out more</a>
            </div>
            <div class="accordion mt-8" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="btn accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseEleven"
                    aria-expanded="true"
                    aria-controls="collapseEleven"
                  >
                    Individual insurance overview
                  </button>
                </h2>
                <div
                  id="collapseEleven"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="card-body py-3">
                    <a href="#">Link 1</a>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="btn accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwelve"
                    aria-expanded="true"
                    aria-controls="collapseTwelve"
                  >
                    Individual insurance price
                  </button>
                </h2>
                <div
                  id="collapseTwelve"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="card-body py-3">
                    <a href="#">Link 1</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
        <!-- metaheader reponsive mode -->
        <ul class="navbar-nav navbar4_linksList my-0 me-0 m-auto gray-100">
          <li class="nav-item">
            <div
              class="nav nav-tabs d-flex justify-content-around d-xxxl-none meta-tab text-center"
              id="nav-tab"
              role="tablist"
            >
              <button
                class="btn p-0 py-3 px-3 btn-sm btn-link-light align-baseline"
                id="nav-individuals-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-individuals-2"
                role="tab"
                aria-controls="nav-individuals-2"
                aria-selected="true"
                >INDIVIDUALS</button
              >
              <button
                class="btn p-0 py-3 px-3 btn-sm btn-link-light align-baseline"
                id="nav-small_business-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-small_business"
                role="tab"
                aria-controls="nav-small_business"
                aria-selected="false"
                >SMALL BUSINESS</button
              >
              <button
                class="btn p-0 py-3 px-3 btn-sm btn-link-light align-baseline"
                id="nav-business-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-business"
                role="tab"
                aria-controls="nav-business"
                aria-selected="false"
                >BUSINESS</button
              >
            </div>
          </li>
        </ul> 
        <div class="tab-content" id="myTabContent" data-bs-toggle="tab-drop">
          <!-- navbar DESKTOP mode individuals -->
          <div
            class="tab-pane show active nav-individuals-2 "
            id="nav-individuals-2"
            role="tabpanel"
            aria-labelledby="nav-individuals-tab"
          >
            <ul
              class="nav navbar4-multiCollapse show nav-tabs navbar-nav search-collapse text-uppercase me-0 m-auto flex-nowrap"
              id="TabIndividuals"
              role="tablist"
            >
              <li
                class="nav-item"
                role="presentation"
                data-bs-target="#DropDownCollapseIndividual-profile"
                data-bs-toggle="collapse"
              >
                <a
                  class="nav-link reverse-tab d-flex justify-content-between w-100"
                  id="individualProfile-tab"
                  data-bs-toggle="tab-hover"
                  data-bs-target="#individualProfile"
                  role="button"
                  aria-controls="individualProfile"
                  aria-selected="true"
                >
                  INDIVIDUALS
                  <i class="d-block d-xxxl-none icon-east float-sm-end pe-4"></i>
                </a>
              </li>
              <li
                class="nav-item"
                role="presentation"
                data-bs-target="#DropDownCollapseIndividual-gallery"
                data-bs-toggle="collapse"
              >
                <a
                  class="nav-link reverse-tab d-flex justify-content-between w-100 text-nowrap"
                  id="individualGallery-tab"
                  data-bs-toggle="tab-hover"
                  data-bs-target="#individualGallery"
                  role="button"
                  aria-controls="individualGallery"
                  aria-selected="true"
                >
                  GALLERY INDIVIDUALS
                  <i class="d-block d-xxxl-none icon-east float-sm-end pe-4"></i>
                </a>
              </li>
              <li class="m-auto py-4 py-xxxl-0 px-2 border-bottom border-xxl-none">
                <button type="button" class="btn btn-outline-primary w-100">
                  COMPONENTS
                </button>
              </li>
            </ul>
          </div> 
          <!-- navbar DESKTOP mode SMALL BUSINESS -->
          <div
            class="tab-pane nav-small_business"
            id="nav-small_business"
            role="tabpanel"
            aria-labelledby="nav-small_business-tab"
          >
            <ul
              class="nav navbar4-multiCollapse show nav-tabs navbar-nav search-collapse text-uppercase me-0 m-auto flex-nowrap"
              id="TabSmallBusiness"
              role="tablist"
            >
              <!--TODO: remove id-->
              <li
                class="nav-item"
                role="presentation"
                data-bs-target="#DropDownCollapseSmallBusiness-profile"
                data-bs-toggle="collapse"
              >
                <a
                  class="nav-link reverse-tab d-flex justify-content-between w-100 text-nowrap"
                  id="smallBusinessProfile-tab"
                  data-bs-toggle="tab-hover"
                  data-bs-target="#smallBusinessProfile"
                  role="button"
                  aria-controls="smallBusinessProfile"
                  aria-selected="true"
                >
                  SMALL BUSINESS
                  <i class="d-block d-xxl-none icon-east float-sm-end pe-4"></i>
                </a>
              </li>
              <li
                class="nav-item"
                role="presentation"
                data-bs-target="#DropDownCollapseSmallBusiness-gallery"
                data-bs-toggle="collapse"
              >
                <a
                  class="nav-link reverse-tab d-flex justify-content-between w-100"
                  id="smallBusinessGallery-tab"
                  data-bs-toggle="tab-hover"
                  data-bs-target="#smallBusinessGallery"
                  role="button"
                  aria-controls="smallBusinessGallery"
                  aria-selected="true"
                >
                  GALLERY
                  <i class="d-block d-xxl-none icon-east float-sm-end pe-4"></i>
                </a>
              </li>
              <li class="m-auto py-4 py-xxxl-0 px-2 border-bottom border-xxl-none">
                <button type="button" class="btn btn-outline-primary w-100">
                  QUOTE
                </button>
              </li>
            </ul>
          </div> 
          <!-- navbar DESKTOP mode BUSINESS -->
          <div
            class="tab-pane nav-business"
            id="nav-business"
            role="tabpanel"
            aria-labelledby="nav-business-tab"
          >
            <ul
              class="nav navbar4-multiCollapse show nav-tabs navbar-nav search-collapse text-uppercase me-0 m-auto flex-nowrap"
              id="TabSmallBusiness"
              role="tablist"
            >
              <!--TODO: remove id-->
              <li
                class="nav-item"
                role="presentation"
                data-bs-target="#DropDownCollapseBusiness-profile"
                data-bs-toggle="collapse"
              >
                <a
                  class="nav-link reverse-tab d-flex justify-content-between w-100"
                  id="businessProfile-tab"
                  data-bs-toggle="tab-hover"
                  data-bs-target="#businessProfile"
                  role="button"
                  aria-controls="businessProfile"
                  aria-selected="true"
                >
                  BUSINESS
                  <i class="d-block d-xxl-none icon-east float-sm-end pe-4"></i>
                </a>
              </li>
              <li
                class="nav-item"
                role="presentation"
                data-bs-target="#DropDownCollapseBusiness-gallery"
                data-bs-toggle="collapse"
              >
                <a
                  class="nav-link reverse-tab d-flex justify-content-between w-100 text-nowrap"
                  id="businessGallery-tab"
                  data-bs-toggle="tab-hover"
                  data-bs-target="#businessGallery"
                  role="button"
                  aria-controls="businessGallery"
                  aria-selected="true"
                >
                  GUIDELINES BUSINESS
                  <i class="d-block d-xxl-none icon-east float-sm-end pe-4"></i>
                </a>
              </li>
              <li class="m-auto py-4 py-xxxl-0 px-2 border-bottom border-xxl-none">
                <button type="button" class="btn btn-outline-primary w-100">
                  CONTACT
                </button>
              </li>
            </ul>
          </div> 
          <!-- TABS TO DISPLAY DESKTOP MENU OPTIONS -->
          <div
            class="container px-0 position-absolute w-100 d-none d-xxxl-block border-top"
            data-bs-toggle="tab-drop"
            style="top: 72px; left: 0"
          >
            <!-- TAB CONTENT -->
            <div class="tab-content bg-white" id="myTabContent">
              <!-- Tab1 - INDIVIDUAL PROFILE -->
              <div
                class="tab-pane fade p-5"
                id="individualProfile"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div class="row">
                  <div class="col-4 pe-5">
                    <h5>INDIVIDUALS</h5>
                    <p class="display-6"
                      >Get AXA's award-winning car insurance</p
                    >
                    <p
                      >Get AXA's award-winning home insurance online and protect
                      yourself from major risks like flooding and fire.</p
                    >
                    <a class="text-decoration-underline" href="#"
                      >Find out more</a
                    >
                  </div>
                  <div class="col-7 ps-4">
                    <div id="dropdownLink">
                      <p class="lead"
                        ><strong>Home insurance overview</strong></p
                      >
                      <p><a href="#">Link 1</a></p> 
                      <p class="lead"><strong>Existing customers</strong></p>
                      <p><a href="#">Link 1</a></p>
                      <p><a href="#">Link 2</a></p>
                    </div>
                  </div>
                </div>
              </div> 
              <!-- Tab2 - INDIVIDUAL GALLERY -->
              <div
                class="tab-pane fade p-5"
                id="individualGallery"
                role="tabpanel"
                aria-labelledby="individualGallery-tab"
              >
                <div class="row">
                  <div class="col-4 pe-5">
                    <h5>GALLERY</h5>
                    <p class="display-6"
                      >Get AXA's award-winning car insurance</p
                    >
                    <p
                      >Get AXA's award-winning home insurance online and protect
                      yourself from major risks like flooding and fire.</p
                    >
                    <a class="text-decoration-underline" href="#"
                      >Find out more</a
                    >
                  </div>
                  <div class="col-7 ps-4">
                    <div id="dropdownLink">
                      <p class="lead"
                        ><strong>Home insurance overview</strong></p
                      >
                      <p><a href="#">Link 1</a></p> 
                      <p class="lead"><strong>Existing customers</strong></p>
                      <p><a href="#">Link 1</a></p>
                      <p><a href="#">Link 2</a></p>
                    </div>
                  </div>
                </div>
              </div> 
              <!-- Tab3 - SMALL BUSINESS PROFILE-->
              <div
                class="tab-pane fade p-5"
                id="smallBusinessProfile"
                role="tabpanel"
                aria-labelledby="smallBusinessProfile-tab"
              >
                <div class="row">
                  <div class="col-4 pe-5">
                    <h5>SMALL BUSINESS</h5>
                    <p class="display-6"
                      >Get AXA's award-winning car insurance</p
                    >
                    <p
                      >Get AXA's award-winning home insurance online and protect
                      yourself from major risks like flooding and fire.</p
                    >
                    <a class="text-decoration-underline" href="#"
                      >Find out more</a
                    >
                  </div>
                  <div class="col-7 ps-4">
                    <div id="dropdownLink">
                      <p class="lead"
                        ><strong>Home insurance overview</strong></p
                      >
                      <p><a href="#">Link 1</a></p> 
                      <p class="lead"><strong>Existing customers</strong></p>
                      <p><a href="#">Link 1</a></p>
                      <p><a href="#">Link 2</a></p>
                    </div>
                  </div>
                </div>
              </div> 
              <!-- Tab4 - SMALL BUSINESS GALLERY-->
              <div
                class="tab-pane fade p-5"
                id="smallBusinessGallery"
                role="tabpanel"
                aria-labelledby="smallBusinessGallery-tab"
              >
                <div class="row">
                  <div class="col-4 pe-5">
                    <h5>GALLERY SMALL BUSINESS</h5>
                    <p class="display-6"
                      >Get AXA's award-winning car insurance</p
                    >
                    <p
                      >Get AXA's award-winning home insurance online and protect
                      yourself from major risks like flooding and fire.</p
                    >
                    <a class="text-decoration-underline" href="#"
                      >Find out more</a
                    >
                  </div>
                  <div class="col-7 ps-4">
                    <div id="dropdownLink">
                      <p class="lead"
                        ><strong>Home insurance overview</strong></p
                      >
                      <p><a href="#">Link 1</a></p> 
                      <p class="lead"><strong>Existing customers</strong></p>
                      <p><a href="#">Link 1</a></p>
                      <p><a href="#">Link 2</a></p>
                    </div>
                  </div>
                </div>
              </div> 
              <!-- Tab5 - BUSINESS PROFILE-->
              <div
                class="tab-pane fade p-5"
                id="businessProfile"
                role="tabpanel"
                aria-labelledby="businessProfile-tab"
              >
                <div class="row">
                  <div class="col-4 pe-5">
                    <h5>BUSINESS</h5>
                    <p class="display-6"
                      >Get AXA's award-winning car insurance</p
                    >
                    <p
                      >Get AXA's award-winning home insurance online and protect
                      yourself from major risks like flooding and fire.</p
                    >
                    <a class="text-decoration-underline" href="#"
                      >Find out more</a
                    >
                  </div>
                  <div class="col-7 ps-4">
                    <div id="dropdownLink">
                      <p class="lead"
                        ><strong>Home insurance overview</strong></p
                      >
                      <p><a href="#">Link 1</a></p> 
                      <p class="lead"><strong>Existing customers</strong></p>
                      <p><a href="#">Link 1</a></p>
                      <p><a href="#">Link 2</a></p>
                    </div>
                  </div>
                </div>
              </div> 
              <!-- Tab6 - BUSINESS GALLERY-->
              <div
                class="tab-pane fade p-5"
                id="businessGallery"
                role="tabpanel"
                aria-labelledby="businessGallery-tab"
              >
                <div class="row">
                  <div class="col-4 pe-5">
                    <h5>GALLERY BUSINESS</h5>
                    <p class="display-6"
                      >Get AXA's award-winning car insurance</p
                    >
                    <p
                      >Get AXA's award-winning home insurance online and protect
                      yourself from major risks like flooding and fire.</p
                    >
                    <a class="text-decoration-underline" href="#"
                      >Find out more</a
                    >
                  </div>
                  <div class="col-7 ps-4">
                    <div id="dropdownLink">
                      <p class="lead"
                        ><strong>Home insurance overview</strong></p
                      >
                      <p><a href="#">Link 1</a></p> 
                      <p class="lead"><strong>Existing customers</strong></p>
                      <p><a href="#">Link 1</a></p>
                      <p><a href="#">Link 2</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
        <!-- The bottom of the dropdown is shared (metaheader) -->
        <ul class="ps-0 navbar-nav me-0 m-auto gray-100">
          <li class="nav-item d-block d-xxxl-none">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              class="h4 mb-0 nav-link text-dark"
              >CONTACT</a
            >
          </li>
          <li class="nav-item d-block d-xxxl-none">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              class="h4 mb-0 nav-link text-dark"
              >FAQ</a
            >
          </li>
        </ul>
      </div>
      <!-- And then come the language selection -->
      <div>
        <ul class="d-block d-xxxl-none navbar-header-language navbar-nav">
          <div class="accordion" id="accordionLanguage">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingLanguage">
                <button
                  class="btn accordion-button collapsed gray-100"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseLanguage"
                  aria-expanded="true"
                  aria-controls="collapseLanguage"
                >
                  <span class="language-toggler-icon align-text-bottom me-1"></span>ENGLISH
                </button>
              </h2>
              <div
                id="collapseLanguage"
                class="accordion-collapse collapse"
                aria-labelledby="headingLanguage"
                data-bs-parent="#accordionLanguage"
              >
                <ul class="accordion-body list-group py-0">
                  <a class="dropdown-item" href="#">Français</a>
                  <a class="dropdown-item" href="#">Deutsch</a>
                </ul>
              </div>
            </div>
          </div>
        </ul>
      </div>
      <!-- Searchbar for DESKTOP -->
      <form
        id="navbar4_searchForm"
        class="navbar4-multiCollapse form-inline form-search ms-auto order-2 collapse"
      >
        <div class="input-group mx-auto">
          <input
            class="form-control d-none d-xxxl-block"
            placeholder="I'm looking for..."
            aria-label="Search"
          />
          <button
            class="btn btn-search d-none d-xxxl-block"
            type="button"
          ></button>
        </div>
      </form>
    </div>
    <span class="navbar-search-toggler d-xxxl-flex d-none">
      <button
        class="btn collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target=".navbar4-multiCollapse"
        aria-controls="navbar4_searchForm navbar4_buttonsForm"
        aria-expanded="false"
        aria-label="Toggle search form"
      >
        <span class="navbar-search-toggler-icon" id="CloseDropDown"></span>
      </button>
    </span>
  </nav>
</div>
<div class="pb-4">
  <div class="p-md-2 metaheader-html">
    
```html
<div class="ax-example p-md-0 navbar-header border-bottom">

<!-- *** meta header -->
  <div class="navbar-metaheader mx-auto d-none d-xxxl-flex">
    <div class="container m-auto row px-0 d-flex">
      <div class="col-5 d-none d-xxxl-flex d-print-block">
        <div class="nav h-100 meta-tab" id="nav-tab" role="tablist">
          <button
            class="btn btn-link-light dynamic-tab active"
            id="nav-individuals-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-individuals-2"
            role="tab"
            aria-controls="nav-individuals-2"
            aria-selected="true"
            >INDIVIDUALS</button
          >
          <button
            class="btn btn-link-light dynamic-tab"
            id="nav-small_business-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-small_business"
            role="tab"
            aria-controls="nav-small_business"
            aria-selected="false"
            >SMALL BUSINESS</button
          >
          <button
            class="btn btn-link-light dynamic-tab"
            id="nav-business-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-business"
            role="tab"
            aria-controls="nav-business"
            aria-selected="false"
            >BUSINESS</button
          >
        </div>
      </div>
      <div class="col-7 d-none d-xxxl-flex d-print-block flex-row-reverse">
        <!--Button to download asset-->
        <button
          type="button"
          class="btn px-3 py-0 me-3 btn-sm align-baseline btn-primary h-100 text-nowrap"
        >
          SIGN UP
        </button> 
        <!--Dropdown menu languages-->
        <div class="dropdown">
          <button
            type="button"
            class="btn p-0 px-3 btn-sm text-nowrap dropdown-toggle h-100"
            id="dropdownMenuMeta"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span class="language-toggler-icon align-text-bottom me-1"></span>
            ENGLISH
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuMeta">
            <a class="dropdown-item bold active" href="#"
              ><strong>English</strong></a
            >
            <a class="dropdown-item" href="#">Français</a>
            <a class="dropdown-item" href="#">Deutsch</a>
          </div>
        </div> 
        <!--Links to external websites-->
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          class="h5 px-3 my-auto border-end text-dark"
          >DOWNLOAD</a
        >
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          class="h5 mx-3 my-auto text-dark"
          >CONTACT</a
        >
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          class="h5 mx-3 my-auto text-dark"
          >FAQ</a
        >
      </div>
    </div>
  </div>
  <!-- *** Header -->
  <nav class="container navbar navbar-expand-xxxl navbar-light px-0">
    <!-- LOGO -->
    <a class="navbar-brand" href="#"></a>
    <div
      class="pull-left mx-0 collapse d-xxxl-none toggle-close"
      id="inputSearch"
      style="flex-grow: 1"
    >
      <input
        class="form-control d-xxxl-none border-0 shadow-none px-0"
        placeholder="I'm looking for..."
        aria-label="Search"
      />
    </div>
    <!-- OPEN DROPDOWN -->
    <div id="currentnav" class="collapse d-flex show">
      <button
        id="btn-search"
        class="btn btn-link-light text-dark collapse show d-block d-xxxl-none me-9"
        type="button"
        data-bs-toggle="collapse-all"
        data-bs-target="#inputSearch, .nav-menu-responsif"
        aria-controls="navbar4_searchForm navbar4_buttonsForm"
        aria-expanded="false"
        aria-label="Toggle search form"
      >
        <i class="icon-search fs-xl pe-3 border-end border-gray"></i>
      </button> 
      <!-- Open -->
      <button
        id="nav-burger"
        class="nav-menu-responsif navbar-toggler collapse show position-absolute end-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target=".nav-menu-responsif, #navbarDropdown"
        aria-controls="navbarDropdown navbar4_searchForm navbar4_buttonsForm"
        aria-expanded="false"
        aria-label="Toggle navigation"
        style="top: 22px"
      >
        <span class="navbar-toggler-icon"></span>
      </button> 
      <!-- Close -->
      <button
        id="nav-close"
        class="nav-menu-responsif navbar-toggler collapse collapsed position-absolute end-0"
        type="button"
        data-bs-toggle="collapse-all"
        data-bs-target=".nav-menu-responsif, #navbarDropdown, #inputSearch"
        aria-controls="navbarDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
        style="top: 19px"
      >
        <i class="icon-close fs-xl"></i>
      </button>
    </div> 
    <div
      class="collapse navbar-collapse header-collapse toggle-close"
      id="navbarDropdown"
    >
      <div class="tab-content navbar-header-dropdown" id="nav-tabContent">
        <!-- dropdown responsive mode -->
        <div
          class="d-xxxl-none border-top border-bottom collapse multi-collapse navbar-dropdown-content w-100 navbar-nav"
          id="DropDownCollapseIndividual-profile"
        >
          <div
            class="py-4 bg-white d-block d-xxxl-none"
            id="BorderDropDownCollapse"
          >
            <div class="px-3">
              <a
                class="nav-link border-0 px-1 pt-0"
                href="#"
                data-bs-target="#DropDownCollapseIndividual-profile"
                data-bs-toggle="collapse"
                ><i class="d-block d-xxl-none icon-west float-sm-start pe-2"></i
                >BACK</a
              >
              <h5>INDIVIDUALS</h5>
              <p class="display-6">Get AXA's award-winning car insurance</p>
              <p
                >Get AXA's award-winning home insurance online and protect
                yourself from major risks like flooding and fire.</p
              >
              <a class="text-decoration-underline" href="#">Find out more</a>
            </div> 
            <div class="accordion mt-8" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="btn accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Individual insurance overview
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="card-body py-3">
                    <a href="#">Link 1</a>
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
                    aria-expanded="true"
                    aria-controls="collapseTwo"
                  >
                    Individual insurance price
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="card-body py-3">
                    <a href="#">Link 1</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
        <div
          class="d-xxxl-none border-top border-bottom collapse multi-collapse navbar-dropdown-content w-100 navbar-nav"
          id="DropDownCollapseIndividual-gallery"
        >
          <div
            class="py-4 bg-white d-block d-xxxl-none"
            id="BorderDropDownCollapse"
          >
            <div class="px-3">
              <a
                class="nav-link border-0 px-1 pt-0"
                href="#"
                data-bs-target="#DropDownCollapseIndividual-gallery"
                data-bs-toggle="collapse"
                ><i class="d-block d-xxl-none icon-west float-sm-start pe-2"></i
                >BACK</a
              >
              <h5>GALLERY</h5>
              <p class="display-6">Get AXA's award-winning car insurance</p>
              <p
                >Get AXA's award-winning home insurance online and protect
                yourself from major risks like flooding and fire.</p
              >
              <a class="text-decoration-underline" href="#">Find out more</a>
            </div> 
            <div class="accordion mt-8" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="btn accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="true"
                    aria-controls="collapseThree"
                  >
                    Individual insurance overview
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="card-body py-3">
                    <a href="#">Link 1</a>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="btn accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="true"
                    aria-controls="collapseFour"
                  >
                    Individual insurance price
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="card-body py-3">
                    <a href="#">Link 1</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
        <div
          class="d-xxxl-none border-top border-bottom collapse multi-collapse navbar-dropdown-content w-100 navbar-nav"
          id="DropDownCollapseSmallBusiness-profile"
        >
          <div
            class="py-4 bg-white d-block d-xxxl-none"
            id="BorderDropDownCollapse"
          >
            <div class="px-3">
              <a
                class="nav-link border-0 px-1 pt-0"
                href="#"
                data-bs-target="#DropDownCollapseSmallBusiness-profile"
                data-bs-toggle="collapse"
                ><i class="d-block d-xxl-none icon-west float-sm-start pe-2"></i
                >BACK</a
              >
              <h5>SMALL BUSINESS</h5>
              <p class="display-6">Get AXA's award-winning car insurance</p>
              <p
                >Get AXA's award-winning home insurance online and protect
                yourself from major risks like flooding and fire.</p
              >
              <a class="text-decoration-underline" href="#">Find out more</a>
            </div> 
            <div class="accordion mt-8" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFive">
                  <button
                    class="btn accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="true"
                    aria-controls="collapseFive"
                  >
                    Individual insurance overview
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="card-body py-3">
                    <a href="#">Link 1</a>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="btn accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                    aria-expanded="true"
                    aria-controls="collapseSix"
                  >
                    Individual insurance price
                  </button>
                </h2>
                <div
                  id="collapseSix"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="card-body py-3">
                    <a href="#">Link 1</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
        <div
          class="d-xxxl-none border-top border-bottom collapse multi-collapse navbar-dropdown-content w-100 navbar-nav"
          id="DropDownCollapseSmallBusiness-gallery"
        >
          <div
            class="py-4 bg-white d-block d-xxxl-none"
            id="BorderDropDownCollapse"
          >
            <div class="px-3">
              <a
                class="nav-link border-0 px-1 pt-0"
                href="#"
                data-bs-target="#DropDownCollapseSmallBusiness-gallery"
                data-bs-toggle="collapse"
                ><i class="d-block d-xxl-none icon-west float-sm-start pe-2"></i
                >BACK</a
              >
              <h5>SMALL BUSINESS GALLERY</h5>
              <p class="display-6">Get AXA's award-winning car insurance</p>
              <p
                >Get AXA's award-winning home insurance online and protect
                yourself from major risks like flooding and fire.</p
              >
              <a class="text-decoration-underline" href="#">Find out more</a>
            </div> 
            <div class="accordion mt-8" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="btn accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSeven"
                    aria-expanded="true"
                    aria-controls="collapseSeven"
                  >
                    Individual insurance overview
                  </button>
                </h2>
                <div
                  id="collapseSeven"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="card-body py-3">
                    <a href="#">Link 1</a>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="btn accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseEight"
                    aria-expanded="true"
                    aria-controls="collapseEight"
                  >
                    Individual insurance price
                  </button>
                </h2>
                <div
                  id="collapseEight"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="card-body py-3">
                    <a href="#">Link 1</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
        <div
          class="d-xxxl-none border-top border-bottom collapse multi-collapse navbar-dropdown-content w-100 navbar-nav"
          id="DropDownCollapseBusiness-profile"
        >
          <div
            class="py-4 bg-white d-block d-xxxl-none"
            id="BorderDropDownCollapse"
          >
            <div class="px-3">
              <a
                class="nav-link border-0 px-1 pt-0"
                href="#"
                data-bs-target="#DropDownCollapseBusiness-profile"
                data-bs-toggle="collapse"
                ><i class="d-block d-xxl-none icon-west float-sm-start pe-2"></i
                >BACK</a
              >
              <h5>BUSINESS</h5>
              <p class="display-6">Get AXA's award-winning car insurance</p>
              <p
                >Get AXA's award-winning home insurance online and protect
                yourself from major risks like flooding and fire.</p
              >
              <a class="text-decoration-underline" href="#">Find out more</a>
            </div> 
            <div class="accordion mt-8" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="btn accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseNine"
                    aria-expanded="true"
                    aria-controls="collapseNine"
                  >
                    Individual insurance overview
                  </button>
                </h2>
                <div
                  id="collapseNine"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="card-body py-3">
                    <a href="#">Link 1</a>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="btn accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTen"
                    aria-expanded="true"
                    aria-controls="collapseTen"
                  >
                    Individual insurance price
                  </button>
                </h2>
                <div
                  id="collapseTen"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="card-body py-3">
                    <a href="#">Link 1</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
        <div
          class="d-xxxl-none border-top border-bottom collapse multi-collapse navbar-dropdown-content w-100 navbar-nav"
          id="DropDownCollapseBusiness-gallery"
        >
          <div
            class="py-4 px-3 bg-white d-block d-xxxl-none"
            id="BorderDropDownCollapse"
          >
            <div class="px-3">
              <a
                class="nav-link border-0 px-1 pt-0"
                href="#"
                data-bs-target="#DropDownCollapseBusiness-gallery"
                data-bs-toggle="collapse"
                ><i class="d-block d-xxl-none icon-west float-sm-start pe-2"></i
                >BACK</a
              >
              <h5>BUSINESS GALLERY</h5>
              <p class="display-6">Get AXA's award-winning car insurance</p>
              <p
                >Get AXA's award-winning home insurance online and protect
                yourself from major risks like flooding and fire.</p
              >
              <a class="text-decoration-underline" href="#">Find out more</a>
            </div>
            <div class="accordion mt-8" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="btn accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseEleven"
                    aria-expanded="true"
                    aria-controls="collapseEleven"
                  >
                    Individual insurance overview
                  </button>
                </h2>
                <div
                  id="collapseEleven"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="card-body py-3">
                    <a href="#">Link 1</a>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="btn accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwelve"
                    aria-expanded="true"
                    aria-controls="collapseTwelve"
                  >
                    Individual insurance price
                  </button>
                </h2>
                <div
                  id="collapseTwelve"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="card-body py-3">
                    <a href="#">Link 1</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
        <!-- metaheader reponsive mode -->
        <ul class="navbar-nav navbar4_linksList my-0 me-0 m-auto gray-100">
          <li class="nav-item">
            <div
              class="nav nav-tabs d-flex justify-content-around d-xxxl-none meta-tab text-center"
              id="nav-tab"
              role="tablist"
            >
              <button
                class="btn p-0 py-3 px-3 btn-sm btn-link-light align-baseline"
                id="nav-individuals-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-individuals-2"
                role="tab"
                aria-controls="nav-individuals-2"
                aria-selected="true"
                >INDIVIDUALS</button
              >
              <button
                class="btn p-0 py-3 px-3 btn-sm btn-link-light align-baseline"
                id="nav-small_business-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-small_business"
                role="tab"
                aria-controls="nav-small_business"
                aria-selected="false"
                >SMALL BUSINESS</button
              >
              <button
                class="btn p-0 py-3 px-3 btn-sm btn-link-light align-baseline"
                id="nav-business-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-business"
                role="tab"
                aria-controls="nav-business"
                aria-selected="false"
                >BUSINESS</button
              >
            </div>
          </li>
        </ul> 
        <div class="tab-content" id="myTabContent" data-bs-toggle="tab-drop">
          <!-- navbar DESKTOP mode individuals -->
          <div
            class="tab-pane show active nav-individuals-2 "
            id="nav-individuals-2"
            role="tabpanel"
            aria-labelledby="nav-individuals-tab"
          >
            <ul
              class="nav navbar4-multiCollapse show nav-tabs navbar-nav search-collapse text-uppercase me-0 m-auto flex-nowrap"
              id="TabIndividuals"
              role="tablist"
            >
              <li
                class="nav-item"
                role="presentation"
                data-bs-target="#DropDownCollapseIndividual-profile"
                data-bs-toggle="collapse"
              >
                <a
                  class="nav-link reverse-tab d-flex justify-content-between w-100"
                  id="individualProfile-tab"
                  data-bs-toggle="tab-hover"
                  data-bs-target="#individualProfile"
                  role="button"
                  aria-controls="individualProfile"
                  aria-selected="true"
                >
                  INDIVIDUALS
                  <i class="d-block d-xxxl-none icon-east float-sm-end pe-4"></i>
                </a>
              </li>
              <li
                class="nav-item"
                role="presentation"
                data-bs-target="#DropDownCollapseIndividual-gallery"
                data-bs-toggle="collapse"
              >
                <a
                  class="nav-link reverse-tab d-flex justify-content-between w-100 text-nowrap"
                  id="individualGallery-tab"
                  data-bs-toggle="tab-hover"
                  data-bs-target="#individualGallery"
                  role="button"
                  aria-controls="individualGallery"
                  aria-selected="true"
                >
                  GALLERY INDIVIDUALS
                  <i class="d-block d-xxxl-none icon-east float-sm-end pe-4"></i>
                </a>
              </li>
              <li class="m-auto py-4 py-xxxl-0 px-2 border-bottom border-xxl-none">
                <button type="button" class="btn btn-outline-primary w-100">
                  COMPONENTS
                </button>
              </li>
            </ul>
          </div> 
          <!-- navbar DESKTOP mode SMALL BUSINESS -->
          <div
            class="tab-pane nav-small_business"
            id="nav-small_business"
            role="tabpanel"
            aria-labelledby="nav-small_business-tab"
          >
            <ul
              class="nav navbar4-multiCollapse show nav-tabs navbar-nav search-collapse text-uppercase me-0 m-auto flex-nowrap"
              id="TabSmallBusiness"
              role="tablist"
            >
              <!--TODO: remove id-->
              <li
                class="nav-item"
                role="presentation"
                data-bs-target="#DropDownCollapseSmallBusiness-profile"
                data-bs-toggle="collapse"
              >
                <a
                  class="nav-link reverse-tab d-flex justify-content-between w-100 text-nowrap"
                  id="smallBusinessProfile-tab"
                  data-bs-toggle="tab-hover"
                  data-bs-target="#smallBusinessProfile"
                  role="button"
                  aria-controls="smallBusinessProfile"
                  aria-selected="true"
                >
                  SMALL BUSINESS
                  <i class="d-block d-xxl-none icon-east float-sm-end pe-4"></i>
                </a>
              </li>
              <li
                class="nav-item"
                role="presentation"
                data-bs-target="#DropDownCollapseSmallBusiness-gallery"
                data-bs-toggle="collapse"
              >
                <a
                  class="nav-link reverse-tab d-flex justify-content-between w-100"
                  id="smallBusinessGallery-tab"
                  data-bs-toggle="tab-hover"
                  data-bs-target="#smallBusinessGallery"
                  role="button"
                  aria-controls="smallBusinessGallery"
                  aria-selected="true"
                >
                  GALLERY
                  <i class="d-block d-xxl-none icon-east float-sm-end pe-4"></i>
                </a>
              </li>
              <li class="m-auto py-4 py-xxxl-0 px-2 border-bottom border-xxl-none">
                <button type="button" class="btn btn-outline-primary w-100">
                  QUOTE
                </button>
              </li>
            </ul>
          </div> 
          <!-- navbar DESKTOP mode BUSINESS -->
          <div
            class="tab-pane nav-business"
            id="nav-business"
            role="tabpanel"
            aria-labelledby="nav-business-tab"
          >
            <ul
              class="nav navbar4-multiCollapse show nav-tabs navbar-nav search-collapse text-uppercase me-0 m-auto flex-nowrap"
              id="TabSmallBusiness"
              role="tablist"
            >
              <!--TODO: remove id-->
              <li
                class="nav-item"
                role="presentation"
                data-bs-target="#DropDownCollapseBusiness-profile"
                data-bs-toggle="collapse"
              >
                <a
                  class="nav-link reverse-tab d-flex justify-content-between w-100"
                  id="businessProfile-tab"
                  data-bs-toggle="tab-hover"
                  data-bs-target="#businessProfile"
                  role="button"
                  aria-controls="businessProfile"
                  aria-selected="true"
                >
                  BUSINESS
                  <i class="d-block d-xxl-none icon-east float-sm-end pe-4"></i>
                </a>
              </li>
              <li
                class="nav-item"
                role="presentation"
                data-bs-target="#DropDownCollapseBusiness-gallery"
                data-bs-toggle="collapse"
              >
                <a
                  class="nav-link reverse-tab d-flex justify-content-between w-100 text-nowrap"
                  id="businessGallery-tab"
                  data-bs-toggle="tab-hover"
                  data-bs-target="#businessGallery"
                  role="button"
                  aria-controls="businessGallery"
                  aria-selected="true"
                >
                  GUIDELINES BUSINESS
                  <i class="d-block d-xxl-none icon-east float-sm-end pe-4"></i>
                </a>
              </li>
              <li class="m-auto py-4 py-xxxl-0 px-2 border-bottom border-xxl-none">
                <button type="button" class="btn btn-outline-primary w-100">
                  CONTACT
                </button>
              </li>
            </ul>
          </div> 
          <!-- TABS TO DISPLAY DESKTOP MENU OPTIONS -->
          <div
            class="px-0 position-absolute w-100 d-none d-xxxl-block border-top"
            data-bs-toggle="tab-drop"
            style="left: 0; z-index: 1"
          >
            <!-- TAB CONTENT -->
            <div class="container tab-content bg-white" id="myTabContent">
              <!-- Tab1 - INDIVIDUAL PROFILE -->
              <div
                class="tab-pane fade p-5"
                id="individualProfile"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div class="row">
                  <div class="col-4 pe-5">
                    <h5>INDIVIDUALS</h5>
                    <p class="display-6"
                      >Get AXA's award-winning car insurance</p
                    >
                    <p
                      >Get AXA's award-winning home insurance online and protect
                      yourself from major risks like flooding and fire.</p
                    >
                    <a class="text-decoration-underline" href="#"
                      >Find out more</a
                    >
                  </div>
                  <div class="col-7 ps-4">
                    <div id="dropdownLink">
                      <p class="lead"
                        ><strong>Home insurance overview</strong></p
                      >
                      <p><a href="#">Link 1</a></p> 
                      <p class="lead"><strong>Existing customers</strong></p>
                      <p><a href="#">Link 1</a></p>
                      <p><a href="#">Link 2</a></p>
                    </div>
                  </div>
                </div>
              </div> 
              <!-- Tab2 - INDIVIDUAL GALLERY -->
              <div
                class="tab-pane fade p-5"
                id="individualGallery"
                role="tabpanel"
                aria-labelledby="individualGallery-tab"
              >
                <div class="row">
                  <div class="col-4 pe-5">
                    <h5>GALLERY</h5>
                    <p class="display-6"
                      >Get AXA's award-winning car insurance</p
                    >
                    <p
                      >Get AXA's award-winning home insurance online and protect
                      yourself from major risks like flooding and fire.</p
                    >
                    <a class="text-decoration-underline" href="#"
                      >Find out more</a
                    >
                  </div>
                  <div class="col-7 ps-4">
                    <div id="dropdownLink">
                      <p class="lead"
                        ><strong>Home insurance overview</strong></p
                      >
                      <p><a href="#">Link 1</a></p> 
                      <p class="lead"><strong>Existing customers</strong></p>
                      <p><a href="#">Link 1</a></p>
                      <p><a href="#">Link 2</a></p>
                    </div>
                  </div>
                </div>
              </div> 
              <!-- Tab3 - SMALL BUSINESS PROFILE-->
              <div
                class="tab-pane fade p-5"
                id="smallBusinessProfile"
                role="tabpanel"
                aria-labelledby="smallBusinessProfile-tab"
              >
                <div class="row">
                  <div class="col-4 pe-5">
                    <h5>SMALL BUSINESS</h5>
                    <p class="display-6"
                      >Get AXA's award-winning car insurance</p
                    >
                    <p
                      >Get AXA's award-winning home insurance online and protect
                      yourself from major risks like flooding and fire.</p
                    >
                    <a class="text-decoration-underline" href="#"
                      >Find out more</a
                    >
                  </div>
                  <div class="col-7 ps-4">
                    <div id="dropdownLink">
                      <p class="lead"
                        ><strong>Home insurance overview</strong></p
                      >
                      <p><a href="#">Link 1</a></p> 
                      <p class="lead"><strong>Existing customers</strong></p>
                      <p><a href="#">Link 1</a></p>
                      <p><a href="#">Link 2</a></p>
                    </div>
                  </div>
                </div>
              </div> 
              <!-- Tab4 - SMALL BUSINESS GALLERY-->
              <div
                class="tab-pane fade p-5"
                id="smallBusinessGallery"
                role="tabpanel"
                aria-labelledby="smallBusinessGallery-tab"
              >
                <div class="row">
                  <div class="col-4 pe-5">
                    <h5>GALLERY SMALL BUSINESS</h5>
                    <p class="display-6"
                      >Get AXA's award-winning car insurance</p
                    >
                    <p
                      >Get AXA's award-winning home insurance online and protect
                      yourself from major risks like flooding and fire.</p
                    >
                    <a class="text-decoration-underline" href="#"
                      >Find out more</a
                    >
                  </div>
                  <div class="col-7 ps-4">
                    <div id="dropdownLink">
                      <p class="lead"
                        ><strong>Home insurance overview</strong></p
                      >
                      <p><a href="#">Link 1</a></p> 
                      <p class="lead"><strong>Existing customers</strong></p>
                      <p><a href="#">Link 1</a></p>
                      <p><a href="#">Link 2</a></p>
                    </div>
                  </div>
                </div>
              </div> 
              <!-- Tab5 - BUSINESS PROFILE-->
              <div
                class="tab-pane fade p-5"
                id="businessProfile"
                role="tabpanel"
                aria-labelledby="businessProfile-tab"
              >
                <div class="row">
                  <div class="col-4 pe-5">
                    <h5>BUSINESS</h5>
                    <p class="display-6"
                      >Get AXA's award-winning car insurance</p
                    >
                    <p
                      >Get AXA's award-winning home insurance online and protect
                      yourself from major risks like flooding and fire.</p
                    >
                    <a class="text-decoration-underline" href="#"
                      >Find out more</a
                    >
                  </div>
                  <div class="col-7 ps-4">
                    <div id="dropdownLink">
                      <p class="lead"
                        ><strong>Home insurance overview</strong></p
                      >
                      <p><a href="#">Link 1</a></p> 
                      <p class="lead"><strong>Existing customers</strong></p>
                      <p><a href="#">Link 1</a></p>
                      <p><a href="#">Link 2</a></p>
                    </div>
                  </div>
                </div>
              </div> 
              <!-- Tab6 - BUSINESS GALLERY-->
              <div
                class="tab-pane fade p-5"
                id="businessGallery"
                role="tabpanel"
                aria-labelledby="businessGallery-tab"
              >
                <div class="row">
                  <div class="col-4 pe-5">
                    <h5>GALLERY BUSINESS</h5>
                    <p class="display-6"
                      >Get AXA's award-winning car insurance</p
                    >
                    <p
                      >Get AXA's award-winning home insurance online and protect
                      yourself from major risks like flooding and fire.</p
                    >
                    <a class="text-decoration-underline" href="#"
                      >Find out more</a
                    >
                  </div>
                  <div class="col-7 ps-4">
                    <div id="dropdownLink">
                      <p class="lead"
                        ><strong>Home insurance overview</strong></p
                      >
                      <p><a href="#">Link 1</a></p> 
                      <p class="lead"><strong>Existing customers</strong></p>
                      <p><a href="#">Link 1</a></p>
                      <p><a href="#">Link 2</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
        <!-- The bottom of the dropdown is shared (metaheader) -->
        <ul class="ps-0 navbar-nav me-0 m-auto gray-100">
          <li class="nav-item d-block d-xxxl-none">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              class="h4 mb-0 nav-link text-dark"
              >CONTACT</a
            >
          </li>
          <li class="nav-item d-block d-xxxl-none">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              class="h4 mb-0 nav-link text-dark"
              >FAQ</a
            >
          </li>
        </ul>
      </div>
      <!-- And then come the language selection -->
      <div>
        <ul class="d-block d-xxxl-none navbar-header-language navbar-nav">
          <div class="accordion" id="accordionLanguage">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingLanguage">
                <button
                  class="btn accordion-button collapsed gray-100"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseLanguage"
                  aria-expanded="true"
                  aria-controls="collapseLanguage"
                >
                  <span class="language-toggler-icon align-text-bottom me-1"></span>ENGLISH
                </button>
              </h2>
              <div
                id="collapseLanguage"
                class="accordion-collapse collapse"
                aria-labelledby="headingLanguage"
                data-bs-parent="#accordionLanguage"
              >
                <ul class="accordion-body list-group py-0">
                  <a class="dropdown-item" href="#">Français</a>
                  <a class="dropdown-item" href="#">Deutsch</a>
                </ul>
              </div>
            </div>
          </div>
        </ul>
      </div>
      <!-- Searchbar for DESKTOP -->
      <form
        id="navbar4_searchForm"
        class="navbar4-multiCollapse form-inline form-search ms-auto order-2 collapse"
      >
        <div class="input-group mx-auto">
          <input
            class="form-control d-none d-xxxl-block"
            placeholder="I'm looking for..."
            aria-label="Search"
          />
          <button
            class="btn btn-search d-none d-xxxl-block"
            type="button"
          ></button>
        </div>
      </form>
    </div>
    <span class="navbar-search-toggler d-xxxl-flex d-none">
      <button
        class="btn collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target=".navbar4-multiCollapse"
        aria-controls="navbar4_searchForm navbar4_buttonsForm"
        aria-expanded="false"
        aria-label="Toggle search form"
      >
        <span class="navbar-search-toggler-icon" id="CloseDropDown"></span>
      </button>
    </span>
  </nav>
</div>

````

  </div>
</div>
<!-- #endregion components_navbar - Dropdown behavior --> 