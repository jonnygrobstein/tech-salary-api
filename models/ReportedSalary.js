import mongoose from '../db/connection.js'
const Schema = mongoose.Schema

const Salary = new Schema({
    year: Number,
    employer: String,
    job_title: String,
    job_category: String,
    job_level: String,
    education: String,
    base_salary: Number,
    sign_on_bonus: Number,
    bonus: Number,
    stock_grant: Number,
    total_comp: Number,
    total_experience: Number,
    years_at_company: Number,
    company_size: String,
    location: String,
    state: String,
    country: String,
    gender: String,
    ethnicity: String,
})

export default mongoose.model("Salary", Salary)