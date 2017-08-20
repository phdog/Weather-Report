module.exports = {
    "env": {
        "es6": true,
        "node": true,
        "browser": true
    },
    "extends": "eslint:recommended",
    "plugins": [
      "react"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "sourceType": "module",
        "ecmaVerison": 8
    },
    "rules": {
        "no-console": "off",
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "warn",
            "single"
        ]
    }
};
