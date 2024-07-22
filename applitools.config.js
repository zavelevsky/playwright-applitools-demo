module.exports = {
  testConcurrency: 1,
  apiKey: "YOUR_APPLITOOLS_API_KEY",
  browser: [
    // Add browsers with different viewports
    { width: 1200, height: 800, name: "chrome" },
    { width: 1600, height: 1200, name: "firefox" },
    { width: 1024, height: 768, name: "safari" },
    // Add mobile emulation devices in Portrait mode
    { deviceName: "iPhone X", screenOrientation: "portrait" },
    { deviceName: "Pixel 2", screenOrientation: "portrait" },
  ],
  // set batch name to the configuration
  batchName: "Playwright Applitools Demo",
};
