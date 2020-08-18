/**
 * @Developer Victor Gabriel Martins Silva
 * @Company _UNDEFINED_
 *
 * @description ::Este arquivo declara a porta em que a intancia do serviço irá
 *              ficar em execução.
 */

/**
 * @Developer Victor Gabriel Martins Silva
 * @Company _UNDEFINED_
 *
 * @ModuleImportation
 * @description ::Importação do arquivo app que contém a declaração das
 *              dependências que o serviço irá usar
 */
const app = require('./app');

/**
 * @Developer Victor Gabriel Martins Silva
 * @Company _UNDEFINED_
 *
 * @description ::Dlecaração da porta em que o serviço irá ficar em execução
 */
app.listen(3333);
