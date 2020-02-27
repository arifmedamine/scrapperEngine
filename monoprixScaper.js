const request = require('request');
const cheerio = require('cheerio');
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';


scrapEpicerieSalee = function (URL) {
    request(URL, (error, response, html) => {
        if (!error && response.statusCode == 200) {

            /* console.log(html); //nesrappiw biiih site lkol */
            var result = []
            const $ = cheerio.load(html);
            $('.product-description').each((e, elm) => {
                const name = $(elm)
                    .find('span')
                    .find('a')
                    .text()
                //console.log(name)
                result.push({
                    name: name,
                    price: "",
                    image: "",
                    link: "",
                    manufacturerName: ""
                })
            })
            let i = 0
            $('.product-price-and-shipping').each((e, elm) => {
                const price = $(elm)
                    .find('span')
                    .text()
                let floatprice = price.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
                result[i].price = +floatprice
                //console.log(+floatprice)
                i++
            })
            let j = 0
            $('.thumbnail-container').each((e, elm) => {
                const link = $(elm)
                    .find('a')
                    .attr('href')
                result[j].link = link
                //console.log(link)
                j++
            })

            let k = 0
            $('.thumbnail-container').each((e, elm) => {
                const image = $(elm)
                    .find('a')
                    .find('img')
                    .attr('src')
                result[k].image = image
                //console.log(image)
                k++
            })
            let m = 0
            $('.div_manufacturer_name').each((e, elm) => {
                const manufacturerName = $(elm)
                    .find('span')
                    .text()
                result[m].manufacturerName = manufacturerName
                m++
            })
            console.log(result)
        } else {
            console.log(error);
        }
    });
}

scrapEpicerieSalee('https://clickandcollect.monoprix.tn/3-epicerie-salee')
scrapEpicerieSalee('https://clickandcollect.monoprix.tn/3-epicerie-salee?page=2')
scrapEpicerieSalee('https://clickandcollect.monoprix.tn/3-epicerie-salee?page=3')
scrapEpicerieSalee('https://clickandcollect.monoprix.tn/3-epicerie-salee?page=4')

scrapEpicerieSucree = function (URL) {
    request(URL, (error, response, html) => {
        if (!error && response.statusCode == 200) {

            /* console.log(html); //nesrappiw biiih site lkol */
            var result = []
            const $ = cheerio.load(html);
            $('.product-description').each((e, elm) => {
                const name = $(elm)
                    .find('span')
                    .find('a')
                    .text()
                //console.log(name)
                result.push({
                    name: name,
                    price: "",
                    image: "",
                    link: "",
                    manufacturerName: ""
                })
            })
            let i = 0
            $('.product-price-and-shipping').each((e, elm) => {
                const price = $(elm)
                    .find('span')
                    .text()
                let floatprice = price.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
                result[i].price = +floatprice
                //console.log(+floatprice)
                i++
            })
            let j = 0
            $('.thumbnail-container').each((e, elm) => {
                const link = $(elm)
                    .find('a')
                    .attr('href')
                result[j].link = link
                //console.log(link)
                j++
            })

            let k = 0
            $('.thumbnail-container').each((e, elm) => {
                const image = $(elm)
                    .find('a')
                    .find('img')
                    .attr('src')
                result[k].image = image
                //console.log(image)
                k++
            })
            let m = 0
            $('.div_manufacturer_name').each((e, elm) => {
                const manufacturerName = $(elm)
                    .find('span')
                    .text()
                result[m].manufacturerName = manufacturerName
                m++
            })
            console.log(result)
        } else {
            console.log(error);
        }
    });
}

scrapEpicerieSucree('https://clickandcollect.monoprix.tn/12-epicerie-sucree')
scrapEpicerieSucree('https://clickandcollect.monoprix.tn/12-epicerie-sucree?page=2')
scrapEpicerieSucree('https://clickandcollect.monoprix.tn/12-epicerie-sucree?page=3')
scrapEpicerieSucree('https://clickandcollect.monoprix.tn/12-epicerie-sucree?page=4')
scrapEpicerieSucree('https://clickandcollect.monoprix.tn/12-epicerie-sucree?page=5')
scrapEpicerieSucree('https://clickandcollect.monoprix.tn/12-epicerie-sucree?page=6')
scrapEpicerieSucree('https://clickandcollect.monoprix.tn/12-epicerie-sucree?page=7')
scrapEpicerieSucree('https://clickandcollect.monoprix.tn/12-epicerie-sucree?page=8')

scrapLiquide = function (URL) {
    request(URL, (error, response, html) => {
        if (!error && response.statusCode == 200) {

            /* console.log(html); //nesrappiw biiih site lkol */
            var result = []
            const $ = cheerio.load(html);
            $('.product-description').each((e, elm) => {
                const name = $(elm)
                    .find('span')
                    .find('a')
                    .text()
                //console.log(name)
                result.push({
                    name: name,
                    price: "",
                    image: "",
                    link: "",
                    manufacturerName: ""
                })
            })
            let i = 0
            $('.product-price-and-shipping').each((e, elm) => {
                const price = $(elm)
                    .find('span')
                    .text()
                let floatprice = price.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
                result[i].price = +floatprice
                //console.log(+floatprice)
                i++
            })
            let j = 0
            $('.thumbnail-container').each((e, elm) => {
                const link = $(elm)
                    .find('a')
                    .attr('href')
                result[j].link = link
                //console.log(link)
                j++
            })

            let k = 0
            $('.thumbnail-container').each((e, elm) => {
                const image = $(elm)
                    .find('a')
                    .find('img')
                    .attr('src')
                result[k].image = image
                //console.log(image)
                k++
            })
            let m = 0
            $('.div_manufacturer_name').each((e, elm) => {
                const manufacturerName = $(elm)
                    .find('span')
                    .text()
                result[m].manufacturerName = manufacturerName
                m++
            })
            console.log(result)
        } else {
            console.log(error);
        }
    });
}

scrapLiquide('https://clickandcollect.monoprix.tn/13-boissons')
scrapLiquide('https://clickandcollect.monoprix.tn/13-boissons?page=2')

scrapFrai = function (URL) {
    request(URL, (error, response, html) => {
        if (!error && response.statusCode == 200) {

            /* console.log(html); //nesrappiw biiih site lkol */
            var result = []
            const $ = cheerio.load(html);
            $('.product-description').each((e, elm) => {
                const name = $(elm)
                    .find('span')
                    .find('a')
                    .text()
                //console.log(name)
                result.push({
                    name: name,
                    price: "",
                    image: "",
                    link: "",
                    manufacturerName: ""
                })
            })
            let i = 0
            $('.product-price-and-shipping').each((e, elm) => {
                const price = $(elm)
                    .find('span')
                    .text()
                let floatprice = price.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
                result[i].price = +floatprice
                //console.log(+floatprice)
                i++
            })
            let j = 0
            $('.thumbnail-container').each((e, elm) => {
                const link = $(elm)
                    .find('a')
                    .attr('href')
                result[j].link = link
                //console.log(link)
                j++
            })

            let k = 0
            $('.thumbnail-container').each((e, elm) => {
                const image = $(elm)
                    .find('a')
                    .find('img')
                    .attr('src')
                result[k].image = image
                //console.log(image)
                k++
            })
            let m = 0
            $('.div_manufacturer_name').each((e, elm) => {
                const manufacturerName = $(elm)
                    .find('span')
                    .text()
                result[m].manufacturerName = manufacturerName
                m++
            })
            console.log(result)
        } else {
            console.log(error);
        }
    });
}

scrapFrai('https://clickandcollect.monoprix.tn/14-produits-frais')
scrapFrai('https://clickandcollect.monoprix.tn/14-produits-frais?page=2')
scrapFrai('https://clickandcollect.monoprix.tn/14-produits-frais?page=3')
scrapFrai('https://clickandcollect.monoprix.tn/14-produits-frais?page=4')
scrapFrai('https://clickandcollect.monoprix.tn/14-produits-frais?page=5')