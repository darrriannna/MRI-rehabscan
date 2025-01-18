const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const hostname = 'https://rehabscan.se'; // Replace with your site URL
const routes = [
  '/',                // Add all your routes here
  '/about',
  '/bookappointment',
  '/mri-booking',
  '/service-page',
  '/restrictions',
];

(async () => {
  try {
    const sitemap = new SitemapStream({ hostname });
    const writeStream = createWriteStream('./build/sitemap.xml');

    for (const route of routes) {
      sitemap.write({ url: route, changefreq: 'weekly', priority: 0.8 });
    }

    sitemap.end();
    streamToPromise(sitemap)
      .then((data) => writeStream.write(data))
      .then(() => console.log('Sitemap generated successfully!'))
      .catch((err) => console.error('Error generating sitemap:', err));
  } catch (err) {
    console.error('Failed to generate sitemap:', err);
  }
})();
