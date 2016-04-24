(function() {
    'use strict';
    var ctrlFunction = function() {
        var homePageIssues = [{
                "issue": "Air Quality",
                "author": "Jackie Chan",
                "type": "Environment",
                "description": "Air is very smoggy. It is hard to breathe. I repeat: Air is very smoggy. Please help, I need fresh air.",
                "location": "Beijing, China",
                "voteCount": 24,
                "tags": [
                    "Beijing",
                    "Hazy",
                    "Air",
                    "suffocation"
                ],
                "comments": [{
                    "author": "John Travolta",
                    "comment": "Scary.",
                    "voteCount": 67,
                    "createdAt": 1461473816929
                }, {
                    "author": "John Cena",
                    "comment": "Very scary.",
                    "voteCount": 78,
                    "createdAt": 1461473816929
                }],
                "image": "http://michaelmurray.ca/wp-content/uploads/2013/12/smog3.jpg",
                "createdAt": 1461473816929
            }, {
                "issue": "Earthquake",
                "author": "Azad Rahman",
                "type": "Natural Disaster",
                "description": "Massive earthquake hit Dhaka",
                "location": "Dhaka, BD",
                "voteCount": "452",
                "tags": [
                    "Bangladesh",
                    "Dhaka",
                    "Earthquake",
                    "disaster"
                ],
                "comments": [{
                    "author": "John Travolta",
                    "comment": "Scary.",
                    "voteCount": 67,
                    "createdAt": 1461473816929
                }, {
                    "author": "John Cena",
                    "comment": "Very scary. Thoughts with those afflicted",
                    "voteCount": 78,
                    "createdAt": 1461473816929
                }],
                "image": "http://www.dhakatribune.com/sites/default/files/article/thumb/2015/04/27/4.jpg",
                "createdAt": 1461473816929
            }, {
                "issue": "Ebola Outbreak",
                "author": "Brij Bhavsar",
                "type": "Health",
                "description": "Ebola struck Texas",
                "location": "Houston, Texas",
                "voteCount": "93",
                "tags": [
                    "EbolaInNASA",
                    "disease",
                    "virus",
                    "epidemic"
                ],
                "comments": [{
                    "author": "Okonkwa Horoy",
                    "comment": "A lot of my family is sick. Please keep them in your thoughts",
                    "voteCount": 500,
                    "createdAt": 1461473816323
                }, {
                    "author": "Tyrese Gibson",
                    "comment": "Very scary. Thoughts with those afflicted",
                    "voteCount": 67,
                    "createdAt": 1461473816323
                }],
                "image": "http://blogs-image.forbes.com/dandiamond/files/2014/10/la-na-nn-ebola-missionary-emory-atlanta-arrive-20140805-1940x10331.jpeg",
                "createdAt": 1461473816323
            }, {
                "issue": "Fire",
                "author": "Mike Babcock",
                "type": "Environment",
                "description": "Forest Fire raging powerfully ",
                "location": "Calgary, AB",
                "voteCount": "98",
                "tags": [
                    "Calgary",
                    "CalgaryFlames",
                    "ForestFire"
                ],
                "comments": [{
                    "author": "Johnny Gadreau",
                    "comment": "Make sure to thank our firefighters who are working hard to put them out.",
                    "voteCount": 1000,
                    "createdAt": 1461473816929
                }, {
                    "author": "Sydney Crosby",
                    "comment": "Oh this is just terrible. Hoping for the best for our friends in Calgary",
                    "voteCount": 789,
                    "createdAt": 1461473816929
                }],
                "image": "http://wpmedia.calgaryherald.com/2015/07/a-wildfire-rises-over-a-hill-in-jasper-national-park-on-thur5.jpg?quality=55&strip=all&w=840&h=630&crop=1",
                "createdAt": 1461473816929
            }, {
                "issue": "Temperature",
                "author": "Dasher Blitz",
                "type": "Environment",
                "description": "Temperature is extremely low levels. Outside travel is ill advised.",
                "location": "North Pole, Earth",
                "voteCount": "76",
                "tags": [
                    "Santa Claus",
                    "NorthPole",
                    "Arctic",
                    "TheGreatNorth"
                ],
                "comments": [{
                    "author": "Saint Nick",
                    "comment": "Stay warm with your family at home everyone.",
                    "voteCount": 100,
                    "createdAt": 1461473816929
                }, {
                    "author": "Rudolph Rouge",
                    "comment": "Definitely don't go outsid! Everything is frozen",
                    "voteCount": 78,
                    "createdAt": 1461473816929
                }],
                "image": "http://photos.cntraveler.com/2015/12/23/567ae12cc2ebbef23e7da18b_north-pole-sign-crop.jpg",
                "createdAt": 1461473816929
            }, {
                "issue": "Zika Virus",
                "author": "Kristine Suarez",
                "type": "Health",
                "description": "Zika Virus is spreading",
                "location": "Brazil",
                "voteCount": "555",
                "tags": [
                    "ZikaVirus",
                    "Virus",
                    "Brazil"
                ],
                "comments": [{
                    "author": "PelÃ©",
                    "comment": "Brazil will survive this harsh time.",
                    "voteCount": 67,
                    "createdAt": 1461473816929
                }, {
                    "author": "Ronaldo de Assis Moreira",
                    "comment": "Very scary. Thoughts with those afflicted",
                    "voteCount": 78,
                    "createdAt": 1461473816929
                }],
                "image": "http://i.cbc.ca/1.3424019.1454006748!/fileImage/httpImage/image.jpg_gen/derivatives/original_620/zika-fact-card.jpg",
                "createdAt": 1461473816929
            }, {
                "issue": "Public Nutrition",
                "author": "Jane Doe",
                "type": "Health",
                "description": "Malnutrition is on the rise",
                "location": "Ghana",
                "voteCount": "307",
                "image": "http://www.wvi.org/sites/default/files/styles/article_full/public/D345-0130-07_380073%20Somalia%20Ashley%20Jonathan%20Clements%202012_0.JPG?itok=YapuijJu",
                "tags": [
                    "Ghana",
                    "Poverty",
                    "Hunger",
                    "WeAreSilent"
                ],
                "comments": [{
                    "author": "John Mahama",
                    "comment": "Hunger is temporary. Please keep fighting my friends!",
                    "voteCount": 825,
                    "createdAt": 1461473816929
                }, {
                    "author": "T'Challa",
                    "comment": "Our people must remain strong an resilient during these tough times",
                    "voteCount": 363,
                    "createdAt": 1461473816929
                }],
                "createdAt": 1461473816929
            }, {
                "issue": "Hurricane Sakib",
                "author": "Farhin Mim",
                "type": "Natural Disaster",
                "description": "Hurricane is striking with lots of force.",
                "location": "New Orleans, US",
                "voteCount": "120",
                "tags": [
                    "HurricaneSakib",
                    "Typhoon",
                    "Storms",
                    "NaturalDisaster"
                ],
                "comments": [{
                    "author": "Nabil Barakati",
                    "comment": "I advise everyone to only take the essentials",
                    "voteCount": 666,
                    "createdAt": 1461473816929
                }, {
                    "author": "Tamim Faruk",
                    "comment": "Wow, this looks like the strongest storm in years!",
                    "voteCount": 777,
                    "createdAt": 1461473816929
                }],
                "image": "https://timedotcom.files.wordpress.com/2014/05/003-ap040926011558.jpg?quality=75&strip=color&w=720",
                "createdAt": 1461473816929
            }, {
                "issue": "Smog",
                "author": "Jon Sno",
                "type": "Environment",
                "description": "High levels of smog polluting the air",
                "location": "Detroit, MI, USA",
                "voteCount": "456",
                "tags": [
                    "SmogInDetroit",
                    "CleanOurAir"
                ],
                "comments": [{
                    "author": "Adam Jensen",
                    "comment": "It's ridiculous that our air is so polluted. We're supposed to be a free nation but air quality is horrible",
                    "voteCount": 150,
                    "createdAt": 1461473816929
                }],
                "image": "https://timedotcom.files.wordpress.com/2014/05/003-ap040926011558.jpg?quality=75&strip=color&w=720",
                "createdAt": 1461473816929
            }, {
                "issue": "Drought",
                "author": "Jimmy Kimmel",
                "type": "Environment",
                "description": "Lack of rain fall in the last month. Crops are dying.",
                "location": "California, US",
                "voteCount": "231",
                "tags": [
                    "HollywoodDrought",
                    "SaveOurWater"
                ],
                "comments": [{
                    "author": "Matt Damon",
                    "comment": "Please I urge everyone to save as much water as possible!",
                    "voteCount": 153,
                    "createdAt": 1461473816929
                }],
                "image": "http://cbsnews1.cbsistatic.com/hub/i/2015/04/02/8d630ce1-84a6-4ec6-a376-a8b087cf0343/californias-droughtreutersgetty453834006.jpg",
                "createdAt": 1461473816929
            }],
            globalTrendingIssues = [{
                    "issue": "Air Quality",
                    "author": "Jackie Chan",
                    "type": "Environment",
                    "description": "Air is very smoggy. It is hard to breathe. I repeat: Air is very smoggy. Please help, I need fresh air.",
                    "location": "Beijing, China",
                    "voteCount": 24,
                    "tags": [
                        "Beijing",
                        "Hazy",
                        "Air",
                        "suffocation"
                    ],
                    "comments": [{
                        "author": "John Travolta",
                        "comment": "Scary.",
                        "voteCount": 67,
                        "createdAt": 1461473816929
                    }, {
                        "author": "John Cena",
                        "comment": "Very scary.",
                        "voteCount": 78,
                        "createdAt": 1461473816929
                    }],
                    "image": "http://michaelmurray.ca/wp-content/uploads/2013/12/smog3.jpg",
                    "createdAt": 1461473816929
                },

                {
                    "issue": "H5N1 Bird Flu Virus",
                    "author": "John Doe",
                    "type": "Environmental Disease",
                    "description": "The air-borne H5N1 Bird flu has been detected in several farms across the country. Be aware of poultry.",
                    "location": "Delhi, India",
                    "voteCount": 350,
                    "tags": [
                        "Food",
                        "Chicken",
                        "Bird Flu",
                        "Virus"
                    ],
                    "comments": [{
                        "author": "Jane Doe",
                        "comment": "Humans can catch bird flu directly through close contact with live infected birds and those who work with infected chickens are most at risk. The virus is excreted, and people may inhale these germs as dust when the droppings dry out. The virus cannot be passed from human to human.",
                        "voteCount": 193,
                        "createdAt": 1461473735629
                    }, {
                        "author": "Jenny",
                        "comment": "How will humans be affected?",
                        "voteCount": 56,
                        "createdAt": 1461473817929
                    }],
                    "image": "http://cdns.yournewswire.com/wp-content/uploads/2015/04/666cb4e4fd01b0ea1c97e3b1c558df55.jpg",
                    "createdAt": 1461473816929
                },

                {
                    "issue": "Cold Winds and Snow",
                    "author": "Jimmy Choo",
                    "type": "Environmental Warning",
                    "description": "Very cold winds have been blowing across Canada, colder than usual. With 80+ mph wind and snow, it is not safe to go outside.",
                    "location": "Waterloo, ON, Canada",
                    "voteCount": 250,
                    "tags": [
                        "Cold",
                        "Snow",
                        "Windy"
                    ],
                    "comments": [{
                        "author": "Real Canadian",
                        "comment": "We're Canadians! We can take it! Just be a bit careful though!",
                        "voteCount": 193,
                        "createdAt": 1461473735629
                    }, {
                        "author": "Sakib Ar Rahman",
                        "comment": "All schools and universities have been declared closed owing to the expected bad conditions but... UWaterloo is still open...",
                        "voteCount": 223,
                        "createdAt": 1461473817929
                    }],
                    "image": "http://i2.cdn.turner.com/cnn/dam/assets/140103112440-winter-weather-01030-20-horizontal-gallery.jpg",
                    "createdAt": 1461593816929
                },

                {
                    "issue": "Extreme Heat",
                    "author": "Tamim Faruk",
                    "type": "Environmental Warning",
                    "description": "Average temperatures have risen over 35 degrees celcius over the past week in South Asia including regions of Bangladesh and West Bengal. Heat strokes are a possibility. Keeping a bottle of water handy is advisable.",
                    "location": "Dhaka, Bangladesh",
                    "voteCount": 250,
                    "tags": [
                        "Heat",
                        "Hot",
                        "Heat strokes",
                        "Summer"
                    ],
                    "comments": [{
                        "author": "Zaheen Tahiyat",
                        "comment": "It's too hot, I can't take it anymore!",
                        "voteCount": 14,
                        "createdAt": 1461473735629
                    }, {
                        "author": "Ariff Ahmed",
                        "comment": "To parents, be careful when children go out to play outside. Keep them hydrated.",
                        "voteCount": 105,
                        "createdAt": 1461473817929
                    }],
                    "image": "",
                    "createdAt": 1461593816929
                },

                {
                    "issue": "Forest Fire",
                    "author": "Ricky Ponting",
                    "type": "Environmental Disaster",
                    "description": "A large smoke has been spotted close to NorthCliffe, 350 km South of Perth, Australia.",
                    "location": "Northcliffe, Australia",
                    "voteCount": 350,
                    "tags": [
                        "Forest fire",
                        "Fire",
                        "National Disaster"
                    ],
                    "comments": [{
                        "author": "Shane Warne",
                        "comment": "I spotted the smoke cloud in the morning. Informed the fire services right away. Hope everyone is safe.",
                        "voteCount": 148,
                        "createdAt": 1461473735629
                    }, {
                        "author": "Glenn Maxwell",
                        "comment": "A large bushfire that has burned more than 80,0000 hectares of forest and private land in Western Australiaâ€™s south west has been declared a national disaster.",
                        "voteCount": 10,
                        "createdAt": 1461473817929
                    }],
                    "image": "http://www.saarc-sadkn.org/image/forest8.jpg",
                    "createdAt": 1461593816929
                }

            ],
            recentIssues = [{
                "issue": "Air Quality",
                "author": "Chris Rennick",
                "type": "Environment",
                "description": "A gas leak at UofW has closed down the entire E2 wing. Please stay void of this area.",
                "location": "Waterloo, ON, Canada",
                "voteCount": 24,
                "tags": [
                    "Waterloo",
                    "Hazy",
                    "Air",
                    "suffocation"
                ],
                "comments": [{
                    "author": "Kush Patel",
                    "comment": "Is school going to be closed?",
                    "voteCount": 136,
                    "createdAt": 1461473816929
                }, {
                    "author": "Feridun Hamid",
                    "comment": "School will never close.",
                    "voteCount": 100,
                    "createdAt": 1461473816929
                }],
                "image": "http://michaelmurray.ca/wp-content/uploads/2013/12/smog3.jpg",
                "createdAt": 1461473816929
            }, {
                "issue": "Volcanic Dust",
                "author": "Wasif Zulkerfar",
                "type": "Air Quality",
                "description": "Massive amounts of volcanic dust has clouded the area",
                "location": "Etna, Italy",
                "voteCount": "603",
                "tags": [
                    "Italy",
                    "MtEtna"
                ],
                "comments": [{
                    "author": "John Travolta",
                    "comment": "Scary.",
                    "voteCount": 67,
                    "createdAt": 1461473816929
                }, {
                    "author": "John Cena",
                    "comment": "Very scary. Thoughts with those afflicted",
                    "voteCount": 78,
                    "createdAt": 1461473816929
                }],
                "image": "http://msnbcmedia.msn.com/i/MSNBC/Components/Photo/_new/pb-120424-etna-volcano-jm-01.jpg",
                "createdAt": 1461473816929
            }, {
                "issue": "Acid Smog",
                "author": "David Serif",
                "type": "Flint, Michigan",
                "description": "Water poisons have evaporated in the air. Wear masks if traveling",
                "location": "Flint, Michigan",
                "voteCount": 93,
                "tags": [
                    "FlintMichigan",
                    "AcidAir",
                    "Pollution",
                    "toxicAir"
                ],
                "comments": [{
                    "author": "Ryan Davey",
                    "comment": "This is so scary. The government has to do something about this",
                    "voteCount": 500,
                    "createdAt": 1461473816323
                }, {
                    "author": "Josh Wu",
                    "comment": "Very scary. Thoughts with those afflicted",
                    "voteCount": 67,
                    "createdAt": 1461473816323
                }],
                "image": "http://s3.amazonaws.com/media.wbur.org/wordpress/11/files/2015/12/1216_flint-river.jpg",
                "createdAt": 1461473816323
            }, {
                "issue": "High humidity",
                "author": "Jenny Sharp",
                "type": "Environment",
                "description": "Humidty is impeding breathing quality outside. Avoid heavy physical activity",
                "location": "Toronto, ON, Canada",
                "voteCount": "98",
                "tags": [
                    "humid",
                    "superwarm",
                    "fieryhot",
                ],
                "comments": [{
                    "author": "Nabil Barakati",
                    "comment": "I think I might be going for a jog anyways",
                    "voteCount": 55,
                    "createdAt": 1461473816929
                }, {
                    "author": "Tahmid Sayed",
                    "comment": "Gunna go hide in my AC rn.",
                    "voteCount": 730,
                    "createdAt": 1461473816929
                }],
                "image": "http://www.cp24.com/polopoly_fs/1.2441721.1442835445!/httpImage/image.jpg_gen/derivatives/landscape_620/image.jpg",
                "createdAt": 1461473816929
            }];
        this.changeIssueType = function(issue) {
            this.isInputMode = false;
            this.selected = {};
            // angular.forEach(this.selected, function(value, key) {
            //     this.selected[key] = false;
            //     });
            this.selected[issue] = true; 
            if (issue === 'homepage') {
                this.issues = homePageIssues;
            } else if (issue === 'globalTrending') {
                this.issues = globalTrendingIssues;
            } else if (issue === 'recent') { 
                this.issues = recentIssues;
            }
        };
        this.isInputMode = false;
        this.changeIssueType('homepage');
    };
    angular.module('envio').controller('newsfeedCtrl', [ctrlFunction]);
})();