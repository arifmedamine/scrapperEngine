const puppeteer = require("puppeteer");

const BASE_URL = "https://www.monoprix.tn/";
const PODCAST_URL = "https://clickandcollect.monoprix.tn/12-epicerie-sucree?page=3";
async function scrapeEpisodeLinks() {
    let browser = await puppeteer.launch({
        headless: false
    }); //headless:false so we can watch the browser as it works 
    let page = await browser.newPage(); //open a new page
    await page.goto(PODCAST_URL); //access the podcasts page

    let episodes_details = await page.evaluate(() => {
        //Extract each episode's basic details
        let table = document.querySelector("#js-product-list");
        let episode_panels = Array.from(table.children);

        // Loop through each episode and get their details 
        let episodes_info = episode_panels.map(episode_panel => {
            let title = episode_panel.querySelector(".h3 product-title").textContent;
            let datetime = episode_panel.querySelector(".regular-price").textContent;
            return {
                title,
                datetime,
            };
        });
        return episodes_info;
    });

    console.log(episodes_details)
    // Close the browser when everything is done 
    await browser.close()
}
scrapeEpisodeLinks()
