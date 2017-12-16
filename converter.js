const csvFileName = 'customer-data.xls'
const jsonFileName = 'customer-data.json'
const csv = require('csvtojson')
const path = require('path')
const fs = require('fs')

var jsonFile = path.join(__dirname, jsonFileName)

if(fs.statSync(jsonFile)){
    fs.unlinkSync(jsonFile)
}

csv()
.fromFile(path.join(__dirname, csvFileName))
.on('json', (jsonObj) => {
    fs.appendFileSync(jsonFile, JSON.stringify(jsonObj))
})
.on('done', (error) => {
    if (error) return console.log(error)
    console.log('end')
})