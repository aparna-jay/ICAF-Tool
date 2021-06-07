// const router = require("express").Router();
// const cloudinary = require("../utils/cloudinary");
// const upload = require("../utils/multer");
// const Workshop = require("../models/Workshop");
//
// router.post("/", upload.single("image"), async (req, res) => {
//     try {
//         // Upload image to cloudinary
//         const result = await cloudinary.uploader.upload(req.file.path);
//
//         // Create new user
//         let workshop = new Workshop({
//             name: req.body.name,
//             Email: req.body.Email,
//             Phone: req.body.Phone,
//             Password: req.body.Password,
//             Status: req.body.Status,
//             avatar: result.secure_url,
//             cloudinary_id: result.public_id,
//         });
//         // Save user
//         await workshop.save();
//         res.json(workshop);
//     } catch (err) {
//         console.log(err);
//     }
// });
//
//
// router.get("/", async (req, res) => {
//     try {
//         let workshop = await Workshop.find();
//         res.json(workshop);
//     } catch (err) {
//         console.log(err);
//     }
// });
//
// router.delete("/:id", async (req, res) => {
//     try {
//         // Find user by id
//         let workshop = await Workshop.findById(req.params.id);
//         // Delete image from cloudinary
//         await cloudinary.uploader.destroy(workshop.cloudinary_id);
//         // Delete user from db
//         await workshop.remove();
//         res.json(workshop);
//     } catch (err) {
//         console.log(err);
//     }
// });
//
// router.put("/:id", upload.single("image"), async (req, res) => {
//     try {
//         let workshop = await Workshop.findById(req.params.id);
//         // Delete image from cloudinary
//         await cloudinary.uploader.destroy(workshop.cloudinary_id);
//         // Upload image to cloudinary
//         let result;
//         if (req.file) {
//             result = await cloudinary.uploader.upload(req.file.path);
//         }
//         const data = {
//             name: req.body.name || workshop.name,
//             Email: req.body.Email || workshop.Email,
//             Phone: req.body.Phone || workshop.Phone,
//             Password: req.body.Password || workshop.Password,
//             Status: req.body.Status || workshop.Status,
//             avatar: result?.secure_url || workshop.avatar,
//             cloudinary_id: result?.public_id || workshop.cloudinary_id,
//         };
//         workshop = await Workshop.findByIdAndUpdate(req.params.id, data, { new: true });
//         res.json(workshop);
//     } catch (err) {
//         console.log(err);
//     }
// });
//
// router.get("/:id", async (req, res) => {
//     try {
//         // Find user by id
//         let workshop = await Workshop.findById(req.params.id);
//         res.json(workshop);
//     } catch (err) {
//         console.log(err);
//     }
// });
//
// module.exports = router;
