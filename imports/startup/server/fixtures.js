// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Links } from '../../api/links/links.js';
import { Services } from '../../api/services/services.js';


/**
 * Тут описується те, що буде в базі данних по замовчуванню
 */

Meteor.startup(() => {
    /**
     * Якщо нема лінків // далі видалю
     */
  if (Links.find().count() === 0) {
    const data = [
      {
        title: 'Do the Tutorial',
        url: 'https://www.meteor.com/try',
        createdAt: new Date(),
      },
      {
        title: 'Follow the Guide',
        url: 'http://guide.meteor.com',
        createdAt: new Date(),
      }
    ];

    data.forEach(link => Links.insert(link));
  }

    /**
     * Якщо нема сервісів
     */
    if (Services.find().count() === 0) {
        const data = [
            {
                title: 'Атвтогенерація',
                description: 'Ці данні створені автоматично за допомогою файлу fixtures',
                createdAt: new Date(),
            },
            {
                title: 'Autogenerated',
                description: 'This services is generated automate with fixtures file',
                createdAt: new Date(),
            }
        ];

        data.forEach(service => Services.insert(service));
    }
});