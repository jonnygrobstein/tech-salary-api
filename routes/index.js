import express from 'express'
const router = express.Router()
import Salary from './ReportedSalary.js'


router.use('/bachelor', Bachelor)
router.use('/bachelorette', Bachelorette)

export default router