/**
 * @Developer Victor Gabriel Martins Silva
 * @Company _UNDEFINED_
 *
 * @description ::Este arquivo declara as funções relacionadas a utilização da api
 *              do google cloud vision
 */

/**
 * @Developer Victor Gabriel Martins Silva
 * @Company _UNDEFINED_
 *
 * @ModuleImportation
 * @description ::Importação do sdk do google cloud vision
 */
const vision = require('@google-cloud/vision');

/**
 * @Developer Victor Gabriel Martins Silva
 * @Company _UNDEFINED_
 *
 * @description ::Inicio da classe
 */
class CloudVision {
  /**
   * @Developer Victor Gabriel Martins Silva
   * @Company _UNDEFINED_
   *
   * @description ::middleware assincrono usado na requisição da rota '/'
   */
  async index(req, res) {
    /**
     * @Developer Victor Gabriel Martins Silva
     * @Company _UNDEFINED_
     *
     * @description ::inicio de um bloco de codigo try/catch
     */
    try {
      /**
       * @Developer Victor Gabriel Martins Silva
       * @Company _UNDEFINED_
       *
       * @description ::intancia de um client do sdk do cloud vision com o método
       *               de processamento de image
       */
      const client = new vision.ImageAnnotatorClient();

      /**
       * @Developer Victor Gabriel Martins Silva
       * @Company _UNDEFINED_
       *
       * @description ::captura do link da imagem vinda do corpo da requisição
       */
      const { imageUrl } = req.body;

      /**
       * @Developer Victor Gabriel Martins Silva
       * @Company _UNDEFINED_
       *
       * @description ::declaração de um vetor para armazenar as labels trazidas
       *              pelo cliente do sd do cloud vision
       */
      var arrayLabels = [];

      /**
       * @Developer Victor Gabriel Martins Silva
       * @Company _UNDEFINED_
       *
       * @description ::declara os tipo de funcionalidade aplicada na imagem, em
       *              que nesse caso é o de detecção de labels
       */
      const [result] = await client.labelDetection(imageUrl);

      /**
       * @Developer Victor Gabriel Martins Silva
       * @Company _UNDEFINED_
       *
       * @description ::pegas as labels resultantes
       */
      const labels = result.labelAnnotations;

      /**
       * @Developer Victor Gabriel Martins Silva
       * @Company _UNDEFINED_
       *
       * @description ::adiciona cada label no vetor de labels
       */
      labels.forEach(label => arrayLabels.push(label.description));

      /**
       * @Developer Victor Gabriel Martins Silva
       * @Company _UNDEFINED_
       *
       * @description ::retorna o vetor de labels como resultado da requisição
       */
      return res.json({
        labels: arrayLabels,
      });
    } catch (error) {
      /**
       * @Developer Victor Gabriel Martins Silva
       * @Company _UNDEFINED_
       *
       * @description ::da log em um caso ocorra
       */
      console.log(error);
    }
  }
}

/**
 * @Developer Victor Gabriel Martins Silva
 * @Company _UNDEFINED_
 *
 * @description ::Exportação da instancia da classe
 */
module.exports = new CloudVision();
