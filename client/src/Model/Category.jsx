class Category {

    categoryID = null;
    category = null;

    constructor(_categoryID, _category) {
        this.categoryID = _categoryID
        this.category = _category
    }

    set setCategoryID(_categoryID) {
        this.categoryID = _categoryID;
    }
    get getCategoryID() {
        return this.categoryID;
    }

    set setCategory(_category) {
        this.category = _category;
    }
    get getCategory() {
        return this.category;
    }
}

export default Category;