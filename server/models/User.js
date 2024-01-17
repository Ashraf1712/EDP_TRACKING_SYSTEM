const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');
const Schema = mongoose.Schema;

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
    Staff_Department: {
        type: String,
        required: true,
    },
    Staff_Category: {
        type: String,
        required: true,
    },
    Staff_Section: {
        type: String,
        required: true,
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
    if (!validator.isStrongPassword(staff.staffPassword)) {
        throw new Error('Password is not strong enough');
    }

    const exists = await this.findOne({ staffEmail: staff.staffEmail });
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
        Staff_Department: staff.staffDepartment,
        Staff_Category: staff.staffCategory,
        Staff_Section: staff.staffSection
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

    return user;
}

module.exports = mongoose.model('User', userSchema);