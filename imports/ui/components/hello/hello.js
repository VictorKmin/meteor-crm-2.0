import {Accounts} from 'meteor/accounts-base'
import './hello.html';

/**
 * Що б мати логінацію потрібно встановлені пакети
 * accounts-ui
 * accounts-password
 */

Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY'
});

Template.hello.onCreated(function helloOnCreated() {
    this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
    counter() {
        return Template.instance().counter.get();
    },
});

Template.hello.events({
    'click button'(event, instance) {
        // increment the counter when button is clicked
        instance.counter.set(instance.counter.get() + 1);
    },
});
