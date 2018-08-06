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
      "react/jsx-one-expression-per-line": 0,
      "react/destructuring-assignment": 0, // I don't like this rule for readability resaons
      "react/prefer-stateless-function": 0,
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "flowtype/define-flow-type": 1,
      "flowtype/use-flow-type": 1
  },
  "settings": {
    "flowtype": {
      "onlyFilesWithFlowAnnotation": false
    }
  }
};
