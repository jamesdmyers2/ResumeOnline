using System;
using System.Collections.Generic;
using Hl7.Fhir.Model;

namespace ResumeOnline
{
    public class FHIRPatient
    {
        public string Patientid { get; set; }
        internal List<Attachment> Photo;

        public string Name { get; set; }

        public string Address { get; set; }
        public string Gender { get; set; }
        public string Birthdate { get; set; }
    }
}
