'use strict';

/**
 * art service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::art.art');
