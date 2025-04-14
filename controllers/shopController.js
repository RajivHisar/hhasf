

const Shop = require("../models/Shop");

// Add New Shop Data
exports.addShop = async (req, res) => {
    // console.log('record saved')
    try {
        const { name, contactNumber, address, adharcard, pancard, email, city, state, pinCode, shopFlat, shopSize } = req.body;

        // Validate required fields
        if (!name || !contactNumber || !address || !adharcard || !pancard || !email || !city || !state || !pinCode || !shopFlat || !shopSize) {
            return res.status(400).json({ message: "All fields are required!" });
        }

        // Check if the shop already exists based on contact number & shop type
        // const existingShop = await Shop.findOne({ contactNumber, adharcard });
        // if (existingShop) {
        //     return res.status(400).json({ message: "Shop already registered!" });
        // }

        // Create and save the new shop data
        const newShop = new Shop(req.body);
        await newShop.save();

        res.status(201).json({ message: "Shop Data Saved Successfully!", shop: newShop });
    } catch (error) {
        console.error("Error saving shop data:", error);
        res.status(500).json({ message: "Error Saving Shop Data", error: error.message });
    }
};

// Get All Shops (Latest First)
exports.getShops = async (req, res) => {
    // res.send('data showing')
    try {
        const shops = await Shop.find().sort({ _id: -1 }); // Latest records first
        res.status(200).json(shops);
    } catch (error) {
        console.error("Error fetching shop data:", error);
        res.status(500).json({ message: "Error Fetching Shops", error: error.message });
    }
};
