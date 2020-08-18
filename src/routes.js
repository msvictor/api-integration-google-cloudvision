/**
 * @Developer Victor Gabriel Martins Silva
 * @Company _UNDEFINED_
 *
 * @description ::Este arquivo declara as rotas da aplicação
 */

/**
 * @Developer Victor Gabriel Martins Silva
 * @Company _UNDEFINED_
 *
 * @ModuleImportation
 * @description ::Importação da instancia do express
 */
const express = require('express');

/**
 * @Developer Victor Gabriel Martins Silva
 * @Company _UNDEFINED_
 *
 * @ModuleImportation
 * @description ::Importação da instancia do arquivo CloudVision
 */
const CloudVision = require('./controllers/CloudVision');

/**
 * @Developer Victor Gabriel Martins Silva
 * @Company _UNDEFINED_
 *
 * @description ::Declaração da instancia de roteamento do express
 */
const routes = express.Router();

/**
 * @Developer Victor Gabriel Martins Silva
 * @Company _UNDEFINED_
 *
 * @description ::Rota com o método post, que faz referencia ao middleware contido
 *              no arquivo CloudVision, ao fazer uma requisição na rota '/' o
 *              middleware index do aquivo CloudVision é executado
 */
routes.post('/', CloudVision.index);

/**
 * @Developer Victor Gabriel Martins Silva
 * @Company _UNDEFINED_
 *
 * @description ::Exportação das rotas
 */
module.exports = routes;
