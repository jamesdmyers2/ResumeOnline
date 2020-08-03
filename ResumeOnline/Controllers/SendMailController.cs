using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Mail;
using Microsoft.AspNetCore.Mvc;
using SendGrid;
using SendGrid.Helpers.Mail;
using System.Threading.Tasks;
using System.Linq;

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
        public async Task<IEnumerable<SendMailResponse>> PostAsync(SendEmailInterface req)
        {
            try
            {
                var response = await Execute(req);

                return response;

            }
            catch (Exception ex)
            {
                return Enumerable.Range(0, 1).Select(index => new SendMailResponse
                {
                    Message = "Error Proccessing Request: " + ex.Message
                }).ToArray();
            }

        }

        //[HttpPost]
        //public async Task<string> PostAsync(SendEmailInterface res)
        //{
        //    try
        //    {
        //        var response = await Execute(res);
        //        return response;

        //    }
        //    catch (Exception ex)
        //    {
        //        return "There was problem sending the email...please try again: "+ex.Message;
        //    }

        //}

        static async Task<IEnumerable<SendMailResponse>> Execute(SendEmailInterface res)
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

            return Enumerable.Range(0, 1).Select(index => new SendMailResponse
            {
                Message = response.StatusCode.ToString()
            }).ToArray();

        }
    }
}
