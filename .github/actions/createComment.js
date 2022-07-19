const { getOctokit, context } = require("@actions/github");

const octokit = getOctokit(process.env.GITHUB_TOKEN);

(async function () {
  const action = context.payload.action;

  const en = (
    await octokit.rest.issues.listComments({
      owner: "taenykim",
      repo: "action-npm-test",
      issue_number: context.issue.number,
    })
  ).data
    .filter((item) => {
      return item.user.login === `github-actions[bot]`;
    })
    .filter((item) => {
      console.log(item.body);
      return item.body.includes(`### 데모`);
    });

  const demoComment = en[0];
  const test = en[1];
  console.log(test, "test");

  octokit.rest.issues.updateComment({
    owner: "taenykim",
    repo: "action-npm-test",
    comment_id: demoComment.id,
    body: "hihi",
  });
})();

// octokit.rest.issues.createComment({
//   owner: "taenykim",
//   repo: "action-npm-test",
//   issue_number: context.issue.number,
//   body: action,
// });
