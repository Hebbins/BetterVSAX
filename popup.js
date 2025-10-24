document.addEventListener('DOMContentLoaded', () => {
  const statusColorToggle = document.getElementById('statusColorToggle');
  const modalCloseToggle = document.getElementById('modalCloseToggle');

  // Load saved settings, defaulting to 'true' (on) if not found
  chrome.storage.sync.get(['statusColorEnabled', 'modalCloseEnabled'], (result) => {
    statusColorToggle.checked = result.statusColorEnabled ?? true;
    modalCloseToggle.checked = result.modalCloseEnabled ?? true;
  });

  // Save setting when status color toggle is clicked
  statusColorToggle.addEventListener('change', () => {
    chrome.storage.sync.set({ statusColorEnabled: statusColorToggle.checked });
  });

  // Save setting when modal close toggle is clicked
  modalCloseToggle.addEventListener('change', () => {
    chrome.storage.sync.set({ modalCloseEnabled: modalCloseToggle.checked });
  });
});