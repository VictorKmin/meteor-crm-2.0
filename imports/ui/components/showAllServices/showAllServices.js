import {Services} from '/imports/api/services/services.js';
import {Meteor} from "meteor/meteor";
import './showAllServices.html';


Template.showAllServices.onCreated(function () {
    Meteor.subscribe('services.all');
});


Template.showAllServices.helpers({
    services() {
        return Services.find({});
    },
});

Template.showAllServices.events({
    'click #deleteService'() {
        const id = this._id;
        Meteor.call('removeService', id)
    },

    'click #updateService'(){
        const id = this._id;
        console.log(id);

        let titleElement = $(event.path[1]).find('h2');
        let descriptionElement = $(event.path[1]).find('.description');

        let parent = titleElement.context
        console.log(parent);


    }
});

