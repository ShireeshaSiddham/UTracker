using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.SqlClient;
using System.Data;
using System.Net.Mail;
using System.Globalization;

namespace LightSwitchApplication
{
    /// <summary>
    /// Summary description for SendWeeklyUT
    /// </summary>
    public class SendWeeklyUT : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            //string s3 = context.Request.Form["ff"];
            string FromDate = context.Request.Form["FrmDate"];
            string FCDate = context.Request.Form["FCDate"];
            //FromDate = FromDate.ToString('dd/MM/yyyy');
            //DateTime date = DateTime.ParseExact(FromDate, "dd/MM/YYYY", null);
            string TCDate = context.Request.Form["TCDate"];
            string ToDate = context.Request.Form["ToDate"];
            string SendEmailTo = context.Request.Form["SendEmailTo"];

            string ProjectSelection = context.Request.Form["ProjectSelection"];

            var EmpID = SessionManager.Session["EmpID"];
            var EmpName = SessionManager.Session["EmpName"];
            var EMail = SessionManager.Session["Email"];
            var ManagerMail = SessionManager.Session["ManagerMail"];
            DataTable dt = new DataTable();
            string connString = System.Web.Configuration.WebConfigurationManager.ConnectionStrings["IntrinsicKey"].ConnectionString;
            SqlConnection conn = new SqlConnection(connString);
            if (ProjectSelection == "")
            {
                string getWeekTrack = "select ProjectName,SubProject,Convert(varchar,Date,103) as Date,Hours from EmployeeProjectHours where EmpID='" + EmpID + "' and Date between '" + FromDate + "' and '" + ToDate + "' order by Date Asc";
                SqlDataAdapter daH = new SqlDataAdapter(getWeekTrack, conn);
                daH.Fill(dt);
            }
            else
            {
                string getWeekTrack = "select ProjectName,SubProject,Convert(varchar,Date,103) as Date,Hours from EmployeeProjectHours where EmpID='" + EmpID + "' and Date between '" + FromDate + "' and '" + ToDate + "' and ProjectName='"+ ProjectSelection + "' order by Date Asc";
                SqlDataAdapter daH = new SqlDataAdapter(getWeekTrack, conn);
                daH.Fill(dt);
            }
            
            MailMessage message = new MailMessage();
           

            DataTable dt1 = new DataTable();
            SqlConnection con = new SqlConnection(connString);
            string getEmailRecipient = "select Email,EmpName from EmployeeDetails where EmpName='"+ SendEmailTo + "'";
            SqlDataAdapter daM = new SqlDataAdapter(getEmailRecipient, con);          
            daM.Fill(dt1);
            string EmailRecipient = dt1.Rows[0][0].ToString();
            string Recipient = dt1.Rows[0][1].ToString();


            string htmlTableStart = "<table>";
            string htmlTableEnd = "</table>";
            string htmlHeaderRowStart = "<tr style =\"background-color:#6FA1D2; color:#ffffff;text-align:center\">";
            string htmlHeaderRowEnd = "</tr>";
            string htmlTrStart = "<tr style =\"color:#555555\">";
            string htmlTrEnd = "</tr>";
            string htmlTdStart = "<td style=\" border-color:#E5E4E2; border-style:solid; border-width:thin; padding: 5px;\">";
            string htmlTdEnd = "</td>";

            message.Subject = "Weekly Utilization - ["  + FCDate + "]-[" + TCDate +"]";

          

            message.Body += htmlTableStart;
            message.Body += htmlTrStart;
            message.Body += "Hi " + Recipient + ",";
            message.Body += htmlTrEnd;
            message.Body += htmlTrStart;
            message.Body += " ";
            message.Body += htmlTrEnd;
            message.Body += htmlTrStart;
            message.Body += "Please find the below Utilization Tracker: ";
            message.Body += htmlTrEnd;
            message.Body += htmlTableEnd;


            message.Body += htmlTableStart;
            message.Body += htmlTrStart;
            message.Body += htmlHeaderRowStart;
            message.Body += htmlTdStart;
            message.Body += "ProjectName";
            message.Body += htmlTdEnd;
            message.Body += htmlTdStart;
            message.Body += "SubProject";
            message.Body += htmlTdEnd;
            message.Body += htmlTdStart;
            message.Body += "Date";
            message.Body += htmlTdEnd;
            message.Body += htmlTdStart;
            message.Body += "Hours";
            message.Body += htmlTdEnd;
            //message.Body += htmlTdStart;
            //message.Body += "MonthName";
            //message.Body += htmlTdEnd;

            message.Body += htmlHeaderRowEnd;
            message.Body += htmlTrEnd;

            if (dt.Rows.Count > 0)
            {

                for (int i = 0; i < dt.Rows.Count; i++)
                {
                    message.Body += htmlTrStart;
                    for (int j = 0; j < dt.Columns.Count; j++)
                    {
                        message.Body += htmlTdStart;
                        string s = dt.Rows[i][j].ToString();
                        message.Body += s + htmlTdEnd;

                    }
                    message.Body += htmlTrEnd;
                }
            }

            message.Body += htmlTableEnd;
            message.IsBodyHtml = true;

            message.Body += htmlTableStart;
            message.Body += htmlTrStart;
            message.Body += "";
            message.Body += htmlTrEnd;
            message.Body += htmlTrStart;            
           // message.Body += htmlTdStart;
            message.Body+="Regards,";
            //message.Body += htmlTdEnd;
            message.Body += htmlTrEnd;
            message.Body += htmlTrStart;
           // message.Body += htmlTdStart;
            message.Body += EmpName;
            //message.Body += htmlTdEnd;
            message.Body += htmlTrEnd;
            message.Body += htmlTableEnd;

            SmtpClient smtp = new SmtpClient("");
            //message.To.Add("shireesha.siddham@datamigrationresources.com");
            //message.To.Add("naveen.madaparthi@datamigrationresources.com");
            //message.CC.Add("kalyan.vogety@datamigrationresources.com");
            //message.CC.Add("prasanth.kolavali@datamigrationresources.com");
            string FromMail = EMail.ToString();
            string ToMail = ManagerMail.ToString();
            message.From = new MailAddress(FromMail);
            //message.To.Add(EmailRecipient);
            message.To.Add("shireesha.siddham@datamigrationresources.com");

            // message.To.Add(ToMail);
            //message.Sender =
            //message.From = new MailAddress("shireesha.siddham@datamigrationresources.com");
            smtp.Send(message);
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