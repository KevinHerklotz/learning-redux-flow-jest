module.exports = {
  "parser": "babel-eslint",
  "env": {
      "browser": true,
      "es6": true,
      "jest": true,
      "node": true,
  },
  "plugins": [
    "flowtype"
  ],
  "extends": "airbnb",
  "rules": {
      "max-len": ["error", {
        "code": 110,
        "tabWidth": 2,
        "ignoreUrls": true,
        "ignoreComments": true
      }],
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
  },
  "settings": {
    "flowtype": {
      "onlyFilesWithFlowAnnotation": false
    }
  }
};
