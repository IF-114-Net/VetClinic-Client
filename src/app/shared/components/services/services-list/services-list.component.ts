import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})
export class ServicesListComponent implements OnInit {

  servicesDemo: ServiceDemo[] = [
    {serviceName: 'Internal Medicine',
      description: 'Internal medicine services cover hormonal, gastrointestinal, urinary, haematologic (blood related), respiratory, infectious, and immune-mediated diseases. The facilities at the London Veterinary Clinic are co-ordinated by Grant Petrie. In addition to an extensive review of your pet’s medical history, diagnostics always begin with a thorough physical examination and blood tests. When more information is needed, ultrasound, radiography, endoscopy, and CT imaging may be used. Our objective is to make an accurate diagnosis as rapidly as possible while at the same time putting your pet (and you) to a minimum of inconvenience.'
    },
    {
      serviceName: 'Cardiology',
      description: 'Cardiology services are provided by Grant Petrie. In addition to an extensive medical history review, a consultation may include echocardiography, electrocardiography, radiography, blood pressure monitoring and 24 hour Holter monitoring to evaluate the cardiac status of your pet.'
    },
    {
      serviceName: 'Dermatology',
      description: 'We will take a full medical history and may take an ear or skin swab or skin scrapings to help with the diagnosis. In rare and unusual skin conditions a skin biopsy may be needed. For allergic skin conditions exclusion diets are often recommended and allergy testing for inhaled allergies (pollens, moulds, dust mites etc) is done on blood samples sent to a specialist laboratory in The Netherlands. We have specialist referral veterinary dermatologist available for the most challenging cases.'
    },
    {
      serviceName: 'Diagnostic Imaging',
      description: 'Among the most useful tools we use to evaluate a pet’s condition is diagnostic imaging. This includes radiographs (x-rays) and ultrasonography (ultrasound) both of which are carried out at York Street. \n' +
        '\n' +
        'We are able to refer pets for other forms of imaging if needed, this may include computed tomography (CT scans) and magnetic resonance imaging (MRI scans). Each of these provides different kinds of images, and in some instances more than one may be suggested by us to evaluate a particular problem in your pet. All of these methods provide ‘pictures’ of internal structures.'
    },
    {
      serviceName: 'Oncology',
      description: 'Cancer is a common condition in older dogs and cats. Recent advances in the treatment of cancer in pets have opened up a number of options (and also ethical dilemmas) for pet owners and your pets. Even with these advances however, surgery remains an essential component of treatment for most types of cancer.\n' +
        '\n'
    },
    {
      serviceName: 'Ophthalmology',
      description: 'An initial consultation includes a history taking and eye examination. Treatments, including possible surgery are explained and discussed with you. Where needed we may recommend seeing a specialist ophthalmic veterinarian at The Ralph Veterinary Referrals in Marlow or Dick White Referrals near Newmarket.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }



}

class ServiceDemo {
  constructor(
    public serviceName?: string,
    public description?: string
  ) {}
}
