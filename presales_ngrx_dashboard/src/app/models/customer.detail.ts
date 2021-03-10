import { CustomerDetail } from './customer-detail.interface';


export class CustomerDetailApi {


  customerDetails: CustomerDetail[] = [
    {
      id: 1,
      customername: 'Antwerpen',
      addressline1: 'Nova',
      addressline2: 'offer',
      city: 'denderleeuw',
      country: 'België',
      state: 'oost-vlanderen',
      zip: '111',
      vat: 111,
      firstname: 'sait',
      lastname: 'tosun',
      email: 'test@test.com',
      phonenumber: 999999999
    }
  ];
}
