using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using System.Configuration;
using System.Data;
using System.IO;
using System.Net.Mail;
using Microsoft.VisualStudio.WebHost;

namespace LightSwitchApplication
{
    /// <summary>
    /// Summary description for SendEmail
    /// </summary>
    public class SendEmail : IHttpHandler
    {
      

        public void ProcessRequest(HttpContext context)
        {
            //context.Response.ContentType = "text/plain";
            //context.Response.Write("Hello World");
            // DataSet dsH = new DataSet();
            DataTable dt = new DataTable();
            string connString = System.Web.Configuration.WebConfigurationManager.ConnectionStrings["IntrinsicKey"].ConnectionString;
            SqlConnection conn = new SqlConnection(connString);
            string getWeekTrack = "select * from EmployeeProject where EmpID='10019'";
            SqlDataAdapter daH = new SqlDataAdapter(getWeekTrack, conn);
            MailMessage message = new MailMessage();
            daH.Fill(dt);

            //SessionManager.Session["EmailData"] = dt;
            //var s = SessionManager.Session["EmailData"];
            //message.Body = Convert.To;
            //context.Response.ClearContent();
            //context.Response.AppendHeader(
            //"content-disposition", "attachment;filename=Company.xls");
            //context.Response.ContentType =
            //"application/excel";
            //StringWriter stringWriter = new StringWriter();
            //HtmlTextWriter htmlTextWriter = new HtmlTextWriter(stringWriter);
            //string headerrow = @" <table> <tr > <td align='center' colspan='15'><h2><i>Company Report</i><h2> </td> </tr></table>";
            //string tablerow1 = @" <table><tr><td align='center' colspan='6'><h3> FromDate </h3> </td><td colspan='3'></td><td  align='center' colspan='6'><h3> To Date  </h3> </td></tr></table> ";
            //context.Response.Write(headerrow);
            //context.Response.Write(tablerow1);
            //string style = @"<style> .textmode { } </style>";
            //context.Response.Write(style);
            //gridView.RenderControl(htmlTextWriter);

            //context.Response.Write(style);
            //context.Response.Write(stringWriter.ToString());
            //context.Response.End();


            //HttpContext.Current.Response.ClearContent();
            ////Response.ClearContent();
            //HttpContext.Current.Response.AppendHeader(
            //"content-disposition", "attachment;filename=Company.xls");
            //HttpContext.Current.Response.ContentType =
            //"application/excel";
            //StringWriter stringWriter = new StringWriter();
            //HtmlTextWriter htmlTextWriter = new HtmlTextWriter(stringWriter);
            //string headerrow = @" <table> <tr > <td align='center' colspan='15'><h2><i>Company Report</i><h2> </td> </tr></table>";
            //string tablerow1 = @" <table><tr><td align='center' colspan='6'><h3> FromDate</h3> </td><td colspan='3'></td><td  align='center' colspan='6'><h3> To Date  </h3> </td></tr></table> ";
            //HttpContext.Current.Response.Write(headerrow);
            //HttpContext.Current.Response.Write(tablerow1);
            //string style = @"<style> .textmode { } </style>";
            //HttpContext.Current.Response.Write(style);
            //gridView.RenderControl(htmlTextWriter);


            //HttpContext.Current.Response.Write(style);
            //HttpContext.Current.Response.Write(stringWriter.ToString());
            string htmlTableStart = "<table>";
           // string htmlTableStart = "<table style=\"border-style: solid; text-align:left;\" >";
            string htmlTableEnd = "</table>";
            string htmlHeaderRowStart = "<tr style =\"background-color:#6FA1D2; color:#ffffff;\">";
            string htmlHeaderRowEnd = "</tr>";
            string htmlTrStart = "<tr style =\"color:#555555;\">";
            string htmlTrEnd = "</tr>";
            string htmlTdStart = "<td style=\" border-color:#5c87b2; border-style:solid; border-width:thin; padding: 5px;\">";
            string htmlTdEnd = "</td>";


            message.Subject = "Weekly Utilization";
            message.Body = "Please find the attached Utilization Tracker: ";


            message.Body += htmlTableStart;

            message.Body += htmlTrStart;
            message.Body += htmlHeaderRowStart;
            message.Body += htmlTdStart;
            message.Body += "EmpID";
            message.Body += htmlTdEnd;
            message.Body += htmlTdStart;
            message.Body += "ProjectID";
            message.Body += htmlTdEnd;
            message.Body += htmlTdStart;
            message.Body += "TaskID";
            message.Body += htmlTdEnd;
            message.Body += htmlTdStart;
            message.Body += "SubProject";
            message.Body += htmlTdEnd;
            message.Body += htmlTdStart;
            message.Body += "MonthID";
            message.Body += htmlTdEnd;
            message.Body += htmlTdStart;
            message.Body += "Date";
            message.Body += htmlTdEnd;
            message.Body += htmlTdStart;
            message.Body += "Hours";
            message.Body += htmlTdEnd;
            message.Body += htmlHeaderRowEnd;
            message.Body += htmlTrEnd;

            //string k = "";
            //DataRow row;
            if (dt.Rows.Count > 0)
            {
                
                for (int i = 0; i < dt.Rows.Count; i++)
                {
                    message.Body += htmlTrStart;

                    //k = htmlTrStart + k + htmlTrEnd + "<br/>" + Environment.NewLine;
                    // k = k +  "<br/>";
                    // k =  k  + "<br/>" + Environment.NewLine;
                    //row = dt.NewRow();
                    for (int j = 0; j < dt.Columns.Count; j++)
                    {
                        message.Body += htmlTdStart;
                        string s = dt.Rows[i][j].ToString();
                        //k +=  " " + htmlTdStart+ s+ htmlTdEnd;
                        //k =  htmlTdStart +k+ " " + s + htmlTdEnd;
                       //k+= s;
                        message.Body += s+htmlTdEnd;

                    }
                    message.Body += htmlTrEnd;
                    //dt.Rows.Add(row);
                    // k = htmlTrStart + k + htmlTrEnd +  "<br/>" + Environment.NewLine;
                    //k =  k  + "<br/>" + Environment.NewLine;
                }
            }

            //message.Body += htmlTrStart + k + htmlTrEnd;
            message.Body += htmlTableEnd;
            //message.Body += htmlTrStart + k + htmlTrEnd + htmlTableEnd;
            // message.Body = message.Body + htmlTrStart + k + htmlTrEnd + htmlTableEnd;
            // //Attachment at = new Attachment(HttpContext.Current.Server.MapPath("")); 
            // //message.Attachments.Add(at);
            //message.Priority = MailPriority.High;
            message.IsBodyHtml = true;
            SmtpClient smtp = new SmtpClient("");
            message.To.Add("shireesha.siddham@datamigrationresources.com");
            message.From = new MailAddress("shireesha.siddham@datamigrationresources.com");
            smtp.Send(message);



            //GridView gridView = new GridView();
            //gridView.DataSource = dt;
            //gridView.DataBind();

            //context.Response.Clear();
            //context.Response.Buffer = true;
            //context.Response.AddHeader("content-disposition",
            //    "attachment;filename=DataTable.doc");
            //context.Response.Charset = "";
            //context.Response.ContentType = "application/vnd.ms-word ";
            //StringWriter sw = new StringWriter();
            //HtmlTextWriter hw = new HtmlTextWriter(sw);
            //gridView.RenderControl(hw);
            //context.Response.Output.Write(sw.ToString());
            //context.Response.Flush();
            //context.Response.End();
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