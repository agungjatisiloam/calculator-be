const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(cors())
let asaa = 'asaasa'
app.post('/generate-segitiga', function (req, res) {    
    const num = req.body.number;
    let segitiga = ''
    let val = (num).toString()
    for(let i=0; i < val.length; i++){
        segitiga += val[i]
        for(let j=0;j <= i;j++) {
            segitiga += '0'            
        }
        segitiga += '<br/>'
    }
    res.json({
        segitiga
    })
})

app.post('/generate-bilangan-ganjil', function (req, res) {
    const num = Number(req.body.number);   
    let bilanganGanjil = []
    for(let i=0; i <= num; i++) {
        if(i % 2 !== 0) {
            bilanganGanjil.push(i)
        }
    }
    res.json({
        bilanganGanjil: bilanganGanjil.join()
    })
})

const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}

app.post('/generate-bilangan-prima', function (req, res) {
    const num = Number(req.body.number);
    let bilanganPrima = []
    for(let i=0; i <= num; i++) {
        if(isPrime(i)) {
            bilanganPrima.push(i)
        }
    }
    res.json({
        bilanganPrima: bilanganPrima.join()
    })
})

app.listen(3000)