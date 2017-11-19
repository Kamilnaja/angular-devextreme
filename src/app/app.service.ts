import { Injectable } from '@angular/core';

export class DictionariesList {};

const dictionariesList = ['DIC_AD_STATUS', 'DIC_AD_INFO', 'DIC_AD_POWOD'];

export class Dictionaries {
    Name: string;
    entries: any;
}
// interface Entry {
//     Id: string;
//     CompanyName: string;
//     Address: string;
//     City: boolean;
//     State: string;
//     Zipcode: string;
//     Phone: number;
//     Fax: string;
//     Website: string;
// }

const dictionaries: Dictionaries[] = [
    {
        Name: 'DIC_AD_STATUS',
        entries: [
            {
                'Id': '5a104b34b7ed211b6375d558',
                'CompanyName': 'CAXT',
                'Address': '783 Tapscott Avenue, Haena, West Virginia, 1926',
                'City': false,
                'State': '$2,454.30',
                'Zipcode': 'http://placehold.it/32x32',
                'Phone': 35,
                'Fax': 'brown',
                'Website': 'Cherry Mosley'
            },
            {
                'Id': '5a104b348e26da70596c6266',
                'CompanyName': 'OPTIQUE',
                'Address': '172 Hanover Place, Cawood, North Carolina, 814',
                'City': false,
                'State': '$1,271.73',
                'Zipcode': 'http://placehold.it/32x32',
                'Phone': 24,
                'Fax': 'blue',
                'Website': 'Todd Phillips'
            },
            {
                'Id': '5a104b342e32206333cabc53',
                'CompanyName': 'DIGIFAD',
                'Address': '467 Melrose Street, Grazierville, Montana, 6666',
                'City': true,
                'State': '$1,519.05',
                'Zipcode': 'http://placehold.it/32x32',
                'Phone': 27,
                'Fax': 'blue',
                'Website': 'Verna Pace'
            }
        ]
    },
    {
        Name: 'DIC_AD_INFO',
        entries: [
            {
                'Name': '5a104b34b7ed211b6375d558',
                'CompanyName': 'Lorem Dic ad infoT',
                'Address': '783 Tapscott Avenue, Haena, West Virginia, 1926',
                'IsEnabled': false,
                'State': '$2,454.30'
            },
            {
                'Name': '5a104b348e26da70596c6266',
                'CompanyName': 'Super',
                'Address': '172 Hanover Place, Cawood, North Carolina, 814',
                'IsEnabled': false,
                'State': '$1,271.73'
            },
            {
                'Name': '5a104b342e32206333cabc53',
                'CompanyName': 'Amazing',
                'Address': '467 Melrose Street, Grazierville, Montana, 6666',
                'IsEnabled': true,
                'State': '$1,519.05'
            },
        ]
    }, {
        Name: 'DIC_AD_POWOD',
        entries: [
            {
                'isDisabled': true,
                'State': '$2,900.65',
                'Zipcode': 'http://placehold.it/32x32',
                'Phone': 31,
                'Fax': 'blue',
                'Website': 'Chaney Stein'
            },
            {
                'isDisabled': true,
                'State': '$1,327.48',
                'Zipcode': 'http://placehold.it/32x32',
                'Phone': 36,
                'Fax': 'green',
                'Website': 'Anastasia Harmon'
            },
            {
                'isDisabled': false,
                'State': '$2,766.77',
                'Zipcode': 'http://placehold.it/32x32',
                'Phone': 21,
                'Fax': 'brown',
                'Website': 'Jennifer Bean'
            },
            {
                'isDisabled': false,
                'State': '$1,615.92',
                'Zipcode': 'http://placehold.it/32x32',
                'Phone': 27,
                'Fax': 'green',
                'Website': 'Velma Figueroa'
            }
        ]
    }
];


@Injectable()
export class Service {
    getDictionaries() {
        return dictionaries;
    }
    getDictionariesList() {
        return dictionariesList;
    }
}