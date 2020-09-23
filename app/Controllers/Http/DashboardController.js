'use strict'

class DashboardController {

    async index({view}){
        return view.render('backend.dashboard')
    }
}

module.exports = DashboardController
