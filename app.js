const { execSync } = require("child_process");
const execSyncToString = (param) => execSync(param).toString("utf8");

console.log("start", process.env.TEST_SECRET);

execSyncToString("npm run next");
