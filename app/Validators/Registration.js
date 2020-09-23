'use strict'

class Registration {
  get rules () {
    return {
      // validation rules
      username: 'required',
      email: 'required|email|unique:users',
      password: 'required|min:6',
    }
  }

  get messages(){
    return {
      'username.required'     : 'username is required.',
      'email.required'        : 'A valid email address is required.',
      'password.required'     : 'Password must be provided.',
      'password.min'          : 'Password minimum length should be 6'
    }
  }

  async fails(errorMessage){
    this.ctx.session.withErrors(errorMessage).flashAll()
    return this.ctx.response.redirect('back')
  }

}

module.exports = Registration
