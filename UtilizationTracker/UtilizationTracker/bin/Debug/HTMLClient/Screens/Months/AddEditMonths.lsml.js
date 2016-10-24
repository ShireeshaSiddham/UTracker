/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.AddEditMonths.created = function (screen)
{
    // Write code here.
    msls.showLogOut = true;
    
};

myapp.AddEditMonths.WorkingDay_postRender = function (element, contentItem)
{
    // Write code here.
    // Write code here.
    function updateWorkingDay() {
        contentItem.screen.WorkingDay =
            contentItem.screen.Months.WeekDays - contentItem.screen.Months.Holidays;
           
    }
    // force the entity to be updated
    contentItem.dataBind("screen.Months.WeekDays", updateWorkingDay);
    contentItem.dataBind("screen.Months.Holidays", updateWorkingDay);
};
myapp.AddEditMonths.TotalHour_postRender = function (element, contentItem) {
    // Write code here.
    // Write code here.
    function updateTotalHour() {
        contentItem.screen.TotalHour =
            (contentItem.screen.Months.WeekDays - contentItem.screen.Months.Holidays) * 8;
           
    }
    // force the entity to be updated
    contentItem.dataBind("screen.Months.WeekDays", updateTotalHour);
    contentItem.dataBind("screen.Months.Holidays", updateTotalHour);
};

myapp.AddEditMonths.NoOfDay_postRender = function (element, contentItem)
{
    function daysInMonth() {
        var year = contentItem.screen.Months.Year;
        var monthname = contentItem.screen.Months.MonthName;
        var months = {
            January: 1, February: 2, March: 3, April: 4, May: 5, June: 6,
            July: 7, August: 8, September: 9, October: 10, November: 11, December: 12
        };
        var month = months[monthname];
        contentItem.screen.NoOfDay = new Date(year, month, 0).getDate();
    }
    //force the entity to be updated
    contentItem.dataBind("screen.Months.Year", daysInMonth);
    contentItem.dataBind("screen.Months.MonthName", daysInMonth);
    //// Write code here.
    //function daysInMonth() {
    //    var y = contentItem.screen.Months.Year;
    //   // var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    //    var months = {January:1, February:2, March:3, April:4, May:5, June:6, 
    //        July: 7, August: 8, September: 9, October: 10, November: 11, December: 12
    //    };
    //    var s=contentItem.screen.Months.MonthName;
    //    var m = months[s];
    //    //var m = months.indexOf(contentItem.screen.Months.MonthName) + 1;
    //    contentItem.screen.NoOfDay= new Date(contentItem.screen.Months.Year, m, 0).getDate();
    //}

    ////force the entity to be updated
    //contentItem.dataBind("screen.Months.Year", daysInMonth);
    //contentItem.dataBind("screen.Months.MonthName", daysInMonth);
};
