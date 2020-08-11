using System;
using System.Collections.Generic;
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

        static async Task<IEnumerable<SendMailResponse>> Execute(SendEmailInterface req)
        {
            var apiKey = Environment.GetEnvironmentVariable("SENDGRID_APIKEY");
            var client = new SendGridClient(apiKey);
            var from = new EmailAddress(req.FromEmail);
            var subject = req.Subject;
            var to = new EmailAddress(req.ToEmail);
            var plainTextContent = req.Message;
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
