'use strict';
const request = require('request')

/**
 *  home controller
 */

const { createCoreController } = require('@strapi/strapi').factories;


module.exports = createCoreController('api::home.home', ({strapi }) => ({
    async find(ctx) {
        const qs = require('qs');
        const query = qs.stringify({
        populate: '*', 
        }, {
        encodeValuesOnly: true,
        });

        await request(`/api/homes?${query}`);
        // GET /api/articles?populate=%2A

        const { data, meta } = await super.find(ctx)

        meta.data = Data.now()

        return {data, meta}
    }
}));



