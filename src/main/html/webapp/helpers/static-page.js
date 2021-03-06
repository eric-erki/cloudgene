import $ from 'jquery';
import Control from 'can-control';
import stache from 'can-stache';

import ErrorPage from 'helpers/error-page';

export default Control.extend({

  "init": function(element, options) {
    try {

      if (options.page) {
        options.template = "static/" + options.page + ".stache";
      }

      $.get(options.template,
        function(data) {
          var view = stache(data);
          if (view) {
            $(element).html(view());
          } else {
            new ErrorPage(element, {
              status: "404",
              message: "Oops, Sorry We Can't Find That Page!"
            });
          }
        });

    } catch (e) {
      new ErrorPage(element, {
        status: "404",
        message: "Oops, Sorry We Can't Find That Page!"
      });
    }
  }

});
