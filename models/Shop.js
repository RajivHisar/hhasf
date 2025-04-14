const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema({
    name: { type: String, required: true },
    contactNumber: { type: String, required: true },
    address: { type: String, required: true },
    adharcard: { type: String, required: true },
    pancard: { type: String, required: true },
    email: { type: String, required: true},
    city: { type: String, required: true },
    state:{ type: String, required: true},
    pinCode: { type: String, required: true },
    shopFlat: { type: String, required: true },
    shopSize:{ type: String, required: true}
}, { timestamps: true });

module.exports = mongoose.model('Shop', shopSchema);
