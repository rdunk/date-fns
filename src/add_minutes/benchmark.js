// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var addMinutes = require('./')
var moment = require('moment')

suite('addMinutes', function () {
  benchmark('date-fns', function () {
    return addMinutes(this.date, 30)
  })

  benchmark('Moment.js', function () {
    return this.moment.add(30, 'minutes')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
