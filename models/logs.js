const mongoose = require('mongoose');

const logsSchema = new mongoose.Schema(
  {
    title: String,
    entry: String,
    shipIsBroken: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Log', logsSchema);