'use strict';

/**
 * beacon router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::beacon.beacon');
