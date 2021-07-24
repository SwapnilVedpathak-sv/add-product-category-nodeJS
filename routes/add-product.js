const express = require("express");
const router = express.Router();
// const 


// app.get("/products", checkAuth, async (req, res) => {
//     try {
//       const getAllData = await ProductsData.find();
//       res.status(200).send(getAllData);
//     } catch (e) {
//       res.status(501).send(e);
//     }
//   });
  
//   // Get Request For Only Single Product
  
//   app.get("/products/:id", checkAuth, async (req, res) => {
//     try {
//       const _id = req.params.id;
//       const getSingleData = await ProductsData.findById(_id);
//       res.send(getSingleData);
//     } catch (e) {
//       res.send(e);
//     }
//   });
  
//   // Put Request For Update Specific Product
  
//   app.put("/products/:id",checkAuth, async (req, res) => {
//     try {
//       const _id = req.params.id;
//       const putRequest = await ProductsData.findByIdAndUpdate(
//         _id,
//         req.body,
//         {
//           new: true,
//         }
//       );
//       res.send(putRequest);
//     } catch (e) {
//       res.send(e);
//     }
//   });
  
//   // Patch Request For Update Specific Product
  
//   app.patch("/products/:id",checkAuth, async (req, res) => {
//     try {
//       const _id = req.params.id;
//       const patchRequest = await ProductsData.findByIdAndUpdate(
//         _id,
//         req.body,
//         {
//           new: true,
//         }
//       );
//       res.send(patchRequest);
//     } catch (e) {
//       res.send(e);
//     }
//   });
  
//   // Delete Request For Delete Specific Product
  
//   app.delete("/products/:id",checkAuth, async (req, res) => {
//     try {
//       const _id = req.params.id;
//       const deleteRequest = await ProductsData.findByIdAndDelete(_id);
//       res.send(deleteRequest);
//     } catch (e) {
//       res.send(e);
//     }
//   });

module.exports = router;