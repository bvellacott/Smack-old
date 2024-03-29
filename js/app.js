App = Ember.Application.create();
App.ApplicationAdapter = DS.LSSerializer.extend({ namespace : 'browser-server' });

//App.Router.map(function() {
//	  this.route("posts", { path: "/" }, function() {
//	    this.route("new", { path: "/new" });
//	    this.route("comments", { path: "/comments" }, function() {
//	      this.route("new", { path: "/new" });
//	    });
//	  });
//	});
App.Router.map(function() {
  this.route('about');
  this.route('posts', function() {
    this.route('post', {path: '/:post_id' });
  });
});

App.PostsRoute = Ember.Route.extend({
  model : function() {
    return posts;
  }
});

App.PostRoute = Ember.Route.extend({
  model: function(params) {
    console.log("Whatever!!");
    return posts.findBy('id', params.post_id);
  }
});

App.PostController = Ember.Controller.extend({
  isEditing: false,
  
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },
  
    doneEditing: function() {
      this.set('isEditing', false);
    }
  }
});

//Ember.Handlebars.helper('format-date', function(date) {
//  return moment(date).fromNow();
//});

//var showdown = new Showdown.converter();
//
//Ember.Handlebars.helper('format-markdown', function(input) {
//  return new Handlebars.SafeString(showdown.makeHtml(input));
//});

App.Post = DS.Model.extend({
//	id : DS.attr('string'),
	title : DS.attr('string'),
	author : DS.attr('string'),
	date : DS.attr('date'),
	excerpt : DS.attr('string'),
	body : DS.attr('string'),
});

//Account = {
//	IsDeleted: DS.attr('boolean', {updateable : false}),
//	MasterRecordId: DS.belongsTo('Account', { async : true, updateable : false, inverse : null }),
//	Name: DS.attr('string', {updateable : true}),
//	BillingLatitude: DS.attr('number', {updateable : true}),
//	ChildAccounts: DS.hasMany('Account', { async : true, inverse : 'ParentId', })
//};

var posts = [{
  id: '1',
  title: "Rails is Omakase",
  author: { name: "d2h" },
  date: new Date('12-27-2012'),
  excerpt: "There are lots of à la carte software environments in this world. Places where in order to eat, you must first carefully look over the menu of options to order exactly what you want.",
  body: "I want this for my ORM, I want that for my template language, and let's finish it off with this routing library. Of course, you're going to have to know what you want, and you'll rarely hve your horizon expanded if you always order the same thing, but there it is. It's a very popular way of consuming software.\n\nRails is not that. Rails is omakase."
}, {
  id: '2',
  title: "The Parley Letter",
  author: { name: "d2h" },
  date: new Date('12-24-2012'),
  excerpt: "My [appearance on the Ruby Rogues podcast](http://rubyrogues.com/056-rr-david-heinemeier-hansson/) recently came up for discussion again on the private Parley mailing list.",
  body: "A long list of topics were raised and I took a time to ramble at large about all of them at once. Apologies for not taking the time to be more succinct, but at least each topic has a header so you can skip stuff you don't care about.\n\n### Maintainability\n\nIt's simply not true to say that I don't care about maintainability. I still work on the oldest Rails app in the world."
}, {
  id: '3',
  title: "New Post",
  author: { name: "Benjamin" },
  date: new Date('12-13-2014'),
  excerpt: "Posting with Philippe",
  body: "Happy birthday Sara!!"
}];


