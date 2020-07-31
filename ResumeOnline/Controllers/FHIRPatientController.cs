using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Hl7.Fhir.Model;
using Hl7.Fhir.Rest;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ResumeOnline.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FHIRPatientController : ControllerBase
    {

        private readonly ILogger<FHIRPatientController> _logger;

        private static Uri endpoint = new Uri("https://open-ic.epic.com/FHIR/api/FHIR/DSTU2/");
        private static FhirClient client = new FhirClient(endpoint);

        public FHIRPatientController(ILogger<FHIRPatientController> logger)
        {
            _logger = logger;
        }


        [HttpPost]
        public IEnumerable<FHIRPatient> Post(FHIRInterface req)
        {
            string fullName = req.Name;
            var names = fullName.Split(' ');
            string givenName = names[0];
            string familyName = names[1];

            var query = new SearchParams()
                         .Where("family=" + familyName);
            //.Include("Patient:organization")
            //.LimitTo(10)
            //.SummaryOnly()
            //.OrderBy("birthdate", SortOrder.Descending);
            query.Add("given", givenName);

            switch (req.Type)
            {
                case "Patient":
                        return ProcPatient(query);
                default:
                    return null;
            }
        }

        public IEnumerable<FHIRPatient> ProcPatientTest(SearchParams query)
        {
            return Enumerable.Range(0, 1).Select(index => new FHIRPatient
            {
                Patientid = "0101010101",
                Name = "James Bond",
                Address = "123 Test St",
                Photo = null,
                Gender = "Male",
                Birthdate = "20200101"
            })
                .ToArray();

         
        }


            public IEnumerable<FHIRPatient> ProcPatient(SearchParams query)
        { 
            var bundle = client.Search<Patient>(query);

            try
            {

                Patient[] patient = new Patient[bundle.Entry.Count];

                for (var i = 0; i < bundle.Entry.Count; i++)
                {
                    var entry = bundle.Entry[i];
                    
                    patient[i] = (Patient)entry.Resource;
                }
                ///
                IEnumerable<int> squares = Enumerable.Range(0, bundle.Entry.Count).Select(x => x * 1);

                foreach (int num in squares)
                {
                    Console.WriteLine(num);
                }

                var nameData = patient[0].Name.ElementAtOrDefault(0).ToString() != "" ? patient[0].Name.ElementAtOrDefault(0).ToString() : "" ;

                var AddressDataB = "";
                if (patient[0].Address.Count > 0)
                {
                    var AddressDataA = patient[0].Address.ElementAtOrDefault(0).ToString();
                    if (AddressDataA != "")
                    {
                        AddressDataB = patient[0].Address.ElementAtOrDefault(0).LineElement.ElementAtOrDefault(0).ToString() == null ? "" : patient[0].Address.ElementAtOrDefault(0).LineElement.ElementAtOrDefault(0).ToString();
                    }
                }

                var testPatientid = patient[0].Id;

                return Enumerable.Range(1, bundle.Entry.Count).Select(index => new FHIRPatient
                {
                    Patientid = patient[0].Id,
                    Name = nameData,
                    Address = AddressDataB,
                    Photo = patient[0].Photo,
                    Gender = patient[0].GenderElement.Value.ToString(),
                    Birthdate = patient[0].BirthDate
                })
                .ToArray();
            }
            catch (Exception ex)
            {
                return Enumerable.Range(0, bundle.Entry.Count).Select(index => new FHIRPatient
                {
                    Name = "**NOT FOUND**",
                    Address = ex.Message.ToString()
                })
                .ToArray();
            }

        }
     }
}
