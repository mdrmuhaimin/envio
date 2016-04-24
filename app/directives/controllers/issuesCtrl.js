(function() {
    'use strict';
    var ctrlFunction = function() {
        this.hello = 'issue Ctrl';
        console.log('issues');
        this.issues = [{
            "issue": "Air Quality",
            "author": "Jackie Chan",
            "type": "Environment",
            "description": "Air is very smoggy. It is hard to breathe. I repeat: Air is very smoggy. Please help, I need fresh air.",
            "location": "Beijing, China",
            "voteCount": 24,
            "tags": [
                "China",
                "Hazy",
                "Air",
                "Suffocation"
            ],
            "comments": [{
                "author": "John Travolta",
                "comment": "Scary.",
                "voteCount": 67,
                "createdAt": 1461473816929
            }, {
                "author": "Lucy Liu",
                "comment": "You know you can buy fresh air in China.",
                "voteCount": 78,
                "createdAt": 1461473816930
            }, {
                "author": "Jet Lee",
                "comment": "I am selling 5 RMB per bag.",
                "voteCount": 56,
                "createdAt": 1461473817000
            }, {
                "author": "Jackie Chan",
                "comment": "I can pay only 4 RMB.",
                "voteCount": 90,
                "createdAt": 1461473817010
            }, {
                "author": "Jet Lee",
                "comment": "4.5 RMB only for you, last price.",
                "voteCount": 45,
                "createdAt": 1461473817025
            }],
            "image": "http://michaelmurray.ca/wp-content/uploads/2013/12/smog3.jpg",
            "createdAt": 1461473816929
        }, {
            "issue": "Earthquake",
            "author": "Jolonto Jalil",
            "type": "Natural Disaster",
            "description": "Massive earthquake hit Dhaka",
            "location": "Dhaka, BD",
            "tags": [
                "Bangladesh",
                "Dhaka",
                "Earthquake",
                "disaster"
            ],
            "createdAt": 1461473816929
        }, {
            "issue": "Ebola Outbreak",
            "type": "Health",
            "description": "Ebola struck Texas",
            "location": "Houston, Texas",
            "tags": [
                "EbolaInNASA",
                "disease",
                "virus",
                "epidemic"
            ]
        }, {
            "issue": "Fire",
            "type": "Environment",
            "description": "Forest Fire raging powerfully ",
            "location": "Calgary, AB",
            "tags": [
                "Calgary",
                "CalgaryFlames",
                "ForestFire"
            ]
        }, {
            "issue": "Temperature",
            "type": "Environment",
            "description": "Temperature is extremely low levels. Outside travel is ill advised.",
            "location": "North Pole, Earth",
            "tags": [
                "Santa Claus",
                "NorthPole",
                "Arctic",
                "TheGreatNorth"
            ]
        }, {
            "issue": "Zika Virus",
            "type": "Health",
            "description": "Zika Virus is spreading",
            "location": "Brazil",
            "tags": [
                "ZikaVirus",
                "Brazil"
            ]
        }, {
            "issue": "Public nutrition",
            "type": "Health",
            "description": "Malnutrition is on the rise",
            "location": "Ghana",
            "tags": [
                "Ghana",
                "Poverty",
                "Hunger",
                "WeAreSilent"
            ]
        }, {
            "issue": "Hurricane Sakib",
            "type": "Natural Disaster",
            "description": "Hurricane is striking with lots of force.",
            "location": "New Orleans, US",
            "tags": [
                "HurricaneSakib",
                "Typhoon",
                "Storms",
                "NaturalDisaster"
            ]
        }, {
            "issue": "Smog",
            "type": "Environment",
            "description": "High levels of smog polluting the air",
            "location": "Detroit, MI, USA",
            "tags": [
                "SmogInDetroit"
            ]
        }, {
            "issue": "Drought",
            "type": "Environment",
            "description": "Lack of rain fall in the last month. Crops are dying.",
            "location": "California, US",
            "tags": [
                "HollywoodDrought",
                "SaveOurWater"
            ]
        }];
    };
    angular.module('envio').controller('issuesCtrl', [ctrlFunction]);
})();