const JobRequest = require('../models/JobRequest')

// @desc Get all JobRequest 
// @route GET /api/v1/jobRequest
// @access Public

exports.getJobRequests= async (req, res, next) => {
    try {
        const jobRequest = await JobRequest.find();
        return res.status(200).json({
            success: true,
            count: jobRequest.length,
            data: jobRequest
     
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

// @desc Get one JobRequest
// @route GET /api/v1/jobRequest/id
// @access Public

exports.getOneJobRequest = async (req, res, next) => {
    try {
        const jobRequest = await JobRequest.findById(req.params.id);
        return res.status(200).json({
            success: true,
            data: jobRequest

        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

// @desc Add JobRequest
// @route POST /api/v1/jobRequest
// @access Public

exports.addJobRequest = async (req, res, next) => {
    try {
        const { text, amount } = req.body;

        const jobRequest = await JobRequest.create(req.body);

        return res.status(201).json({
            success: true,
            data: jobRequest
        });
        
    } catch (err) {
       if(err.name === 'ValidationError'){
            const messages = Object.values(err.errors).map(val => val.message);

            return res.status(400).json({
                success: false,
                error: messages
            });
       }else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            });
       }
    }
    
}

// @desc Delete JobRequest
// @route DELETE /api/v1/jobRequest/:id
// @access Public

exports.deleteJobRequest = async (req, res, next) => {
    try {
        const jobRequest = await JobRequest.findById(req.params.id);

        if(!jobRequest){
            return res.status(500).json({
                success: false,
                error: 'No Transaction Found'
            });
        }
        await jobRequest.remove();

        return res.status(200).json({
            success: true,
            data: {}
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

// @desc Update JobRequest
// @route Update /api/v1/jobRequest/:id
// @access Public

exports.updateJobRequest = async (req, res, next) => {
    try {
        const jobRequest = await JobRequest.findById(req.params.id);

        if(!jobRequest){
            return res.status(500).json({
                success: false,
                error: 'No Transaction Found'
            });
        }
        const jobRequest1 = await JobRequest.updateOne(req.body)
        // .create(req.body);

        return res.status(200).json({
            success: true,
            data: jobRequest1
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}