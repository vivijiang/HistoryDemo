
function AppViewModel() {
    var self = this;
    self.ProductsViewModel = ko.observable();
    self.AreasViewModel = ko.observable();
    self.BlurbViewModel = ko.observable();
}

function ProductsViewModel(root) {
    var self = this;
    self.root = root;
    self.products = ko.observableArray();
    self.activeProductId = ko.observable();

    self.clickProduct = function (data, event) {
        var activeProductId = $(event.target).attr('data-id');
        self.activeProductId(activeProductId);
        //Pushes a new state to the browser; data can be null or an object, title can be null or a string, url must be a string
        History.pushState({ fetchurl: '/JSON/Areas/?product={0}'.format(activeProductId), datatarget: 'appViewModel.AreasViewModel.areas' }, '', '?product=' + activeProductId);

    };
}


function AreasViewModel(root) {
    var self = this;
    self.root = root;
    self.areas = ko.observableArray();
    self.activeAreaId = ko.observable();
    self.clickArea = function (data, event) {
        var activeAreaId = $(event.target).attr('data-id');
        self.activeAreaId(activeAreaId);
        //var activeProductId = self.root.ProductsViewModel().activeProductId();
        var state = /\?product=(\d+)&?/.exec(History.getState().url); // Note: We are using History.getState() instead of event.state
        var activeProductId = state[1];
        var fetchQuery = '?product={0}&area={1}'.format(activeProductId, activeAreaId);
        History.pushState({ fetchurl: '/JSON/Blurbs/' + fetchQuery, datatarget: 'appViewModel.BlurbViewModel.blurbs' }, '', fetchQuery);
    };

}

function BlurbViewModel(root) {
    var self = this;
    self.root = root;
    self.blurbs = ko.observableArray();
    self.activeBlurbId = ko.observable();
    self.clickBlurb = function (data, event) {
        console.log('click blurb');
    };

}