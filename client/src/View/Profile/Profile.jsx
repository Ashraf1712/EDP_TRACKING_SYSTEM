import { useState, useEffect } from "react";
import SubmitHeader from "../../Components/SubmitHeader";
import Avatar from "../../Components/Avatar/Avatar";
import { useAuthContext } from "../../hooks/useAuthContext";
import DropdownProfile from "../../Components/Dropdown/DropdownProfile";
import { updateUserProfile } from "../../Services/userService";
import { useProfileData } from "../../hooks/useProfileData";



export default function Profile() {
    const { user, dispatch } = useAuthContext();
    const { categories, sections } = useProfileData();
    // State hooks for form fields
    const [section, setSection] = useState("");
    const [category, setCategory] = useState("");
    const [profilePicture, setProfilePicture] = useState(null);
    const [staffID, setStaffID] = useState("");

    useEffect(() => {
        // Populate form fields with user data on component mount
        if (user) {
            setSection(user.Section_ID || "");
            setCategory(user.Category_ID || "");
            setProfilePicture(user.Staff_ProfilePicture || null);
            setStaffID(user.Staff_ID || "");
        }
    }, [user]);

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await updateUserProfile(user.Staff_Email, {
            staffID,
            section,
            category,
            profilePicture,
        }, user.token);

        if (response) {
            console.log("True")
            localStorage.setItem('user', JSON.stringify({ user: { ...response } }))
            dispatch({ type: 'LOGIN', payload: { user: { token: response.token, ...response } } })
        }
    };



    return (
        <div className="pt-24">
            <SubmitHeader onSubmit={handleSubmit} />
            <header className="bg-white shadow">
                <div className="mx-auto px-2 py-4 sm:px-4 lg:px-6">
                    <h1 className="text-lg font-bold tracking-tight text-gray-900">
                        Update Profile
                    </h1>
                </div>
            </header>
            <main>
                <Avatar src={user.Staff_ProfilePicture} />
                <form className="flex flex-col" encType="multipart/form-data">
                    {/* Form fields for Section, Category, and Profile Picture */}
                    <div className="flex flex-row">
                        <div className="w-1/2 p-4">
                            <DropdownProfile
                                data={sections}
                                labelText="Select Section"
                                valueKey="Section_ID"
                                textKey="Section"
                                value={section}
                                onChange={(e) => setSection(e.target.value)}
                            />
                            <p>{section}</p>
                        </div>
                        <div className="w-1/2 p-4">
                            <DropdownProfile
                                data={categories}
                                labelText="Select Category"
                                valueKey="Category_ID"
                                textKey="Category"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            />

                            <p>{category}</p>

                        </div>
                    </div>
                    <div className="w-1/2 p-4">
                        <label htmlFor="profilePicture" className="block text-sm font-medium text-gray-700">
                            Profile Picture
                        </label>
                        <input
                            type="file"
                            id="profilePicture"
                            accept="image/*"
                            onChange={(e) => setProfilePicture(e.target.files[0])}
                        />
                        {profilePicture && profilePicture.name && (
                            <div className="mt-2 text-sm text-gray-500">
                                Selected file: {profilePicture.name}
                            </div>
                        )}
                    </div>
                </form>
            </main>
        </div>
    );
}
