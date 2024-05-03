const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      const wordObj = new Word();
      expect(wordObj).to.have.property('word');
    });

    it('should set the "word" property when a new word is created', function () {
      const setWord = new Word('hello');
      expect(setWord.word).to.equal('hello');
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      const takeVowel = new Word('hello');
      const vowelGone = takeVowel.removeVowels();
      expect(vowelGone).to.equal('hll');
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      const takeCons = new Word('ask');
      const conGone = takeCons.removeConsonants();
      expect(conGone).to.equal('a');
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      const pigTalk = new Word('all');
      const speakPig = pigTalk.pigLatin();
      expect(speakPig).to.equal('allyay');
    });
  });
});
