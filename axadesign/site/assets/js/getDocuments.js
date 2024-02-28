// DISPLAY CONTENT On LOAD
function displayContentOnLoad() {
    if (document.getElementById("foundations_download-the-ui-kit-guidelines")) {
      displayGuidelines("download-the-ui-kit");
    } else {
      // The logic is ready for the moment new sections will display their content on load
      return;
    }
  }
  
  function escapeQuotes(element) {
    return element.replace(/'/g, "%27");
  }
  
  function copyToClipboard() {
    const htmlButtonsArray = [
      ...document.getElementsByClassName("language-html"),
    ];
    htmlButtonsArray.map((element, index) => {
      let elementEscaped = escapeQuotes(element.textContent);
      let codeSnippets = element.innerHTML;
      element.innerHTML =
        `<a class="btn-copy d-flex" id="buttonCopy${index}" onclick="copyCode('${encodeURIComponent(
          elementEscaped
        )}', '${index}')">
        <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 13.6497C0.733333 13.6497 0.5 13.5497 0.3 13.3497C0.1 13.1497 0 12.9164 0 12.6497V2.59974H1V12.6497H8.9V13.6497H1ZM3 11.6497C2.73333 11.6497 2.5 11.5497 2.3 11.3497C2.1 11.1497 2 10.9164 2 10.6497V1.31641C2 1.04974 2.1 0.816406 2.3 0.616406C2.5 0.416406 2.73333 0.316406 3 0.316406H10.3333C10.6 0.316406 10.8333 0.416406 11.0333 0.616406C11.2333 0.816406 11.3333 1.04974 11.3333 1.31641V10.6497C11.3333 10.9164 11.2333 11.1497 11.0333 11.3497C10.8333 11.5497 10.6 11.6497 10.3333 11.6497H3ZM3 10.6497H10.3333V1.31641H3V10.6497ZM3 10.6497V1.31641V10.6497Z" fill="#00008F"/>
        </svg> COPY</a>
  ` + codeSnippets;
    });
  }
  
  function scrollToTop(item) {
    event.preventDefault();
    let bodyRect = document
        .getElementsByClassName("ax-overflow-height")[0]
        .getBoundingClientRect(),
      elemRect = item.getBoundingClientRect(),
      headerMenu = document
        .getElementById("navbar-desktop")
        .getBoundingClientRect(),
      offset =
        item.offsetTop -
        elemRect.top -
        bodyRect.top +
        (headerMenu.top !== 243 ? 220 : 0);
  
    //localStorage.setItem('navbarOffset', offset)
  
    window.location.replace(
      process.env.environment.includes("localhost")
        ? `${item.getAttribute("href")}`
        : `${item.getAttribute("href")}`
    );
  }
  
  // DISPLAY COMPONENT
  function displayComponents(response) {
    let sections = ["foundations", "forms", "components", "exemples"];
    let componentSectionHTML = [];
  
    // Get the data from overview
    let elementOverview = response.results.filter(function (document) {
      return document.uid == "-overview";
    });
  
    sections.map((section, indexSection) => {
      // Get the data from all sections
      let elementsection = response.results.filter(function (document) {
        return document.data.section == section;
      });
      elementsection.sort(function (a, b) {
        var textA = a.uid.toUpperCase();
        var textB = b.uid.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      });
  
      // Add to an array the elements to display in the navbar
      elementsection.map((element, index) => {
        if (index === 0) {
          componentSectionHTML.push(`
            <div class="position-relative">
                <h2 class="mt-8 card-title text-capitalize">${section}</h2>
                <p class="items-number">${elementsection.length} Items </p>
            </div>
  
            <p class="mt-3 col-12 col-md-8">
              ${
                elementOverview[0].data.description_section[indexSection] &&
                elementOverview[0].data.description_section[indexSection]
                  .description_text[0].text
              }
            </p>
            
            <div class="row">
  
              <div class="card  col-12 col-md-6 col-lg-4 mb-2" >
                <div class="shadowbox">
                  <a ${
                    process.env.environment.includes("localhost") || window.location.host == "localhost:1313"
                      ? `href="/${
                          section == "getting started"
                            ? "getting-started"
                            : section.toLowerCase()
                        }/${
                          element.uid === "-overview" ? "overview" : element.uid
                        }"`
                      : `href="/docs/${process.env.version}/${
                          section == "getting started"
                            ? "getting-started"
                            : section.toLowerCase()
                        }/${
                          element.uid == "-overview" ? "overview" : element.uid
                        }"`
                  }
                  >
                    <img src=${
                      element.data && element.data.img_theme.url
                    } class="component-img"/>
                  </a>
                <div class="card-body px-0">
                  <p><a class="text-capitalize text-bold" ${
                    process.env.environment.includes("localhost") || window.location.host == "localhost:1313"
                      ? `href="/${
                          section == "getting started"
                            ? "getting-started"
                            : section.toLowerCase()
                        }/${
                          element.uid === "-overview" ? "overview" : element.uid
                        }"`
                      : `href="/docs/${process.env.version}/${
                          section == "getting started"
                            ? "getting-started"
                            : section.toLowerCase()
                        }/${
                          element.uid == "-overview" ? "overview" : element.uid
                        }"`
                  }
                  >${
                    element.uid === "download-the-ui-kit"
                      ? "Download the UI Kit"
                      : element.data.page_title?.length > 0 ?  element.data.page_title[0].text  :element.uid.includes("-")
                      ? element.uid.replaceAll("-", " ")
                      : element.uid
                  }</a></p>
                </div>
                </div>
              </div>
          `);
        } else if (index == elementsection.length - 1) {
          componentSectionHTML.push(`
              <div class="card col-12 col-md-6 col-lg-4 mb-2" >
                <div class="shadowbox">
                  <a ${
                    process.env.environment.includes("localhost")
                      ? `href="/${
                          section == "getting started"
                            ? "getting-started"
                            : section.toLowerCase()
                        }/${
                          element.uid === "-overview" ? "overview" : element.uid
                        }"`
                      : `href="/docs/${process.env.version}/${
                          section == "getting started"
                            ? "getting-started"
                            : section.toLowerCase()
                        }/${
                          element.uid == "-overview" ? "overview" : element.uid
                        }"`
                  }
                  >
                    <img src=${
                      element.data && element.data.img_theme.url
                    } class="component-img"/>
                  </a>
                <div class="card-body px-0">
                  <p><a class="text-capitalize text-bold" ${
                    process.env.environment.includes("localhost")
                      ? `href="/${
                          section == "getting started"
                            ? "getting-started"
                            : section.toLowerCase()
                        }/${
                          element.uid === "-overview" ? "overview" : element.uid
                        }"`
                      : `href="/docs/${process.env.version}/${
                          section == "getting started"
                            ? "getting-started"
                            : section.toLowerCase()
                        }/${
                          element.uid == "-overview" ? "overview" : element.uid
                        }"`
                  }
                  >${
                    element.uid === "download-the-ui-kit"
                      ? "Download the UI Kit"
					  : element.data.page_title?.length > 0 ?  element.data.page_title[0].text  :element.uid.includes("-")
                      ? element.uid.replaceAll("-", " ")
                      : element.uid
                  }</a></p>
                </div>
                </div>
              </div>
            </div>`);
        } else {
          componentSectionHTML.push(`
              <div class="card  col-12 col-md-6 col-lg-4 mb-2" >
                <div class="shadowbox">
                  <a ${
                    process.env.environment.includes("localhost")
                      ? `href="/${
                          section == "getting started"
                            ? "getting-started"
                            : section.toLowerCase()
                        }/${
                          element.uid === "-overview" ? "overview" : element.uid
                        }"`
                      : `href="/docs/${process.env.version}/${
                          section == "getting started"
                            ? "getting-started"
                            : section.toLowerCase()
                        }/${
                          element.uid == "-overview" ? "overview" : element.uid
                        }"`
                  }
                  >
                    <img src=${
                      element.data && element.data.img_theme.url
                    } class="component-img"/>
                  </a>
                  <div class="card-body px-0">
                    <p><a class="text-capitalize" ${
                      process.env.environment.includes("localhost")
                        ? `href="/${
                            section == "getting started"
                              ? "getting-started"
                              : section.toLowerCase()
                          }/${
                            element.uid === "-overview" ? "overview" : element.uid
                          }"`
                        : `href="/docs/${process.env.version}/${
                            section == "getting started"
                              ? "getting-started"
                              : section.toLowerCase()
                          }/${
                            element.uid == "-overview" ? "overview" : element.uid
                          }"`
                    }
                    >${
                      element.uid === "download-the-ui-kit"
                        ? "Download the UI Kit"
						: element.data.page_title?.length > 0 ?  element.data.page_title[0].text  :element.uid.includes("-")
                        ? element.uid.replaceAll("-", " ")
                        : element.uid
                    }</a></p>
                  </div>
                </div>
              </div>`);
        }
      });
  
      document.getElementsByClassName(
        "background-overview"
      )[0].style.backgroundImage = `url(${elementOverview[0].data.img_theme.url})`;
      document.getElementsByClassName(
        "lead"
      )[0].innerHTML = `<p>${elementOverview[0].data.body[0].items[0].paragraph[0].text}</p>`;
      document.getElementById("component-page-container").innerHTML =
        componentSectionHTML.join(" ");
    });
  }
  
  function displayDataNavbar(response) {
    let sections = ["getting started", "foundations", "forms", "components"];
    let navbarHtml = [];

	
  
    // Get all the sections proposed in prismic
    response.results.map((document) => {
      if (
        !sections.includes(
          document.data.section ? document.data.section : "getting started"
        )
      ) {
        sections.push(
          document.data.section ? document.data.section : "getting started"
        );
      }
    });
  
    // Create an array of sections by element
    sections.map((section) => {
      let elementsection = response.results.filter(function (document) {
        return document.data.section == section;
      });
  
      elementsection.sort(function (a, b) {
        var textA = a.uid.toUpperCase();
        var textB = b.uid.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      });
	   
      // Add to an array the elements to display in the navbar
      elementsection.map((element, index) => {
        // Desktop
        navbarHtml.push(`
          ${
            index == 0
              ? "<div class='pt-4 ps-4 text-muted h5'>" + section + "</div>"
              : ""
          }
          <a
            class="nav-link component-doc text-capitalize ${
              window.location.pathname.includes(
                (section == "getting started" ? "getting-started" : section) +
                  "/" +
                  (element.uid === "-overview" ? "overview" : element.uid) +
                  "/"
              ) && "active"
            }" id="nav_${element.uid}" 
            ${
  
              (window.location.host == "localhost:1313") ?  
               process.env.environment.includes("localhost")
              ? `href="/${
                  section == "getting started" ? "getting-started" : section
                }/${element.uid === "-overview" ? "overview" : element.uid}"`
              : `href="/${
                  section == "getting started" ? "getting-started" : section
                }/${element.uid === "-overview" ? "overview" : element.uid}"` 
  
              :
                process.env.environment.includes("localhost")
                ? `href="/${
                    section == "getting started" ? "getting-started" : section
                  }/${element.uid === "-overview" ? "overview" : element.uid}"`
                : `href="/docs/${process.env.version}/${
                    section == "getting started" ? "getting-started" : section
                  }/${element.uid === "-overview" ? "overview" : element.uid}"`
            }
            >
            ${
              element.uid === "download-the-ui-kit"
                ? "Download the UI Kit"
                : element.data.page_title?.length > 0 ?  element.data.page_title[0].text  :element.uid.includes("-")
                ? element.uid.replaceAll("-", " ")
                : element.uid
            }
          </a>
        `);
      });
    });
  
    document.getElementById("navbar-desktop").innerHTML = navbarHtml.join(" ");
    document.getElementById("dropdown-menu-documentation").innerHTML =
      navbarHtml.join(" ");
    document.getElementById("component-page-container") &&
      displayComponents(response);
    let parentDOM = document.getElementById("navbar-desktop");
    let collection = parentDOM.getElementsByClassName("component-doc");
    arrayNavbar = [...collection];
    arrayNavbar.map((item) => {
      item.addEventListener("click", () => scrollToTop(item));
    });
    /*
    const scroll = () => {
      const offset = localStorage.getItem('navbarOffset')
      offset && document.getElementsByClassName('ax-overflow-height')[0].scrollTo(0, offset)
    }
   // setTimeout(scroll(), 50) */
  }
  
  window.onload = function getAllDocuments() { 
    displayContentOnLoad();
    copyToClipboard();  
    initCopy();
    if (window.location.host == "localhost:1313") { 
      fetch(`http://localhost:3001/api/component/design_guidelines`)
        .then((response) => response.json())
        .then((response) => {
          // Save in localStorage with expiration
          const now = new Date();
          const item = {
            value: response,
            expiry: now.getTime() + 3600, // 24h
          };
          localStorage.setItem("navbarData", JSON.stringify(item));
          displayDataNavbar(response);
        });
    } else {
      fetch(
        process.env.environment.includes("localhost") ||
          process.env.environment.includes("designsystem.axa.com")
          ? `${process.env.environment}/api/component/design_guidelines`
          : `/api/component/design_guidelines`
      )
        .then((response) => response.json())
        .then((response) => {
          // Save in localStorage with expiration
          const now = new Date();
          const item = {
            value: response,
            expiry: now.getTime() + 3600, // 24h
          };
          localStorage.setItem("navbarData", JSON.stringify(item));
          displayDataNavbar(response);
        });
    }
  };
  
  function initCopy() {
    Array.from(document.querySelectorAll("[id^=buttonCopy]")).map(
      (element, index) =>
        (element.innerHTML = `<svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 13.6497C0.733333 13.6497 0.5 13.5497 0.3 13.3497C0.1 13.1497 0 12.9164 0 12.6497V2.59974H1V12.6497H8.9V13.6497H1ZM3 11.6497C2.73333 11.6497 2.5 11.5497 2.3 11.3497C2.1 11.1497 2 10.9164 2 10.6497V1.31641C2 1.04974 2.1 0.816406 2.3 0.616406C2.5 0.416406 2.73333 0.316406 3 0.316406H10.3333C10.6 0.316406 10.8333 0.416406 11.0333 0.616406C11.2333 0.816406 11.3333 1.04974 11.3333 1.31641V10.6497C11.3333 10.9164 11.2333 11.1497 11.0333 11.3497C10.8333 11.5497 10.6 11.6497 10.3333 11.6497H3ZM3 10.6497H10.3333V1.31641H3V10.6497ZM3 10.6497V1.31641V10.6497Z" fill="#00008F"/>
      </svg> COPY`)
    );
    window.copyCode = function copyCode(text) {
      initCopy();
      event.target.innerHTML = '<i class="icon-done"></i> COPIED!';
      let input = document.body.appendChild(document.createElement("input"));
      let textDecoded = decodeURIComponent(text);
      let textUnescaped = textDecoded.replaceAll("%27", "'");
      console.log(textUnescaped);
      input.value = textUnescaped;
      input.select();
      document.execCommand("copy");
      input.parentNode.removeChild(input);
    };
  }
  