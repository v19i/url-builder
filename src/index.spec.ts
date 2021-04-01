import "mocha";
import chai from "chai";
chai.should();
const expect = chai.expect;
import URLBuilder from "./index";

describe("URLBuilder", () => {
  describe("constructor", () => {
    // it("should require a base path", () => {
    //   expect(() => new URLBuilder()).to.throw("baseURL is requried");
    // });
  });

  it("should return a url", () => {
    const b = new URLBuilder("https://a.valid.url/with/a/long/path");

    b.URL.should.equal("https://a.valid.url/with/a/long/path");
  });

  describe("search params", () => {
    it("should allow to add a search params", () => {
      const b = new URLBuilder("https://a.valid.url/");
      b.search.set("key", "value");

      b.URL.should.equal("https://a.valid.url/?key=value");
    });

    it("should allow to add multiple search param", () => {
      const b = new URLBuilder("https://a.valid.url/");
      b.search.set("key", "value");
      b.search.set("key2", "value2");

      b.URL.should.equal("https://a.valid.url/?key=value&key2=value2");
    });

    it("should allow to edit an existing search param", () => {
      const b = new URLBuilder("https://a.valid.url/");
      b.search.set("key", "value");
      b.search.set("key", "new_value");

      b.URL.should.equal("https://a.valid.url/?key=new_value");
    });

    it("should allow to remove search params", () => {
      const b = new URLBuilder("https://a.valid.url/");
      b.search.set("key", "value");
      b.search.set("key2", "value2");
      b.search.delete("key2");

      b.URL.should.equal("https://a.valid.url/?key=value");
    });

    it("should encode search special characters", () => {
      const b = new URLBuilder("https://a.valid.url/");
      b.search.set("key", "value");
      b.search.set("email", "an@email.address");

      b.URL.should.equal(
        "https://a.valid.url/?key=value&email=an%40email.address"
      );
    });
  });
});
