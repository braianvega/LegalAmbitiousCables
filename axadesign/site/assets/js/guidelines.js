window.displayTechDoc = function displayTechDoc(section) {
  event.preventDefault();

  // Fix of the bug present in current version library
  document.getElementById(`selection_${section}-tech`) &&
    document
      .getElementById(`selection_${section}-tech`)
      .classList.add("active");
  document.getElementById(`selection_${section}-guidelines`) &&
    document
      .getElementById(`selection_${section}-guidelines`)
      .classList.remove("active");

  // Change the view of the page to design guidelines
  document.getElementById(`foundations_${section}-guidelines`).style.display =
    "none";
  document.getElementById(`foundations_${section}-tech`).style.display =
    "block";
};


function listenDownloadUIKIT() {
 
}

window.displayGuidelines = function displayGuidelines(section) {
  event.preventDefault();
  // Fix of the bug present in current version library
  document.getElementById(`selection_${section}-tech`) &&
    document
      .getElementById(`selection_${section}-tech`)
      .classList.remove("active");
  document.getElementById(`selection_${section}-guidelines`) &&
    document
      .getElementById(`selection_${section}-guidelines`)
      .classList.add("active");
  // Change the view of the page to design guidelines
  document.getElementById(`foundations_${section}-guidelines`) &&
    (document.getElementById(
      `foundations_${section}-guidelines`
    ).style.display = "block");
  document.getElementById(`foundations_${section}-tech`) &&
    (document.getElementById(`foundations_${section}-tech`).style.display =
      "none");

  // Get the queryParams to check if we are in preview mode
  if (
    navigator.userAgent.indexOf("MSIE") !== -1 ||
    !!document.documentMode === true
  ) {
    //IF IE > 10
    document.getElementById(`foundations_${section}-guidelines`).innerHTML = `
      <div class="mt-8">
        <p>This feature is not supported on IE 11. Please open the library in another browser.</p>
      </div>
      `;
  } else {
    let sectionGuidelines = document.getElementById(
      `body_${section}-guidelines`
    );

    if (!sectionGuidelines) {
      // Display spinner until the response is displayed
      document.getElementById(`foundations_${section}-guidelines`).innerHTML = `
        <div class="spinner-border text-primary mt-6" role="status" data-testid="spinner_loading">
          <span class="visually-hidden">Loading...</span>
        </div>
        `;

      const params = URLSearchParams
        ? new URLSearchParams(window.location.search)
        : null;
      const token = params ? params.get("token") : "notSupported";
      const documentId = params ? params.get("documentId") : "notSupported";

      // Get the data for the design guidelines section
      (token
        ? fetch(
            process.env.environment.includes("localhost")
              ? `${process.env.environment}/api/preview/${encodeURIComponent(
                  token
                )}/${documentId}`
              : `/api/preview/${encodeURIComponent(token)}/${documentId}`
          )
        :  (window.location.host == "localhost:1313") ? 
            fetch(`http://localhost:3001/api/getDesignLibComponentByUID/${section}`)
              : fetch(
              process.env.environment.includes("localhost")
                ? `${process.env.environment}/api/getDesignLibComponentByUID/${section}`
                : `/api/getDesignLibComponentByUID/${section}`
            )  
          )
        .then((response) => response.json())
        .then((response) => {
		 
          if (response) {
            let designGuidelines = response.html;

            // Insert the element in the virtual DOM of the page
            document.getElementById(
              `foundations_${section}-guidelines`
            ).innerHTML = `
          <div class="mt-6" id=${`body_${section}-guidelines`}>
            ${designGuidelines}
          </div>`; 
		  if (response.title)
		  document.getElementById('titlecomponent').innerHTML = response.title
			else
			document.getElementById('titlecomponent').innerHTML = response.uid.includes("-") ? response.uid.replaceAll("-", " ") : response.uid

            document.getElementById("uikit_download") &&
              document
                .getElementById("uikit_download")
                .addEventListener("click", listenDownloadUIKIT);
          } else {
            console.warn("an issue occured with the import of the content");
          }
        })
        .catch((error) => {
          console.error("error", error);
        });
    }
  }
};



