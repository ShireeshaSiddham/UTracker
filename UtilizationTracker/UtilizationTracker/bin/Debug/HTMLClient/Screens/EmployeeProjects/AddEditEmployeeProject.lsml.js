/// <reference path="~/GeneratedArtifacts/viewModel.js" />


myapp.AddEditEmployeeProject.created = function (screen) {
    // Write code here.
    msls.showLogOut = true;
   


    //var defaultValue = "July";
    //var filter = "(ProductName eq " + msls._toODataString(defaultValue, ":String") + ")";
    //defaultLookup(screen.EmployeeProject.Months.MonthName, "EmployeeProject", "EmployeeProjects", { filter: filter });
};

//function defaultLookup(entity, destinationPropertyName, sourceCollectionName, options) {

//    options = options || {}; // Force options to be an object
//    var source = myapp.activeDataWorkspace.UtilizationTrackerData[sourceCollectionName]; // DataServiceQuery
//    var query = {}; //DataServiceQuery
//    if (options.filter) {
//        query = source.filter(options.filter);
//    } else {
//        query = source.top(1);
//    }
//    query.execute().then(function (result) {
//        entity[destinationPropertyName] = result.results[0];
//    });
//};

myapp.AddEditEmployeeProject.c_Date_postRender = function (element, contentItem) {
    // Write code here.

};
myapp.AddEditEmployeeProject.Months_postRender = function (element, contentItem) {
    //contentItem.screen.EmployeeProject.Months.selectedItem = "January";
    // Write code here.
    function updateMonth() {
        var month = contentItem.screen.EmployeeProject.c_Date;
        var Fdate = new Date(month),
        Fmnth = ("0" + (Fdate.getMonth() + 1)).slice(-2).toString("MMMM"),
                        Fday = ("0" + Fdate.getDate()).slice(-2);
        Fyear = Fdate.getFullYear();
        var FrmDate = Fyear + "-" + Fmnth + "-" + Fday;

        var month = new Array();
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";

        var d = new Date(FrmDate);
        var n = month[d.getMonth()];
        if (n != undefined) {
            // element.innerHTML = n;
            //contentItem.screen.EmployeeProject.element.toString = n;
            //myapp.activeDataWorkspace.UtilizationTrackerData.EmployeeProjects.filter();
        }
    }
    contentItem.dataBind("screen.EmployeeProject.c_Date", updateMonth);
};