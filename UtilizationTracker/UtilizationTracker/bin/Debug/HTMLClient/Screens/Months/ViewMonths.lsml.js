/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewMonths.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.Months.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.Months." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}


myapp.ViewMonths.created = function (screen) {
    // Write code here.
    msls.showLogOut = true;
};
myapp.ViewMonths.Back_execute = function (screen) {
    // Write code here.
    window.history.go(-1);
};
myapp.ViewMonths.Back_postRender = function (element, contentItem) {
    // Write code here.
    $(element).children().addClass("Back");
    $(element).css({ "min-width": 1 });
};