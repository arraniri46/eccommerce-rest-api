#Aplikasi ini dibuat diatas NodeJS dan ExpressJS sehingga dibutuhkan library tambahan.

## Untuk mengetes API jalankan file app.js dengan perintah

```sh
node app.js
```

## Kemudian buka app Postman dan test menggunakan method POST dan isikan URL

http://127.0.0.1:5000/dusKeramik

## Pada tab body isikan data yang mau dikirim

```json
{
  "Pbangunan": 7,
  "Lbangunan": 7,
  "Pkeramik": 30,
  "Lkeramik": 30,
  "Isi": 11
}
```

## Lalu klik SEND, maka pada section body results akan menghasilkan

```json
{ "JumlahDusKeramik": 49 }
```
