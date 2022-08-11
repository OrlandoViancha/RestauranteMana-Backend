var mongoose = require("mongoose");

const { Schema } = mongoose;

var order = new Schema({
  

  date: {
    type: Date,
    required: true,
  },

  total: {
    type: Number,
    required: true,
  },

  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },

  dispatched:{
    type:Boolean,
    required:true
  },

  description:[{
    amount: {
      type: Number,
      required: true,
    },
  
    subtotal: {
      type: Number,
      required: true,
    },
  
    product: {
      type: Schema.Types.ObjectId,
      ref: 'product',
    },
  
   
  
}]


  
});

module.exports=mongoose.model("order",order);