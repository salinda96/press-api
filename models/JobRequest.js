const mongoose = require('mongoose');

const JobRequestSchema = new mongoose.Schema({
jobId: {
    type: Number,
    // required: [true, 'Please add JobID']
  },
  epfId: {
    type: Number,
    required: [true, 'Please add EPF']
  },
  reqName: {
    type: String,
    // required: [true, 'Please add Requester Name']
  },
  nic: {
    type: String,
    // required: [true, 'Please add a NIC number']
  },
  mobile: {
    type: Number,
    // required: [true, 'Please add Mobile number']
  },
  departmentId: {
    type: String,
    // required: [true]
  },
  email: {
    type: String,
    // required: [true]
  },
  printJobName: {
    type: String,
    // required: [true]
  },
  firstPrintNatureId: {
    type: String,
    // required: [true]
  },
  doneCoverID: {
    type: String,
    // required: [true]
  },
  noOfPages: {
    type: Number,
    // required: [true]
  },
  noOfCopies: {
    type: Number,
    // required: [true]
  },
  printingTypeId: {
    type: String,
    // required: [true]
  },
  paperSizeId: {
    type: String,
    // required: [true]
  },
  paperTypeId: {
    type: String,
    // required: [true]
  },
  colorPagesQuantity: {
    type: String,
    // required: [true]
  },
  imageColorTypeId: {
    type: String,
    // required: [true]
  },
  boardTypeId: {
    type: String,
    // required: [true]
  },
  coverColor: {
    type: String,
    // required: [true]
  },
  imageArteworkId: {
    type: String,
    // required: [true]
  },
  requestDate: {
    type: String,
    // required: [true]
  },
});

module.exports = mongoose.model('JobRequest', JobRequestSchema);