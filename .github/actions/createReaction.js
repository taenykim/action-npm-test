const { getOctokit, context } = require("@actions/github");

const octokit = getOctokit(process.env.GITHUB_TOKEN);

octokit.rest.reactions.createForIssue({
  owner: "taenykim",
  repo: "action-npm-test",
  issue_number: context.issue.number,
  content: "laugh",
});

octokit.rest.issues.createComment({
  owner: "taenykim",
  repo: "action-npm-test",
  issue_number: context.issue.number,
  body: process.env.TEST_SECRET,
});
