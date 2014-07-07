(function () {
    String.prototype.format = function () {
        // use this string as the format
        // walk through each argument passed in
        for (var fmt = this, ndx = 0; ndx < arguments.length; ++ndx) {
            // replace {0} with argument[0], {1} with argument[1], etc.
            fmt = fmt.replace(new RegExp('\\{' + ndx + '\\}', "g"), arguments[ndx]);
        }
        // return the formatted string
        return fmt;
    };
})();

// do action when history/hash changes
var W = window;
var replayPage = function () { // Note: We are using statechange instead of popstate
    // log the State
    var state = History.getState(); // Note: We are using History.getState() instead of event.state
    console.log('statechange:', state);
    var stateData = state.data;
    var fetchurl = stateData.fetchurl;
    if (!!fetchurl) {
        $.ajax(fetchurl).done(
        function (data) {
            //0: "appViewModel" --root
            //1: "ProductsViewModel" --property of root and same as constructor name
            //2: "areas" -- for rendering ajax data
            var dataTargets = stateData.datatarget.split('.');
            var root = W[dataTargets[0]];
            var initFunc = dataTargets[1];
            var viewDataProperty = dataTargets[2];
            var viewModel = new W[initFunc](root);
            root[initFunc](viewModel);
            viewModel[viewDataProperty](eval(data));

            //var areasForProduct = new AreasViewModel(root);
            //root.rootAreas(areasForProduct);
            //areasForProduct.areas(areas);
        }
    );
    }
};
// Bind to State Change
History.Adapter.bind(window, 'statechange', replayPage);

// do action when load page
$(document).ready(function () {
    replayPage();
});


