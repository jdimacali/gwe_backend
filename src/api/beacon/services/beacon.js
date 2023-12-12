'use strict';

/**
 * beacon service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::beacon.beacon');
