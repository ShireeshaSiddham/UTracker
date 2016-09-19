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