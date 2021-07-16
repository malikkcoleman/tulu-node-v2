
function ensureAuthenticated(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash('error_msg','Please log in to view this resource');
    res.redirect('/users/login');
}

function authRole(role){
    return (req, res, next) => {
        if (req.user.toObject().role !== role){
            res.status(401)
            return res.send('not allowed')
        }
        next();
    }
}

module.exports = {
    ensureAuthenticated,
    authRole
}