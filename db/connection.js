import mongoose from "mongoose";

mongoose.connect('mongodb://localhost/tech_salaries', { useNewUrlParser: true, useUnifiedTopology: true })

export default mongoose