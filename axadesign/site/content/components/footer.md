---
layout: components
title: Footer
description: Examples and usage guidelines for the footer, layout options, and custom components for mobile version.
section: Components
bootstrapRef:
menuSlug: footer
---

 
<div class="display-5 pt-md-8 pb-1">AXA Footer</div>
<p class="text-justify pe-md-8 pe-lg-11 pb-3">
	The footer is an important component of AXA design system . It is designed to be responsive, brand compliant, and easy to implement. This documentation will outline the different elements of the footer, there are two variations of the footer, one with a quick access section.
</p>


<h2>Footer Features </h2>

<p class="text-justify pe-md-8 pe-lg-11 ">
	<b>Responsive design:</b> The footer is designed to be responsive, ensuring that it looks great on all screen sizes. The CSS styling uses media queries and flexbox to achieve this. As a result, the footer is easily accessible on desktop and mobile devices.
</p>

<p class="text-justify pe-md-8 pe-lg-11">
	<b>Brand compliant:</b> The footer design is compliant with AXA brand guidelines, ensuring consistency with the rest of the website. The background color, font family, and font size are all chosen to match the brand's style.
</p>

<p class="text-justify pe-md-8 pe-lg-11">
	<b>Easy to implement:</b> The HTML structure and CSS styling for the footer are straightforward and easy to implement. Developers can copy and paste the code into their website and make minor changes to match their design requirements.
</p>
<p class="text-justify pe-md-8 pe-lg-11">
	<b>Navigation links:</b> The footer contains a set of links, making it easy for users to navigate the website. The links are structured using an unordered list and list items, which makes them easy to style and maintain.
</p>
<p class="text-justify pe-md-8 pe-lg-11">
	<b>Social media icons:</b> The footer also contains a set of social media icons, allowing users to connect with AXA assurance on social media platforms. The icons are styled using font awesome, which is a popular library for adding icons to websites.
</p>


<h2 class="my-5	">Footer First variation </h2>

<div class="footer-container" >
	<div class="row mx-0 footer-body">
		<div class="col footer-col">
			<p>About AXA ?</p>
			<ul>
				<li>Who are we ?</li>
				<li>Help & Contact</li>
				<li>Configuration and security</li>
				<li>Axa on the Internet</li>
				<li>Personal Data</li>
			</ul>
		</div>
		<div class="col footer-col">
		<p>AXA & YOU</p>
			<ul>
				<li>Emergency Services</li>
				<li>Find an Agent</li>
				<li>Legals</li>
				<li>Axa on the Internet</li>
				<li>Find an Agent</li>
			</ul>
		</div>
		<div class="col footer-col">
			<p>Our other Products</p>
			<ul>
				<li>Online car insurance</li>
				<li>Young driver insurance</li>
				<li>Temporary insurance</li>
				<li>Axa on the Internet</li>
				<li>Personal Data</li>
			</ul> 
		</div>
		<div class="col footer-col">
			<p>Follow AXA</p>
			<ul class="icons">
				<li><img alt="fb" src="../../images/facebook.svg" /></li>
				<li><img alt="in" src="../../images/linkedin.svg" /></li>
				<li><img alt="ig" src="../../images/instagram.svg" /></li>
				<li><img alt="fb" src="../../images/youtube.svg" /></li>
				<li><img alt="fb" src="../../images/twitter.svg" /></li>
			</ul>
		</div>
	</div> 
	<div class="footer-body-mobile">
		<div>
			<ul class="icons">
				<li><img alt="fb" src="../../images/facebook.svg" /></li>
				<li><img alt="in" src="../../images/linkedin.svg" /></li>
				<li><img alt="ig" src="../../images/instagram.svg" /></li>
				<li><img alt="fb" src="../../images/youtube.svg" /></li>
				<li><img alt="fb" src="../../images/twitter.svg" /></li>
			</ul>
		</div>
		<div class="accordion">
			<div class="accordion-item">
				<h2 class="accordion-header" > 
					<button class="btn accordion-button collapsed" type="button"
						data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true"
						aria-controls="collapseTwo"> About AXA ?</button> 
				</h2>
				<div id="collapseTwo" class="accordion-collapse collapse"  >
					<div class="accordion-body"> 
						<ul>
							<li>Who are we ?</li>
							<li>Help & Contact</li>
							<li>Configuration and security</li>
							<li>Axa on the Internet</li>
							<li>Personal Data</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="accordion-item">
				<h2 class="accordion-header" > 
					<button class="btn accordion-button collapsed" type="button"
						data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
						aria-controls="collapseOne"> AXA & YOU </button> 
				</h2>
				<div id="collapseOne" class="accordion-collapse collapse"  >
					<div class="accordion-body"> 
						<ul>
							<li>Emergency Services</li>
							<li>Find an Agent</li>
							<li>Legals</li>
							<li>Axa on the Internet</li>
							<li>Find an Agent</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="accordion-item">
				<h2 class="accordion-header" > 
					<button class="btn accordion-button collapsed" type="button"
						data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true"
						aria-controls="collapseThree"> Our other Products</button> 
				</h2>
				<div id="collapseThree" class="accordion-collapse collapse"  >
					<div class="accordion-body"> 
						<ul>
							<li>Online car insurance</li>
							<li>Young driver insurance</li>
							<li>Temporary insurance</li>
							<li>Axa on the Internet</li>
							<li>Personal Data</li>
						</ul>
					</div>
				</div>
			</div>  
		</div>
	</div> 
	<div class="footer">
		<div class="row footer-bar">
			<div class="col lang-selector-container">
				<div class="lang-selector">
					<img alt="world" src="../../images/world.svg" />
					<select>
						<option>English</option>
						<option>French</option>
					</select>
				</div>
			</div>
			<div class="col d-flex align-items-center justify-content-end">
				<p>Policy Privacy © 2023 AXA All Rights Reserved</p>
			</div>	
		</div>		
	</div>
</div>

```html 
<div class="footer-container" >
	<div class="row mx-0 footer-body">
		<div class="col footer-col">
			<p>About AXA ?</p>
			<ul>
				<li>Who are we ?</li>
				<li>Help & Contact</li>
				<li>Configuration and security</li>
				<li>Axa on the Internet</li>
				<li>Personal Data</li>
			</ul>
		</div>
		<div class="col footer-col">
		<p>AXA & YOU</p>
			<ul>
				<li>Emergency Services</li>
				<li>Find an Agent</li>
				<li>Legals</li>
				<li>Axa on the Internet</li>
				<li>Find an Agent</li>
			</ul>
		</div>
		<div class="col footer-col">
			<p>Our other Products</p>
			<ul>
				<li>Online car insurance</li>
				<li>Young driver insurance</li>
				<li>Temporary insurance</li>
				<li>Axa on the Internet</li>
				<li>Personal Data</li>
			</ul> 
		</div>
		<div class="col footer-col">
			<p>Follow AXA</p>
			<ul class="icons">
				<li><img alt="fb" src="../../images/facebook.svg" /></li>
				<li><img alt="in" src="../../images/linkedin.svg" /></li>
				<li><img alt="ig" src="../../images/instagram.svg" /></li>
				<li><img alt="fb" src="../../images/youtube.svg" /></li>
				<li><img alt="fb" src="../../images/twitter.svg" /></li>
			</ul>
		</div>
	</div> 
	<div class="footer-body-mobile">
		<div>
			<ul class="icons">
				<li><img alt="fb" src="../../images/facebook.svg" /></li>
				<li><img alt="in" src="../../images/linkedin.svg" /></li>
				<li><img alt="ig" src="../../images/instagram.svg" /></li>
				<li><img alt="fb" src="../../images/youtube.svg" /></li>
				<li><img alt="fb" src="../../images/twitter.svg" /></li>
			</ul>
		</div>
		<div class="accordion">
			<div class="accordion-item">
				<h2 class="accordion-header" > 
					<button class="btn accordion-button collapsed" type="button"
						data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true"
						aria-controls="collapseTwo"> About AXA ?</button> 
				</h2>
				<div id="collapseTwo" class="accordion-collapse collapse"  >
					<div class="accordion-body"> 
						<ul>
							<li>Who are we ?</li>
							<li>Help & Contact</li>
							<li>Configuration and security</li>
							<li>Axa on the Internet</li>
							<li>Personal Data</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="accordion-item">
				<h2 class="accordion-header" > 
					<button class="btn accordion-button collapsed" type="button"
						data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
						aria-controls="collapseOne"> AXA & YOU </button> 
				</h2>
				<div id="collapseOne" class="accordion-collapse collapse"  >
					<div class="accordion-body"> 
						<ul>
							<li>Emergency Services</li>
							<li>Find an Agent</li>
							<li>Legals</li>
							<li>Axa on the Internet</li>
							<li>Find an Agent</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="accordion-item">
				<h2 class="accordion-header" > 
					<button class="btn accordion-button collapsed" type="button"
						data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true"
						aria-controls="collapseThree"> Our other Products</button> 
				</h2>
				<div id="collapseThree" class="accordion-collapse collapse"  >
					<div class="accordion-body"> 
						<ul>
							<li>Online car insurance</li>
							<li>Young driver insurance</li>
							<li>Temporary insurance</li>
							<li>Axa on the Internet</li>
							<li>Personal Data</li>
						</ul>
					</div>
				</div>
			</div>  
		</div>
	</div> 
	<div class="footer">
		<div class="row footer-bar">
			<div class="col lang-selector-container">
				<div class="lang-selector">
					<img alt="world" src="../../images/world.svg" />
					<select>
						<option>English</option>
						<option>French</option>
					</select>
				</div>
			</div>
			<div class="col d-flex align-items-center justify-content-end">
				<p>Policy Privacy © 2023 AXA All Rights Reserved</p>
			</div>	
		</div>		
	</div>
</div>

```


<h2 class="mt-5	">Footer Second variation </h2>

<p class="text-justify pe-md-8 pe-lg-11 pb-3">
	Quick access section: The second variation of the footer includes a quick access section that allows users to quickly access essential pages on the website. The quick access section contains links to the FAQ page, contact us page, and privacy policy page. This section is useful for users who want to quickly find information about the website without having to navigate through multiple pages.
</p>

<div class="footer-container" >
	<div class="row mx-0 footer-body">
		<div class="col footer-col">
			<p>About AXA ?</p>
			<ul>
				<li>Who are we ?</li>
				<li>Help & Contact</li>
				<li>Configuration and security</li>
				<li>Axa on the Internet</li>
				<li>Personal Data</li>
			</ul>
		</div>
		<div class="col footer-col">
		<p>AXA & YOU</p>
			<ul>
				<li>Emergency Services</li>
				<li>Find an Agent</li>
				<li>Legals</li>
				<li>Axa on the Internet</li>
				<li>Find an Agent</li>
			</ul>
		</div>
		<div class="col footer-col">
			<p>Our other Products</p>
			<ul>
				<li>Online car insurance</li>
				<li>Young driver insurance</li>
				<li>Temporary insurance</li>
				<li>Axa on the Internet</li>
				<li>Personal Data</li>
			</ul> 
		</div>
		<div class="col footer-col">
			<p>AXA & YOU</p>
			<ul>
				<li>Emergency Services</li>
				<li>Find an Agent</li>
				<li>Legals</li>
				<li>Axa on the Internet</li>
				<li>Find an Agent</li>
			</ul>
		</div>
	</div> 
	<div class="footer-body-mobile">
		<div>
			<ul class="icons">
				<li><img alt="fb" src="../../images/facebook.svg" /></li>
				<li><img alt="in" src="../../images/linkedin.svg" /></li>
				<li><img alt="ig" src="../../images/instagram.svg" /></li>
				<li><img alt="fb" src="../../images/youtube.svg" /></li>
				<li><img alt="fb" src="../../images/twitter.svg" /></li>
			</ul>
		</div>
		<div class="accordion">
			<div class="accordion-item">
				<h2 class="accordion-header" > 
					<button class="btn accordion-button collapsed" type="button"
						data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true"
						aria-controls="collapseTwo"> About AXA ?</button> 
				</h2>
				<div id="collapseTwo" class="accordion-collapse collapse"  >
					<div class="accordion-body"> 
						<ul>
							<li>Who are we ?</li>
							<li>Help & Contact</li>
							<li>Configuration and security</li>
							<li>Axa on the Internet</li>
							<li>Personal Data</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="accordion-item">
				<h2 class="accordion-header" > 
					<button class="btn accordion-button collapsed" type="button"
						data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
						aria-controls="collapseOne"> AXA & YOU </button> 
				</h2>
				<div id="collapseOne" class="accordion-collapse collapse"  >
					<div class="accordion-body"> 
						<ul>
							<li>Emergency Services</li>
							<li>Find an Agent</li>
							<li>Legals</li>
							<li>Axa on the Internet</li>
							<li>Find an Agent</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="accordion-item">
				<h2 class="accordion-header" > 
					<button class="btn accordion-button collapsed" type="button"
						data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true"
						aria-controls="collapseThree"> Our other Products</button> 
				</h2>
				<div id="collapseThree" class="accordion-collapse collapse"  >
					<div class="accordion-body"> 
						<ul>
							<li>Online car insurance</li>
							<li>Young driver insurance</li>
							<li>Temporary insurance</li>
							<li>Axa on the Internet</li>
							<li>Personal Data</li>
						</ul>
					</div>
				</div>
			</div> 
			<div class="quick-access">
				<div class="quick-container">
					<div class="row">
						<div class="col">
							<div class="d-flex align-items-center">
								<p>ACCESS DIRECT : </p>
								<ul>
									<li>Who are we ? </li>
									<li>Claim</li>
									<li>Contact us</li>
									<li>Site Map</li>
									<li>Lexicon</li>
								</ul>
							</div>
						</div>
						<div class="col">
							<div class="d-flex align-items-center justify-content-center">
								<p>Follow AXA : </p>
								<ul class="icons">
									<li><img alt="fb" src="../../images/facebook.svg" /></li>
									<li><img alt="in" src="../../images/linkedin.svg" /></li>
									<li><img alt="ig" src="../../images/instagram.svg" /></li>
									<li><img alt="fb" src="../../images/youtube.svg" /></li>
									<li><img alt="fb" src="../../images/twitter.svg" /></li>
								</ul>
							</div>						
						</div>
					</div>
				</div>
			</div> 
		</div>
	</div>
	<div class="quick-access">
			<div class="quick-container">
				<div class="row access-direct">
					<div class="d-flex align-items-center">
						<p>ACCESS DIRECT : </p>
						<ul>
							<li>Who are we ? </li>
							<li>Claim</li>
							<li>Contact us</li>
							<li>Site Map</li>
							<li>Lexicon</li>
						</ul>
					</div>
				</div>
				<div class="row socials">
					<div class="d-flex align-items-center justify-content-center">
						<p>Follow AXA : </p>
						<ul class="icons">
							<li><img alt="fb" src="../../images/facebook.svg" /></li>
							<li><img alt="in" src="../../images/linkedin.svg" /></li>
							<li><img alt="ig" src="../../images/instagram.svg" /></li>
							<li><img alt="fb" src="../../images/youtube.svg" /></li>
							<li><img alt="fb" src="../../images/twitter.svg" /></li>
						</ul>
					</div>
				</div>
			</div> 
	</div>
	<div class="footer">
		<div class="row footer-bar">
			<div class="col lang-selector-container">
				<div class="lang-selector">
					<img alt="world" src="../../images/world.svg" />
					<select>
						<option>English</option>
						<option>French</option>
					</select>
				</div>
			</div>
			<div class="col d-flex align-items-center justify-content-end">
				<p>Policy Privacy © 2023 AXA All Rights Reserved</p>
			</div>	
		</div>		
	</div>
</div>

```html 
<div class="footer-container" >
	<div class="row mx-0 footer-body">
		<div class="col footer-col">
			<p>About AXA ?</p>
			<ul>
				<li>Who are we ?</li>
				<li>Help & Contact</li>
				<li>Configuration and security</li>
				<li>Axa on the Internet</li>
				<li>Personal Data</li>
			</ul>
		</div>
		<div class="col footer-col">
		<p>AXA & YOU</p>
			<ul>
				<li>Emergency Services</li>
				<li>Find an Agent</li>
				<li>Legals</li>
				<li>Axa on the Internet</li>
				<li>Find an Agent</li>
			</ul>
		</div>
		<div class="col footer-col">
			<p>Our other Products</p>
			<ul>
				<li>Online car insurance</li>
				<li>Young driver insurance</li>
				<li>Temporary insurance</li>
				<li>Axa on the Internet</li>
				<li>Personal Data</li>
			</ul> 
		</div>
		<div class="col footer-col">
			<p>AXA & YOU</p>
			<ul>
				<li>Emergency Services</li>
				<li>Find an Agent</li>
				<li>Legals</li>
				<li>Axa on the Internet</li>
				<li>Find an Agent</li>
			</ul>
		</div>
	</div> 
	<div class="footer-body-mobile">
		<div>
			<ul class="icons">
				<li><img alt="fb" src="../../images/facebook.svg" /></li>
				<li><img alt="in" src="../../images/linkedin.svg" /></li>
				<li><img alt="ig" src="../../images/instagram.svg" /></li>
				<li><img alt="fb" src="../../images/youtube.svg" /></li>
				<li><img alt="fb" src="../../images/twitter.svg" /></li>
			</ul>
		</div>
		<div class="accordion">
			<div class="accordion-item">
				<h2 class="accordion-header" > 
					<button class="btn accordion-button collapsed" type="button"
						data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true"
						aria-controls="collapseTwo"> About AXA ?</button> 
				</h2>
				<div id="collapseTwo" class="accordion-collapse collapse"  >
					<div class="accordion-body"> 
						<ul>
							<li>Who are we ?</li>
							<li>Help & Contact</li>
							<li>Configuration and security</li>
							<li>Axa on the Internet</li>
							<li>Personal Data</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="accordion-item">
				<h2 class="accordion-header" > 
					<button class="btn accordion-button collapsed" type="button"
						data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
						aria-controls="collapseOne"> AXA & YOU </button> 
				</h2>
				<div id="collapseOne" class="accordion-collapse collapse"  >
					<div class="accordion-body"> 
						<ul>
							<li>Emergency Services</li>
							<li>Find an Agent</li>
							<li>Legals</li>
							<li>Axa on the Internet</li>
							<li>Find an Agent</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="accordion-item">
				<h2 class="accordion-header" > 
					<button class="btn accordion-button collapsed" type="button"
						data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true"
						aria-controls="collapseThree"> Our other Products</button> 
				</h2>
				<div id="collapseThree" class="accordion-collapse collapse"  >
					<div class="accordion-body"> 
						<ul>
							<li>Online car insurance</li>
							<li>Young driver insurance</li>
							<li>Temporary insurance</li>
							<li>Axa on the Internet</li>
							<li>Personal Data</li>
						</ul>
					</div>
				</div>
			</div> 
			<div class="quick-access">
				<div class="quick-container">
					<div class="row">
						<div class="col">
							<div class="d-flex align-items-center">
								<p>ACCESS DIRECT : </p>
								<ul>
									<li>Who are we ? </li>
									<li>Claim</li>
									<li>Contact us</li>
									<li>Site Map</li>
									<li>Lexicon</li>
								</ul>
							</div>
						</div>
						<div class="col">
							<div class="d-flex align-items-center justify-content-center">
								<p>Follow AXA : </p>
								<ul class="icons">
									<li><img alt="fb" src="../../images/facebook.svg" /></li>
									<li><img alt="in" src="../../images/linkedin.svg" /></li>
									<li><img alt="ig" src="../../images/instagram.svg" /></li>
									<li><img alt="fb" src="../../images/youtube.svg" /></li>
									<li><img alt="fb" src="../../images/twitter.svg" /></li>
								</ul>
							</div>						
						</div>
					</div>
				</div>
			</div> 
		</div>
	</div>
	<div class="quick-access">
			<div class="quick-container">
				<div class="row access-direct">
					<div class="d-flex align-items-center">
						<p>ACCESS DIRECT : </p>
						<ul>
							<li>Who are we ? </li>
							<li>Claim</li>
							<li>Contact us</li>
							<li>Site Map</li>
							<li>Lexicon</li>
						</ul>
					</div>
				</div>
				<div class="row socials">
					<div class="d-flex align-items-center justify-content-center">
						<p>Follow AXA : </p>
						<ul class="icons">
							<li><img alt="fb" src="../../images/facebook.svg" /></li>
							<li><img alt="in" src="../../images/linkedin.svg" /></li>
							<li><img alt="ig" src="../../images/instagram.svg" /></li>
							<li><img alt="fb" src="../../images/youtube.svg" /></li>
							<li><img alt="fb" src="../../images/twitter.svg" /></li>
						</ul>
					</div>
				</div>
			</div> 
	</div>
	<div class="footer">
		<div class="row footer-bar">
			<div class="col lang-selector-container">
				<div class="lang-selector">
					<img alt="world" src="../../images/world.svg" />
					<select>
						<option>English</option>
						<option>French</option>
					</select>
				</div>
			</div>
			<div class="col d-flex align-items-center justify-content-end">
				<p>Policy Privacy © 2023 AXA All Rights Reserved</p>
			</div>	
		</div>		
	</div>
</div>

```


<h2 class="mt-5	">Conclusion </h2>

<p class="text-justify pe-md-8 pe-lg-11 pb-3">
In conclusion, the footer is an essential component of the design system project . It is designed to be responsive, brand compliant, and easy to implement. The footer contains a set of links and social media icons, and the second variation includes a quick access section. Developers can use the code snippet provided to quickly and easily add the footer to their website. Overall, the footer enhances the user experience by providing easy navigation and access to essential information.
</p>