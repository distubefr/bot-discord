const mongoose = require("mongoose");

const guildSchema = mongoose.Schema({
  id: String,
  prefix: { type: String, default: "!" },
  logChannel: { type: String, default: "927083139367596042" },
});

module.exports = mongoose.model("Guild", guildSchema);
