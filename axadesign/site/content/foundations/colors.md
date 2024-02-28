---
layout: foundations
title: Colors
description: Bootstrap is supported by an extensive color system that themes our styles and components. This enables more comprehensive customization and extension for any project. 
section: Foundations
bootstrapRef : https://getbootstrap.com/docs/5.1/layout/grid/
menuSlug: colors
---

 <!-- #region UTILITIES - COLORS - THEME COLORS -->

<div class="display-5 pt-md-8 pb-1">Theme colors</div>
<p class="text-justify pe-md-8 pe-lg-11">
  We use a subset of all colors to create a smaller color palette for generating
  color schemes, also available as Sass variables and a Sass map in
  <code>scss/_variables.scss</code> file.
</p>

<!-- #region UTILITIES - COLORS - BACKGROUND COLOR -->
<p class="text-justify pb-4">
  Background color samples with saas variables used for each theme.
</p>

<div class="ax-example p-md-3 border">
  <div class="row">
    <div class="p-3 col-lg-3 m-1 bg-primary text-white">
      <p>.bg-primary / --bs-primary / --bs-axa-blue </p>
      <span class="float-end">$axa-blue</span>
    </div>
    <div class="p-3 col-lg-3 m-1 bg-secondary text-white">
      <p>.bg-secondary / --bs-primary / --bs-axa-sienna</p>
      <span class="float-end">$axa-sienna</span>
    </div>
    <div class="p-3 col-lg-3 m-1 bg-success text-white">
      <p>.bg-success / --bs-success / --bs-green</p>
      <span class="float-end">$green</span>
    </div>
    <div class="p-3 col-lg-3 m-1 bg-danger text-white">
      <p>.bg-danger / --bs-danger / --bs-red<p>
      <span class="float-end">$red</span>
    </div>
    <div class="p-3 col-lg-3 m-1 bg-warning text-dark">
      <p>.bg-warning / --bs-warning / --bs-yellow</p>
      <span class="float-end">$yellow</span>
    </div>
    <div class="p-3 col-lg-3 m-1 bg-info text-white">
      <p>.bg-info / --bs-info / --bs-axa-ocean</p>
      <span class="float-end">$ocean</span>
    </div>
    <div class="p-3 col-lg-3 m-1 bg-light text-dark">
      <p>.bg-light / --bs-light / --bs-white</p>
      <span class="float-end">$white</span>
    </div>
    <div class="p-3 col-lg-3 m-1 bg-dark text-white">
      <p>.bg-dark / --bs-dark /--bs-gray-800</p>
      <span class="float-end">$gray-800 </span>
    </div>
    <div class="p-3 col-lg-3 m-1 bg-white text-dark">
      <p>.bg-white / --bs-white</p>
      <span class="float-end">$white</span>
    </div>
    <div class="p-3 col-lg-3 m-1 bg-transparent text-dark">.bg-transparent</div>
  </div>
</div>

<div class="pb-4">

 ```html
<div class="bg-primary text-white">.bg-primary <span class="float-end">$axa-blue</span></div>
<div class="bg-secondary text-white">.bg-secondary <span class="float-end">$axa-sienna</span></div>
<div class="bg-success text-white">.bg-success <span class="float-end">$green</span></div>
<div class="bg-danger text-white">.bg-danger <span class="float-end">$red</span></div>
<div class="bg-warning text-dark">.bg-warning <span class="float-end">$yellow</span></div>
<div class="bg-info text-white">.bg-info <span class="float-end">$ocean</span></div>
<div class="bg-light text-dark">.bg-light <span class="float-end">$white</span></div>
<div class="bg-dark text-white">.bg-dark <span class="float-end">$gray-800</span></div>
<div class="bg-white text-dark">.bg-white <span class="float-end">$white</span></div>
<div class="bg-transparent text-dark">.bg-transparent<div>
```
</div>
<!-- #endregion UTILITIES - COLORS - BACKGROUND COLOR -->

<!-- #region UTILITIES - COLORS - ALL AXA COLORS -->
<div class="display-5 pt-md-8 pb-1">All AXA Colors</div>
<p class="text-justify pb-4">
  All colors are available as Sass variables and a Sass map in
  scss/_variables.scss file. To avoid increased file sizes, we don’t create text
  or background color classes for all of these variables. Instead, we choose a
  subset of these colors for a theme palette.
</p>
<div class="ax-example p-md-3 row">
  <div class="col-md-4 pt-3">
    <div class="p-3" style="background-color: var(--bs-gray-100)">
      <strong class="d-block">$gray-100 / --bs-gray-100</strong>
      <p>#fafafa</p>
    </div>
    <div class="p-3 bg-gray">
      <strong class="d-block">$gray-200 / .bg-gray / --bs-gray-200</strong>
      <small>#f0f0f0</small>
    </div>
    <div class="p-3" style="background-color: var(--bs-gray-300)">
      <strong class="d-block">$gray-300 / --bs-gray-300</strong>
      <small>#e5e5e5</small>
    </div>
    <div class="p-3" style="background-color: var(--bs-gray-400)">
      <strong class="d-block">$gray-400 / --bs-gray-400</strong>
      <small>#ccc</small>
    </div>
    <div class="p-3" style="background-color: var(--bs-gray-500)">
      <strong class="d-block">$gray-500 / --bs-gray-500</strong>
      <small>#999</small>
    </div>
    <div class="p-3" style="background-color: var(--bs-gray-600)">
      <strong class="d-block">$gray-600 / --bs-gray-600</strong>
      <small>#757575</small>
    </div>
    <div class="p-3 text-white" style="background-color: var(--bs-gray-700)">
      <strong class="d-block">$gray-700 / --bs-gray-700</strong>
      <small>#5f5f5f</small>
    </div>
    <div class="p-3 text-white" style="background-color: var(--bs-gray-800)">
      <strong class="d-block">$gray-800 / --bs-gray-800</strong>
      <small>#343c3d</small>
    </div>
    <div class="p-3 text-white" style="background-color: var(--bs-gray-900)">
      <strong class="d-block">$gray-900 / -bs-gray-900</strong>
      <small>#111b1d</small>
    </div>
  </div>
  <div class="col-md-4 pt-3">
    <div
      class="p-3 text-white"
      style="background-color: var(--bs-axa-blue-100)"
    >
      <strong class="d-block">$axa-blue-100 / --bs-axa-blue-100</strong>
      <small>#5c5cb7</small>
    </div>
    <div
      class="p-3 text-white"
      style="background-color: var(--bs-axa-blue-200)"
    >
      <strong class="d-block">$axa-blue-200 / --bs-axa-blue-200</strong>
      <small>#3d3daa</small>
    </div>
    <div class="p-3 text-white bg-axa-blue-light">
      <strong class="d-block"
        >$axa-blue-300 / $axa-blue-light / .bg-axa-blue-light /
        --bs-axa-blue-300</strong
      >
      <small>#1f1f9c</small>
    </div>
    <div class="p-3 text-white bg-axa-blue">
      <strong class="d-block"
        >$axa-blue-400 / $axa-blue / .bg-axa-blue / --bs-axa-blue-400</strong
      >
      <small>#00008f</small>
    </div>
    <div class="p-3 text-white bg-axa-blue-dark">
      <strong class="d-block"
        >$axa-blue-500 / $axa-blue-dark / .bg-axa-blue-dark /
        --bs-axa-blue-500</strong
      >
      <small>#00006d</small>
    </div>
  </div>
  <div class="col-md-4 pt-3">
    <div
      class="p-3 text-white"
      style="background-color: var(--bs-axa-sienna-100)"
    >
      <strong class="d-block">$axa-sienna-100 / --bs-axa-sienna-100</strong>
      <small>#e28972</small>
    </div>
    <div
      class="p-3 text-white"
      style="background-color: var(--bs-axa-sienna-200)"
    >
      <strong class="d-block">$axa-sienna-200 / --bs-axa-sienna-200</strong>
      <small>#dd7358</small>
    </div>
    <div class="p-3 text-white bg-axa-sienna-light">
      <strong class="d-block"
        >$axa-sienna-300 / $axa-sienna-light / .bg-axa-sienna-light /
        --bs-axa-sienna-300</strong
      >
      <small>#d75d3d</small>
    </div>
    <div class="p-3 text-white bg-axa-sienna">
      <strong class="d-block"
        >$axa-sienna-400 / $axa-sienna / .bg-axa-sienna /
        --bs-axa-sienna-400</strong
      >
      <small>#d24723</small>
    </div>
    <div class="p-3 text-white bg-axa-sienna-dark">
      <strong class="d-block"
        >$axa-sienna-500 / $axa-sienna-dark / .bg-axa-sienna-dark /
        --bs-axa-sienna-500</strong
      >
      <small>#b03c1d</small>
    </div>
  </div>
  <div class="col-md-4 pt-3">
    <div class="p-3 text-white" style="background-color: var(--bs-green)">
      <strong class="d-block">$green / --bs-green</strong>
      <small>#138636</small>
    </div>
    <div class="p-3 text-white" style="background-color: var(--bs-red)">
      <strong class="d-block">$red / --bs-red</strong>
      <small>#c91432</small>
    </div>
    <div class="p-3 text-dark" style="background-color: var(--bs-yellow)">
      <strong class="d-block">$yellow / --bs-yellow</strong>
      <small>#ffbc11</small>
    </div>
    <div class="p-3" style="background-color: var(--bs-white)">
      <strong class="d-block">$white / --bs-white</strong>
      <small>#fff</small>
    </div>
  </div>
  <div class="col-md-4 pt-3">
    <div
      class="p-3 text-white"
      style="background-color: var(--bs-axa-ocean-100)"
    >
      <strong class="d-block">$axa-ocean-100 / --bs-axa-ocean-100</strong>
      <small>#7698cb</small>
    </div>
    <div class="p-3 text-white bg-axa-ocean">
      <strong class="d-block"
        >$axa-ocean-200 / $axa-ocean / .bg-axa-ocean /
        --bs-axa-ocean-200</strong
      >
      <small>#4976ba</small>
    </div>
    <div
      class="p-3 text-white"
      style="background-color: var(--bs-axa-ocean-300)"
    >
      <strong class="d-block">$axa-ocean-300 / --bs-axa-ocean-300</strong>
      <small>#3a5e94</small>
    </div>
    <div
      class="p-3 text-white"
      style="background-color: var(--bs-axa-ocean-400)"
    >
      <strong class="d-block">$axa-ocean-400 / --bs-axa-ocean-400</strong>
      <small>#274168</small>
    </div>
    <div
      class="p-3 text-white"
      style="background-color: var(--bs-axa-ocean-500)"
    >
      <strong class="d-block">$axa-ocean-500 / --bs-axa-ocean-500</strong>
      <small>#17273e</small>
    </div>
  </div>
  <div class="col-md-4 pt-3">
    <div
      class="p-3 text-white"
      style="background-color: var(--bs-axa-apache-100)"
    >
      <strong class="d-block">$axa-apache-100 / --bs-axa-apache-100</strong>
      <small>#a79666</small>
    </div>
    <div class="p-3 text-white bg-axa-apache">
      <strong class="d-block"
        >$axa-apache-200 / $axa-apache / .bg-axa-apache /
        --bs-axa-apache-200</strong
      >
      <small>#8a7333</small>
    </div>
    <div
      class="p-3 text-white"
      style="background-color: var(--bs-axa-apache-300)"
    >
      <strong class="d-block">$axa-apache-300 / --bs-axa-apache-300</strong>
      <small>#6e5c28</small>
    </div>
    <div
      class="p-3 text-white"
      style="background-color: var(--bs-axa-apache-400)"
    >
      <strong class="d-block">$axa-apache-400 / --bs-axa-apache-400</strong>
      <small>#4b3e1b</small>
    </div>
    <div
      class="p-3 text-white"
      style="background-color: var(--bs-axa-apache-500)"
    >
      <strong class="d-block">$axa-apache-500 / --bs-axa-apache-500</strong>
      <small>#241d0c</small>
    </div>
  </div>
  <div class="col-md-4 pt-3">
    <div
      class="p-3 text-white"
      style="background-color: var(--bs-axa-teal-100)"
    >
      <strong class="d-block">$axa-teal-100 / --bs-axa-teal-100</strong>
      <small>#41949f</small>
    </div>
    <div class="p-3 text-white bg-axa-teal">
      <strong class="d-block"
        >$axa-teal-200 / $axa-teal / .bg-axa-teal / --bs-axa-teal-200</strong
      >
      <small>#027180</small>
    </div>
    <div
      class="p-3 text-white"
      style="background-color: var(--bs-axa-teal-300)"
    >
      <strong class="d-block">$axa-teal-300 / --bs-axa-teal-300</strong>
      <small>#015a66</small>
    </div>
    <div
      class="p-3 text-white"
      style="background-color: var(--bs-axa-teal-400)"
    >
      <strong class="d-block">$axa-teal-400 / --bs-axa-teal-400</strong>
      <small>#014750</small>
    </div>
    <div
      class="p-3 text-white"
      style="background-color: var(--bs-axa-teal-500)"
    >
      <strong class="d-block">$axa-teal-500 / --bs-axa-teal-500</strong>
      <small>#002126</small>
    </div>
  </div>
  <div class="col-md-4 pt-3">
    <div
      class="p-3 text-white"
      style="background-color: var(--bs-axa-viridian-100)"
    >
      <strong class="d-block">$axa-viridian-100 / --bs-axa-viridian-100</strong>
      <small>#738d87</small>
    </div>
    <div class="p-3 text-white bg-axa-viridian">
      <strong class="d-block"
        >$axa-viridian-200 / $axa-viridian / .bg-axa-viridian /
        --bs-axa-viridian-200</strong
      >
      <small>#5b7b73</small>
    </div>
    <div
      class="p-3 text-white"
      style="background-color: var(--bs-axa-viridian-300)"
    >
      <strong class="d-block">$axa-viridian-300 / --bs-axa-viridian-300</strong>
      <small>#48625c</small>
    </div>
    <div
      class="p-3 text-white"
      style="background-color: var(--bs-axa-viridian-400)"
    >
      <strong class="d-block">$axa-viridian-400 / --bs-axa-viridian-400</strong>
      <small>#32433f</small>
    </div>
    <div
      class="p-3 text-white"
      style="background-color: var(--bs-axa-viridian-500)"
    >
      <strong class="d-block">$axa-viridian-500 / --bs-axa-viridian-500</strong>
      <small>#181f1e</small>
    </div>
  </div>
  <div class="col-md-4 pt-3">
    <div
      class="p-3 text-white"
      style="background-color: var(--bs-axa-tosca-100)"
    >
      <strong class="d-block">$axa-tosca-100 / --bs-axa-tosca-100</strong>
      <small>#ac7074</small>
    </div>
    <div class="p-3 text-white bg-axa-tosca">
      <strong class="d-block"
        >$axa-tosca-200 / $axa-tosca / .bg-axa-tosca /
        --bs-axa-tosca-200</strong
      >
      <small>#914146</small>
    </div>
    <div
      class="p-3 text-white"
      style="background-color: var(--bs-axa-tosca-300)"
    >
      <strong class="d-block">$axa-tosca-300 / --bs-axa-tosca-300</strong>
      <small>#743438</small>
    </div>
    <div
      class="p-3 text-white"
      style="background-color: var(--bs-axa-tosca-400)"
    >
      <strong class="d-block">$axa-tosca-400 / --bs-axa-tosca-400</strong>
      <small>#6a2f33</small>
    </div>
    <div
      class="p-3 text-white"
      style="background-color: var(--bs-axa-tosca-500)"
    >
      <strong class="d-block">$axa-tosca-500 / --bs-axa-tosca-500</strong>
      <small>#321618</small>
    </div>
  </div>
</div>
