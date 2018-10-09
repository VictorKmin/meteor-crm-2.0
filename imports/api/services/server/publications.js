import { Meteor } from 'meteor/meteor';
import { Services } from '../services.js';

/**
 * Тут дописуємо публікації. Догуглити шо це
 */

Meteor.publish('services.all', function () {
    return Services.find();
});
