exports.getLogIn = (req, res, next) => {    
    res.render('auth/login', {
        pageTitle: 'login page',
        isAuthenticated: false
    })
}

exports.postLogin = (req, res, next) => {
    req.session.isLoggedIn = true
    console.log(req.session)
    res.redirect('/')
}