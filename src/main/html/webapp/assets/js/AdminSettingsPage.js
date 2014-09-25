//model
Template = can.Model({
	findAll : 'GET /admin/templates',
	findOne : 'POST /admin/templates',
	destroy : 'POST /admin/templates/delete',
	create : 'POST /admin/templates/update',
	update : 'POST /admin/templates/update'
}, {});

// controller
AdminSettingsPage = can
		.Control({

			"init" : function(element, options) {
				var that = this;
				Template.findAll({}, function(snippets) {
					that.element.html(can.view('/views/admin/settings.ejs',
							snippets));
					$("#content").fadeIn();
				}, function(message) {
					new ErrorPage(that.element, {
						status : message.statusText,
						message : message.responseText
					});
				});

			},

			'.icon-pencil click' : function(el, ev) {

				template = el.parent().parent().data('template');
				bootbox.animate(false);
				var oldText = template.attr('text');
				bootbox
						.confirm(
								'<h4>'
										+ template.attr('key')
										+ '</h4><form><textarea class="field span5" id="message" rows="10" name="message" width="30" height="20">'
										+ oldText + '</textarea></form>',
								function(result) {
									if (result) {
										var text = $('#message').val();
										template.attr('text', text);
										template.save();
									}
								});

			}

		});