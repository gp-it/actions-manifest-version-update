const core = require('@actions/core');

// most @actions toolkit packages have async methods
async function run() {
  try {
    const path = 'manifest.json';
    const fs = require('fs');
    const manifest = require(path);
    console.log(manifest.version);
    const levels = manifest.version.split('.');
    levels[2] = parseInt(levels[2]) + 1;
    manifest.version = levels.join('.');
    fs.writeFile(path, JSON.stringify(manifest), err => {
      if (err) console.log(err);
      console.log(manifest.version);
    });

  }
  catch (error) {
    core.setFailed(error.message);
  }
}
run()