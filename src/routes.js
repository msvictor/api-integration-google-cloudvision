const express = require("express");
const path = require('path')
const vision = require('@google-cloud/vision');


const routes = express.Router();

routes.get('/', async (req, res) => {
    const client = new vision.ImageAnnotatorClient();
    const imageLink = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ad40959c-ba83-4597-9892-2da2a52182f3/dam7o1p-751bff21-f50a-4e80-af6e-dc02d327e23b.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYWQ0MDk1OWMtYmE4My00NTk3LTk4OTItMmRhMmE1MjE4MmYzXC9kYW03bzFwLTc1MWJmZjIxLWY1MGEtNGU4MC1hZjZlLWRjMDJkMzI3ZTIzYi5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.K1H2oNGfqrGSZm-FhMBmAV0O_M-bd9OQpMxJaHksxXM'

    try {
      // const [result] = await client.labelDetection(path.join(__dirname, './resources/wakeupcat.jpg'));
      const [result] = await client.labelDetection(imageLink);

      const labels = result.labelAnnotations;
      console.log('Labels:');
      labels.forEach(label => console.log(label.description));

    } catch (error) {
      console.log(error);
    }

});

module.exports = routes;
