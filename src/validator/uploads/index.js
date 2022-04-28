/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
const InvariantError = require('../../exceptions/InvariantError');
const { ImageHeadersSchema } = require('./schema');
 
const UploadsValidator = {
  validateImageHeaders: (headers) => {
    const validationResult = ImageHeadersSchema.validate(headers);
 
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};
 
module.exports = UploadsValidator;
