﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Register.aspx.cs" Inherits="LightSwitchApplication.Register" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta name="HandheldFriendly" content="true" />
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" />
    <title>UtilizationTracker</title>
    <style type="text/css">
        /* Here you can customize your login screen */
        html {
            background: #5a7cba;
        }

        html,
        body,
        .labelStyle {
            color: #444444;
        }

        h1 {
            color: #444444;
        }

        .requiredStyle {
            color: #FF1B1B;
        }

        input.buttonStyle {
            color: #444444;
            background-color: #f1f1f1;
            border: 1px solid #ababab;
        }

            input.buttonStyle:hover {
                background-color: #dfebf4;
            }

            input.buttonStyle:active {
                background-color: #e3e3e3;
            }

        .textBoxStyle {
            color: #444444;
            background-color: #fcfcfc;
            border: 1px solid #ababab;
        }

        .failureNotification {
            color: #ff0000;
        }

        /* login layout styling */
        * {
            margin: 0px;
        }

        html {
            height: 100%;
            width: 100%;
        }

        html, body {
            font-family: 'Segoe UI','Frutiger','Helvetica Neue',Helvetica,Arial,sans-serif;
            font-size: 16px;
            font-weight: normal;
        }

        h1 {
            font-family: 'Segoe Light','Segoe UI Light','Frutiger','Helvetica Neue',Helvetica,Arial,sans-serif;
            font-size: 40px;
            text-align: left;
            letter-spacing: -1pt;
            font-weight: normal!important;
            margin-bottom: 12px;
        }

        .accountInfo {
            width: 95%;
            max-width: 310px;
            position: absolute;
            top: 50%;
            margin-top: -144px;
            left: 50%;
            margin-left: -155px;
        }

        .labelStyle {
            font-family: 'Segoe UI Semibold', 'Frutiger','Helvetica Neue Semibold',Helvetica,Arial,sans-serif;
            font-weight: 700;
        }

        .requiredStyle {
            font-size: 24px;
            line-height: 14px;
            height: 12px;
            vertical-align: bottom;
            margin-left: 5px;
        }

        input.buttonStyle {
            font-family: 'Segoe UI','Frutiger','Helvetica Neue',Helvetica,Arial,sans-serif;
            padding: 5px 10px;
            font-weight: bold;
            border-radius: 0px;
            font-size: 16px;
            cursor: pointer;
            -webkit-appearance: none;
        }

        .textBoxStyle {
            background-image: none;
            font-size: 16px;
            display: block;
            outline: 0;
            height: 36px;
            padding: 1px 8px;
            margin: 0px;
            width: 100%;
            max-width: 292px;
            line-height: 36px;
        }

        .submit-login {
            margin-top: 10px;
        }

        .rememberme {
            margin-bottom: 10px;
        }

        input[type=checkbox] {
            margin: 0px 6px 0px 0px;
            vertical-align: -1px;
            cursor: pointer;
        }

        .checkStyle label {
            font-size: 15px;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div class="accountInfo">

        <asp:createuserwizard runat="server" ContinueDestinationPageUrl="~/login.aspx?ReturnUrl=%2fHTMLClient%2f"> <WizardSteps> <asp:CreateUserWizardStep runat="server"></asp:CreateUserWizardStep> <asp:CompleteWizardStep runat="server"/> </WizardSteps> </asp:createuserwizard>
    </div>
    </form>
</body>
</html>
