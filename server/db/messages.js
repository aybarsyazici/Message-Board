const Joi = require('joi');
const db = require('./connection');

const schema = Joi.object().keys({
    username: Joi.string().alphanum().required(),
    subject: Joi.string().required(),
    message: Joi.string().max(500).required(),
    imageURL: Joi.string().uri({
        scheme: [
            '/https?/'
        ]
    })
});

const messages = db.get('messages');

function getAll() {
    return messages.find();
}

create = message => {
    try
    {
        Joi.assert(message, schema);
        message.create = new Date();
        return messages.insert(message);
    }
    catch(error)
    {
        return Promise.reject(error.details);
    }
}

module.exports = {getAll, create};