const { execSync } = require("child_process");
const execSyncToString = (param) => execSync(param).toString("utf8");

console.log("start", process.env.TEST_SECRET);
console.log("gh token", process.env.GH_TOKEN);

const next = execSyncToString("npm run next");

console.log(next);
