const express = require('express');
const router = express.Router();
const {getJobRequests, addJobRequest, deleteJobRequest, getOneJobRequest, updateJobRequest,getJobRequestsLastID} = require('../controllers/JobRequestController');

router
    .route('/')
    .get(getJobRequests)
    .post(addJobRequest);

router.route("/bio")
    .get(getJobRequestsLastID);
    
router
    .route('/:id')
    .get(getOneJobRequest)
    .delete(deleteJobRequest)
    .put(updateJobRequest); 



module.exports = router;