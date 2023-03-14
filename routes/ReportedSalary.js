import express from 'express'
import salaryController from '../controllers/reportedSalary.js'
import Router from 'express'
const router = Router()
const Salary = router


router.get('/', salaryController.index)
router.get('/:year', salaryController.showYear)
// router.get('/name/:name', salaryController.showName)
router.post('/', salaryController.create)
router.put('/:id', salaryController.edit)
router.delete('/:id', salaryController.delete)

export default Salary
