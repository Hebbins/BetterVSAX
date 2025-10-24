# Better VSA X

A simple, lightweight Chrome extension to add quality-of-life features to the Kaseya VSA X platform. This extension is designed to be minimal and only run on `*.vsax.net` domains.

## ✨ Features

* **Status Colours:** Automatically colors the status text and computer icon for all agents in the device list.
    * `Online`: **Green** text and **green** icon.
    * `Offline`: **Red** text and default (blue) icon.
* **Auto Join Modal Close:** Automatically detects and closes the "Join" modal popup after a 4-second delay, allowing you to see the machine list without interruption.
* **Toggle Menu:** All features can be individually toggled on or off from the extension's popup menu. Your preferences are saved automatically.



---

## 🚀 Installation

Since this extension is not (yet) on the Chrome Web Store, you must install it manually.

1.  **Download the Extension**
    * Go to the [**Releases Page**](https://github.com/Hebbins/BetterVSAX/releases) of this repository.
    * Download the latest `.crx` file (e.g., `BetterVSAX-1.X.crx`) from the assets.

2.  **Open Chrome Extensions Page**
    * Open a new tab in your Chrome browser.
    * Type `chrome://extensions` in the address bar and press **Enter**.

3.  **Enable Developer Mode**
    * In the top-right corner of the extensions page, find the **Developer mode** toggle and switch it **ON**.

    

4.  **Drag and Drop to Install**
    * Find the `.crx` file you downloaded (e.g., in your `Downloads` folder).
    * **Drag** the `.crx` file and **drop** it anywhere onto the `chrome://extensions` page.

5.  **Confirm Installation**
    * A popup will appear asking for permission to "Add 'Better VSA X'".
    * Click the **Add extension** button.

The extension is now installed! You can turn Developer mode back off. The extension will automatically update itself from this GitHub repository.

---

## ⚙️ How to Use

Using the extension is automatic, but you can easily manage its features.

1.  Log in to your VSA X instance (any site ending in `.vsax.net`). The features will be active immediately.
2.  To change settings, click the **puzzle piece icon (🧩)** in your Chrome toolbar to see your list of extensions.
3.  Click on **"Better VSA X"** to open the popup menu.
4.  Use the toggles to turn "Status Colours" or "Auto Join Modal Close" on or off. Your preferences are saved instantly.

---

## 🐞 Bug Reports & Feature Requests

If you find a bug, the auto-closer stops working, or you have an idea for a new feature, please [**open an issue**](https://github.com/Hebbins/BetterVSAX/issues) on this repository.
