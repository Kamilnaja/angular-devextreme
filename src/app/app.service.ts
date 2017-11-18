import { Injectable } from '@angular/core';

export class DictionariesList {};

const dictionariesList = ['DIC_AD_STATUS', 'DIC_AD_INFO', 'DIC_AD_POWOD'];

export class Dictionaries {
    Name: string;
    entries: Array<Entry>;
}
interface Entry {
    Id: string;
    CompanyName: string;
    Address: string;
    City: boolean;
    State: string;
    Zipcode: string;
    Phone: number;
    Fax: string;
    Website: string;
}

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
            },
        ]
    }, {
        Name: 'DIC_AD_POWOD',
        entries: [
            {
                'Id': '5a104b34ae9621ed4080f257',
                'CompanyName': 'ZILLAR',
                'Address': '265 Greenwood Avenue, Tryon, Ohio, 1902',
                'City': true,
                'State': '$2,900.65',
                'Zipcode': 'http://placehold.it/32x32',
                'Phone': 31,
                'Fax': 'blue',
                'Website': 'Chaney Stein'
            },
            {
                'Id': '5a104b345a8ddff4257ece83',
                'CompanyName': 'AUTOMON',
                'Address': '681 Tennis Court, Coalmont, Virginia, 6054',
                'City': true,
                'State': '$1,327.48',
                'Zipcode': 'http://placehold.it/32x32',
                'Phone': 36,
                'Fax': 'green',
                'Website': 'Anastasia Harmon'
            },
            {
                'Id': '5a104b34b26e7114c14f6232',
                'CompanyName': 'NEPTIDE',
                'Address': '205 Livingston Street, Gerber, Georgia, 2111',
                'City': false,
                'State': '$2,766.77',
                'Zipcode': 'http://placehold.it/32x32',
                'Phone': 21,
                'Fax': 'brown',
                'Website': 'Jennifer Bean'
            },
            {
                'Id': '5a104b3429f6fb097ca56cff',
                'CompanyName': 'SNACKTION',
                'Address': '819 Montgomery Street, Coldiron, Arizona, 5543',
                'City': false,
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