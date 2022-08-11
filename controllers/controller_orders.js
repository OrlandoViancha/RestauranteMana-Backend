const getOrders=function(req, res){

    res.send("GET ORDERS")
}

const orderDelivered =function(req, res){

    res.send("ORDERS DELIVERED")
}

module.exports = {getOrders,orderDelivered}