'use strict'

class Login {
  get rules () {
    return {
      // validation rules
      email: 'required|email',
      password: 'required|min:6',
    }
  }

  get messages(){
    return {
      'email.required'      : 'A valid email address is required.',
      'password.required'   : 'Password must be provided.',
      'password.min'        : 'Password minimum length should be 6'
    }
  }

  async fails(errorMessage){
    this.ctx.session.withErrors(errorMessage).flashAll()
    return this.ctx.response.redirect('back')
  }

}

module.exports = Login
