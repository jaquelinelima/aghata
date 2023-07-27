module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "prettier",
    "plugin:vue/vue3-essential"
  ],
  rules:{
    'no-alert': 'off',
    'no-shadow': 'off',
    'global-require': 0,
    'no-unresolved': 'off',
    'no-unused-vars': 'off',
    'prefer-template': 'off',
    'no-empty-function': 'off',
    'import/no-unresolved': 'off',
    'no-unused-expressions': 'off',
    'vue/no-unused-components': 'off',
    'vue/multi-word-component-names': 0,
    "vue/no-unused-vars": "error",'max-len': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
}