'use strict';

/**
 * beacon controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::beacon.beacon');
