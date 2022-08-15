const express = require('express')
const menuData = require('./menu-items.json')
const cors = require('cors')
const fs = require('fs')

const app = express() // giving express the name of app
app.use(cors())
app.use(express.json())

app.listen(4000, () => {
  console.log('Our API is listening on port 4000 - YES is working')
})

app.get('/', (req, res) => {
  res.send(menuData)
})

app.post('/', (req, res) => {
    const newMenuItem = {
        title: 'MUSHROOM BURRITO',
        description: 'Mushrooms, cheese, sour cream, green onions and rice',
    }

    

    // console.log(menuData)

    menuData.push(newMenuItem)

    const jsonMenuData = JSON.stringify(newMenuData)
    
    fs.writeFile('menu-items.json', jsonMenuData, (err) => console.error(err) )

    res.send('your now item was added')
})