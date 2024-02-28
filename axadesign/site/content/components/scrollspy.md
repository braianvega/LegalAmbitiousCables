---
layout: components
title: Scrollspy
description: A dynamic navigation based on scroll position to indicate which
  link is currently active in the viewport. 
section: Components
bootstrapRef: https://getbootstrap.com/docs/5.1/components/scrollspy/
menuSlug: scrollspy
---
 
<!-- #region components_scrollspy - example -->
<div class="display-5 pt-md-8 pb-1">Example</div>
<p class="text-justify pe-md-8 pe-lg-11 pb-3">
  @AXA specific class <code>nav-scrollspy</code> to design
  correctly the nav/navbar within flex-column
</p>
<div class="ax-example p-md-3 border">
  <div class="row">
    <div class="col-4">
      <nav
        id="navbar-example3"
        class="navbar navbar-light bg-light"
      >
        <div class="pb-4 h2 w-100">Navbar</div>
        <nav class="nav nav-pills flex-column nav-scrollspy">
          <a class="nav-link active" href="#item-1">Item 1</a>
          <a class="nav-link" href="#item-2">Item 2</a>
          <a class="nav-link" href="#item-3">Item 3</a>
          <a class="nav-link" href="#item-4">Item 4</a>
        </nav>
      </nav>
    </div>
    <div class="col-8">
      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar-example3"
        data-bs-offset="10"
        style="overflow: auto; position: relative; height: 300px"
      >
        <h2 id="item-1">Item 1</h2>
        <p>
          Placeholder content for the scrollspy example. This one
          relates to item 1. Takes you miles high, so high, 'cause
          she’s got that one international smile. There's a
          stranger in my bed, there's a pounding in my head. Oh,
          no. In another life I would make you stay. ‘Cause I, I’m
          capable of anything. Suiting up for my crowning battle.
          Used to steal your parents' liquor and climb to the
          roof. Tone, tan fit and ready, turn it up cause its
          gettin' heavy. Her love is like a drug. I guess that I
          forgot I had a choice.
        </p>
        <h2 id="item-2">Item 2</h2>
        <p>
          Placeholder content for the scrollspy example. This one
          relates to item 2. Takes you miles high, so high, 'cause
          she’s got that one international smile. There's a
          stranger in my bed, there's a pounding in my head. Oh,
          no. In another life I would make you stay. ‘Cause I, I’m
          capable of anything. Suiting up for my crowning battle.
          Used to steal your parents' liquor and climb to the
          roof. Tone, tan fit and ready, turn it up cause its
          gettin' heavy. Her love is like a drug. I guess that I
          forgot I had a choice.
        </p>
        <h2 id="item-3">Item 3</h2>
        <p>
          Placeholder content for the scrollspy example. This one
          relates to item 3. Takes you miles high, so high, 'cause
          she’s got that one international smile. There's a
          stranger in my bed, there's a pounding in my head. Oh,
          no. In another life I would make you stay. ‘Cause I, I’m
          capable of anything. Suiting up for my crowning battle.
          Used to steal your parents' liquor and climb to the
          roof. Tone, tan fit and ready, turn it up cause its
          gettin' heavy. Her love is like a drug. I guess that I
          forgot I had a choice.
        </p>
        <h2 id="item-4">Item 4</h2>
        <p>
          Placeholder content for the scrollspy example. This one
          relates to item 4. Takes you miles high, so high, 'cause
          she’s got that one international smile. There's a
          stranger in my bed, there's a pounding in my head. Oh,
          no. In another life I would make you stay. ‘Cause I, I’m
          capable of anything. Suiting up for my crowning battle.
          Used to steal your parents' liquor and climb to the
          roof. Tone, tan fit and ready, turn it up cause its
          gettin' heavy. Her love is like a drug. I guess that I
          forgot I had a choice.
          <br />
          Placeholder content for the scrollspy example. This one
          relates to item 4. Takes you miles high, so high, 'cause
          she’s got that one international smile. There's a
          stranger in my bed, there's a pounding in my head. Oh,
          no. In another life I would make you stay. ‘Cause I, I’m
          capable of anything. Suiting up for my crowning battle.
          Used to steal your parents' liquor and climb to the
          roof. Tone, tan fit and ready, turn it up cause its
          gettin' heavy. Her love is like a drug. I guess that I
          forgot I had a choice.
        </p>
      </div>
    </div>
  </div>
</div>
<div class="pb-4">

```html
<div class="row">
  <div class="col-4">
    <nav id="navbar-example3" class="navbar navbar-light bg-light">
      <div class="pb-4 h2 w-100">Navbar</div>
      <nav class="nav nav-pills flex-column nav-scrollspy">
        <a class="nav-link active" href="#item-1">Item 1</a>
        <a class="nav-link" href="#item-2">Item 2</a>
        <a class="nav-link" href="#item-3">Item 3</a>
        <a class="nav-link" href="#item-4">Item 4</a>
      </nav>
    </nav>
  </div>
  <div class="col-8">
    <div
      data-bs-spy="scroll"
      data-bs-target="#navbar-example3"
      data-bs-offset="0"
      style="overflow: auto; position: relative; height: 350px"
    >
      <h2 id="item-1">Item 1</h2>
      <p>...</p>
      <h2 id="item-2">Item 2</h2>
      <p>...</p>
      <h2 id="item-3">Item 3</h2>
      <p>...</p>
      <h2 id="item-4">Item 4</h2>
      <p>...</p>
    </div>
  </div>
</div>

```
</div>
 