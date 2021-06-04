const express = require('express');
const router = express.Router();
const {getJobRequests, addJobRequest, deleteJobRequest, getOneJobRequest, updateJobRequest} = require('../controllers/JobRequestController');

router
    .route('/')
    .get(getJobRequests)
    .post(addJobRequest);

router
    .route('/:id')
    .get(getOneJobRequest)
    .delete(deleteJobRequest)
    .put(updateJobRequest); 

module.exports = router;