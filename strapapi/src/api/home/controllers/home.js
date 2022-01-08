'use strict';
const request = require('request')

/**
 *  home controller
 */

const { createCoreController } = require('@strapi/strapi').factories;


module.exports = createCoreController('api::home.home');



