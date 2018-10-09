import {Meteor} from 'meteor/meteor';
import {Services} from '../services/services';

/**
 * Тут пишуться всі методи до нашої колекції
 */

Meteor.methods({
    "insertService"({title, description}) {
        if (title === '' || description === '') {
            throw new Error('Something field is empty')
        } else {
            Services.insert({
                createdAt: new Date(),
                owner: Meteor.userId(),
                username: Meteor.user().username,
                title,
                description
            });
        }
    },

    "updateService"({id, description}) {
        if (description === '') {
            throw new Error('Something field is empty')
        } else {
            Services.update(
                {_id: id},
                {
                    $set: {
                        description,
                        updatedAt: new Date()
                    }
                }
            )
        }
    }
});