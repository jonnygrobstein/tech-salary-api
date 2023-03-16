import Salary from "../models/ReportedSalary.js";

const salaryController = {
    index: (req, res) => {
        Salary.find({})
          .then(salary => {
            res.json(salary)
          })
      },
      showYear: (req, res) => {
        Salary.find({year: req.params.year})
          .then(salary => {
            res.json(salary)
          })
      },
      create: async(req, res) => {
        console.log(req.body)
        const salary = await Salary.create(req.body)
          res.json(salary)
          
      },
      edit: (req, res) => {
        Salary.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
          .then(salary => {
            res.json(salary)
          })
      },
      delete: (req, res) => {
        Salary.findOneAndRemove({_id: req.params.id})
          .then(salary => {
            res.json(salary)
          })
      }
}

export default salaryController