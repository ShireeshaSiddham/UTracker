using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LightSwitchApplication
{
    /// <summary>
    /// Summary description for TotalWorkedHours
    /// </summary>
    public class TotalWorkedHours : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            context.Response.Write(SessionManager.Session["TotalWorkedHours"]);
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