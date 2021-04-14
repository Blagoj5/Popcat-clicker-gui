import puppeteer from 'puppeteer';
import { Browser } from 'puppeteer';
import { Page } from 'puppeteer';

export class Clicker {
  page: Page;
  browser: Browser;
  headless: boolean;
  clickedTimes: number = 0;

  // Time 17 secs - 1500 clicks
  async initScript(headless: boolean) {
    this.clickedTimes = 0;
    this.browser = await puppeteer.launch({
      headless: headless,
    });

    const howMany = document.getElementById('select');

    const pages: Page[] = [];
    // Create pages
    for (
      let index = 0;
      index < +(howMany as HTMLSelectElement).value;
      index++
    ) {
      const page = await this.browser.newPage();
      await page.goto('https://popcat.click/');
      pages.push(page);
    }

    const startDate = document.getElementById('startDate');
    if (startDate) {
      const span = document.createElement('span');
      span.textContent = ` ${new Date().toString()}, `;
      startDate.appendChild(span);
      startDate.style.display = 'block';
    }

    // let i = 0;
    while (true) {
      for (let index = 0; index < pages.length; index++) {
        const page = pages[index];

        await page.keyboard.press('a');
        await page.keyboard.press('d');
        await page.keyboard.press('w');
        await page.keyboard.press('g');
        await page.keyboard.press('p');
        this.clickedTimes += 5;
      }
      // i += 1;
      // console.log('Clicked');
    }

    // await this.exit();
  }

  async exit() {
    if (this.browser) {
      const finishDate = document.getElementById('finishDate');
      if (finishDate) {
        const text = document.createTextNode(` ${new Date().toString()}, `);
        finishDate.appendChild(text);
        finishDate.style.display = 'block';
      }

      const timesClicked = document.getElementById('timesClicked');
      if (timesClicked) {
        const clicks = document.createTextNode(
          `${this.clickedTimes.toString()}, `
        );
        timesClicked.appendChild(clicks);
        timesClicked.style.display = 'block';
      }
      await this.browser.close();
    }
  }
}
