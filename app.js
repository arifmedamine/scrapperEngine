const cheerio = require('cheerio');
const request = require('request');
const download = require('image-downloader'); //in case you loading scraped imagesURL with front-end framework and have autorisation issues
                                              //you need to download them and get in from your own server
const fs = require('fs')

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0'; //is case your script is being blocked by SSLCertificate on any other miidleware 



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
                    const options = {
                        url: image,
                        dest: './files/' // Save to /path/to/dest/image.jpg
                    }
                    download.image(options)
                        .then(({
                            filename,
                            image
                        }) => {
                            console.log('Saved to', filename) // Saved to /path/to/dest/image.jpg
                        })
                        .catch((err) => console.error(err))
                //removing unnecessary caracters in order to match the same name of image in files directory
                let serverpic = image.substring(54)
                console.log(serverpic);
                let dirImage = "files";
                let mimages = fs.readdirSync(dirImage);
                for (let i = 0; i < mimages.length; i++) {
                if (serverpic === mimages[i]) {
                    let confirmPic = mimages[i]
                    result[k].image = confirmPic
                }
                    
                }
                
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
