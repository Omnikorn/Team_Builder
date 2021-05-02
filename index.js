const fs = require("fs")
const inquirer = require("inquirer")
const role = require("./builder.js")
const managArr = []
const enginArr = []
const internArr = []

let manfile
let engineerFile
let internFile
const promptManager = [
	{
		type: "input",
		name: "manager",
		message: "Please enter the Manager's name: ",
	},
	{
		type: "input",
		name: "id",
		message: "what is the Manager's ID?",
	},
	{
		type: "input",
		name: "email",
		message: "What is the manager's email?",
	},
	{
		type: "input",
		name: "officeNumber",
		message: "what is the manager's office number?",
	},
]

const promptEngineer = [
	{
		type: "input",
		name: "engineer",
		message: "Please enter the engineer's name: ",
	},
	{
		type: "input",
		name: "id",
		message: "what is the engineer's ID?",
	},
	{
		type: "input",
		name: "email",
		message: "What is the engineer's email?",
	},
	{
		type: "input",
		name: "github",
		message: "what is the engineer's github name?",
	},
]

const promptIntern = [
	{
		type: "input",
		name: "intern",
		message: "Please enter the Intern's name: ",
	},
	{
		type: "input",
		name: "id",
		message: "what is the Intern's ID?",
	},
	{
		type: "input",
		name: "email",
		message: "What is the Intern's email?",
	},
	{
		type: "input",
		name: "school",
		message: "what is the Intern's school?",
	},
]

const promptNext = [
	{
		type: "list",
		name: "next",
		message: " What team member do you want to add next ?",
		choices: ["Engineer", "Intern", "None"],
	},
]

const createManager = (answers) => {
	const man = new role.manager(
		answers.manager,
		answers.id,
		answers.email,
		answers.officeNumber
	)
	
	managArr.push(man)
	
}

const createEngin = (data) => {
	const eng = new role.engineer(
		data.engineer,
		data.id,
		data.email,
		data.github
	)
	enginArr.push(eng)
	
}

const createIntern = (data) => {
	const int = new role.intern(
		data.intern,
		data.id,
		data.email,
		data.school
	)
	internArr.push(int)
	
}

// const managerCardRender = () => {
// 	managArr.forEach((element) => {
// 		 manfile = `<div class="card col-3" >
// 	 <div class="card-body manager">
// 	   <h3 class="card-title">Manager</h3>
// 	   <h6 class="card-subtitle mb-2 text-muted">icon</h6>
// 	   <div class="cardtweak">
// 		 <p class="card-text">Name:${element.name}</p>
// 		 <p class="card-text">ID: ${element.id}</p>
// 		 <p class="card-text">Email:${element.email}</p>
// 		 <p class="card-text">Office Number: ${element.officeNumber}</p>
// 	   </div>`
// 		//    console.log(manfile)
// 		return manfile
// 	})
// }

 const managerCardRender= () =>{
	for(i=0; i<managArr.length; i++)
	
	{ manfile = `<div class="card col-4" >
	<div class="card-body manager">
	  <h3 class="card-title">Manager <i class="fas fa-user"></i></h3>
	  
	  <div class="cardtweak">
		<p class="card-text">Name:${managArr[i].name}</p>
		<p class="card-text">ID: ${managArr[i].id}</p>
		<p class="card-text">Email:<a href="mailto:${managArr[i].email}"> ${managArr[i].email}</a></p>
		<p class="card-text">Office Number: ${managArr[i].officeNumber}</p>
	  </div>`;
	//   console.log(manfile);
	  return manfile}
}

const engineerCardRender = () => {
	let finalEngineer=""
	for(i=0; i<enginArr.length; i++)
	{ engineerFile = `<div class="card col-4" >
	<div class="card-body engineer">
	  <h3 class="card-title">Engineer <i class="fab fa-dev"></i></h3>
	  
	  <div class="cardtweak">
		<p class="card-text">Name:${enginArr[i].name}</p>
		<p class="card-text">ID: ${enginArr[i].id}</p>
		<p class="card-text">Email:<a href="mailto:${enginArr[i].email}"> ${enginArr[i].email}</a></p>
		<p class="card-text">github user name: <a href="https://github.com/${enginArr[i].github}">${enginArr[i].github}</a></p>
	  </div>
	  </div>
	  </div>`
	  ;
	finalEngineer= engineerFile + finalEngineer
	  }
	  return finalEngineer
}


const internCardRender = () => {
	let finalIntern=""
	for(i=0; i<internArr.length; i++)
	{ internFile = `<div class="card col-4" >
	<div class="card-body intern">
	  <h3 class="card-title">Intern <i class="fas fa-edit"></i></h3>
	  
	  <div class="cardtweak">
		<p class="card-text">Name:${internArr[i].name}</p>
		<p class="card-text">ID: ${internArr[i].id}</p>
		<p class="card-text">Email:<a href="mailto:${internArr[i].email}"> ${internArr[i].email}</a></p>
		<p class="card-text">School: ${internArr[i].school}</p>
	  </div>
	  </div>
	  </div>`
	  ;
	 finalIntern= finalIntern + internFile
	  }
	  return finalIntern
}
	

const htmlRender = () => {
	const htmlfile = `<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
		<link href="testpage.css" rel="stylesheet">
		<script src="https://kit.fontawesome.com/a8758c57fb.js" crossorigin="anonymous"></script>
		<title>Document</title>
	</head>
	<body>
		<div class="jumbotron jumbotron-fluid">
			<div class="container">
			  <h1 class="display-4">My Team</h1>
			</div>
		  </div>
		  <section class="container ">\n
		  <div class="row justify-content-center">\n
		  ${managerCardRender()}\n
		  </div>
		  </section>
		  <section class="container">
		  <div class="row justify-content-center">\n
		  ${engineerCardRender()}\n
		  </div>
		  </section>
		  </section>
		  <section class="container container-fluid">
		  <div class="row justify-content-center">\n
		  ${internCardRender()}\n
		  </div>
		  </section>
		  <h1> just checking we get here ? </h1>
		  <!-- SCRIPT -->
		  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
		  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script> 
		  
	  </body>
	  </html>

	 `
	return htmlfile
}

const whatNext = () => {
	inquirer
		.prompt(promptNext)
		.then((answers) => {
			if (answers.next === "Engineer") {
				inquirer
					.prompt(promptEngineer)
					.then((data) => createEngin(data))
					.then(() => whatNext())
			} else if (answers.next === "Intern") {
				inquirer
					.prompt(promptIntern)
					.then((data) => createIntern(data))
					.then(() => whatNext())
			}
			else if (answers.next === "None"){
			    fs.writeFileSync("newteam.html",htmlRender())
			}
		})
	}
		// })
// 		.then(() =>
// 			fs.writeFileSync("teams.html", htmlRender())
// 		)
// }

const main = () => {
	inquirer
		.prompt(promptManager)
		.then((answers) => createManager(answers))
		.then(() => whatNext()).catch((err) => console.log(err))
}

main()
