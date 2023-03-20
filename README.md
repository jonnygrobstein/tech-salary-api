# tech-salary-api
API Project using tech salary data from multiple sources

## BLUF (Bottom Line Up Front)

This API project was created to take data from another source and create a database and API.  The data I chose was tech industry salaries.  This was chosen to get a glimpse into what pay would look like as we, as aspiring developers, start and progress in our career.  I have used data from multiple sources, which are detailed below, to get a more complete picture of what potential salaries look like, based on years of experience, location, and year of reported salary.

## Challenges

One of the most important aspects of a good database is the quality of the data.  **Garbage in, Garbage out.** The data I collected was from multiple sources in CSV format.  Their fields had different names so I had to normalize those.  Also, many of the fields in the documents were not useful for these purposes, or they did not contain enough quality data to be useful.  
When normalizing the data this was more challenging.  The source data appeared to have allowed _all fields to be Strings_, even salary fields.  This required cleaning of the data using Filters within Excel to remove all text from the fields.  Also, there were numerous outliers and a good amount of fake data.  **$6M salary** for a pitcher from the NY Mets.  Position titles that were _curse words_ with outlier pay amounts.  This data was scrubbed to the _best of my ability_.
Once the data was normalized the rest was, mostly, smooth sailing.

## How was it developed?

This project used MongoDB/mongoose, Express, and Node.js for coding.  CSV, XLSX, and JSON for the data.

To convert the CSV/XLSX data to JSON prior to importing the data I utilized the Aspose website, [link](https://products.aspose.app/cells/conversion/xlsx-to-json).  This worked like a charm and was very fast, **_I highly recommend it_**.

The format used was fairly straight forward and was designed with the ability to expand the scope if needed.

I used Express Router to allow for growth if needed.  As you can see, currently there is only 1 route, but I'd rather set it up to expand instead of change everything later.

```js
import express from 'express'
const router = express.Router()
import Salary from './ReportedSalary.js'

router.use('/salaries', Salary)

export default router
```

## Instructions For Use

Because this is just a database in its current format, the installation instructions are fairly basic.

* Make sure you have MongoDB, Express, and Node.js installed on your local machine.  
* Fork and clone the repository.
* Navigate to the top level folder within Terminal/Command Line.
* Run **_npm install_**
* Double check your package.json file.  **"type": "module"** should be included near line 5. 
* Next navigate to your /db folder and run **_node seed.js_**

This will get the data seeded into the database and you can run your tests and view the data using the following routes:

```js
router.get('/', salaryController.index)
router.get('/:year', salaryController.showYear)
router.post('/', salaryController.create)
router.put('/:id', salaryController.edit)
router.delete('/:id', salaryController.delete)
```

## Sources

Currently there are 3 sources of data that are being used in the database:




## API Documentation

**To access the API Documentation, go to the [Swagger API Docs](http://localhost:3000/api-docs/#/) page once the server is up and running.**