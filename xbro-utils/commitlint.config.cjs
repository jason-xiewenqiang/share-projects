module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['bug', 'feat', 'refactor', 'docs', 'style']],
  },
};
