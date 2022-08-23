const sample_airbnbRouter = require('./sample_airbnb')
const sample_analyticsRouter = require('./sample_anylytics')
const homeRouter = require('./home')

const route = (app) => {

    const another_url = [`/`,'/sample_airbnb','/sample_analytics','/sample_geospatial','/sample_duides','/sample_mflix','/sample_restaurants','/sample_supplies','/sample_training','/sample_weatherdata']

    app.use('/sample_airbnb', sample_airbnbRouter);
    app.use('/sample_analytics', sample_analyticsRouter);
    app.use('/', homeRouter);

    // app.use('/sample_geospatial', sample_geospatialRouter);
    // app.use('/sample_duides', sample_duidesRouter);
    // app.use('/sample_mflix', sample_mflixRouter);
    // app.use('/sample_restaurants', sample_restaurantsRouter);
    // app.use('/sample_supplies', sample_suppliesRouter);
    // app.use('/sample_training', sample_trainingRouter);
    // app.use('/sample_weatherdata', sample_weatherdataRouter);
}

module.exports = route