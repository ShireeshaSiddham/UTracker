using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LightSwitchApplication
{
    /// <summary>
    /// Summary description for GetProjectRole
    /// </summary>
    public class GetProjectRole : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            context.Response.Write(SessionManager.Session["ProjectRole"]);
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