import express from 'express'
const router = express.Router()
import Salary from './ReportedSalary.js'


router.use('/salaries', Salary)


export default router