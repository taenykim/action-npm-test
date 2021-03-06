const { execSync } = require("child_process");
const execSyncToString = (param) => execSync(param).toString("utf8");

console.log("start", process.env.TEST_SECRET);
console.log("gh token", process.env.GH_TOKEN);

const next = execSyncToString("npm run next");

console.log(next);

execSyncToString('echo "hello" > test.txt');

execSyncToString("git config user.name github-actions");
execSyncToString("git config user.email github-actions@github.com");

execSyncToString("git add .");
execSyncToString('git commit -m "test"');
execSyncToString("git push origin head:test7");
