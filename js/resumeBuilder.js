/*
This is empty on purpose! Your code to build the resume will go here.
 */
/*var name = "Marie-Isabelle Seydoux";
var role = "Bioinformatics/Wed Developer";
var mobile = "610-329-1492";
var email = "seydouxMIB@gmail.com";
var twitter = "";
var github = "https://github.com/seydoux"
var blog = "";
var location = "West Chester, PA";
var bioPic = "http://i.imgur.com/RGk4R.jpg";
var welcomeMsg = "Hello, welcome to my interactive Resume!";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
var formattedMobile = HTMLmobile.replace("%data%", mobile);
var formattedEmail = HTMLemail.replace("%data%", email);
var formattedTwitter= HTMLtwitter.replace("%data%", twitter);
var formattedGithub = HTMLgithub.replace("%data%", github);
var formattedBlog = HTMLblog.replace("%data%", blog);
var formattedLocation = HTMLlocation.replace("%data%", location);
var formattedBiopic = HTMLbioPic.replace("%data%", bioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", welcomeMsg);
*/
/*var bio = {
	"names" : "Marie-Isabelle Seydoux",
	"role" : "Bioinformatics/Wed Developer".
	"contacts" : {
		"mobile" : "610-329-1492",
		"email" : "seydouxMIB@gmail.com",
		"github" : "seydoux",
		"location" : "West Chester, PA" 
	},
	"welcomeMsg" : "Welcome to my interactive resume!",
	"skills" : [
	"Java", "python", "perl", "R"
	],
	"bioPic" : "http://i.imgur.com/RGk4R.jpg",
	display: function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.names);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMsg);
        var formattedBiopic = HTMLbioPic.replace("%data%", bio.bioPic);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        for (contact in bio.contacts) {
            var formattedContact = HTMLcontactGeneric.replace("%contact%", contact).replace("%data%", bio.contacts[contact]);
            $("#topContacts").append(formattedContact);
            $("#footerContacts").append(formattedContact);
        }
        $("#header").append(formattedBiopic);
        $("#header").append(formattedWelcomeMsg);
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for (i = 0; i < bio.skills.length; i++) {
                var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
                $("#header").append(formattedSkill);
            }
        }
};*/

// create bio object
var bio = {
	// fill object with correct information
    "name": "Marie-Isabelle Seydoux",
    "role": "Web Developer/Bioinformatician",
    "contacts": {
        "mobile": "610-329-1492",
        "email": "seydouxMIB@gmail.com",
        "github": "seydoux",
        "location": "West Chester, PA",
    },
    "welcomeMessage": "Welcome to my resume!",
    // skills is an array 
    "skills": ["python", "perl", "Java"],
    "biopic": "http://i.imgur.com/RGk4R.jpg",
    // this is the function that is called when we want the output formatted from the bio object
    display: function() {
    	// format bio objects
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
        // output formatted name/role info to the header section of the html
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        // walk through all of the contact info as we may not include every type of contact info
        for (contact in bio.contacts) {
            var formattedContact = HTMLcontactGeneric.replace("%contact%", contact).replace("%data%", bio.contacts[contact]);
            // output contact to the corresponding html sections
            // in this case, we want contact info displayed at both the top and the bottom of the resume
            $("#topContacts").append(formattedContact);
            $("#footerContacts").append(formattedContact);
        } // end of for loop
        //output picture and welcome message to the header
        $("#header").append(formattedBiopic);
        $("#header").append(formattedWelcomeMsg);
        // since skill length is variable, we walk through all of the elements in the list
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for (i = 0; i < bio.skills.length; i++) {
                var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
                // output skill to the header
                $("#header").append(formattedSkill);
            } // end of for loop
        } // end of if statement
    } // end of display function for bio object
};
// end of bio object

// create work object
var work = {
	"jobs" : [
		// create an array of all posistions held, each posistion is its own block
		{
			"employer" : "Virginia Commonwealth University",
			"title" : "Teaching Assistant",
			"location" : "Richmond, VA",
			"dates" : "August 2013 - December 2013",
			"decription" : "Introduced students to bioinformatics concepts,beginning python programming, programming logic, and evaluated student projects",
		},
		{
			"employer" : "Virginia Commonwealth University",
			"title" : "Teaching Assistant",
			"location" : "Richmond, VA",
			"dates" : "January 2013 - May 2013",
			"decription" : "Assisted students in learning about bacterial viruses, their genetic structure, and in identifying  potential gene functions",
		},
		{
			"employer" : "St. Edward's University",
			"title" : "Teaching Assistant",
			"location" : "Austin, TX",
			"dates" : "January 2010 - May 2010",
			"decription" : "Assisted students is learning how to annotate and assemble Drosphila sp. fosmid sequences",
		},
	],
	// function for displaying the info contained in jobs
    display: function () {
    // walk through the jobs array 	
	    for (job in work.jobs) {
	    	//add to relvent workExperience section of html doc
	        $("#workExperience").append(HTMLworkStart);
	        // format the information in each job
	        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	        var formattedEmployerTitle = formattedEmployer + formattedTitle
	        // output info
	        $(".work-entry:last").append(formattedEmployerTitle);
	        $(".work-entry:last").append(formattedDates);
	        $(".work-entry:last").append(formattedLocation);
	        $(".work-entry:last").append(formattedDescription);
	    } // end of for loop    
	}//end of function	
};

// end work object

// create education object
var education = {

};
// end education object

bio.display();
work.display();