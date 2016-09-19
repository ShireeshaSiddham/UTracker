using Microsoft.LightSwitch;
using System.Text;
using System.Linq;
using System.Collections.Generic;
using System;

namespace LightSwitchApplication
{
    public partial class Months
    {
       

        partial void WorkingDay_Compute(ref int WorkingDay)
        {
            // Set result to the desired field value
            WorkingDay = this.WeekDays - this.Holidays;
        }
        partial void TotalHour_Compute(ref int TotalHour)
        {
            // Set result to the desired field value
            TotalHour = this.WorkingDay * 8;
        }
    }
}