module.exports = class Category {

    constructor(id, category) {
        this.id = id;
        this.category = category;
    }

    convertEventToCategory(event) {
        const DEFAULT_ID = 'id';
        const DEFAULT_CATEGORY = 'default-category';
        this.id = Category.fetchValueFromEvent(event, 'id', DEFAULT_ID);
        this.category = Category.fetchValueFromEvent(event, 'category', DEFAULT_CATEGORY);
    }

    static fetchValueFromEvent(event, key, defaultValue) {
        if (event.hasOwnProperty(key)) {
            return event[key];
        } else {
            return defaultValue;
        }
    }
};