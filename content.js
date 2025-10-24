/* =================================================================
   CONFIGURATION & SETTINGS
   ================================================================= */

// We will store the user's preferences here
let settings = {
  statusColorEnabled: true,
  modalCloseEnabled: true
};

// Immediately load settings from storage.
// This is asynchronous, so we put all our logic inside.
chrome.storage.sync.get(['statusColorEnabled', 'modalCloseEnabled'], (result) => {
  // Use saved settings, or default to 'true' (on)
  settings.statusColorEnabled = result.statusColorEnabled ?? true;
  settings.modalCloseEnabled = result.modalCloseEnabled ?? true;

  // Now that settings are loaded, we can set up the observer
  // and run the functions for the first time.
  
  initializeObserver();
  runAllEnabledFunctions();
});


/* =================================================================
   FEATURE FUNCTIONS
   ================================================================= */

// This function finds all rows and applies the correct color
function colorizeStatusesAndIcons() {
  const rows = document.querySelectorAll('mat-row.cdk-row');
  rows.forEach(row => {
    const statusCell = row.querySelector('.mat-column-1___3');
    const iconElement = row.querySelector('i.system-icon');
    if (!statusCell || !iconElement) return;

    const statusText = statusCell.textContent.trim();

    if (statusText === "Online") {
      statusCell.style.color = "#28a745";
      statusCell.style.fontWeight = "bold";
      iconElement.style.color = "#28a745";
    } else if (statusText === "Offline") {
      statusCell.style.color = "#dc3545";
      statusCell.style.fontWeight = "bold";
      iconElement.style.color = "";
    } else {
      statusCell.style.color = "";
      statusCell.style.fontWeight = "";
      iconElement.style.color = "";
    }
  });
}

// This function checks for the modal and schedules it for closing.
function checkForAndCloseModal() {
  const modalSelector = "div[modal-render='true'].modal.fade.ng-isolate-scope.rd-launch-modal.in";
  const modal = document.querySelector(modalSelector);

  if (modal && !modal.dataset.isClosing) {
    modal.dataset.isClosing = 'true';
    console.log("Modal detected. Will attempt to close in 4 seconds.");

    setTimeout(() => {
      const closeButton = modal.querySelector("[ng-click='close()']");
      if (closeButton) {
        console.log("Clicking close button...");
        closeButton.click();
      } else {
        console.log("Modal was found, but the close button was not.");
      }
      if (modal) {
        modal.dataset.isClosing = 'false';
      }
    }, 4000); // 4 seconds
  }
}

/* =================================================================
   OBSERVER AND EXECUTION
   ================================================================= */

// This function runs all features that are currently enabled in settings
function runAllEnabledFunctions() {
  if (settings.statusColorEnabled) {
    colorizeStatusesAndIcons();
  }
  if (settings.modalCloseEnabled) {
    checkForAndCloseModal();
  }
}

// Set up a MutationObserver to watch for changes on the page.
function initializeObserver() {
  const observer = new MutationObserver(runAllEnabledFunctions);

  // Start observing the entire document body for changes.
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}