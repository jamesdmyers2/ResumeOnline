using System;
using Hl7.Fhir.Model;

namespace ResumeOnline
{
    public class FHIRConditions
    {
        public string Patientid { get; set; }
        public string Patient { get; set; }
        public string Category { get; set; }
        public string ClinicalStatus { get; set; }
        public DateTime Onset { get; set; }

        public string Code { get; set; }
        public string Coding { get; set; }
        public CodeableConcept Conditions { get; internal set; }
    }
}
