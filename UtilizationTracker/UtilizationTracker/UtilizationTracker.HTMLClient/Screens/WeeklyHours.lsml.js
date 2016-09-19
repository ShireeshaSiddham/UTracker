/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.WeeklyHours.SendEmail_execute = function (screen) {
    // Write code here.
    //screen.dataBind("value", function (value) {
    //    if (value) {
    //        $(element).text(value.format("dd-MM-yyyy"));
    //    }
    //})
  
   // HttpContext.Current.Session["QAUserObject"] == "kk";
    //'<%Session["x"] = "' + screen.FromDate + '"; %>';

    //alert('<%=Session["x"] %>');
    //'<%= Session("QAUserObject")%>' = "ss";
    //var mySession = '<%=Session["QAUserObject"]%>';
   // Response.Redirect("Handler.ashx");
    //var t = screen.ToDate;
    //HttpContext.Current["key"] = s;
    // screen.FromDate.getDate
    //'<%Session["FromDate"] = "' + screen.FromDate + '"; %>';
   // '<%Session["FromDate"]%>' = "' + screen.FromDate + '";
    //var username = '<%= Session["FromDate"] %>';
    //var ImageUrl = "~/SendWeeklyUT.ashx?datTxt=ss";
    //var url = "~/SendWeeklyUT.ashx?datTxt=" + screen.FromDate;
   
   
    msls.promiseOperation(SendEmail).then(function PromiseSuccess(PromiseResult) {
        //var value = '26/06/2016';
        msls.showMessageBox("Email sent successfully");
    });



    function SendEmail(operation) {
        // var value = '267';
        //var value = 'Siri';
        //var url = "SendWeeklyUT.ashx?datTxt=" + screen.FromDate + "&" + "datValue=" + screen.ToDate;
        //var value = '2016-05-23';
        //var values = '2016-06-15';
        //var i = s;
       // var ko = document.getElementById("' + screen.FromDate + '");
        //var ko =  ;
        //var value = document.getElementById('screen.FromDate').value;
        // var value=
        //var value =  ;
       
        function convert(str) {
            var FromDate = screen.FromDate;
            var ToDate = screen.ToDate;
            var Fdate = new Date(FromDate),
                Fmnth = ("0" + (Fdate.getMonth() + 1)).slice(-2),
                Fday = ("0" + Fdate.getDate()).slice(-2);
            Fyear = Fdate.getFullYear();
            var FrmDate = Fyear+"-"+Fmnth + "-" + Fday;

            var Tdate = new Date(ToDate),
               Tmnth = ("0" + (Tdate.getMonth() + 1)).slice(-2),
               Tday = ("0" + Tdate.getDate()).slice(-2);
            Tyear = Tdate.getFullYear();
            var ToDate =Tyear+"-"+ Tmnth + "-" + Tday;
           //return ff;
            //return [date.getFullYear(), mnth, day].join("-");

           $.ajax({

               type: 'post',
               //data: {value: +value},
               data: { FrmDate: FrmDate, ToDate: ToDate },
               //httpReq.open("GET", "SayHello.ashx?Name=" +
               //    document.getElementById('<%=txtName.ClientID%>').value, true),
               //data: { datTxt: '<%Session["FromDate"] = "' +screen.FromDate + '"; %>' },
               //data: { firstName: '"+FromDate+"', lastName: "'+screen.FromDate+'" },
               // data: "{firstName:'" + document.getElementById('<%=screen.FromDate%>').value + "'}",
               //data: { firstName: 'FromDate', lastName: 'overflow' },
               //data: "firstName=" + FromDate,
               //data: '{"firstName":"' + datTxt + '"}',
               url: '../SendWeeklyUT.ashx',
               // url:"~/SendWeeklyUT.ashx?datTxt=" + screen.FromDate,
               success: operation.code(function AjaxSuccess(AjaxResult) {
                   operation.complete(AjaxResult);
               })
           });
        }

        convert("Thu Jun 09 2011 00:00:00 GMT+0530 (India Standard Time)");
        //var ff = mnth + "-" + day + "-" + year;
     
    }


};


