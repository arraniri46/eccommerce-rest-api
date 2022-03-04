//Inisialisasi library yg diperlukan
const { urlencoded } = require('express')
const express = require('express')
const app = express()
const PORT = 5000
const bodyParser = require('body-parser')

// Inisialisasi Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Routing
app.get('/', (req, res) => {
    res.send('Menghitung Kebutuhan Keramik')
})

//POST request 
app.post('/dusKeramik', (req, res) => {
    
    //Menerima data dari request body dalam bentuk object
    const data = {
        "Pbangunan" : req.body.Pbangunan,
        "Lbangunan" : req.body.Lbangunan,
        "Pkeramik" : req.body.Pkeramik,
        "Lkeramik" : req.body.Lkeramik,
        "Isi" : req.body.Isi
    }

    //Perhitungan untuk mencari jumlah dus keramik
    const luasRuangan = (data.Pbangunan * data.Lbangunan) * 10000
    const luasCakupanKeramik = data.Pkeramik * data.Lkeramik * data.Isi

    const jumlahDusKeramik = Math.round(luasRuangan / luasCakupanKeramik)

    //Mengembalikan nilai response ke Browser
    res.send(JSON.stringify({"JumlahDusKeramik" : jumlahDusKeramik}))
})

//Inisialisasi server
app.listen(PORT, () => {
    console.log(`Server Berjalan di ${PORT}`)
})