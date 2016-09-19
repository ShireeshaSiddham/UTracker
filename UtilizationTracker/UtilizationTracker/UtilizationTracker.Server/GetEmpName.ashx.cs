using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LightSwitchApplication
{
    /// <summary>
    /// Summary description for GetEmpName
    /// </summary>
    public class GetEmpName : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            context.Response.Write(SessionManager.Session["EmpName"]);
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