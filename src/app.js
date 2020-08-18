/**
 * @Developer Victor Gabriel Martins Silva
 * @Company _UNDEFINED_
 *
 * @description ::Este arquivo declara as depêndecias que são necessarias para a
 *              execução da api
 */

/**
 * @Developer Victor Gabriel Martins Silva
 * @Company _UNDEFINED_
 *
 * @ModuleImportation
 * @description ::Importação do express o framework usado para a criação do serviço
 */
const express = require('express');

/**
 * @Developer Victor Gabriel Martins Silva
 * @Company _UNDEFINED_
 *
 * @ModuleImportation
 * @description ::Importação do cors para liberação de acesso externa à api
 */
const cors = require('cors');

/**
 * @Developer Victor Gabriel Martins Silva
 * @Company _UNDEFINED_
 *
 * @ModuleImportation
 * @description ::Importação das rotas da aplicação
 */
const routes = require('./routes');

/**
 * @Developer Victor Gabriel Martins Silva
 * @Company _UNDEFINED_
 *
 * @description ::Dlecaração da instancia do express
 */
const app = express();

/**
 * @Developer Victor Gabriel Martins Silva
 * @Company _UNDEFINED_
 *
 * @description ::Atribuição do uso do cors a instancia do express
 */
app.use(cors());

/**
 * @Developer Victor Gabriel Martins Silva
 * @Company _UNDEFINED_
 *
 * @description ::Atribuição de interpretação de json à instancia do express
 */
app.use(express.json());

/**
 * @Developer Victor Gabriel Martins Silva
 * @Company _UNDEFINED_
 *
 * @description ::Atribuição das das rotas à instancia do express
 */
app.use(routes);

/**
 * @Developer Victor Gabriel Martins Silva
 * @Company _UNDEFINED_
 *
 * @description ::Exportação do app
 */
module.exports = app;
