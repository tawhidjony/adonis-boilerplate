'use strict'

const User = use('App/Models/User');
const Logger = use('Logger')

class RegisterController {

    async index({ view }){
        return view.render('auth.register')
    }
    async store({ request, auth, response, session }){
        const {username, email, password} = request.all();

        try {
            const user_created = await User.create({
                username,
                email,
                password
            });

            const loogdin = await auth.login(user_created);

            if(loogdin){
                session.flash({
                    notification: {
                    type:'success',
                    message:'Ragistration successfully done!'
                    }
                })
            }
            
            return response.redirect('/dashboard')
        } catch (error) {
            Logger.error(error)
            session.flash({
                notification: {
                type:'danger',
                message:'Ragistration faild!'
                }
            })
            return response.redirect('back')
        }

    }

    async logout({ auth, response }){

        try {
            await auth.logout();
            return response.redirect('/login')
        } catch (error) {
            return response.redirect('back')
        }

    }

}

module.exports = RegisterController
