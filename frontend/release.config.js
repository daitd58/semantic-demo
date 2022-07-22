const releaseConfig = {
  release: {
    branch: ["main"],
  },
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github",
    [
      "@semantic-release/changelog",
      {
        changelogFile: "docs/CHANGELOG.md",
      },
    ],
  ],
  extends: "semantic-release-monorepo",
};

module.exports = releaseConfig;
