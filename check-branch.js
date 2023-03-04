const github = require("@actions/github");

const context = github.context;

console.log(JSON.stringify(context.repo, null, 2));
