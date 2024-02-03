const User = require('../models/User');
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' })
}

//Login user
const loginUser = async(req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.login(email, password)

        //create token
        const token = createToken(user._id)

        res.status(200).json({ user, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//Register user
const registerUser = async(req, res) => {
    const { staff } = req.body

    try {
        const user = await User.register(staff)

        //create token
        const token = createToken(user._id)

        res.status(200).json({ user, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// Update profile
const updateUserProfile = async(req, res) => {
    try {
        const { section, category } = req.body;
        const { email } = req.params;

        let profilePicturePath = ''; // Initialize an empty string

        // Check if a file was uploaded
        if (req.file) {
            const { staffID } = req.body;
            profilePicturePath = process.env.SERVER_URL + `/uploads/img-${staffID}.${req.file.originalname.split('.').pop()}`;

            try {
                // Attempt to unlink (delete) the existing image file(s) matching the wildcard
                const files = await fs.readdir('public/uploads');
                const matchingFiles = files.filter(file => file.startsWith(`img-${staffID}.`));

                // Delete each matching file
                await Promise.all(matchingFiles.map(async file => {
                    const filePath = `public/uploads/${file}`;
                    await fs.unlink(filePath);
                }));
            } catch (error) {
                // File(s) doesn't exist or other error occurred (which is fine in this context)
            }
        } else {
            // No new file uploaded, retain the existing profile picture path
            const existingUser = await User.findOne({ Staff_Email: email });
            if (existingUser) {
                profilePicturePath = existingUser.Staff_ProfilePicture;
            }
        }

        const result = await User.updateProfile(email, section, category, profilePicturePath);

        if (result.success) {
            res.status(200).json(result.user);
        } else {
            res.status(400).json({ error: result.message });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getAllCategory = async(req, res) => {
    try {
        const categoryData = await User.getAllCategory();
        res.status(200).json(categoryData)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getAllSection = async(req, res) => {
    try {
        const sectionData = await User.getAllSection();
        res.status(200).json(sectionData)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    registerUser,
    loginUser,
    updateUserProfile,
    getAllCategory,
    getAllSection
}