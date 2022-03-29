const Logger = require("../../utils/Logger");

module.exports = {
  name: "ready",
  once: true,
  async execute(client) {
    Logger.client("- prêt à être utilisé");

    const devGuild = await client.guilds.cache.get("925797024807420026");
    devGuild.commands.set(client.commands.map((cmd) => cmd));
  },
};
