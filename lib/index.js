class URLBuilder {
    constructor(baseURL) {
        this.baseURL = baseURL;
        this.search = new Params();
    }
    get URL() {
        const search = this.search.format();
        return `${this.baseURL}${search}`;
    }
}
export default URLBuilder;
class Params {
    constructor() {
        this.params = new Map();
    }
    format() {
        if (this.params.size === 0) {
            return "";
        }
        const params = [];
        for (const [key, value] of this.params) {
            params.push(`${key}=${encodeURIComponent(value)}`);
        }
        return "?" + params.join("&");
    }
    set(key, value) {
        this.params.set(key, value);
    }
    delete(key) {
        this.params.delete(key);
    }
}
