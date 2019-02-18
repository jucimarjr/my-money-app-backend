const express = require('express')

module.exports = function(server){
    // Definir a URL base

    const router = express.Router()
    server.use('/api', router)

    // rotas

    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router,'/billingCycles')

}