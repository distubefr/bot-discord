const { promisify } = require('util');
const { glob } = require('glob');
const pGlob = promisify(glob);

module.exports = async client => {
    (await pGlob(`${process.cwd()}/events/*/*.js`)).map(async eventFile => {
        console.log(eventFile);
        console.log(process.cwd());

        const event = require(eventFile);

        if (event.once) {
            client.once(event.nane, (...args) => event.execute(client, ...args));
        } else {
            client.on(event.nane, (...args) => event.execute(client, ...args));
        }
    })
}