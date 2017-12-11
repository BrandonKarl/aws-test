import express from 'express'
import axios from 'axios'
const app = express()
app.get('/', async (req, res) => {
  res.send('EZ DEPLOY')
})

app.listen(3000, () => console.log('Server running on port 3000'))