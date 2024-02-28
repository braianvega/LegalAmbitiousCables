---
layout: components
title: Alerts
description: "An alert displays an important, succinct message, and provides actions for users to address (or dismiss the banner). It requires a user action to be dismissed.  <br>
Alerts should be displayed at the top of the screen, below a top app bar. They’re persistent and nonmodal, allowing the user to either ignore them or interact with them at any time. Only one banner should be shown at a time." 
section: Components
bootstrapRef : https://getbootstrap.com/docs/5.1/components/alerts/
menuSlug: alerts
--- 
  
  <div class="display-5 pt-md-8 pb-1">Examples</div>
  <p class="text-justify pe-md-8 pe-lg-11 pb-3">
    You can use the default colour scheme of the design system
    depending on the type of alert to be displayed.
  </p>
  <div class="ax-example p-md-3 border text-center">
    <div class=" alert alert-confirmative" role="alert">
        <div class="alert-text">  A simple confirmative alert is available</div>
        <svg  class="alert-cls-btn" data-bs-dismiss="alert"width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9.66537 1.27325L8.72537 0.333252L4.9987 4.05992L1.27203 0.333252L0.332031 1.27325L4.0587 4.99992L0.332031 8.72659L1.27203 9.66659L4.9987 5.93992L8.72537 9.66659L9.66537 8.72659L5.9387 4.99992L9.66537 1.27325Z" fill="white"/></svg>
    </div>
    <div class=" alert alert-informative" role="alert">
        <div class="alert-text">  A simple informative alert is available</div>
        <svg  class="alert-cls-btn" data-bs-dismiss="alert"width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9.66537 1.27325L8.72537 0.333252L4.9987 4.05992L1.27203 0.333252L0.332031 1.27325L4.0587 4.99992L0.332031 8.72659L1.27203 9.66659L4.9987 5.93992L8.72537 9.66659L9.66537 8.72659L5.9387 4.99992L9.66537 1.27325Z" fill="white"/></svg>
    </div>
    <div class=" alert alert-error" role="alert">
        <div class="alert-text">  A simple error alert is available</div>
        <svg  class="alert-cls-btn" data-bs-dismiss="alert"width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9.66537 1.27325L8.72537 0.333252L4.9987 4.05992L1.27203 0.333252L0.332031 1.27325L4.0587 4.99992L0.332031 8.72659L1.27203 9.66659L4.9987 5.93992L8.72537 9.66659L9.66537 8.72659L5.9387 4.99992L9.66537 1.27325Z" fill="white"/></svg>
    </div>
  </div>
  <div class="pb-4">

  ```html
  <div class=" alert alert-confirmative" role="alert">
        <div class="alert-text">  A simple confirmative alert is available</div>
        <svg  class="alert-cls-btn" data-bs-dismiss="alert"width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9.66537 1.27325L8.72537 0.333252L4.9987 4.05992L1.27203 0.333252L0.332031 1.27325L4.0587 4.99992L0.332031 8.72659L1.27203 9.66659L4.9987 5.93992L8.72537 9.66659L9.66537 8.72659L5.9387 4.99992L9.66537 1.27325Z" fill="white"/></svg>
    </div>
    <div class=" alert alert-informative" role="alert">
        <div class="alert-text">  A simple informative alert is available</div>
        <svg  class="alert-cls-btn" data-bs-dismiss="alert"width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9.66537 1.27325L8.72537 0.333252L4.9987 4.05992L1.27203 0.333252L0.332031 1.27325L4.0587 4.99992L0.332031 8.72659L1.27203 9.66659L4.9987 5.93992L8.72537 9.66659L9.66537 8.72659L5.9387 4.99992L9.66537 1.27325Z" fill="white"/></svg>
    </div>
    <div class=" alert alert-error" role="alert">
        <div class="alert-text">  A simple error alert is available</div>
        <svg  class="alert-cls-btn" data-bs-dismiss="alert"width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9.66537 1.27325L8.72537 0.333252L4.9987 4.05992L1.27203 0.333252L0.332031 1.27325L4.0587 4.99992L0.332031 8.72659L1.27203 9.66659L4.9987 5.93992L8.72537 9.66659L9.66537 8.72659L5.9387 4.99992L9.66537 1.27325Z" fill="white"/></svg>
    </div>
  ``` 
  </div> 

  <div class="display-5 pt-md-8 pb-1">With icons</div>
  <p class="text-justify pe-md-8 pe-lg-11 pb-3">
    If you need to reinforce the type of alert, you can place an
    icon next to the text.
  </p>
  <div class="ax-example p-md-3 border text-center">
    <div class=" alert alert-confirmative" role="alert">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.9995 2C6.47951 2 1.99951 6.48 1.99951 12C1.99951 17.52 6.47951 22 11.9995 22C17.5195 22 21.9995 17.52 21.9995 12C21.9995 6.48 17.5195 2 11.9995 2ZM10.9995 17V11H12.9995V17H10.9995ZM10.9995 7V9H12.9995V7H10.9995Z" fill="white"/></svg>
        <div class="alert-text">  A simple confirmative alert with icons</div>
        <svg  class="alert-cls-btn" data-bs-dismiss="alert"width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9.66537 1.27325L8.72537 0.333252L4.9987 4.05992L1.27203 0.333252L0.332031 1.27325L4.0587 4.99992L0.332031 8.72659L1.27203 9.66659L4.9987 5.93992L8.72537 9.66659L9.66537 8.72659L5.9387 4.99992L9.66537 1.27325Z" fill="white"/></svg>
    </div>
    <div class=" alert alert-informative" role="alert">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.99951 12C1.99951 6.48 6.47951 2 11.9995 2C17.5195 2 21.9995 6.48 21.9995 12C21.9995 17.52 17.5195 22 11.9995 22C6.47951 22 1.99951 17.52 1.99951 12ZM4.99951 12L9.99951 17L18.9995 8L17.5895 6.58L9.99951 14.17L6.40951 10.59L4.99951 12Z" fill="white"/></svg>
        <div class="alert-text">  A simple informative alert with icons</div>
        <svg  class="alert-cls-btn" data-bs-dismiss="alert"width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9.66537 1.27325L8.72537 0.333252L4.9987 4.05992L1.27203 0.333252L0.332031 1.27325L4.0587 4.99992L0.332031 8.72659L1.27203 9.66659L4.9987 5.93992L8.72537 9.66659L9.66537 8.72659L5.9387 4.99992L9.66537 1.27325Z" fill="white"/></svg>
    </div>
    <div class=" alert alert-error" role="alert">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.99951 6.10352e-05C4.47951 6.10352e-05 -0.000488281 4.48006 -0.000488281 10.0001C-0.000488281 15.5201 4.47951 20.0001 9.99951 20.0001C15.5195 20.0001 19.9995 15.5201 19.9995 10.0001C19.9995 4.48006 15.5195 6.10352e-05 9.99951 6.10352e-05ZM10.9995 15.0001H8.99951V13.0001H10.9995V15.0001ZM10.9995 11.0001H8.99951V5.00006H10.9995V11.0001Z" fill="white"/></svg>
        <div class="alert-text">  A simple error alert with icons</div>
        <svg  class="alert-cls-btn" data-bs-dismiss="alert"width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9.66537 1.27325L8.72537 0.333252L4.9987 4.05992L1.27203 0.333252L0.332031 1.27325L4.0587 4.99992L0.332031 8.72659L1.27203 9.66659L4.9987 5.93992L8.72537 9.66659L9.66537 8.72659L5.9387 4.99992L9.66537 1.27325Z" fill="white"/></svg>
    </div>
  </div>
  <div class="pb-4">

  ```html 
  <div class=" alert alert-confirmative" role="alert">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.9995 2C6.47951 2 1.99951 6.48 1.99951 12C1.99951 17.52 6.47951 22 11.9995 22C17.5195 22 21.9995 17.52 21.9995 12C21.9995 6.48 17.5195 2 11.9995 2ZM10.9995 17V11H12.9995V17H10.9995ZM10.9995 7V9H12.9995V7H10.9995Z" fill="white"/></svg>
        <div class="alert-text">  A simple confirmative alert with icons</div>
        <svg  class="alert-cls-btn" data-bs-dismiss="alert"width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9.66537 1.27325L8.72537 0.333252L4.9987 4.05992L1.27203 0.333252L0.332031 1.27325L4.0587 4.99992L0.332031 8.72659L1.27203 9.66659L4.9987 5.93992L8.72537 9.66659L9.66537 8.72659L5.9387 4.99992L9.66537 1.27325Z" fill="white"/></svg>
    </div>
    <div class=" alert alert-informative" role="alert">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.99951 12C1.99951 6.48 6.47951 2 11.9995 2C17.5195 2 21.9995 6.48 21.9995 12C21.9995 17.52 17.5195 22 11.9995 22C6.47951 22 1.99951 17.52 1.99951 12ZM4.99951 12L9.99951 17L18.9995 8L17.5895 6.58L9.99951 14.17L6.40951 10.59L4.99951 12Z" fill="white"/></svg>
      <div class="alert-text">  A simple informative alert with icons</div>
        <svg  class="alert-cls-btn" data-bs-dismiss="alert"width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9.66537 1.27325L8.72537 0.333252L4.9987 4.05992L1.27203 0.333252L0.332031 1.27325L4.0587 4.99992L0.332031 8.72659L1.27203 9.66659L4.9987 5.93992L8.72537 9.66659L9.66537 8.72659L5.9387 4.99992L9.66537 1.27325Z" fill="white"/></svg>
    </div>
    <div class=" alert alert-error" role="alert">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.99951 6.10352e-05C4.47951 6.10352e-05 -0.000488281 4.48006 -0.000488281 10.0001C-0.000488281 15.5201 4.47951 20.0001 9.99951 20.0001C15.5195 20.0001 19.9995 15.5201 19.9995 10.0001C19.9995 4.48006 15.5195 6.10352e-05 9.99951 6.10352e-05ZM10.9995 15.0001H8.99951V13.0001H10.9995V15.0001ZM10.9995 11.0001H8.99951V5.00006H10.9995V11.0001Z" fill="white"/></svg>
      <div class="alert-text">  A simple error alert with icons</div>
        <svg  class="alert-cls-btn" data-bs-dismiss="alert"width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9.66537 1.27325L8.72537 0.333252L4.9987 4.05992L1.27203 0.333252L0.332031 1.27325L4.0587 4.99992L0.332031 8.72659L1.27203 9.66659L4.9987 5.93992L8.72537 9.66659L9.66537 8.72659L5.9387 4.99992L9.66537 1.27325Z" fill="white"/></svg>
    </div>
  ```
  </div> 

  <div class="display-5 pt-md-8 pb-1">With buttons</div>
  <p class="text-justify pe-md-8 pe-lg-11 pb-3">
    Alerts can contain a button to associate an action with the text
  </p>
  <div class="ax-example p-md-3 border text-center">
   <div class=" alert alert-confirmative" role="alert">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.9995 2C6.47951 2 1.99951 6.48 1.99951 12C1.99951 17.52 6.47951 22 11.9995 22C17.5195 22 21.9995 17.52 21.9995 12C21.9995 6.48 17.5195 2 11.9995 2ZM10.9995 17V11H12.9995V17H10.9995ZM10.9995 7V9H12.9995V7H10.9995Z" fill="white"/></svg>
        <div class="alert-text">  A simple confirmative alert with button</div>
        <button type="button" class="btn alert-button">
          button
        </button>
        <svg  class="alert-cls-btn" data-bs-dismiss="alert"width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9.66537 1.27325L8.72537 0.333252L4.9987 4.05992L1.27203 0.333252L0.332031 1.27325L4.0587 4.99992L0.332031 8.72659L1.27203 9.66659L4.9987 5.93992L8.72537 9.66659L9.66537 8.72659L5.9387 4.99992L9.66537 1.27325Z" fill="white"/></svg>
    </div>
    <div class=" alert alert-informative" role="alert">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.99951 12C1.99951 6.48 6.47951 2 11.9995 2C17.5195 2 21.9995 6.48 21.9995 12C21.9995 17.52 17.5195 22 11.9995 22C6.47951 22 1.99951 17.52 1.99951 12ZM4.99951 12L9.99951 17L18.9995 8L17.5895 6.58L9.99951 14.17L6.40951 10.59L4.99951 12Z" fill="white"/></svg>
        <div class="alert-text">  A simple informative alert with button</div>
        <button type="button" class="btn alert-button">
          button
        </button>
        <svg  class="alert-cls-btn" data-bs-dismiss="alert"width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9.66537 1.27325L8.72537 0.333252L4.9987 4.05992L1.27203 0.333252L0.332031 1.27325L4.0587 4.99992L0.332031 8.72659L1.27203 9.66659L4.9987 5.93992L8.72537 9.66659L9.66537 8.72659L5.9387 4.99992L9.66537 1.27325Z" fill="white"/></svg>
    </div>
    <div class=" alert alert-error" role="alert">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.99951 6.10352e-05C4.47951 6.10352e-05 -0.000488281 4.48006 -0.000488281 10.0001C-0.000488281 15.5201 4.47951 20.0001 9.99951 20.0001C15.5195 20.0001 19.9995 15.5201 19.9995 10.0001C19.9995 4.48006 15.5195 6.10352e-05 9.99951 6.10352e-05ZM10.9995 15.0001H8.99951V13.0001H10.9995V15.0001ZM10.9995 11.0001H8.99951V5.00006H10.9995V11.0001Z" fill="white"/></svg>
        <div class="alert-text">  A simple error alert with button</div>
        <button type="button" class="btn alert-button">
          button
        </button>
        <svg  class="alert-cls-btn" data-bs-dismiss="alert"width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9.66537 1.27325L8.72537 0.333252L4.9987 4.05992L1.27203 0.333252L0.332031 1.27325L4.0587 4.99992L0.332031 8.72659L1.27203 9.66659L4.9987 5.93992L8.72537 9.66659L9.66537 8.72659L5.9387 4.99992L9.66537 1.27325Z" fill="white"/></svg>
    </div>
  </div>
  <div class="pb-4">

  ```html
   <div class=" alert alert-confirmative" role="alert">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.9995 2C6.47951 2 1.99951 6.48 1.99951 12C1.99951 17.52 6.47951 22 11.9995 22C17.5195 22 21.9995 17.52 21.9995 12C21.9995 6.48 17.5195 2 11.9995 2ZM10.9995 17V11H12.9995V17H10.9995ZM10.9995 7V9H12.9995V7H10.9995Z" fill="white"/></svg>
        <div class="alert-text">  A simple confirmative alert with button</div>
        <button type="button" class="btn alert-button">
          button
        </button>
        <svg  class="alert-cls-btn" data-bs-dismiss="alert"width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9.66537 1.27325L8.72537 0.333252L4.9987 4.05992L1.27203 0.333252L0.332031 1.27325L4.0587 4.99992L0.332031 8.72659L1.27203 9.66659L4.9987 5.93992L8.72537 9.66659L9.66537 8.72659L5.9387 4.99992L9.66537 1.27325Z" fill="white"/></svg>
    </div>
    <div class=" alert alert-informative" role="alert">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.99951 12C1.99951 6.48 6.47951 2 11.9995 2C17.5195 2 21.9995 6.48 21.9995 12C21.9995 17.52 17.5195 22 11.9995 22C6.47951 22 1.99951 17.52 1.99951 12ZM4.99951 12L9.99951 17L18.9995 8L17.5895 6.58L9.99951 14.17L6.40951 10.59L4.99951 12Z" fill="white"/></svg>
        <div class="alert-text">  A simple informative alert with button</div>
        <button type="button" class="btn alert-button">
          button
        </button>
        <svg  class="alert-cls-btn" data-bs-dismiss="alert"width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9.66537 1.27325L8.72537 0.333252L4.9987 4.05992L1.27203 0.333252L0.332031 1.27325L4.0587 4.99992L0.332031 8.72659L1.27203 9.66659L4.9987 5.93992L8.72537 9.66659L9.66537 8.72659L5.9387 4.99992L9.66537 1.27325Z" fill="white"/></svg>
    </div>
    <div class=" alert alert-error" role="alert">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.99951 6.10352e-05C4.47951 6.10352e-05 -0.000488281 4.48006 -0.000488281 10.0001C-0.000488281 15.5201 4.47951 20.0001 9.99951 20.0001C15.5195 20.0001 19.9995 15.5201 19.9995 10.0001C19.9995 4.48006 15.5195 6.10352e-05 9.99951 6.10352e-05ZM10.9995 15.0001H8.99951V13.0001H10.9995V15.0001ZM10.9995 11.0001H8.99951V5.00006H10.9995V11.0001Z" fill="white"/></svg>
        <div class="alert-text">  A simple error alert with button</div>
        <button type="button" class="btn alert-button">
          button
        </button>
        <svg  class="alert-cls-btn" data-bs-dismiss="alert"width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9.66537 1.27325L8.72537 0.333252L4.9987 4.05992L1.27203 0.333252L0.332031 1.27325L4.0587 4.99992L0.332031 8.72659L1.27203 9.66659L4.9987 5.93992L8.72537 9.66659L9.66537 8.72659L5.9387 4.99992L9.66537 1.27325Z" fill="white"/></svg>
    </div>
  ```
  </div>
  

  <!-- #endregion components_toast - examples - basic -->
  <!-- #region components_toast - examples - live -->
  <div class="h1 pb-1 text-capitalize">Live demo</div>
  <div class="ax-example p-md-8 border">
    <button type="button" class="btn btn-primary" id="liveAlertBtn">
      Show live Alert
    </button>
    <div  id="liveAlert"  style="z-index: 99; top: 105px; left: 0" class=" position-fixed  alert alert-confirmative  fade "  aria-live="assertive" aria-atomic="true" role="alert"  data-delay="7000">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.99951 12C1.99951 6.48 6.47951 2 11.9995 2C17.5195 2 21.9995 6.48 21.9995 12C21.9995 17.52 17.5195 22 11.9995 22C6.47951 22 1.99951 17.52 1.99951 12ZM4.99951 12L9.99951 17L18.9995 8L17.5895 6.58L9.99951 14.17L6.40951 10.59L4.99951 12Z" fill="white"/></svg>
        <div class="alert-text"> A new version of the design system lib will be available soon. Stay tuned! </div>
        <button type="button" class="btn alert-button">
          button
        </button>
        <svg  class="alert-cls-btn" data-bs-dismiss="alert"width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9.66537 1.27325L8.72537 0.333252L4.9987 4.05992L1.27203 0.333252L0.332031 1.27325L4.0587 4.99992L0.332031 8.72659L1.27203 9.66659L4.9987 5.93992L8.72537 9.66659L9.66537 8.72659L5.9387 4.99992L9.66537 1.27325Z" fill="white"/></svg>
    </div>
  </div>
    

  ```html
    <div  id="liveAlert"  style="z-index: 99; top: 0; left: 0" class=" position-fixed  alert alert-confirmative fade  "  aria-live="assertive" aria-atomic="true" role="alert"  data-delay="7000">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.99951 12C1.99951 6.48 6.47951 2 11.9995 2C17.5195 2 21.9995 6.48 21.9995 12C21.9995 17.52 17.5195 22 11.9995 22C6.47951 22 1.99951 17.52 1.99951 12ZM4.99951 12L9.99951 17L18.9995 8L17.5895 6.58L9.99951 14.17L6.40951 10.59L4.99951 12Z" fill="white"/></svg>
        <div class="alert-text"> A new version of the design system lib will be available soon. Stay tuned! </div>
        <button type="button" class="btn alert-button">
          button
        </button>
        <svg  class="alert-cls-btn" data-bs-dismiss="alert"width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9.66537 1.27325L8.72537 0.333252L4.9987 4.05992L1.27203 0.333252L0.332031 1.27325L4.0587 4.99992L0.332031 8.72659L1.27203 9.66659L4.9987 5.93992L8.72537 9.66659L9.66537 8.72659L5.9387 4.99992L9.66537 1.27325Z" fill="white"/></svg>
    </div>
     </div>

    <!-- script to add after loading axaDesignSystemLib js dependencie -->
      <script>
        //Live demo alert 
        var alertTrigger = document.getElementById('liveAlertBtn')
        var alertLiveExample = document.getElementById('liveAlert')
        if (alertTrigger) {
          alertTrigger.addEventListener('click', function () {
            var alert = new axalib.Alert(alertLiveExample)
            alert.show()
          })
        }
        </script> 

  ```
 
