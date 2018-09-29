module.exports = class Category {

    constructor(id, category) {
        this.id = id;
        this.category = category;
    }

    getId() {
        return this.id;
    }

    getCategory() {
        return this.category;
    }

    static getInstance(item) {
        let id = Category.fetchValueFromEvent(item, 'id', null);
        let category = Category.fetchValueFromEvent(item, 'category', null);

        return new Category(id, category);
    }

    static fetchValueFromEvent(event, key, defaultValue) {
        if (event.hasOwnProperty(key)) {
            return event[key];
        } else {
            return defaultValue;
        }
    }
};