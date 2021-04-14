import puppeteer from 'puppeteer';

// TODO: ADD FORCE QUIT BTN, ADD MULTIPLE TABS OPTION
export const popScript = async (headless: boolean = false) => {
  const browser = await puppeteer.launch({
    headless,
  });
  const page = await browser.newPage();
  await page.goto('https://popcat.click/');
  //   const startDate = document.querySelector('#startDate');
  const startDate = document.getElementById('startDate');
  if (startDate) {
    const span = document.createElement('span');
    span.textContent = ` ${new Date().toString()}`;
    startDate.appendChild(span);
    startDate.style.display = 'block';
  }
  let i = 0;
  while (i < 100) {
    await page.keyboard.press('a');
    await page.keyboard.press('d');
    await page.keyboard.press('w');
    await page.keyboard.press('g');
    await page.keyboard.press('p');
    i += 1;
    console.log('Clicked');
  }
  const finishDate = document.getElementById('finishDate');
  if (finishDate) {
    const text = document.createTextNode(` ${new Date().toString()}`);
    finishDate.appendChild(text);
    finishDate.style.display = 'block';
  }

  const timesClicked = document.getElementById('timesClicked');
  if (timesClicked) {
    const clicks = document.createTextNode((i * 5).toString());
    timesClicked.appendChild(clicks);
    timesClicked.style.display = 'block';
  }
  await page.screenshot({ path: 'dokaz.png' });
  await browser.close();
};
