module.exports = {
    // config for a library is scoped under "dependency" key
    dependency: {
      platforms: {
        ios: {},
        android: {}, // projects are grouped into "platforms"
      },
      assets: ['./app/assets/fonts'], // stays the same
      // hooks are considered anti-pattern, please avoid them
      
    },
  };