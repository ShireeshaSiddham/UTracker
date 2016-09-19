/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewProjectDetail1.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.ProjectDetail.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.ProjectDetail." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

