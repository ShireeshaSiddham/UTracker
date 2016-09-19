using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


namespace LightSwitchApplication
{
    /// <summary>
    /// Summary description for Handler2
    /// </summary>
    public class Handler2 : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            context.Response.Write(SessionManager.Session["Role"]);
            //var p = SessionManager.Session["UserName"];
  
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