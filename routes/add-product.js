const express = require("express");
const router = express.Router();
const ProductsData = require('./../model/add-productModel')

// Get Request For Add Product

router.post("/products", (req, res) => {
    const postRequest = new ProductsData(req.body)
    postRequest.save().then(() => {
        res.status(201).send(postRequest);
    }).catch((err) => {
        res.status(400).send(err);
    })
});

// Get Request For All Product

router.get("/products", async (req, res) => {
    try {
        const getAllData = await ProductsData.find();
        res.status(200).send(getAllData);
    } catch (e) {
        res.status(501).send(e);
    }
});

// Get Request For Only Single Product

router.get("/products/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getSingleData = await ProductsData.findById(_id);
        res.send(getSingleData);
    } catch (e) {
        res.send(e);
    }
});

// Put Request For Update Specific Product

router.put("/products/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const putRequest = await ProductsData.findByIdAndUpdate(
            _id,
            req.body,
            {
                new: true,
            }
        );
        res.send(putRequest);
    } catch (e) {
        res.send(e);
    }
});

// Patch Request For Update Specific Product

router.patch("/products/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const patchRequest = await ProductsData.findByIdAndUpdate(
            _id,
            req.body,
            {
                new: true,
            }
        );
        res.send(patchRequest);
    } catch (e) {
        res.send(e);
    }
});

// Delete Request For Delete Specific Product

router.delete("/products/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const deleteRequest = await ProductsData.findByIdAndDelete(_id);
        res.send(deleteRequest);
    } catch (e) {
        res.send(e);
    }
});

module.exports = router;