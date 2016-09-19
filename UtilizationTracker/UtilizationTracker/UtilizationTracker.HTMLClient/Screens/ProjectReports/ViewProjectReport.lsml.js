/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewProjectReport.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.ProjectReport.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.ProjectReport." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

