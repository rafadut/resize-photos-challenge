'use strict';
module.exports = function(app) {
  var imageList = require('../controllers/imageListController');

  // imageList Routes
  app.route('/images')
    .get(imageList.list_all_tasks)
    .post(imageList.create_a_task);


  app.route('/images/:taskId')
    .get(imageList.read_a_task)
    .put(imageList.update_a_task)
    .delete(imageList.delete_a_task);
};