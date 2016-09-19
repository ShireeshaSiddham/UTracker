/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewTotalHoursProjectWiseItem.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.TotalHoursProjectwiseforMonth.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.TotalHoursProjectwiseforMonth." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

