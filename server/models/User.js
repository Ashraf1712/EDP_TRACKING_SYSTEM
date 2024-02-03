const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');
const Category = require('../models/Category');
const Section = require('../models/Section');

const userSchema = new mongoose.Schema({
    Staff_ID: {
        type: String,
        required: true,
        unique: true,
    },
    Staff_Email: {
        type: String,
        required: true,
        unique: true,
    },
    Staff_Password: {
        type: String,
        required: true,
    },
    Staff_Name: {
        type: String,
        required: true,
    },
    Staff_ReportedTo: {
        type: String,
        required: true,
    },
    Department_ID: {
        type: String,
        required: true,
        unique: true,
    },
    Category_ID: {
        type: String,
        required: true,
        unique: true,

    },
    Section_ID: {
        type: String,
        required: true,
        unique: true,

    },
    Staff_Roles: {
        type: String,
        required: true,
        default: "User",
    },
    Staff_ProfilePicture: {
        type: String,
        required: true,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
    },

    created_at: {
        type: Date,
        default: Date.now,
    },
    updated_at: {
        type: Date,
        default: Date.now,
    }
}, { collection: 'Staff' });


//Static signup
userSchema.statics.register = async function(staff) {
    //Validation
    if (!staff.staffEmail || !staff.staffPassword) {
        throw new Error('All field must be filled');
    }
    if (!validator.isEmail(staff.staffEmail)) {
        throw new Error('Email is not valid');
    }
    if (!validator.isEmail(staff.staffReportedTo)) {
        throw new Error('Reported Email is not valid');
    }
    if (!validator.isStrongPassword(staff.staffPassword)) {
        throw new Error('Password is not strong enough');
    }

    const exists = await this.findOne({ Staff_Email: staff.staffEmail });
    if (exists) {
        throw new Error('User already exists');
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(staff.staffPassword, salt);
    const user = await this.create({
        Staff_ID: staff.staffID,
        Staff_Email: staff.staffEmail,
        Staff_Password: hash,
        Staff_Name: staff.staffName,
        Staff_ReportedTo: staff.staffReportedTo,
        Department_ID: staff.departmentID,
        Category_ID: staff.categoryID,
        Section_ID: staff.sectionID
    })

    return user;
}

//static login
userSchema.statics.login = async function(email, password) {
    //validation
    if (!email || !password) {
        throw new Error('All field must be filled');
    }
    if (!validator.isEmail(email)) {
        throw new Error('Email is not valid');
    }

    const user = await this.findOne({ Staff_Email: email });

    if (!user) {
        throw new Error('User not found');
    }

    const isMatch = await bcrypt.compare(password, user.Staff_Password);

    if (!isMatch) {
        throw new Error('Incorrect password');
    }

    return user
}

userSchema.statics.updateProfile = async function(email, section, category, profilePicturePath) {
    try {
        if (!section || !category || !profilePicturePath) {
            throw new Error('All fields must be filled');
        }
        const updatedUser = await this.findOneAndUpdate({ Staff_Email: email }, {
            $set: {
                Section_ID: section,
                Category_ID: category,
                Staff_ProfilePicture: profilePicturePath,
                updated_at: Date.now()
            }
        });

        if (!updatedUser) {
            throw new Error('User not found or not updated');
        }

        const updatedUserData = await this.findOne({ Staff_Email: email });

        return {
            success: true,
            message: 'User updated successfully',
            user: updatedUserData,
        };
    } catch (error) {
        return {
            success: false,
            message: error.message,
        };
    }
}

userSchema.statics.getAllCategory = async() => {
    try {
        // Use the find method to get all categories
        const categories = await Category.find({});

        // Return the array of categories
        return categories;
    } catch (error) {
        // Handle any errors that occur during the query
        console.error('Error fetching categories:', error);
        throw error;
    }
}

userSchema.statics.getAllSection = async() => {
    try {
        // Use the find method to get all categories
        const section = await Section.find({});

        // Return the array of categories
        return section;
    } catch (error) {
        // Handle any errors that occur during the query
        console.error('Error fetching section:', error);
        throw error;
    }
}

module.exports = mongoose.model('User', userSchema);