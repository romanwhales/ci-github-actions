module.exports = {
    ci: {
      collect: {
        settings: {chromeFlags: '--no-sandbox'},
        staticDistDir: "./src"
      },
      upload: {
        target: 'temporary-public-storage',
      },
      assert: {
        preset: "lighthouse:no-pwa",
        assertions: {
            "csp-xss":"warn",
            "bf-cache":"warn",
            "categories:performance":["error",{minScore: 0.90}]
        }
      }
    },
  };