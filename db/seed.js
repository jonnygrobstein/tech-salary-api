import mongoose from './connection.js';
import Salary from '../models/ReportedSalary.js';
import surveyData from './2021-survey.json' assert { type: "json" }
import levelsData from './Levels_Fyi_Salary_Data.json' assert { type: "json" }
import cleanData from './salaries_clean.json' assert { type: "json" }

Salary.remove({})

Salary.collection.insert(surveyData)
    .then(survey => {
        console.log(surveyData)
    })
    .catch(err => {
        console.log(err)
    })

Salary.collection.insert(levelsData)
    .then(levels => {
        console.log(levelsData)
    })
    .catch(err => {
        console.log(err)
    })

Salary.collection.insert(cleanData)
    .then(clean => {
        console.log(cleanData)
    })
    .catch(err => {
        console.log(err)
    })
