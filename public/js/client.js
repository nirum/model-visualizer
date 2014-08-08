App = Ember.Application.create();

App.Store = DS.Store.extend({
  adapter: 'DS.FixtureAdapter'
});

/* ------
 * ROUTES
 * ------ */
App.Router.map(function() {
  this.route("index", { path: "/" })
  this.route("home")
  this.resource("models", function() {
    this.route("model", { path: '/:model_id' });
  });
});

App.HomeRoute = Ember.Route.extend({
	model: function() {
		return {'foo': 'bar'}
	}
});

App.ModelsIndexRoute = Ember.Route.extend({
  setupController: function(controller) {
    controller.set('models', App.Modelfit.find());
  }
});

//App.ModelsModelRoute = Ember.Route.extend({
  //setupController: function(controller) {
    //controller.set('model', data['model_id']);
  //}
//});

/* ------
 * MODELS
 * ------ */
App.Modelfit = DS.Model.extend({
  name: DS.attr('string'),
  timestamp: DS.attr('string')
})
//App.Modelfit = DS.Model.extend({
  //data: DS.hasMany('iter'),
  //timestamp: DS.attr('string')
//});

App.Iterdata = DS.Model.extend({
  modelfit: DS.belongsTo('modelfit'),
  iter: DS.attr('number'),
  fobj: DS.attr('number')
})

//App.Team.FIXTURES = [{
  //id: 1,
  //name: 'Celtics',
  //colors: 'Green, White'
//}, {
  //id: 2,
  //name: 'Lakers',
  //colors: 'Yellow, Black'
//}, {
  //id: 3,
  //name: 'Bulls',
  //colors: 'Red, Black'
//}, {
  //id: 4,
  //name: 'Mavericks',
  //colors: 'Blue, White'
//}, {
  //id: 5,
  //name: 'Spurs',
  //colors: 'Black, Grey, White'
//}];

App.Modelfit.FIXTURES = [{
  id: 1,
  name: "apple",
  obj: [{
    id: 1,
    iter: 5,
    fobj: 4.242
  }, {
    id: 2,
    iter: 10,
    fobj: 3.142
  }, {
    id: 3,
    iter: 15,
    fobj: 2.983
  }, {
    id: 4,
    iter: 20,
    fobj: 2.851
  }, {
    id: 25,
    iter: 5,
    fobj: 2.843
  }, {
    id: 6,
    iter: 30,
    fobj: 2.811
  }],
  timestamp: "7:42pm June 6, 2014"
}, {
  id: 2,
  name: "orange",
  obj: [{
    id: 1,
    iter: 10,
    fobj: 19.1012
  }, {
    id: 2,
    iter: 20,
    fobj: 16.9234
  }, {
    id: 3,
    iter: 30,
    fobj: 14.2459
  }, {
    id: 4,
    iter: 40,
    fobj: 13.5235
  }],
  timestamp: "9:13am July 14, 2014"
}];

//{
  //"apple": {
    //"data": [{
      //'id': 1,
      //'iter': 5,
      //'fobj': 4.242
    //}, {
      //'id': 2,
      //'iter': 10,
      //'fobj': 3.142
    //}, {
      //'id': 3,
      //'iter': 15,
      //'fobj': 2.983
    //}, {
      //'id': 4,
      //'iter': 20,
      //'fobj': 2.851
    //}, {
      //'id': 25,
      //'iter': 5,
      //'fobj': 2.843
    //}, {
      //'id': 6,
      //'iter': 30,
      //'fobj': 2.811
    //}],
    //"timestamp": "7:42pm June 6, 2014"
  //},
  //"orange": {
    //obj: [{
      //'_id': 1,
      //'iter': 10,
      //'fobj': 19.1012
    //}, {
      //'_id': 2,
      //'iter': 20,
      //'fobj': 16.9234
    //}, {
      //'_id': 3,
      //'iter': 30,
      //'fobj': 14.2459
    //}, {
      //'_id': 4,
      //'iter': 40,
      //'fobj': 13.5235
    //}],
    //"timestamp": "9:13am July 14, 2014"
  //}
//}
