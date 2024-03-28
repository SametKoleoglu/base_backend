const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AuditSchema = new Schema(
  {
    level: String,
    email: String,
    location: String,
    proc_type: String,
    log: mongoose.SchemaTypes.Mixed,
  },
  {
    versionKey: false,
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

class AuditLogs extends mongoose.Model {
  constructor() {
    super();
  }
}

AuditSchema.loadClass(AuditLogs);
module.exports = mongoose.model("AuditLogs", AuditSchema);
