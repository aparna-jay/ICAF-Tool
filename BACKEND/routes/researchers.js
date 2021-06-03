const router = require("express").Router();
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");
const Researcher = require("../models/Researcher");

router.post("/", upload.single("image"), async (req, res) => {
    try {
        // Upload image to cloudinary
        const result = await cloudinary.uploader.upload(req.file.path);

        // Create new user
        let researcher = new Researcher({
            name: req.body.name,
            Email: req.body.Email,
            Phone: req.body.Phone,
            Password: req.body.Password,
            Status: req.body.Status,
            avatar: result.secure_url,
            cloudinary_id: result.public_id,
        });
        // Save user
        await researcher.save();
        res.json(researcher);
    } catch (err) {
        console.log(err);
    }
});

router.get("/", async (req, res) => {
    try {
        let researcher = await Researcher.find();
        res.json(researcher);
    } catch (err) {
        console.log(err);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        // Find user by id
        let researcher = await Researcher.findById(req.params.id);
        // Delete image from cloudinary
        await cloudinary.uploader.destroy(researcher.cloudinary_id);
        // Delete user from db
        await researcher.remove();
        res.json(researcher);
    } catch (err) {
        console.log(err);
    }
});

router.put("/:id", upload.single("image"), async (req, res) => {
    try {
        let researcher = await Researcher.findById(req.params.id);
        // Delete image from cloudinary
        await cloudinary.uploader.destroy(researcher.cloudinary_id);
        // Upload image to cloudinary
        let result;
        if (req.file) {
            result = await cloudinary.uploader.upload(req.file.path);
        }
        const data = {
            name: req.body.name || researcher.name,
            Email: req.body.Email || researcher.Email,
            Phone: req.Phone.Phone || researcher.Phone,
            Password: req.body.Password || researcher.Password,
            Status: req.body.Status || researcher.Status,
            avatar: result?.secure_url || researcher.avatar,
            cloudinary_id: result?.public_id || researcher.cloudinary_id,
        };
        researcher = await Researcher.findByIdAndUpdate(req.params.id, data, { new: true });
        res.json(researcher);
    } catch (err) {
        console.log(err);
    }
});

router.get("/:id", async (req, res) => {
    try {
        // Find user by id
        let researcher = await Researcher.findById(req.params.id);
        res.json(researcher);
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;