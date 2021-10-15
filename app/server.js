const express = require('express');

const PORT = 3000;

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World! \n')
});

app.listen(PORT, function () {

    console.log(`${process.env.SOZ}\n\n`);

    console.log("Atatürk İlke ve İnkılapları: \n\n");

    console.log(`1: ${process.env.ILKELER1}\n`);
    console.log(`2: ${process.env.ILKELER2}\n`);
    console.log(`3: ${process.env.ILKELER3}\n`);
    console.log(`4: ${process.env.ILKELER4}\n`);
    console.log(`5: ${process.env.ILKELER5}\n`);
    console.log(`6: ${process.env.ILKELER6}\n`);

});