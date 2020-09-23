'use strict'

class LoginController {

    async index({ view }){
        return view.render('auth.login')
    }
    async store({ request, auth, response , session}){
        const {email, password} = request.all();
        try {
            const login = await auth.attempt(email, password)
            if (login) {
                session.flash({
                    notification: {
                        type:'success',
                        message:'Login successfully'
                    }
                })
            }
            return response.redirect('/dashboard')
        } catch (error) {
            session.flash({
                notification: {
                    type:'danger',
                    message:'Login faild!'
                }
            })
            return response.redirect('back')
        }
    }
}

module.exports = LoginController
