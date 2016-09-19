using System;
using System.Collections.Generic;
using System.Web;
using System.Data.SqlClient;
using System.Data;

namespace LightSwitchApplication
{
    /// <summary>
    /// Summary description for SendDate
    /// </summary>
    public class SendDate : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
           
            //string Month = context.Request.Form["month"];
            //string MonthName = Month.ToString("MMMM");
            //context.Response.ContentType = "text/plain";
            //    context.Response.Write(MonthName);
           
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}