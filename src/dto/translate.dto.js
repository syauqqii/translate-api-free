const Joi = require('joi');

class TranslateDTO {
    static schema = Joi.object({
        text: Joi.string().min(1).required().messages({
            'any.required': 'Text is a required field.',
            'string.empty': 'Text cannot be empty.',
        }),
        source: Joi.string().min(2).required().messages({
            'any.required': 'Source language code is required.',
            'string.empty': 'Source language code cannot be empty.',
            'string.min': 'Source language code must have at least 2 characters.',
        }),
        target: Joi.string().min(2).required().messages({
            'any.required': 'Target language code is required.',
            'string.empty': 'Target language code cannot be empty.',
            'string.min': 'Target language code must have at least 2 characters.',
        }),
    });

    static Check(data) {
        const { error } = this.schema.validate(data, { abortEarly: false });
        if (error) {
            const messages = error.details.map(err => err.message);
            return { valid: false, messages };
        }
        return { valid: true, messages: [] };
    }
}

module.exports = TranslateDTO;