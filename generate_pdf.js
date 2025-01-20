const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Replace this URL with your live-server address
  await page.goto("http://102.208.170.116:8080", { waitUntil: "networkidle0" });

  // Wait for the slideshow to render (if needed)
  await page.waitForTimeout(2000);

  // Export the PDF
  await page.pdf({
    path: "slides.pdf",
    format: "A4",
    printBackground: true,
  });
  console.log("PDF generated: slides.pdf");
  await browser.close();
})();
