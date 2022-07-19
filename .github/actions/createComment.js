const { getOctokit, context } = require("@actions/github");

const octokit = getOctokit(process.env.GITHUB_TOKEN);

const action = context.payload.action;

octokit.rest.issues.createComment({
  owner: "taenykim",
  repo: "action-npm-test",
  issue_number: context.issue.number,
  body: action,
});
