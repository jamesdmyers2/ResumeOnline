using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Mail;
using Microsoft.AspNetCore.Mvc;
using SendGrid;
using SendGrid.Helpers.Mail;
using System.Threading.Tasks;

namespace ResumeOnline.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SendMail : ControllerBase
    {
        static string emailFromAddress = "jamesdmyers2@gmail.com";

        [HttpGet]
        public string Get()
        {
            return "Gottin";
        }

        [HttpPost]
        public string Post(Object res)
        {
            return "Posted";
        }
        //[HttpPost]
        //public async Task<string> PostAsync(SendEmailInterface res)
        //{
        //    return "Made it here!";
        //    try
        //    {
        //        var response = await Execute(res);
        //        if (response == "Accepted")

        //            return "Email has been sent, thank you!";
        //        else
        //            return "Email Failed";

        //    }
        //    catch (Exception ex)
        //    {
        //        return "There was problem sending the email...please try again.";
        //    }

        //}

        static async Task<string> Execute(SendEmailInterface res)
        {
            var apiKey = Environment.GetEnvironmentVariable("NAME_OF_THE_ENVIRONMENT_VARIABLE_FOR_YOUR_SENDGRID_KEY");
            var client = new SendGridClient("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");
            var from = new EmailAddress(emailFromAddress);
            var subject = res.Subject;
            var to = new EmailAddress(res.Email);
            var plainTextContent = res.Message;
            var htmlContent = "";
            var msg = MailHelper.CreateSingleEmail(from, to, subject, plainTextContent, htmlContent);
            var response = await client.SendEmailAsync(msg);
            return response.StatusCode.ToString();
        }
    }
}
