const UserModel = require("../../models/User.model");

module.exports = (req, res, next) => {

    console.log('\n\n\nGET USER BY TOKEN HERE...\n');
    
    const accesToken = req.headers['authorization']
    console.log('token need to check: ', accesToken);
    UserModel.find({}, (err, docs) => {
        if(!err){
            if(!docs){
                return res.json({
                    status: 'Failure',
                    message: `Not found user docs`
                })
            }

            let id_user = ""
            docs.forEach((user) => {
                user.access_token.forEach((token) => {
                    if(token===accesToken){
                        id_user = `${user._id}`
                    }
                })
            })

            if(id_user!==""){
                console.log(`\n\n\nVALID TOKEN: ${accesToken}\n`)
                console.log(`Matching user: ${id_user}\n\n`)
                req.id_user = id_user
                next();
            }
            else{
                console.log(`Token don't match with any user\n\n\n`);
                return res.json({
                    status: 'Failure',
                    message: `Token don't match with any user`
                });
            }
        }
        else {
            return res.json({
                status: 'Failure',
                message: `Can't access to db!!!`
            })
        }
    });

}