$(document).ready(function() {
    //declare variables and objects
    var memberLabs = [
        { labImg: "./assets/images/JoseAlonso.jpg", labName: "Jose Alonso", labTitle: "Associate Professor", labEmail: "jmalonso@ncsu.edu", labPhone: "919-515-5729", labDesc: "Our main interest is to understand the molecular circuits plants use to integrate environmental and developmental signals to produce specific responses.", labLink: "http://www4.ncsu.edu/~jmalonso/Alonso-Stepanova_Home.html" },
        { labImg: "./assets/images/JoseAscencio.jpg", labName: "Jose Ascencio-Ibanez", labTitle: "Teaching Assistant Professor", labEmail: "trino_ascencio-ibanez@ncsu.edu", labPhone: "919-515-5736", labDesc: "The Ascencio-Ibanez Lab focuses on understandingthe response of plants to viral infection.", labLink: "https://biochem.ncsu.edu/faculty/ibanez/ibanezpage.php" },
        { labImg: "./assets/images/PeterBalint-Kurti.jpg", labName: "Peter Balint-Kurti", labTitle: "USDA Professor", labEmail: "peter_balint-kurti@ncsu.edu", labPhone: "919-515-3516", labDesc: "We are interested in the genetic and mechanistic bases of natural variation in quantitative disease resistance and the defense response in maize. Quantitative disease resistance, also known as partial disease resistance, confers a level of resistance that is less than complete but is usually effective in protecting yield.", labLink: "https://sites.google.com/a/ncsu.edu/maize-disease/home" },
        { labImg: "./assets/images/Vincent_Chiang.jpg", labName: "Vincent Chiang", labTitle: "Professor", labEmail: "vincent_chiang@ncsu.edu", labPhone: "919-513-0098", labDesc: "", labLink: "https://cnr.ncsu.edu/directory/vincent-chiang/" },
        { labImg: "./assets/images/ColleenDoherty.jpg", labName: "Colleen Doherty", labTitle: "Assistant Professor", labEmail: "colleen_doherty@ncsu.edu", labPhone: "919-515-5802", labDesc: "The Doherty Lab seeks to understand how plants integrate signals from the environment when making decisions. We focus on how plants integrate time into the molecular and biochemical responses to abiotic stress.", labLink: "https://cjdohert.wordpress.ncsu.edu/" },
        { labImg: "./assets/images/BobFranks.jpg", labName: "Bob Franks", labTitle: "Associate Professor", labEmail: "rgfranks@ncsu.edu", labPhone: "919-513-7705", labDesc: "The Franks Lab is interested in the molecular mechanisms of development. We presently work in the model organism Arabidopsis thaliana, a type of mustard plant, as well as in Mimulus (Monkey Flower) species.", labLink: "https://frankslab.wordpress.ncsu.edu/" },
        { labImg: "./assets/images/CandaceHaigler.jpg", labName: "Candace Haigler", labTitle: "Professor", labEmail: "candace_haigler@ncsu.edu", labPhone: "919-515-5645", labDesc: "The research in the Haigler laboratory centers on cellulose synthesis and cotton fiber development. The fundamental new knowledge arising from our research is applicable to the production of next-generation value-added fiber and biomass crops through genetic engineering or marker-assisted selection.", labLink: "https://pmb.cals.ncsu.edu/people/people-table/dr-candace-h-haigler/" },
        { labImg: "./assets/images/Steffen-Heber.jpg", labName: "Steffen Heber", labTitle: "Associate Professor", labEmail: "sheber@ncsu.edu", labPhone: "919-513-1118", labDesc: "", labLink: "https://www.csc.ncsu.edu/people/sheber" },
        { labImg: "./assets/images/AmandaHulse-Kemp.jpg", labName: "Amanda Hulse-Kemp", labTitle: "USDA Assistant Professor", labEmail: "amanda.hulse-kemp@ncsu.edu", labPhone: "919-513-2037", labDesc: "Dr Hulse-Kemp's research with the USDA-ARS focuses on implementing computational biology methods through bioinformatics to intelligently enhance breeding programs in the ARS.", labLink: "https://cals.ncsu.edu/crop-and-soil-sciences/people/amanda-m-hulse-kemp/" }, { labImg: "./assets/images/SiriusLi.jpg", labName: "Sirius Li", labTitle: "Associate Professor", labEmail: "xli24@ncsu.edu", labPhone: "704-250-5460", labDesc: "", labLink: "https://pmb.cals.ncsu.edu/people/people-table/dr-xu-sirius-li/" },
        { labImg: "./assets/images/TzungFuHsieh.jpg", labName: "Tzung-Fu Hsieh", labTitle: "Assistant Professor", labEmail: "thsieh3@ncsu.edu", labPhone: "704-250-5467", labDesc: "Hsieh specializes in systems biology, a relatively new field of research that studies the interactions between the components of biological systems, and how those relationships impact the functions and behaviors of the systems. His area of focus is epigenetics, which aims to understand changes in gene behaviors that are caused by factors other than mutations in DNA.", labLink: "https://plantsforhumanhealth.ncsu.edu/people/tzung-fu-hsieh/" },
        { labImg: "./assets/images/wushengliu.jpg", labName: "Wusheng Liu", labTitle: "Assistant Professor", labEmail: "wliu25@ncsu.edu", labPhone: "", labDesc: "Dr. Liu’s laboratory is interested in genetic engineering and genome editing of soybean and camelina for improved seed size and of oil content, and modified flowering patterns for bioconfinement. The Liu laboratory is also interested in using plant synthetic biology for enhanced defense against nematodes in Arabidopsis and soybean.", labLink: "https://cals.ncsu.edu/horticultural-science/people/wliu25/" },
        { labImg: "./assets/images/AnnaLocke.jpg", labName: "Anna Locke", labTitle: "USDA Assistant Professor", labEmail: "anna_locke@ncsu.edu", labPhone: "919-515-6996", labDesc: "The Locke lab is interested in crop-environment interactions, especially abiotic stress.  We use field, greenhouse, and growth chamber experiments to examine G×E interactions among diverse soybean germplasm and aim to identify mechanisms that determine stress tolerance and seed composition.", labLink: "https://www.ars.usda.gov/southeast-area/raleigh-nc/soybean-and-nitrogen-fixation-research/people/anna-locke/" },
        { labImg: "./assets/images/Terri-Long.jpg", labName: "Terri Long", labTitle: "Assistant Professor", labEmail: "terri_long@ncsu.edu", labPhone: "919-515-0478", labDesc: " Our mission is to understand how plants respond to iron deprivation with the long term goal of producing plants with enhanced nutritional capacity and tolerance of nutrient-poor soils, thus increasing our ability to address global nutritional needs.", labLink: "https://pmb.cals.ncsu.edu/people/people-table/dr-terri-long/long-lab/" },
        { labImg: "./assets/images/ImaraPerera.jpg", labName: "Imara Perera", labTitle: "Research Associate Professor", labEmail: "imara_perera@ncsu.edu", labPhone: "919-515-3544", labDesc: "The overarching goal of my research is to understand the molecular mechanisms governing plant responses to environmental stimuli and stress; in particular the involvement of the phosphoinositide signaling pathway.", labLink: "https://pmb.cals.ncsu.edu/people/people-table/dr-imara-perera/" },
        { labImg: "./assets/images/MarcelaRojasPierce.jpg", labName: "Marcela Rojas-Pierce", labTitle: "Associate Professor", labEmail: "mrojasp@ncsu.edu", labPhone: "919-515-1901", labDesc: "The vacuole is the major storage compartment in plant cells and has important implications for the nutritional value of agricultural crops. Our research is focused on identifying the molecular mechanisms that regulate the biogenesis of the vacuole and the delivery of tonoplast proteins to the vacuolar membrane. We use chemical and classical genetic approaches to characterize these mechanisms in the model plant Arabidopsis thaliana.", labLink: "https://pmb.cals.ncsu.edu/people/people-table/dr-marcela-rojas-pierce/" },
        { labImg: "./assets/images/HeikeSederoff.jpg", labName: "Heike Sederoff", labTitle: "Professor", labEmail: "hwsedero@ncsu.edu", labPhone: "919-513-0076", labDesc: "", labLink: "https://pmb.cals.ncsu.edu/sederoff-lab/" },
        { labImg: "./assets/images/RossSozzani.jpg", labName: "Ross Sozzani", labTitle: "Assistant Professor", labEmail: "rsozzan@ncsu.edu", labPhone: "919-515-5709", labDesc: "The Sozzani Lab research focuses on understanding how stem cells are organized and maintained in the root of the model plant Arabidopsis thaliana. Our goal is to gain a coherent qualitative and quantitative understanding of stem cell maintenance at the systems-level.", labLink: "https://pmb.cals.ncsu.edu/sozzani-lab/" },
        { labImg: "./assets/images/Anna-Stepanova.jpg", labName: "Anna Stepanova", labTitle: "Assistant Professor", labEmail: "atstepan@ncsu.edu", labPhone: "919-515-5729", labDesc: "", labLink: "http://www4.ncsu.edu/~jmalonso/Alonso-Stepanova_Home.html" },
        { labImg: "./assets/images/JackWang.png", labName: "Jack Wang", labTitle: "Assistant Professor", labEmail: "jpwang@ncsu.edu", labPhone: "", labDesc: "", labLink: "https://cnr.ncsu.edu/directory/jack-wang/" },
        { labImg: "./assets/images/QingshanWei.jpg", labName: "Qingshan Wei", labTitle: "Assistant Professor", labEmail: "qwei@ncsu.edu", labPhone: "919-515-3154", labDesc: "", labLink: "https://weigroup.wordpress.ncsu.edu/" },
        { labImg: "./assets/images/RossWhetten.jpg", labName: "Ross Whetten", labTitle: "Professor", labEmail: "rosswhet@ncsu.edu", labPhone: "919-515-7578", labDesc: "The Molecular Tree Breeding lab is a research laboratory in the central campus at North Carolina State University in Raleigh, U.S. The long-term goal of our research is to understand how genetic information is encoded in trees and how it controls relevant environmental and economic traits. We explore this fundamental issue by combining physiological and molecular data including phenotypic measurements in the field, RNA-seq and Genotyping by Sequencing (GBS) data analysis, and the improvement/development of molecular laboratory protocols. Through these studies we aim to develop different strategies and tools for farmers that not only improve the quality of their products but also allow the conservation of native forests by increasing their environmental plasticity and adaptability.", labLink: "https://research.cnr.ncsu.edu/sites/moleculartreebreeding/" },
        { labImg: "./assets/images/CranosWilliams.jpg", labName: "Cranos Williams", labTitle: "Associate Professor", labEmail: "cmwilli5@ncsu.edu", labPhone: "919-513-1923", labDesc: "", labLink: "https://enbisys.ece.ncsu.edu/" },
        { labImg: "./assets/images/DeyuXie.jpg", labName: "Deyu Xie", labTitle: "Professor", labEmail: "Deyu_Xie@ncsu.edu", labPhone: "919-515-2129", labDesc: "The research interests in my laboratory focus on understanding the structure and biosynthesis of plant natural products. Currently, my lab is working on flavonoids, monoterpenes and sesquiterpenoids", labLink: "https://pmb.cals.ncsu.edu/people/people-table/dr-deyu-xie/" },
        { labImg: "./assets/images/CraigYencho.jpg", labName: "Craig Yencho", labTitle: "Professor", labEmail: "Craig_Yencho@ncsu.edu", labPhone: "919-515-2505", labDesc: "Dr. Yencho has research responsibilities (100%) in sweetpotato and potato breeding and genetics. Research emphasis is on developing disease and insect resistant table-stock, processing and specialty-type sweetpotatoes and potatoes adapted to North Carolina's growing conditions with improved root and tuber quality, respectively. Research interests include plant breeding, plant resistance to insects and pathogens, use of wild and/or related plant germplasm as a source of commercially important traits, applications of genomics, molecular biology and plant biochemistry to plant breeding and the production of renewable, bio-based, value-added products in sweetpotato and potato, and international agricultural development.", labLink: "https://potatoes.ncsu.edu/Yencho.html" }
        // { labImg: "", labName: "", labDesc: "", labLink: ""},
    ];

    var events = [
        { name: "Samantha Case - Sirius Li Lab", date: "May 4th, 2018", time: "3:00 pm - room 2212, Garnder Hall", season: "Spring 2018", desc: "Coffee/Cookies"},
        { name: "Natalie Clark - Sozzani Lab", date: "May 11th, 2018", time: "3:00pm - room 2212, Gardner Hall", season: "Spring 2018", desc: "Coffee/Cookies"},
        { name: "Jigar Desai - Colleen Doherty Lab", date: "May 18th, 2018", time: "3:00pm - room 2212, Gardner Hall", season: "Spring 2018", desc: "Coffee/Cookies"},
        { name: "Ann Loraine - INTRYNSyC", date: "May 25th, 2018", time: "3:00pm - room 2212, Gardner Hall", season: "Spring 2018", desc: "Pizza/Drinks"},
        { name: "Imani Madison - Long Lab", date: "June 1st, 2018", time: "3:00pm - room 2212, Gardner Hall", season: "Summer 2018", desc: "Coffee/Cookies"},
        { name: "Ben Graham - Candace Haigler Lab", date: "June 8th, 2018", time: "3:00pm - room 2212, Gardner Hall", season: "Summer 2018", desc: "Coffee/Cookies"},
        { name: "Saet-byul Kim - Balint-Kurti Lab", date: "June 15th, 2018", time: "3:00pm - room 2212, Gardner Hall", season: "Summer 2018", desc: "Coffee/Cookies"},        
        { name: "Brian Sullivan - Bob Franks Lab", date: "June 22nd, 2018", time: "3:00pm - room 2212, Gardner Hall", season: "Summer 2018", desc: "Coffee/Cookies"},
        { name: "Ryan Sartor - Hollan Lab / ASPB", date: "July 6th, 2018", time: "3:00pm - room 2212, Gardner Hall", season: "Summer 2018", desc: "Coffee/Cookies"},
        { name: "Donna Liebelt - Colleen Doherty Lab", date: "July 13th, 2018", time: "3:00pm - room 2212, Gardner Hall", season: "Summer 2018", desc: "Coffee/Cookies"}
    ];

    function labsDisplay() {
        //loop through labs and display image, title, links
        for (var i = 0; i < memberLabs.length; i++) {
            //create card which holds image, title and links
            var cardDiv = $("<div class='col-lg-3 col-md-4 col-sm-12'>");
            var labCard = $("<div class='card member-card'>");
            var cardImage = $("<img class='card-img-top' src='" + memberLabs[i].labImg + "'>");
            // cardImage.html("<img class='card-img-top' src='http://www4.ncsu.edu/~jmalonso/Alonso-Stepanova_Photos_files/Lab2016_2.png'>");
            labCard.append(cardImage);
            var cardBody = $("<div class='card-block'>");
            var labLink = $("<a href='" + memberLabs[i].labLink + "' class='card-title' target='blank'><h4>" + memberLabs[i].labName + "</h4></a>");
            cardBody.append(labLink);
            var labTitle = $("<p class='card-text'>").text(memberLabs[i].labTitle);
            cardBody.append(labTitle);
            var labEmail = $("<p class='card-text'>").text(memberLabs[i].labEmail);
            cardBody.append(labEmail);
            if (memberLabs[i].labPhone) {
                var labPhone = $("<p class='card-text phone'>").text(memberLabs[i].labPhone);
                cardBody.append(labPhone);
            }
            else {
                var labPhone = $("<br>");
                cardBody.append(labPhone);            	
            }

            labCard.append(cardBody);
            cardDiv.append(labCard);
            console.log(cardDiv);
            $("#memberLabs").append(cardDiv);
        };
    };

    function eventsDisplay() {
    	var season;
        //loop through events and display them 
        for (var i = 0; i < events.length; i++) {
        	if (season !== events[i].season) {
        		season = events[i].season;
        		var eventSeason = $("<h2 class='text-center season-text'>").text(season);
        		$("#events").append(eventSeason);
        	}
            //create event display
            var eventCard = $("<div class='card event-card'>");
            var eventBody = $("<div class='card-body'>");
            var eventDate = $("<h3>").text(events[i].date);
            eventBody.append(eventDate);            
            var eventName = $("<h4>").text(events[i].name);
            eventBody.append(eventName);
            var eventTime = $("<p>").text(events[i].time);
            eventBody.append(eventTime);
            var eventDesc = $("<p>").text(events[i].desc);
            eventBody.append(eventDesc);            
            eventCard.append(eventBody);
            $("#events").append(eventCard);
        }
    };

    labsDisplay();
    eventsDisplay();

});