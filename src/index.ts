class URLBuilder {
  search: Params;

  constructor(private baseURL: string) {
    this.search = new Params();
  }

  get URL() {
    const search = this.search.format();
    return `${this.baseURL}${search}`;
  }
}

export default URLBuilder;

class Params {
  private params: Map<string, string | number | boolean>;

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

  set(key: string, value: string | number | boolean) {
    this.params.set(key, value);
  }

  delete(key: string) {
    this.params.delete(key);
  }
}
