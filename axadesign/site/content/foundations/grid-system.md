---
layout: foundations
title: Grid system 
description: Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks to a twelve column system, five default responsive tiers, Sass variables and mixins, and dozens of predefined classes.  
section: Foundations
bootstrapRef : https://getbootstrap.com/docs/5.1/utilities/colors/
menuSlug: grid-system
---

<div class="display-5 pt-md-8 pb-1">Grid options</div>
<p class="text-justify pe-md-8 pe-lg-11">
  While uses <code>ems</code> or <code>rems</code> for defining most sizes,
  <code>pxs</code> are used for grid breakpoints and container widths. This is
  because the viewport width is in pixels and does not change with the font
  size.
  <br />
  See how aspects of grid system work across multiple devices with a handy
  table.
  <br /><br />
  AXA specific updates : new <code>xxl</code> grid (as added in bootstrap 5.0),
  breakpoint, container <code>max-width</code> and gutter values also updated.
</p>
<div class="ax-example p-md-3 border">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th></th>
        <th class="text-center">
          xs<br />
          <small>&lt;600px</small>
        </th>
        <th class="text-center">
          sm<br />
          <small>≥600px</small>
        </th>
        <th class="text-center">
          md<br />
          <small>≥768px</small>
        </th>
        <th class="text-center">
          lg<br />
          <small>≥1024px</small>
        </th>
        <th class="text-center">
          xl<br />
          <small>≥1280px</small>
        </th>
        <th class="text-center">
          xxl<br />
          <small>≥1440px</small>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th class="text-nowrap" scope="row">Max container width</th>
        <td>None (auto)</td>
        <td>552px</td>
        <td>744px</td>
        <td>984px</td>
        <td>1176px</td>
        <td>1368px</td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row">Class prefix</th>
        <td><code>.col-</code></td>
        <td><code>.col-sm-</code></td>
        <td><code>.col-md-</code></td>
        <td><code>.col-lg-</code></td>
        <td><code>.col-xl-</code></td>
        <td><code>.col-xxl-</code></td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row"># of columns</th>
        <td colspan="6">12</td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row">Gutter width</th>
        <td colspan="6">24px (12px on each side of a column)</td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row">Nestable</th>
        <td colspan="6">Yes</td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row">Column ordering</th>
        <td colspan="6">Yes</td>
      </tr>
    </tbody>
  </table>
</div>
<p class="text-justify">
  New xxl breakpoint sample (use screen ≥1440px to view results in a single
  line)
</p>
<div class="ax-example p-md-3 border">
  <div class="container">
    <div class="row">
      <div class="col-xxl-8 border">col-xxl-8</div>
      <div class="col-xxl-4 border">col-xxl-4</div>
    </div>
    <div class="row">
      <div class="col-xxl border">col-xxl</div>
      <div class="col-xxl border">col-xxl</div>
      <div class="col-xxl border">col-xxl</div>
      <div class="col-xxl border">col-xxl</div>
    </div>
    <div class="row">
      <div class="col-xxl border">col-xxl</div>
      <div class="col-xxl border">col-xxl</div>
      <div class="col-xxl border">col-xxl</div>
      <div class="col-xxl border">col-xxl</div>
      <div class="col-xxl border">col-xxl</div>
      <div class="col-xxl border">col-xxl</div>
      <div class="col-xxl border">col-xxl</div>
      <div class="col-xxl border">col-xxl</div>
      <div class="col-xxl border">col-xxl</div>
      <div class="col-xxl border">col-xxl</div>
      <div class="col-xxl border">col-xxl</div>
      <div class="col-xxl border">col-xxl</div>
    </div>
  </div>
</div>
<div class="pb-4">

 ```html 
<div class="row">
  <div class="col-xxl-8 border">col-xxl-8</div>
  <div class="col-xxl-4 border">col-xxl-4</div>
</div>
<div class="row">
  <div class="col-xxl border">col-xxl</div>
  <div class="col-xxl border">col-xxl</div>
  <div class="col-xxl border">col-xxl</div>
  <div class="col-xxl border">col-xxl</div>
</div>
<div class="row">
  <div class="col-xxl border">col-xxl</div>
  <div class="col-xxl border">col-xxl</div>
  <div class="col-xxl border">col-xxl</div>
  <div class="col-xxl border">col-xxl</div>
  <div class="col-xxl border">col-xxl</div>
  <div class="col-xxl border">col-xxl</div>
  <div class="col-xxl border">col-xxl</div>
  <div class="col-xxl border">col-xxl</div>
  <div class="col-xxl border">col-xxl</div>
  <div class="col-xxl border">col-xxl</div>
  <div class="col-xxl border">col-xxl</div>
  <div class="col-xxl border">col-xxl</div>
</div>
```
 
</div>
