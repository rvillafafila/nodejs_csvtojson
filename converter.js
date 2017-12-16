const csv = require('csvtojson')
const path = require('path')
const fs = require('fs')

const jsonFile = path.join(__dirname, 'customer-data.json')
const csvFile = path.join(__dirname, 'customer-data.csv')

const convertCSVToJSON = () => {

    let json = []

    csv()
    .fromFile(csvFile)
    .on('json', (jsonObj) => {
        json.push(jsonObj)
    })
    .on('done', (error) => {
        if (error) return console.log(error)
        fs.writeFile(jsonFile, JSON.stringify(json, null, 2), 'utf-8', (error) => {
            if (error) return console.log(error)
            console.log('Conversion finished successfully')
        })
    })
}

convertCSVToJSON()