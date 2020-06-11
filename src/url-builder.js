class URLBuilder {
  #baseURL;
  
  constructor(baseURL) {
    if (isNotAString(baseURL)) {
      throw new Error("baseURL is requried");
    }

    this.#baseURL = baseURL;
    this.search = new Params();
  }

  get URL() {
    const search = this.search.format();
    return `${this.#baseURL}${search}`;
  }
}

module.exports = URLBuilder;

function isNotAString(x) {
  return typeof x !== "string" || x.length === 0;
}

class Params {
  #params

  constructor() {
    this.#params = {};
  }

  format() {
    const keys = Object.keys(this.#params);
    if (keys.length === 0) {
      return "";
    }

    const params = keys.map((key, i) => {
      const value = encodeURIComponent(this.#params[key]);
      return `${key}=${value}`;
    });

    return "?" + params.join("&");
  }

  add(key, value) {
    this.#params[key] = value;
  }

  del(key) {
    delete this.#params[key];
  }
}
