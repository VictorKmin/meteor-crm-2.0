/**
 * ТУТ ОПИСУЮВСЮ ПОВЕДІНКУ ТЕМПЛЕЙТА
 */

import {Meteor} from "meteor/meteor";
import './addServiceForm.html';

Template.addServiceForm.events({
    'submit .serviceForm'(e) {
        /**
         *   e.preventDefault(); не перезагружає сторінку при сабміті форми
         */
        e.preventDefault();
        const title = e.target.title;
        const description = e.target.description;
        console.log(title.value);
        console.log(description.value);
        Meteor.call('insertService', {title: title.value, description:description.value}, (error)=> {
            if (error) {
                alert(error.reason)
            } else {
                title.value ='';
                description.value = '';
            }
        })
    }
});