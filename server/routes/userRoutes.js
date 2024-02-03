const express = require('express');
const router = express.Router();
const multer = require('multer');
const { registerUser, loginUser, updateUserProfile, getAllCategory, getAllSection } = require('../controllers/userController');

// Configure Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads'); // Adjust the destination folder as needed
    },
    filename: (req, file, cb) => {
        if (file && file.originalname) {
            const { staffID } = req.body; // Assuming staffID is part of the route parameters
            cb(null, `img-${staffID}.${file.originalname.split('.').pop()}`);
        } else {
            cb(new Error('No file provided')); // Error for no file
        }
    },
});

const fileFilter = (req, file, cb) => {
    // Accept only jpg and png files
    if (!file || (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png')) {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type. Only JPG and PNG files are allowed.'));
    }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });



// Login module
router.post('/login', loginUser);

// Register module
router.post('/register', registerUser);

// Update profile module
router.put('/updateProfile/:email', upload.single('profilePicture'), updateUserProfile);

router.get('/getCategory', getAllCategory)
router.get('/getSection', getAllSection)

module.exports = router;