module.exports = {
    ci: {
      collect: {
        settings: {chromeFlags: '--no-sandbox'},
        staticDistDir: "./dist"
      },
      upload: {
        target: 'temporary-public-storage',
      },
      assert: {
        preset: "lighthouse:no-pwa"
      }
    },
  };