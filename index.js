import express from 'express'
import axios from 'axios'
const app = express()
app.get('/', async (req, res) => {
  const user = {
    firstName: "test2",
    lastName: "test3",
    email: "omg@gmail.com",
    password: "password"
  }
  const res2 = await axios.post('https://pelycan-backend.herokuapp.com/api/signup', user)
  res.send('OI')
})

app.listen(3000, () => console.log('Server running on port 3000'))