import db from './models/index.js';

async function main() {
  await db.sequelize.sync();
}

main();
