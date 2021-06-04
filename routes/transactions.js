const express = require('express');
const router = express.Router();
const {getTransactions, addTransaction, deleteTransactions, getOneTransaction} = require('../controllers/transactionController');

router
    .route('/')
    .get(getTransactions)
    .post(addTransaction);

router
    .route('/:id')
    .get(getOneTransaction)
    .delete(deleteTransactions); 

module.exports = router;