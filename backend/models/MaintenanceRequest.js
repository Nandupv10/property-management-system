const mongoose = require("mongoose")

const maintenanceRequestSchema = new mongoose.Schema({
  title: String,
  status: String,
})

module.exports = mongoose.model(
  "MaintenanceRequest",
  maintenanceRequestSchema
)