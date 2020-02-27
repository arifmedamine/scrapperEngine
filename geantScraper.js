const request = require('request');
const cheerio = require('cheerio');
const express = require('express');
const mysql = require('mysql');

const router = express.Router();

//connect to database server(mysql)
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "consomitounsi"
});



scrapEpicerieSalee = function (URL) {
    request(URL, (error, response, html) => {
        if (!error && response.statusCode == 200) {
            
            /* console.log(html); //nesrappiw biiih site lkol */
            var result = []
            const $ = cheerio.load(html);
            // const name = $('.right-block');
            // const price = $('.product_price');
            // const outputName = name.find('h3').text();
            // const outputPrice = price.find('span').text();
            // console.log(outputName, outputPrice);
            $('.right-block').each((e, elm) => {
                const name = $(elm)
                    .find('h3')
                    .text()
                    .trim();
                resultName = name
                result.push({
                    name: name,
                    price : "",
                    image: ""
                })
                console.log(name);
            })

            let i = 0;
            $('.product_price').each((e, elm) => {
                const price = $(elm)
                .find('span')
                .text()
                .trim();
                    
                resultPrice = price
                result[i].price = price+0.040
                

                
                // console.log(price);
                i++
            })
            let j = 0;
            $('.left-block').each((e, elm) => {
                const image = $(elm)
                    .find('img')
                    .attr('src')
                result[j].image = image

                j++
            })
            console.log(result)
            for (let x = 0; x < result.length; x++) {
                saveToSql(result[x].name, result[x].price, 'salee', 'Geant', result[x].image)
            }
        } else {
            console.log("INTERNET FAILEEEEEEEEEEEED TO CONNECT");
        }
    });
}

scrapEpicerieSucree = function (URL) {
    request(URL, (error, response, html) => {
        if (!error && response.statusCode == 200) {

            /* console.log(html); //nesrappiw biiih site lkol */
            var result = []
            const $ = cheerio.load(html);
            // const name = $('.right-block');
            // const price = $('.product_price');
            // const outputName = name.find('h3').text();
            // const outputPrice = price.find('span').text();
            // console.log(outputName, outputPrice);
            $('.right-block').each((e, elm) => {
                const name = $(elm)
                    .find('h3')
                    .text()
                    .trim();
                resultName = name
                result.push({
                    name: name,
                    price: "",
                    image: ""
                })
                console.log(name);
            })

            let i = 0;



            $('.product_price').each((e, elm) => {
                const price = $(elm)
                    .find('span')
                    .text()
                    .trim();

                resultPrice = price
                result[i].price = price + 0.040



                // console.log(price);
                i++
            })
            let j = 0;
            $('.left-block').each((e, elm) => {
                const image = $(elm)
                    .find('img')
                    .attr('src')
                result[j].image = image

                j++
            })
            console.log(result)
            for (let x = 0; x < result.length; x++) {
                saveToSql(result[x].name, result[x].price, 'sucree', 'Geant', result[x].image)


            }
        } else {
            console.log("INTERNET FAILEEEEEEEEEEEED TO CONNECT");
        }
    });
}

scrapSurgele = function (URL) {
    request(URL, (error, response, html) => {
        if (!error && response.statusCode == 200) {

            /* console.log(html); //nesrappiw biiih site lkol */
            var result = []
            const $ = cheerio.load(html);
            // const name = $('.right-block');
            // const price = $('.product_price');
            // const outputName = name.find('h3').text();
            // const outputPrice = price.find('span').text();
            // console.log(outputName, outputPrice);
            $('.right-block').each((e, elm) => {
                const name = $(elm)
                    .find('h3')
                    .text()
                    .trim();
                resultName = name
                result.push({
                    name: name,
                    price: "",
                    image: ""
                })
                console.log(name);
            })

            let i = 0;



            $('.product_price').each((e, elm) => {
                const price = $(elm)
                    .find('span')
                    .text()
                    .trim();

                resultPrice = price
                result[i].price = price + 0.040



                // console.log(price);
                i++
            })
            let j = 0;
            $('.left-block').each((e, elm) => {
                const image = $(elm)
                    .find('img')
                    .attr('src')
                result[j].image = image

                j++
            })
            console.log(result)
            for (let x = 0; x < result.length; x++) {
                saveToSql(result[x].name, result[x].price, 'surgele', 'Geant', result[x].image)


            }
        } else {
            console.log("INTERNET FAILEEEEEEEEEEEED TO CONNECT");
        }
    });
}

scrapFrai = function (URL) {
    request(URL, (error, response, html) => {
        if (!error && response.statusCode == 200) {

            /* console.log(html); //nesrappiw biiih site lkol */
            var result = []
            const $ = cheerio.load(html);
            // const name = $('.right-block');
            // const price = $('.product_price');
            // const outputName = name.find('h3').text();
            // const outputPrice = price.find('span').text();
            // console.log(outputName, outputPrice);
            $('.right-block').each((e, elm) => {
                const name = $(elm)
                    .find('h3')
                    .text()
                    .trim();
                resultName = name
                result.push({
                    name: name,
                    price: "",
                    image: ""
                })
                console.log(name);
            })

            let i = 0;



            $('.product_price').each((e, elm) => {
                const price = $(elm)
                    .find('span')
                    .text()
                    .trim();

                resultPrice = price
                result[i].price = price + 0.040



                // console.log(price);
                i++
            })
            let j = 0;
            $('.left-block').each((e, elm) => {
                const image = $(elm)
                    .find('img')
                    .attr('src')
                result[j].image = image

                j++
            })
            console.log(result)
            for (let x = 0; x < result.length; x++) {
                saveToSql(result[x].name, result[x].price, 'frai', 'Geant', result[x].image)


            }
        } else {
            console.log("INTERNET FAILEEEEEEEEEEEED TO CONNECT");
        }
    });
}

scrapLiquides = function (URL) {
    request(URL, (error, response, html) => {
        if (!error && response.statusCode == 200) {

            /* console.log(html); //nesrappiw biiih site lkol */
            var result = []
            const $ = cheerio.load(html);
            // const name = $('.right-block');
            // const price = $('.product_price');
            // const outputName = name.find('h3').text();
            // const outputPrice = price.find('span').text();
            // console.log(outputName, outputPrice);
            $('.right-block').each((e, elm) => {
                const name = $(elm)
                    .find('h3')
                    .text()
                    .trim();
                resultName = name
                result.push({
                    name: name,
                    price: "",
                    image: ""
                })
                console.log(name);
            })

            let i = 0;



            $('.product_price').each((e, elm) => {
                const price = $(elm)
                    .find('span')
                    .text()
                    .trim();

                resultPrice = price
                result[i].price = price



                // console.log(price);
                i++
            })
            let j = 0;
            $('.left-block').each((e, elm) => {
                const image = $(elm)
                    .find('img')
                    .attr('src')
                result[j].image = image

                j++
            })
            console.log(result)
            for (let x = 0; x < result.length; x++) {
                saveToSql(result[x].name, result[x].price, 'liquide', 'Geant', result[x].image)


            }
        } else {
            console.log("INTERNET FAILEEEEEEEEEEEED TO CONNECT");
        }
    });
}
function saveToSql(name, price, categorie, tag, image) {
    con.query('INSERT INTO bonplan(name,price,categorie,image, tag) VALUE(?,?,?,?,?)', [name, price, categorie,image, tag], (err, result, field) => {
        con.on('error', function (err) {
            console.log('[MySQL ERROE]', err);
        });
        console.log('Inserted ' + name + price + ' into table.')
    })
}

router.get('/scraper', (req, res) => {
    scrapEpicerieSucree('https://www.geant.tn/epicerie-sucree-72.html')
    scrapEpicerieSucree('https://www.geant.tn/epicerie-sucree-72.html?=2')
    scrapEpicerieSalee('https://www.geant.tn/epicerie-salee-73.html')
    scrapEpicerieSalee('https://www.geant.tn/epicerie-salee-73.html?=2')
    scrapEpicerieSalee('https://www.geant.tn/epicerie-salee-73.html?p=3')
    scrapSurgele('https://www.geant.tn/surgele-78.html')
    scrapFrai('https://www.geant.tn/frais-45.html')
    scrapFrai('https://www.geant.tn/frais-45.html?p=2')
    scrapFrai('https://www.geant.tn/frais-45.html?p=3')
    scrapFrai('https://www.geant.tn/frais-45.html?p=4')
    scrapLiquides('https://www.geant.tn/liquides-74.html')
    res.send("success!! ......... :) ")
})

router.get("/", (req, res) => {
    con.query("SELECT * FROM produit", (err, rows, fields) => {
        if (err) {
            console.log(err)
            res.sendStatus(500)
            return
        }
        res.status(200)
        res.json(rows)
    })
})

router.get("/:cat", (req, res) => {
    con.query("SELECT * FROM produit where categorie = ?", [req.params.cat], (err, user_rows, fields) => {
        res.status(200)
        res.json(user_rows)
    })
})

router.get("/check_connection", (req, res) => {
    res.sendStatus(200)
})

module.exports = router