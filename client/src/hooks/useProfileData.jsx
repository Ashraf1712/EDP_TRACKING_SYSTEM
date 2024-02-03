import { getCategory, getSection } from "../Services/userService";
import { useState, useEffect } from "react";

export const useProfileData = () => {
    const [categories, setCategories] = useState([]);
    const [sections, setSections] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch categories and set state
                const allCategories = await getCategory();
                setCategories(allCategories);

                // Fetch sections and set state
                const allSections = await getSection();
                setSections(allSections);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures the effect runs only once on mount

    return { categories, sections };
};

