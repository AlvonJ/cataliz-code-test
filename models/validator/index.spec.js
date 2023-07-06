const chai = require('chai');
const expect = chai.expect;
const validator = require('./index');
const bookSchema = require('../book/book-schema');
const bookValidator = validator(bookSchema);

describe('validators', () => {
  describe('bookValidator', () => {
    it('validates name:string:required, author:string:required, pages:number:required, year:number:required', () => {
      const validPayload = {
        name: 'Decision in Normandy',
        author: "Carlo D'Este",
        pages: 560,
        year: 1991,
      };
      const input = bookValidator(validPayload);
      const actual = true;
      expect(input).to.equal(actual);
    });

    it('returns error messages if invalid', () => {
      const invalidPayload = {
        name: 23,
        author: null,
        pages: 'test',
      };
      const input = bookValidator(invalidPayload);
      const errorMessage = [
        'Name field is required as string',
        'Author field is required as string',
        'Pages field is required and must be a number',
        'Year field is required and must be a number',
      ].join('\n');

      const actual = {
        error: errorMessage,
      };

      expect(input).to.eql(actual);
    });
  });
});
