const fs = require('fs')
const path = require('path')

const csvFileName = 'customer-data.xls'
const jsonFileName = 'customar-data.json'

var string = "{'key':'name'}"
var obj = JSON.parse(string)
console.log(obj.key)