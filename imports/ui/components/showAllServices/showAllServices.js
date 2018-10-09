import { Services } from '/imports/api/services/services.js';
import './showAllServices.html';


Template.info.helpers({
    services() {
        return Services.find({});
    },
});
