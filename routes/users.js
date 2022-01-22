const mongoose = require('mongoose')
const shortId = require('shortid')

mongoose.connect('mongodb://localhost/urls', {
  useNewUrlParser: true, useUnifiedTopology: true
})

const shortUrlSchema = new mongoose.Schema({
  full: {
    type: String,
    required: true
  },
  short: {
    type: String,
    required: true,
    default: shortId.generate
  }
})

module.exports = mongoose.model('ShortUrl', shortUrlSchema)