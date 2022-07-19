const { getOctokit, context } = require("@actions/github");

const octokit = getOctokit(process.env.GITHUB_TOKEN);

const action = context.payload.action;

const res = await octokit.rest.issues.listComments({
  owner: "taenykim",
  repo: "action-npm-test",
  issue_number: context.issue.number,
});

console.log(res.data);

// octokit.rest.issues.createComment({
//   owner: "taenykim",
//   repo: "action-npm-test",
//   issue_number: context.issue.number,
//   body: action,
// });
