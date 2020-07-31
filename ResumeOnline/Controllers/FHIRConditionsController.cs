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
    public class FHIRConditionsController : ControllerBase
    {

        private readonly ILogger<FHIRConditionsController> _logger;

        private static Uri endpoint = new Uri("https://open-ic.epic.com/FHIR/api/FHIR/DSTU2/");
        private static FhirClient client = new FhirClient(endpoint);

        public FHIRConditionsController(ILogger<FHIRConditionsController> logger)
        {
            _logger = logger;
        }


        [HttpPost]
        public IEnumerable<FHIRConditions> Post(FHIRInterface req)
        {


            var query = new SearchParams()
                         .Where("patient=" + req.PatientId);

            switch (req.Type)
            {
                case "Conditions":
                    return ProcConditions(query);
                default:
                    return null;
            }
        }

        public IEnumerable<FHIRConditions> ProcConditions(SearchParams query)
        {
            var bundle = client.Search<Condition>(query);
            Hl7.Fhir.Model.Condition cond = null;
            //


            if (null != bundle)
            {
                Hl7.Fhir.Model.Bundle.EntryComponent ec = bundle.Entry.FirstOrDefault();
                if (null != ec && null != ec.Resource)
                {
                    /* again, this may be a different kind of object based on which rest url you hit */
                     cond = ec.Resource as Hl7.Fhir.Model.Condition;
                }
            }
            //

            try
            {


                FHIRConditions fHIRConditions = new FHIRConditions();
                var list = new List<FHIRConditions>();
                foreach (var entry in bundle.Entry)
                {
                    Condition conditions = (Condition)entry.Resource;
                    var fc = new FHIRConditions
                    {
                        Patientid = conditions.Id,
                        Category = conditions.Category.Text,
                        ClinicalStatus = conditions.ClinicalStatus,
                        Code = conditions.Code.Text,
                        Coding = conditions.Code.Coding[0].Code,
                        Conditions = conditions.Code
                    };
                    list.Add(fc);

                }

                return list.ToArray();


                //Condition[] conditions = new Condition[bundle.Entry.Count];
                //for (var i = 0; i < bundle.Entry.Count; i++)
                //{
                //    var entry = bundle.Entry[i];

                //    conditions[i] = (Condition)entry.Resource;


                //}

                //return Enumerable.Range(0, bundle.Entry.Count -1).Select(index => new FHIRConditions
                //{
                //    Patientid = conditions[index].Id,
                //    Category = conditions[index].Category.Text,
                //    Code = conditions[index].Code.Text,
                //    Coding = conditions[index].Code.Coding[0].Code,
                //    Conditions = conditions[index].Code
                //    //Category = patient[0].Photo,
                //    //ClinicalStatus = patient[0].GenderElement.Value.ToString(),
                //    //Onset = patient[0].BirthDate
                //}).ToArray();

            }
            catch (Exception ex)
            {
                return Enumerable.Range(0, bundle.Entry.Count).Select(index => new FHIRConditions
                {
                    Category = "**NOT FOUND**"
                })
                .ToArray();
            }
        }


          
     }
}
