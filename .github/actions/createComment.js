const { getOctokit, context } = require("@actions/github");

const octokit = getOctokit(process.env.GITHUB_TOKEN);

(async function () {
  const action = context.payload.action;

  const res = await octokit.rest.issues.listComments({
    owner: "taenykim",
    repo: "action-npm-test",
    issue_number: context.issue.number,
  });
  const a = res.data
    .filter((item) => {
      return item.user.login === `github-actions[bot]`;
    })
    .filter((item) => {
      return item.body.includes(`### 데모\n\n`);
    });

  console.log(a);
})();
// octokit.rest.issues.createComment({
//   owner: "taenykim",
//   repo: "action-npm-test",
//   issue_number: context.issue.number,
//   body: action,
// });
