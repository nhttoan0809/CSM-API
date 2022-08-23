class HomeController{

    // [GET] /
    index(req, res){
        const another_url = [`/`,'/sample_airbnb','/sample_analytics']
        return res.json({
            url: '/',
            data: `don't dave any data on this api`,
            'another-url': another_url
        })
    }
}

module.exports = new HomeController;