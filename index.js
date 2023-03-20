import express from 'express'
const app = express()
import router from './routes/index.js'

import swaggerUi from 'swagger-ui-express'
import swaggerDocument from './swagger.json' assert { type: 'json' }

app.use(express.json())
app.use(router)

app.use(
  '/api-docs',
  swaggerUi.serve, 
  swaggerUi.setup(swaggerDocument)
);

app.listen(3000, () => console.log('listening on port 3000'))