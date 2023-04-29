
function GetPhoto(fileInput) {
    encodeImageFileAsURL(fileInput);
}




  
  function encodeImageFileAsURL(element) {
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
      //console.log("RESULT", reader.result);
      document.getElementById('UserUploadImg').src=reader.result;
     
      $('#ResDiv').fadeIn(500);
      document.getElementById("idebtn").scrollIntoView(true);

     
    };
    reader.readAsDataURL(file);
  }




  function Predict() {
    //console.log(Base64Code);
    var imgArr = [];
    imgArr.push(document.getElementById('UserUploadImg').src);
    //const apiKeyCGroup41='kip0Z1E82eAOoH35RroCeUJIGoMKGMitMehj1NahjUAUgCdYCk'
    const apiKeyGilad='dMF9bxaLq8dcblg5CE5kGqgFKlJ63VYPF3cKD24u9p9KOenUxU' //14 remining 29/04/23
    const data = {
      api_key: apiKeyGilad,
      images: imgArr,
      /* modifiers docs: https://github.com/flowerchecker/Plant-id-API/wiki/Modifiers */
      modifiers: ["crops_fast", "similar_images"],
      plant_language: "he",
      /* plant details docs: https://github.com/flowerchecker/Plant-id-API/wiki/Plant-details */
      plant_details: [
        "common_names",
        "url",
        "name_authority",
        "wiki_description",
        "taxonomy",
        "synonyms",
      ],
    };
  
    let api = "https://api.plant.id/v2/identify";
  
    $.ajax({
      type: "POST",
      url: api,
      data: JSON.stringify(data),
      cache: false,
      contentType: "application/json",
      dataType: "json",
      success: successCBDemo,
      error: errorCBDemo,
    });
  }
  
  function successCBDemo(data) {
    console.log(data);
    $('#Res').fadeIn(500);
    document.getElementById("Res").scrollIntoView(true);

 
    
    RendertoRealCardPH(data);
  }
  function errorCBDemo(err) {
    console.log(err);
  }


  function StaBM() {
    successCBDemo(Stub) 
  }




 Stub= {

    "id": 77586389,
    "custom_id": null,
    "meta_data": {
        "latitude": null,
        "longitude": null,
        "date": "2023-04-28",
        "datetime": "2023-04-28"
    },
    "uploaded_datetime": 1682679249.490452,
    "finished_datetime": 1682679250.090328,
    "images": [
        {
            "file_name": "002621ef12714a5f8f6f3be259f7ad53.jpg",
            "url": "https://plant.id/media/images/002621ef12714a5f8f6f3be259f7ad53.jpg"
        }
    ],
    "suggestions": [
        {
            "id": 430927398,
            "plant_name": "Sambucus nigra",
            "plant_details": {
                "common_names": null,
                "url": "https://en.wikipedia.org/wiki/Sambucus_nigra",
                "name_authority": "Sambucus nigra L.",
                "wiki_description": null,
                "taxonomy": {
                    "class": "Magnoliopsida",
                    "family": "Viburnaceae",
                    "genus": "Sambucus",
                    "kingdom": "Plantae",
                    "order": "Dipsacales",
                    "phylum": "Magnoliophyta"
                },
                "synonyms": [
                    "Sambucus alba",
                    "Sambucus arborescens",
                    "Sambucus aurea",
                    "Sambucus columnaris",
                    "Sambucus dissecta",
                    "Sambucus elegans",
                    "Sambucus florida",
                    "Sambucus hirta",
                    "Sambucus laciniata",
                    "Sambucus leucocarpa",
                    "Sambucus lucida",
                    "Sambucus medullosa",
                    "Sambucus monstrosa",
                    "Sambucus nigra f. albomarmorata",
                    "Sambucus nigra f. chlorocarpa",
                    "Sambucus nigra f. luteomarmorata",
                    "Sambucus nigra f. porphyrophylla",
                    "Sambucus nigra var. laciniata",
                    "Sambucus nigra var. rotundifolia",
                    "Sambucus pulverulenta",
                    "Sambucus pyramidata",
                    "Sambucus rotundifolia",
                    "Sambucus virescens",
                    "Sambucus vulgaris"
                ],
                "language": "he",
                "scientific_name": "Sambucus nigra",
                "structured_name": {
                    "genus": "sambucus",
                    "species": "nigra"
                }
            },
            "probability": 0.91782353967333362,
            "confirmed": false,
            "similar_images": [
                {
                    "id": "94c261b50568bca69859580401c20c66",
                    "similarity": 0.19888019105446053,
                    "url": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/94c/261b50568bca69859580401c20c66.jpg",
                    "url_small": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/94c/261b50568bca69859580401c20c66.small.jpg"
                },
                {
                    "id": "de66e730e3681329ef97196bee5c6e0a",
                    "similarity": 0.18239321779132323,
                    "url": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/de6/6e730e3681329ef97196bee5c6e0a.jpg",
                    "url_small": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/de6/6e730e3681329ef97196bee5c6e0a.small.jpg"
                }
            ]
        },
        {
            "id": 430927399,
            "plant_name": "Malus",
            "plant_details": {
                "common_names": null,
                "url": "https://en.wikipedia.org/wiki/Malus",
                "name_authority": "Malus Mill.",
                "wiki_description": null,
                "taxonomy": {
                    "class": "Magnoliopsida",
                    "family": "Rosaceae",
                    "genus": "Malus",
                    "kingdom": "Plantae",
                    "order": "Rosales",
                    "phylum": "Magnoliophyta"
                },
                "synonyms": [
                    "Chloromeles",
                    "Sinomalus",
                    "× Tormimalus"
                ],
                "language": "he",
                "scientific_name": "Malus",
                "structured_name": {
                    "genus": "malus"
                }
            },
            "probability": 0.662254838316545824,
            "confirmed": false,
            "similar_images": [
                {
                    "id": "4643d6d07ec3405affbd18d7dd416596",
                    "similarity": 0.23542418593504294,
                    "url": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/464/3d6d07ec3405affbd18d7dd416596.jpg",
                    "url_small": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/464/3d6d07ec3405affbd18d7dd416596.small.jpg"
                },
                {
                    "id": "f78db7dccbe07572a50b9132af45db2f",
                    "similarity": 0.23051379979686845,
                    "url": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/f78/db7dccbe07572a50b9132af45db2f.jpg",
                    "url_small": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/f78/db7dccbe07572a50b9132af45db2f.small.jpg"
                }
            ]
        },
        {
            "id": 430927400,
            "plant_name": "Liquidambar styraciflua",
            "plant_details": {
                "common_names": null,
                "url": "https://en.wikipedia.org/wiki/Liquidambar_styraciflua",
                "name_authority": "Liquidambar styraciflua L.",
                "wiki_description": null,
                "taxonomy": {
                    "class": "Magnoliopsida",
                    "family": "Altingiaceae",
                    "genus": "Liquidambar",
                    "kingdom": "Plantae",
                    "order": "Saxifragales",
                    "phylum": "Magnoliophyta"
                },
                "synonyms": [
                    "Liquidambar barbata",
                    "Liquidambar gummifera",
                    "Liquidambar macrophylla",
                    "Liquidambar styraciflua f. pendula",
                    "Liquidambar styraciflua f. rotundiloba",
                    "Liquidambar styraciflua var. macrophylla",
                    "Liquidambar styraciflua var. mexicana",
                    "Liquidambar tuberculata"
                ],
                "language": "he",
                "scientific_name": "Liquidambar styraciflua",
                "structured_name": {
                    "genus": "liquidambar",
                    "species": "styraciflua"
                }
            },
            "probability": 0.05615194349351305,
            "confirmed": false,
            "similar_images": [
                {
                    "id": "0fe9f7d0f1f71ca8235c927ab3256789",
                    "similarity": 0.1948201825567842,
                    "url": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/0fe/9f7d0f1f71ca8235c927ab3256789.jpg",
                    "url_small": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/0fe/9f7d0f1f71ca8235c927ab3256789.small.jpg"
                },
                {
                    "id": "a381b0ec2ef6490d69e4555bf34716f3",
                    "similarity": 0.1668567672564312,
                    "url": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/a38/1b0ec2ef6490d69e4555bf34716f3.jpg",
                    "url_small": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/a38/1b0ec2ef6490d69e4555bf34716f3.small.jpg",
                    "citation": "syvwlch",
                    "license_name": "CC BY 4.0",
                    "license_url": "https://creativecommons.org/licenses/by/4.0/"
                }
            ]
        },
        {
            "id": 430927401,
            "plant_name": "Prunus",
            "plant_details": {
                "common_names": [
                    "פרונוס"
                ],
                "url": "https://he.wikipedia.org/wiki/פרונוס",
                "name_authority": "Prunus L.",
                "wiki_description": {
                    "value": "פְּרוּנוּס (שם מדעי: Prunus) הוא סוג של עצים ושיחים בעלי פרחים, הכולל את האפרסק, שקד, דובדבן, שזיף ומינים רבים אחרים. קיימים למעלה מ-430 מינים שונים של פרונוס, הצומחים בכל אזור בעל אקלים ממוזג בעולם.",
                    "citation": "https://he.wikipedia.org/wiki/פרונוס",
                    "license_name": "CC BY-SA 3.0",
                    "license_url": "https://creativecommons.org/licenses/by-sa/3.0/"
                },
                "taxonomy": {
                    "class": "Magnoliopsida",
                    "family": "Rosaceae",
                    "genus": "Prunus",
                    "kingdom": "Plantae",
                    "order": "Rosales",
                    "phylum": "Magnoliophyta"
                },
                "synonyms": [
                    "+ Amygdalopersica",
                    "Aflatunia",
                    "Amygdalophora",
                    "Amygdalopsis",
                    "Amygdalus",
                    "Armeniaca",
                    "Ceraseidos",
                    "Cerasophora",
                    "Cerasus",
                    "Chimanthus",
                    "Digaster",
                    "Dodecadia",
                    "Druparia",
                    "Emplectocladus",
                    "Germaria",
                    "Hagidryas",
                    "Jadelotia",
                    "Lauro-cerasus",
                    "Louiseania",
                    "Maddenia",
                    "Microcerasus",
                    "Padellus",
                    "Padus",
                    "Polydontia",
                    "Polystorthia",
                    "Prunophora",
                    "Prunopsis",
                    "Prunus-lauro-cerasus",
                    "Pygeum",
                    "Tubopadus",
                    "Turetta",
                    "× Armenoprunus",
                    "× Cerapadus",
                    "× Cerasolouiseania",
                    "× Ceropadus"
                ],
                "language": "he",
                "scientific_name": "Prunus",
                "structured_name": {
                    "genus": "prunus"
                }
            },
            "probability": 0.25558875580275957,
            "confirmed": false,
            "similar_images": [
                {
                    "id": "93ddcd88460e7d48d77c1b1ac43032f3",
                    "similarity": 0.22380404594083184,
                    "url": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/93d/dcd88460e7d48d77c1b1ac43032f3.jpg",
                    "url_small": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/93d/dcd88460e7d48d77c1b1ac43032f3.small.jpg"
                },
                {
                    "id": "47849a72d710fcc010f6ce3a9e454c38",
                    "similarity": 0.21847402418984768,
                    "url": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/478/49a72d710fcc010f6ce3a9e454c38.jpg",
                    "url_small": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/478/49a72d710fcc010f6ce3a9e454c38.small.jpg",
                    "citation": "contri",
                    "license_name": "CC BY-SA 2.0",
                    "license_url": "https://creativecommons.org/licenses/by-sa/2.0/"
                }
            ]
        },
        {
            "id": 430927402,
            "plant_name": "Celtis australis",
            "plant_details": {
                "common_names": [
                    "מיש דרומי"
                ],
                "url": "https://he.wikipedia.org/wiki/מיש_דרומי",
                "name_authority": "Celtis australis L.",
                "wiki_description": {
                    "value": "מַיִשׁ דרומי (שם מדעי: Celtis australis) הוא עץ בר ממשפחת הקנאביים הגדל בחורש באקלים ים תיכוני. הוא מגיע לגובה של 20 מ'. גזעו מפותח ונאה, קליפת הגזע עדינה וחלקה. העלים דמויי-ביצה לא-סימטרית, צבעם ירוק כהה ושפתם משוננת. הפרחים קטנים, וצבעם ירוק-צהבהב. הפרי הוא בית-גלעין המכוסה בציפה דקה. הפריחה בחודשים מרץ-אפריל.\nתפוצת העצים הגדלים בר בארץ מוגבלת למקומות מעטים, כגון: צפת, ראש-פינה, מורדות הגולן, פקיעין, ירושלים וביר-זית וכן ניתן למצוא עצי מיש לצד קברי קדושים מוסלמיים ובקרבת מסגדים עתיקים. במאה השנים האחרונות החלו לגדלו בארץ כעץ נוי, בעיקר כעץ צל ושדרות. מיש דרומי הוא צמח מוגן בישראל.\nברפואה העממית הוא מקובל כתרופה למחלות ולדלקות עור (בעיקר לפטריות ולפסוריאזיס). כמו כן הוא יעיל לטיפול בכאבי פרקים.",
                    "citation": "https://he.wikipedia.org/wiki/מיש_דרומי",
                    "license_name": "CC BY-SA 3.0",
                    "license_url": "https://creativecommons.org/licenses/by-sa/3.0/"
                },
                "taxonomy": {
                    "class": "Magnoliopsida",
                    "family": "Cannabaceae",
                    "genus": "Celtis",
                    "kingdom": "Plantae",
                    "order": "Rosales",
                    "phylum": "Magnoliophyta"
                },
                "synonyms": [
                    "Celtis australis f. variegata",
                    "Celtis betulifolia",
                    "Celtis excelsa",
                    "Celtis kotschyana",
                    "Celtis lutea",
                    "Celtis serrata"
                ],
                "language": "he",
                "scientific_name": "Celtis australis",
                "structured_name": {
                    "genus": "celtis",
                    "species": "australis"
                }
            },
            "probability": 0.045356311796201185,
            "confirmed": false,
            "similar_images": [
                {
                    "id": "184239be02701235ea97bdd3643ea11b",
                    "similarity": 0.15712945599305234,
                    "url": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/184/239be02701235ea97bdd3643ea11b.jpg",
                    "url_small": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/184/239be02701235ea97bdd3643ea11b.small.jpg"
                },
                {
                    "id": "0ff0ea61510e61b5b3b824c102cf4c3c",
                    "similarity": 0.1422138305252953,
                    "url": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/0ff/0ea61510e61b5b3b824c102cf4c3c.jpg",
                    "url_small": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/0ff/0ea61510e61b5b3b824c102cf4c3c.small.jpg",
                    "citation": "Bayarri Nardi",
                    "license_name": "CC BY-SA 4.0",
                    "license_url": "https://creativecommons.org/licenses/by-sa/4.0/"
                }
            ]
        },
        {
            "id": 430927403,
            "plant_name": "Prunus avium",
            "plant_details": {
                "common_names": null,
                "url": "https://en.wikipedia.org/wiki/Prunus_avium",
                "name_authority": "Prunus avium (L.) L.",
                "wiki_description": null,
                "taxonomy": {
                    "class": "Magnoliopsida",
                    "family": "Rosaceae",
                    "genus": "Prunus",
                    "kingdom": "Plantae",
                    "order": "Rosales",
                    "phylum": "Magnoliophyta"
                },
                "synonyms": [
                    "Cerasus anglica",
                    "Cerasus arduennensis",
                    "Cerasus avicularis",
                    "Cerasus avium",
                    "Cerasus avium convar. duracina",
                    "Cerasus avium convar. juliana",
                    "Cerasus avium var. albida",
                    "Cerasus avium var. duracina",
                    "Cerasus avium var. juliana",
                    "Cerasus avium var. sylvestris-rubra",
                    "Cerasus dulcis",
                    "Cerasus duracina",
                    "Cerasus nigra",
                    "Cerasus nigricans",
                    "Cerasus pallida",
                    "Cerasus regalis",
                    "Cerasus varia",
                    "Druparia avium",
                    "Prunus avium f. nigricans",
                    "Prunus avium f. silvestris",
                    "Prunus avium subsp. juliana",
                    "Prunus avium var. silvestris",
                    "Prunus cerasus var. actiana",
                    "Prunus cerasus var. avium",
                    "Prunus cerasus var. bigarella",
                    "Prunus cerasus var. dulcis",
                    "Prunus cerasus var. duracina",
                    "Prunus cerasus var. juliana",
                    "Prunus duracina",
                    "Prunus juliana",
                    "Prunus nigricans",
                    "Prunus varia"
                ],
                "language": "he",
                "scientific_name": "Prunus avium",
                "structured_name": {
                    "genus": "prunus",
                    "species": "avium"
                }
            },
            "probability": 0.03667459926871084,
            "confirmed": false,
            "similar_images": [
                {
                    "id": "3b66b5db0c281bdd9023df970fda1d5a",
                    "similarity": 0.2530707411054421,
                    "url": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/3b6/6b5db0c281bdd9023df970fda1d5a.jpg",
                    "url_small": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/3b6/6b5db0c281bdd9023df970fda1d5a.small.jpg"
                },
                {
                    "id": "a4a8d651cf4ba11c32e84a5ead009112",
                    "similarity": 0.21478886266669323,
                    "url": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/a4a/8d651cf4ba11c32e84a5ead009112.jpg",
                    "url_small": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/a4a/8d651cf4ba11c32e84a5ead009112.small.jpg"
                }
            ]
        },
        {
            "id": 430927404,
            "plant_name": "Aria edulis",
            "plant_details": {
                "common_names": null,
                "url": "http://www.plantsoftheworldonline.org/taxon/urn:lsid:ipni.org:names:721579-1",
                "name_authority": "Aria edulis (Willd.) M.Roem.",
                "wiki_description": null,
                "taxonomy": {
                    "class": "Magnoliopsida",
                    "family": "Rosaceae",
                    "genus": "Aria",
                    "kingdom": "Plantae",
                    "order": "Rosales",
                    "phylum": "Magnoliophyta"
                },
                "synonyms": [
                    "Aria alpina",
                    "Aria aria",
                    "Aria majestica",
                    "Aria nivea",
                    "Aria tomentosa",
                    "Aronia alpina",
                    "Azarolus aria",
                    "Chamaemespilus aria",
                    "Crataegus alpina",
                    "Crataegus aria",
                    "Crataegus pallida",
                    "Hahnia aria",
                    "Lazarolus aria",
                    "Mespilus aria",
                    "Pyrenia aria",
                    "Pyrus alpina",
                    "Pyrus aria",
                    "Pyrus crenata",
                    "Pyrus edulis",
                    "Sorbus acutiloba",
                    "Sorbus alpina",
                    "Sorbus ararica",
                    "Sorbus aria",
                    "Sorbus arioides",
                    "Sorbus arvernensis",
                    "Sorbus bellojocensis",
                    "Sorbus budaiana",
                    "Sorbus carpatica",
                    "Sorbus controversa",
                    "Sorbus edulis",
                    "Sorbus glabrata",
                    "Sorbus globulifera",
                    "Sorbus huljakii",
                    "Sorbus oblonga",
                    "Sorbus pallidifolia",
                    "Sorbus reverchonii",
                    "Sorbus sphaerocarpa",
                    "Sorbus turbinata",
                    "× Aroniaria alpina",
                    "× Sorbaronia alpina"
                ],
                "language": "he",
                "scientific_name": "Aria edulis",
                "structured_name": {
                    "genus": "aria",
                    "species": "edulis"
                }
            },
            "probability": 0.032586903111657045,
            "confirmed": false,
            "similar_images": [
                {
                    "id": "9ba0af14af90475f237bac35306cb48c",
                    "similarity": 0.17849969686866973,
                    "url": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/9ba/0af14af90475f237bac35306cb48c.jpg",
                    "url_small": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/9ba/0af14af90475f237bac35306cb48c.small.jpg"
                },
                {
                    "id": "0d3c920bf9c4d2556fdf0870ab1c1a53",
                    "similarity": 0.1527425140066374,
                    "url": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/0d3/c920bf9c4d2556fdf0870ab1c1a53.jpg",
                    "url_small": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/0d3/c920bf9c4d2556fdf0870ab1c1a53.small.jpg"
                }
            ]
        },
        {
            "id": 430927405,
            "plant_name": "Juglans regia",
            "plant_details": {
                "common_names": [
                    "אגוז מלך",
                    "אגוז אנגלי",
                    "אגוז קליפורניה"
                ],
                "url": "https://he.wikipedia.org/wiki/אגוז_מלך",
                "name_authority": "Juglans regia L.",
                "wiki_description": {
                    "value": "אגוז מלך (שם מדעי: Juglans regia), המכונה גם אגוז אנגלי או אגוז קליפורניה הוא עץ נשיר המתנשא לגובה של 25-35 מטר ובעל גזע בקוטר של עד 2 מטר. קיימים 59 זנים לאגוז המלך. הוא גדל בטבע מדרום-מערב סין מערבה עד לבלקנים. העץ מניב פירות במשך כ-100 שנה.\nפירות העץ נאכלים ומשמשים לתעשייה. האגוזים משמשים בעיקר בבישול ובתחום הקונדיטוריה, בעיקר כתוספת לתבשילים ועוגות.\nהיוונים הקדישו עץ זה לארטמיס, ואילו הרומאים הקדישוהו ליופיטר.",
                    "citation": "https://he.wikipedia.org/wiki/אגוז_מלך",
                    "license_name": "CC BY-SA 3.0",
                    "license_url": "https://creativecommons.org/licenses/by-sa/3.0/"
                },
                "taxonomy": {
                    "class": "Magnoliopsida",
                    "family": "Juglandaceae",
                    "genus": "Juglans",
                    "kingdom": "Plantae",
                    "order": "Fagales",
                    "phylum": "Magnoliophyta"
                },
                "synonyms": [
                    "Juglans asplenifolia",
                    "Juglans dissecta",
                    "Juglans duclouxiana",
                    "Juglans fallax",
                    "Juglans fertilis",
                    "Juglans frutescens",
                    "Juglans fruticosa",
                    "Juglans heterophylla",
                    "Juglans kamaonia",
                    "Juglans longirostris",
                    "Juglans orientis",
                    "Juglans quercifolia",
                    "Juglans regia subsp. sinensis",
                    "Juglans regia var. laciniata",
                    "Juglans salicifolia",
                    "Juglans sinensis"
                ],
                "language": "he",
                "scientific_name": "Juglans regia",
                "structured_name": {
                    "genus": "juglans",
                    "species": "regia"
                }
            },
            "probability": 0.031010204626218313,
            "confirmed": false,
            "similar_images": [
                {
                    "id": "ab0f7923da593670548c2971b8e8e9a4",
                    "similarity": 0.21317015543492027,
                    "url": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/ab0/f7923da593670548c2971b8e8e9a4.jpg",
                    "url_small": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/ab0/f7923da593670548c2971b8e8e9a4.small.jpg"
                },
                {
                    "id": "505f0fb7abe38923f82b2641238e91d2",
                    "similarity": 0.1741464275897836,
                    "url": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/505/f0fb7abe38923f82b2641238e91d2.jpg",
                    "url_small": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/505/f0fb7abe38923f82b2641238e91d2.small.jpg"
                }
            ]
        },
        {
            "id": 430927406,
            "plant_name": "Pyrus calleryana",
            "plant_details": {
                "common_names": null,
                "url": "https://en.wikipedia.org/wiki/Pyrus_calleryana",
                "name_authority": "Pyrus calleryana Decne.",
                "wiki_description": null,
                "taxonomy": {
                    "class": "Magnoliopsida",
                    "family": "Rosaceae",
                    "genus": "Pyrus",
                    "kingdom": "Plantae",
                    "order": "Rosales",
                    "phylum": "Magnoliophyta"
                },
                "synonyms": [
                    "Pyrus dimorphophylla",
                    "Pyrus kawakamii",
                    "Pyrus mairei",
                    "Pyrus tsiukyoensis"
                ],
                "language": "he",
                "scientific_name": "Pyrus calleryana",
                "structured_name": {
                    "genus": "pyrus",
                    "species": "calleryana"
                }
            },
            "probability": 0.017275445880958626,
            "confirmed": false,
            "similar_images": [
                {
                    "id": "43ebe166596fd20df953a5adfc07c980",
                    "similarity": 0.22713431784000934,
                    "url": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/43e/be166596fd20df953a5adfc07c980.jpg",
                    "url_small": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/43e/be166596fd20df953a5adfc07c980.small.jpg"
                },
                {
                    "id": "856654ff9db32429d8b79a414ebe8ba8",
                    "similarity": 0.19124520366955516,
                    "url": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/856/654ff9db32429d8b79a414ebe8ba8.jpg",
                    "url_small": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/856/654ff9db32429d8b79a414ebe8ba8.small.jpg"
                }
            ]
        },
        {
            "id": 430927407,
            "plant_name": "Scandosorbus intermedia",
            "plant_details": {
                "common_names": null,
                "url": "http://www.plantsoftheworldonline.org/taxon/urn:lsid:ipni.org:names:77193169-1",
                "name_authority": "Scandosorbus intermedia (Ehrh.) Sennikov",
                "wiki_description": null,
                "taxonomy": {
                    "class": "Magnoliopsida",
                    "family": "Rosaceae",
                    "genus": "Scandosorbus",
                    "kingdom": "Plantae",
                    "order": "Rosales",
                    "phylum": "Magnoliophyta"
                },
                "synonyms": [
                    "Aria intermedia",
                    "Aria scandica",
                    "Aria suecica",
                    "Borkhausenia intermedia",
                    "Crataegus intermedia",
                    "Crataegus scandica",
                    "Hahnia intermedia",
                    "Hahnia suecica",
                    "Lazarolus intermedia",
                    "Pyrus intermedia",
                    "Pyrus scandica",
                    "Pyrus semipinnata",
                    "Pyrus suecica",
                    "Sorbus conwentzii",
                    "Sorbus intermedia",
                    "Sorbus scandiaca",
                    "× Sorbotoraria intermedia"
                ],
                "language": "he",
                "scientific_name": "Scandosorbus intermedia",
                "structured_name": {
                    "genus": "scandosorbus",
                    "species": "intermedia"
                }
            },
            "probability": 0.01703218331237081,
            "confirmed": false,
            "similar_images": [
                {
                    "id": "4e1fb83eb3a44481fa209a7f5a2f9ff5",
                    "similarity": 0.21666189100635913,
                    "url": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/4e1/fb83eb3a44481fa209a7f5a2f9ff5.jpg",
                    "url_small": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/4e1/fb83eb3a44481fa209a7f5a2f9ff5.small.jpg"
                },
                {
                    "id": "2ebd43435c4ce0c52679feb2e03d18bd",
                    "similarity": 0.134360534022333,
                    "url": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/2eb/d43435c4ce0c52679feb2e03d18bd.jpg",
                    "url_small": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/2eb/d43435c4ce0c52679feb2e03d18bd.small.jpg"
                }
            ]
        },
        {
            "id": 430927408,
            "plant_name": "Fraxinus pennsylvanica",
            "plant_details": {
                "common_names": null,
                "url": "https://en.wikipedia.org/wiki/Fraxinus_pennsylvanica",
                "name_authority": "Fraxinus pennsylvanica Marshall",
                "wiki_description": null,
                "taxonomy": {
                    "class": "Magnoliopsida",
                    "family": "Oleaceae",
                    "genus": "Fraxinus",
                    "kingdom": "Plantae",
                    "order": "Lamiales",
                    "phylum": "Magnoliophyta"
                },
                "synonyms": [
                    "Calycomelia campestris",
                    "Calycomelia elliptica",
                    "Calycomelia expansa",
                    "Calycomelia lancea",
                    "Calycomelia lanceolata",
                    "Calycomelia ovata",
                    "Calycomelia pennsylvanica",
                    "Calycomelia pubescens",
                    "Calycomelia richardii",
                    "Fraxinus americana subsp. pennsylvanica",
                    "Fraxinus americana var. normale",
                    "Fraxinus americana var. rubicunda",
                    "Fraxinus americana var. subpubescens",
                    "Fraxinus arbutifolia",
                    "Fraxinus aucubifolia",
                    "Fraxinus campestris",
                    "Fraxinus cerasifolia",
                    "Fraxinus cinerea",
                    "Fraxinus concolor",
                    "Fraxinus darlingtonii",
                    "Fraxinus elliptica",
                    "Fraxinus expansa",
                    "Fraxinus fusca",
                    "Fraxinus juglandifolia var. subintegerrima",
                    "Fraxinus lancea",
                    "Fraxinus lanceolata",
                    "Fraxinus lanceolata var. lindheimeri",
                    "Fraxinus lanceolata var. viridis",
                    "Fraxinus lancifolia",
                    "Fraxinus longifolia",
                    "Fraxinus media",
                    "Fraxinus nigra var. pubescens",
                    "Fraxinus oblongocarpa",
                    "Fraxinus ovalis",
                    "Fraxinus ovata",
                    "Fraxinus pennsylvanica f. colorata",
                    "Fraxinus pennsylvanica f. erythrocarpa",
                    "Fraxinus pennsylvanica f. megaphylla",
                    "Fraxinus pennsylvanica f. scotica",
                    "Fraxinus pennsylvanica subsp. subintegerrima",
                    "Fraxinus pennsylvanica var. austinii",
                    "Fraxinus pennsylvanica var. campestris",
                    "Fraxinus pennsylvanica var. pubescens",
                    "Fraxinus pennsylvanica var. subintegerrima",
                    "Fraxinus pennsylvanica var. typica",
                    "Fraxinus platyphylla",
                    "Fraxinus pubescens",
                    "Fraxinus pubescens var. boscii",
                    "Fraxinus pubescens var. lindheimeri",
                    "Fraxinus pubescens var. nana",
                    "Fraxinus pubescens var. ovata",
                    "Fraxinus richardii",
                    "Fraxinus rubicunda",
                    "Fraxinus rufa",
                    "Fraxinus smallii",
                    "Fraxinus subvillosa",
                    "Fraxinus trialata",
                    "Fraxinus viridis",
                    "Fraxinus viridis var. pubescens",
                    "Fraxinus viridis var. trialata",
                    "Leptalix cinerea",
                    "Leptalix elliptica",
                    "Leptalix expansa",
                    "Leptalix fusca",
                    "Leptalix lancifolia",
                    "Leptalix longifolia",
                    "Leptalix media",
                    "Leptalix ovata",
                    "Leptalix pubescens",
                    "Leptalix richardii",
                    "Leptalix rubicunda",
                    "Leptalix rufa"
                ],
                "language": "he",
                "scientific_name": "Fraxinus pennsylvanica",
                "structured_name": {
                    "genus": "fraxinus",
                    "species": "pennsylvanica"
                }
            },
            "probability": 0.014474366464675032,
            "confirmed": false,
            "similar_images": [
                {
                    "id": "6d6fa96666cfc4c7683ffb9f79dc6416",
                    "similarity": 0.2143584947827927,
                    "url": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/6d6/fa96666cfc4c7683ffb9f79dc6416.jpg",
                    "url_small": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/6d6/fa96666cfc4c7683ffb9f79dc6416.small.jpg"
                },
                {
                    "id": "f406234ba0f823854be57da9892adc86",
                    "similarity": 0.17724677515809698,
                    "url": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/f40/6234ba0f823854be57da9892adc86.jpg",
                    "url_small": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/f40/6234ba0f823854be57da9892adc86.small.jpg",
                    "citation": "Svetlana Polevova",
                    "license_name": "CC0",
                    "license_url": "https://creativecommons.org/publicdomain/zero/1.0/"
                }
            ]
        },
        {
            "id": 430927409,
            "plant_name": "Prunus serotina",
            "plant_details": {
                "common_names": null,
                "url": "https://en.wikipedia.org/wiki/Prunus_serotina",
                "name_authority": "Prunus serotina Ehrh.",
                "wiki_description": null,
                "taxonomy": {
                    "class": "Magnoliopsida",
                    "family": "Rosaceae",
                    "genus": "Prunus",
                    "kingdom": "Plantae",
                    "order": "Rosales",
                    "phylum": "Magnoliophyta"
                },
                "synonyms": [
                    "Cerasus asplenifolia",
                    "Cerasus serotina",
                    "Cerasus serotina var. montana",
                    "Padus cartilaginea",
                    "Padus eximia",
                    "Padus hirsuta",
                    "Padus retusa",
                    "Padus serotina",
                    "Padus serotina var. asplenifolia",
                    "Padus serotina var. cartilaginea",
                    "Padus serotina var. pendula",
                    "Padus serotina var. pyramidalis",
                    "Prunus cartilaginea",
                    "Prunus eximia",
                    "Prunus hirsuta",
                    "Prunus serotina subsp. eximia",
                    "Prunus serotina subsp. hirsuta",
                    "Prunus serotina var. cartilaginea",
                    "Prunus serotina var. eximia",
                    "Prunus serotina var. montana",
                    "Prunus serotina var. neomontana"
                ],
                "language": "he",
                "scientific_name": "Prunus serotina",
                "structured_name": {
                    "genus": "prunus",
                    "species": "serotina"
                }
            },
            "probability": 0.01308955346837979,
            "confirmed": false,
            "similar_images": [
                {
                    "id": "6ec313845aa7b7891047c2a1e0a76365",
                    "similarity": 0.20515708091095208,
                    "url": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/6ec/313845aa7b7891047c2a1e0a76365.jpg",
                    "url_small": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/6ec/313845aa7b7891047c2a1e0a76365.small.jpg"
                },
                {
                    "id": "6a135e0819a5d30c99674b0d880ce73a",
                    "similarity": 0.19968042553279894,
                    "url": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/6a1/35e0819a5d30c99674b0d880ce73a.jpg",
                    "url_small": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/6a1/35e0819a5d30c99674b0d880ce73a.small.jpg"
                }
            ]
        },
        {
            "id": 430927410,
            "plant_name": "Prunus serrulata",
            "plant_details": {
                "common_names": [
                    "סאקוּרָה",
                    "דובדבן יפני",
                    "סאקוראנבו"
                ],
                "url": "https://he.wikipedia.org/wiki/סאקורה",
                "name_authority": "Prunus serrulata Lindl.",
                "wiki_description": {
                    "value": "סאקוּרָה (桜 או 櫻) הוא השם היפני לעץ הנוי דובדבן. פרי הדובדבן נקרא סאקוראנבו (桜ん坊).\nהסאקורה הוא סמל יפני, היסטורי ותרבותי, המסמל את האופי היפה אך החמקמק ובר-החלוף של החיים, ומופיע תדיר באמנות יפנית. את יופיו של עץ הדובדבן היפני חוגגים בפסטיבל ההאנאמי (花見, הסתכלות על פרחים).\nזן הדובדבן האהוב ביותר ביפן הוא ה\"סומיי יושינו\". פרחיו כמעט לבנים לגמרי, ולעיתים בעלי גוון חיוור ביותר של ורוד, בעיקר ליד הגבעול. פרחיו בדרך כלל פורחים ונושרים לפני שהעלים יוצאים, על כן העצים נראים כמעט לבנים לגמרי מהצמרת מטה.\nסוגים אחרים הם \"יאמה סאקורה\" (山桜-דובדבן ההרים), \"יאה סאקורה\" ו\"שידארה סאקורה\". ל\"יאה סאקורה\" פרחים גדולים ועבים עם אבקנים ורודים עשירים. ל\"שידארה סאקורה\", או \"הדובדבן המתייפח\", יש ענפים הנופלים מטה כמו אלו של הערבה, מרוצפים בפרחים ורודים.\nכל שנה, עוקבים היפנים אחר ה\"סאקורה זנסן\" (桜前線) או \"חזית פריחת הדובדבן\". היא מתחילה באוקינאווה בפברואר ובדרך כלל מגיעה לקיוטו וטוקיו לקראת סוף חודש מרץ או תחילת חודש אפריל. אז היא ממשיכה צפונה, ומגיעה להוקאידו כמה שבועות מאוחר יותר.\nיפן העניקה לארצות הברית בשנת 1912 3,000 עצי דובדבן במתנה כדי לחגוג את הידידות המתפתחת בין המדינות. העצים נמצאים בפארק הפוטומק המערבי לאורך נהר הפוטומק הזורם דרך וושינגטון הבירה. יפן העניקה לארצות הברית 3,000 עצים נוספים בשנת 1956. עצי הדובדבן ממשיכים להוות מוקד משיכה פופולרי לתיירים ומושא פסטיבל פריחת הדובדבן הלאומי כשהם מגיעים לפריחה מלאה בתחילת האביב.\nבשנות ה-30 של המאה ה-20 קמה ביפן תנועה מהפכנית שנקראה \"אגודת פרחי הדובדבן\" שביצעה כמה ניסיונות הפיכה.",
                    "citation": "https://he.wikipedia.org/wiki/סאקורה",
                    "license_name": "CC BY-SA 3.0",
                    "license_url": "https://creativecommons.org/licenses/by-sa/3.0/"
                },
                "taxonomy": {
                    "class": "Magnoliopsida",
                    "family": "Rosaceae",
                    "genus": "Prunus",
                    "kingdom": "Plantae",
                    "order": "Rosales",
                    "phylum": "Magnoliophyta"
                },
                "synonyms": [
                    "Cerasus maeda",
                    "Cerasus serrulata var. taishanensis",
                    "Padus serrulata",
                    "Prunus serrulata f. erythrosa",
                    "Prunus serrulata f. sirotae",
                    "Prunus serrulata f. taihaku",
                    "Prunus serrulata var. taishanensis",
                    "Prunus wildeniana",
                    "Prunus × donarium f. sirotae"
                ],
                "language": "he",
                "scientific_name": "Prunus serrulata",
                "structured_name": {
                    "genus": "prunus",
                    "species": "serrulata"
                }
            },
            "probability": 0.012069939636246446,
            "confirmed": false,
            "similar_images": [
                {
                    "id": "efd7e87d98933990aa052735690990c6",
                    "similarity": 0.2246774496876146,
                    "url": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/efd/7e87d98933990aa052735690990c6.jpg",
                    "url_small": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/efd/7e87d98933990aa052735690990c6.small.jpg"
                },
                {
                    "id": "7903b10d2841fc1467c2632f6919a9db",
                    "similarity": 0.21456796250805565,
                    "url": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/790/3b10d2841fc1467c2632f6919a9db.jpg",
                    "url_small": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/790/3b10d2841fc1467c2632f6919a9db.small.jpg",
                    "citation": "Acabashi",
                    "license_name": "CC BY-SA 4.0",
                    "license_url": "https://creativecommons.org/licenses/by-sa/4.0/"
                }
            ]
        }
    ],
    "modifiers": [
        "similar_images",
        "crops_fast"
    ],
    "secret": "NAbsj2kIK4Qbfdx",
    "fail_cause": null,
    "countable": true,
    "feedback": null,
    "is_plant_probability": 0.9847901222000001,
    "is_plant": true
}

function RendertoRealCardPH(obj) {
    const ph = document.getElementById('RealCardPH');
    const pTitle= document.getElementById('ProIDEPlant');
    const Ctitle = document.getElementById('Dcalc');

    const ArrayofPlant=obj.suggestions;
    let isPlantProb=obj.is_plant_probability;
    isPlantProb=Math.round(isPlantProb*100);
    let str = `Is plant probability: ${isPlantProb}%`;
    let str2=``;
    let index=1;
    ArrayofPlant.forEach(sug => {
        let prob=Math.round(sug.probability*100);
        let imgs=sug.similar_images
        let iconSrc = PrecentToIcon(prob);
        
        str2+=`<div class="cardS col-12 col-md-4 col-lg-3">`;
        str2+=`<span class="index">${index}</span>`
        str2+=`<p>Our AI thinks it is <br> <span class="precentSpan">"${sug.plant_name}"</span></p>`;
        str2+=`<div class="RowImg">`;
        str2+=`<img  src="${imgs[0].url}" alt="">`;
        str2+=`<img src="${imgs[1].url}" alt="">`;
        str2+=`</div>`;
        str2+=`<span class="precentSpan">${prob}% <img class="imgPre" src="${iconSrc}" alt=""></span>`
        str2+=`<a class="wikiA" target="_blank" href="${sug.plant_details.url}">more info about this plant</a>`
        str2+=`</div>`;
        index++;

    });
    pTitle.innerHTML=str;
    ph.innerHTML=str2;
    Ctitle.innerHTML=`Calc Duration: ${CalcDuratuon(obj.uploaded_datetime,obj.finished_datetime)}ms`


//     <div class="cardS">
//     <p>Our AI thinks it is <span class="precentSpan">"Sambucus nigra"</span>  at <span class="precentSpan">11.7%</span></p>
//     <div class="RowImg">
//         <img
//             src="https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/94c/261b50568bca69859580401c20c66.jpg"
//             alt="">
//         <img
//             src="https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/images/de6/6e730e3681329ef97196bee5c6e0a.jpg"
//             alt="">
//     </div>

// </div>
}

function PrecentToIcon(num) {
    if (num<25) {
        return './assets/img/0-25.png'
    }
    else if (num>=25 && num<50) {
        return './assets/img/25-50.png'
    }
    else if (num>=50 && num<75) {
        return './assets/img/50-75.png'
    }
    else{
        return './assets/img/75-100.png'
    }
}

function CalcDuratuon(s,e) {
    let res = e-s;
    res=res*100;
    res=Math.round(res);
    res=res/100;
    return res;

}

