
var bio = {
    "name" : "Maulik",
    "role" : "Front end web developer",
    "contacts" : {
        "mobile"  : "908-324-8269",
        "email" : "maulik.soni22@gmail.com",
        "github" : "mmsoni22",
        //twitter none
        "location" : "Maryland",
    },
    "skills" : ["HTML5", "CSS3", "javaScript/ES6", "jQuery", "Bootstrap", "Responsive web design", "Github"],
    "biopic" : ""
};

var education = {
    "schools" : [
        {
            "name" : "Veer new look of science and technology",
            "location" : "Halol, India",
            "degree" : "Senior hign school",
            "majors" : ["Maths", "Chemistry", "Physics", "English"],
            "dates" : "march2012 - march2013",
            
        },
        {
            "name" : "Parul Institute of technology",
            "location" : "Vadodara,Gujarat,India",
            "degree" : "Bachelor in engineering",
            "majors" : "Electrical engineering",
            "dates" : "July 2013 - may 2017",
            
        }
    ],
};

var education2 = {
"onlineCourses" : [
    {
        "title" : "Front end web developer",
        "school" : "Udacity",
        "url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011",
    },
    {
        "title" : "jQuery:The Complete jQuery Course: From Beginner To Advanced!",
        "school" : "Udemy",
        "url" : "https://www.udemy.com/course/jquery-tutorial/"
    }
]
};

    

var work = {
    "jobs" : [
        {
            "employer" : "StanleyBlack&Decker",
            "title" : "CNC machine operator",
            "location" : "Maryland",
            "dates" : "08 oct 2018 - present",
            "description" : "•	Adjust parts measurements by entering proper calculating values on CNC and Hardinge Quest series machine.",
        },
        
    ]
};

var projects = {
    "projects" : [
        {
            "title" : "Udacity Portfolio",
            "description" : "This portfolio is part of Udacity's Front-End-Web Developer Nano Degree Course Project to showcase some basic knowledge og HTML and CSS.",
            "images" :"images/port.jpg"
        },
        {
            "title" : "Memory game",
            "description" : "Matching Game! Click the cards to find a match. Match all 16 cards as fast and best as you can! A fun game for users to play! Focuses on DOM manipulation, variables and object-oriented programming.",
            "images" : "images/play.gif",
        },
        {
            "title" : "Cat clicker",
            "description" : "Udacity's FEND Project/Exercise Cat clicker as part of JS Design Pattern course to learn how to structure the code and build an organized application.",
            "images" : "images/cat.jpg",
        
        }
    ]
};

bio.display = function() {
var rename = HTMLheaderName.replace("%data%", bio.name);
var rerole = HTMLheaderRole.replace("%data%", bio.role);
var reHeader = rename + rerole;

$("#header").prepend(reHeader);

var rebiopic = HTMLbioPic.replace("%data%", bio.biopic);
  $("#headee").append(rebiopic);

var remobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var reemail  = HTMLemail.replace("%data%", bio.contacts.email);
var regithub = HTMLgithub.replace("%data%", bio.contacts.github);
var relocation = HTMLlocation.replace("%data%", bio.contacts.location);

var reContacts = remobile + reemail + regithub + relocation;
$("#topContacts, #footerContacts").append(reContacts);

if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
}
bio.skills.forEach(function(skill) {
    var reskills = HTMLskills.replace("%data%", skill);
    $("#skills").append(reskills);
});
 
};

 bio.display();
 
 work.display  =function() {
     work.jobs.forEach(function(job) {
         $("#workExperience").append(HTMLworkStart);

         var reemployer = HTMLworkEmployer.replace("%data%", job.employer);
         var retitle = HTMLworkTitle.replace("%data%", job.title);
         var reemployertitle = reemployer + retitle;

         $(".work-entry:last").append(reemployertitle);

         var redates = HTMLworkDates.replace("%data%", job.dates);
         $(".work-entry:last").append(redates);

         var relocation = HTMLworkLocation.replace("%data%", job.location);
         $(".work-entry:last").append(relocation);

         var reDescription =  HTMLworkDescription.replace("%data%", job.description);
         $(".work-entry:last").append(reDescription);
         
    });
 };

 work.display();
    
 
 education.display = function(){

	education.schools.forEach(function(school) {

		$("#education").append(HTMLschoolStart);

		var reName = HTMLschoolName.replace("%data%", school.name);
		$(".education-entry:last").append(reName);
		var reDegree = HTMLschoolDegree.replace("%data%", school.degree);
		$(".education-entry:last").append(reDegree);
		var reDates = HTMLschoolDates.replace("%data%", school.dates);
		$(".education-entry:last").append(reDates);
		var reLocation = HTMLschoolLocation.replace("%data%", school.location);
		$(".education-entry:last").append(reLocation);
		var reMajor = HTMLschoolMajor.replace("%data%", school.majors);
		$(".education-entry:last").append(reMajor);
	});
 };
 education.display();
 
 education2.display = function() {
	
	education2.onlineCourses.forEach(function(course) {
        $("education").append(HTMLonlineStart);

        var reTitle = HTMLonlineTitle.replace("%data%", course.title);
        $(".education-entry:last").append(reTitle);
        
        var reSchool = HTMLonlineSchool.replace("%data%", course.school);
        $(".education-entry:last").append(reSchool);

        var reUrl = HTMLonlineURL.replace("%data%", course.url);
        $(".education-entry:last").append(reUrl);

    });
 };

 education2.display();
    
 projects.display = function(){

	projects.projects.forEach(function(project){

		$("#projects").append(HTMLprojectStart);

		var reTitle = HTMLprojectTitle.replace("%data%", project.title);
        $(".project-entry:last").append(reTitle);
        
        var reDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(reDescription);

        var reImages = HTMLprojectImage.replace("%data%", project.images);
        $(".project-entry:last").append(reImages);

	});
 };    
    projects.display();

    
      
    $(document).click(function(loc) {
        var x = loc.pageX;
        var y = loc.pageY;
      
        logClicks(x,y);
      });
      
      // creates a button for internationalized name
      function inName(name) {
          name = name.trim().split(" ");
          console.log(name);
          name[1] = name[1].toUpperCase();
          name[0] = name[0].slice(0,1).toUpperCase() +
              name[0].slice(1).toLowerCase();
      
          return name[0] +" "+name[1];
      }
      
      $("#main").append(internationalizeButton);
      
      $("#mapDiv").append(googleMap);
      

               
            