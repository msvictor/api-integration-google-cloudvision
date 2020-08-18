const vision = require('@google-cloud/vision');

class CloudVision {
  async index(req, res) {
    try {
      const client = new vision.ImageAnnotatorClient();
      const { imageUrl } = req.body;

      var arrayLabels = [];

      const [result] = await client.labelDetection(imageUrl);

      const labels = result.labelAnnotations;
      labels.forEach(label => arrayLabels.push(label.description));

      return res.json({
        labels: arrayLabels
      });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new CloudVision();
