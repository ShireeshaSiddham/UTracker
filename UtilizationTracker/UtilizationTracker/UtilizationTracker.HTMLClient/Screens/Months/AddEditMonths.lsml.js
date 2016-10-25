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
            contentItem.screen.WeekDay - contentItem.screen.Months.Holidays;
           
    }
    // force the entity to be updated
    //contentItem.dataBind("screen.Months.WeekDay", updateWorkingDay);
    contentItem.dataBind("screen.Months.Holidays", updateWorkingDay);
};
myapp.AddEditMonths.TotalHour_postRender = function (element, contentItem)
{
    // Write code here.
    function updateTotalHour() {
        contentItem.screen.TotalHour =
            (contentItem.screen.WeekDay - contentItem.screen.Months.Holidays) * 8;
           
    }
    // force the entity to be updated
    //contentItem.dataBind("screen.Months.WeekDay", updateTotalHour);
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
       
        var d = new Date(year, month,-1);
        var TotalDays = contentItem.screen.NoOfDay;
        var sat = new Array();   //Declaring array for inserting Saturdays
        var sun = new Array();   //Declaring array for inserting Sundays

        for (var i = 1; i <= TotalDays; i++) {    //looping through days in month
            var newDate = new Date(d.getFullYear(), d.getMonth(), i)
            if (newDate.getDay() == 0) {   //if Sunday
                sat.push(i);
            }
            if (newDate.getDay() == 6) {   //if Saturday
                sun.push(i);
            }
        }
        var WeekEnds = sat.length + sun.length;
        if (TotalDays > 0) {
            contentItem.screen.WeekDay = TotalDays - WeekEnds;
        }
    }
    //force the entity to be updated
    contentItem.dataBind("screen.Months.Year", daysInMonth);
    contentItem.dataBind("screen.Months.MonthName", daysInMonth);
};
