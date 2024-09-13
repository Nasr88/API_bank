const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const tokenValidation = require('../middleware/tokenValidation')



router.post('/signup', userController.createUser)

router.post('/login', userController.loginUser)

router.post(
  '/profile',
  tokenValidation.validateToken,
  userController.getUserProfile
)

router.put(
  '/profile',
  tokenValidation.validateToken,
  userController.updateUserProfile
)

// // Get all user accounts (secured by JWT token)
// router.get(
//   '/accounts',
//   tokenValidation.validateToken,
//   userController.getUserAccounts
// );

// // Get all transactions for an account (secured by JWT token)
// router.get(
//   '/accounts/:accountId/transactions',
//   tokenValidation.validateToken,
//   transactionController.getTransactionsForAccount
// );

// // Get a single transaction's details (secured by JWT token)
// router.get(
//   '/accounts/:accountId/transactions/:transactionId',
//   tokenValidation.validateToken,
//   transactionController.getTransactionDetails
// );

// // Update a transaction's category (secured by JWT token)
// router.patch(
//   '/accounts/:accountId/transactions/:transactionId/category',
//   tokenValidation.validateToken,
//   transactionController.updateTransactionCategory
// );

// // Update a transaction's notes (secured by JWT token)
// router.patch(
//   '/accounts/:accountId/transactions/:transactionId/notes',
//   tokenValidation.validateToken,
//   transactionController.updateTransactionNotes
// );

module.exports = router
