const { execSync } = require("child_process");
const execSyncToString = (param) => execSync(param).toString("utf8");

console.log("start", process.env.TEST_SECRET);

const next = execSyncToString("npm run next");

console.log(next);
