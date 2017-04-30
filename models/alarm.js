var mongoose = require('mongoose');

var alarmSchema = new mongoose.Schema({
  name: {
    type: String,
    default: ''
  },
  trigger: {
    type: [String],
    required: [true, 'Trigger Required']
  },
  cronDate: {
    type: String,
    required: [true, 'Cron Date Required']
  },
  active: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Alarms', alarmSchema);