const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema(
    {
        userId: {type: mongoose.Types.ObjectId, ref: "Users" },
        comment:{type:String},
        rating:[{type:Number}],

    }
)