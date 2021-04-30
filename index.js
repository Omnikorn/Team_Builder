const fs = require("fs")
const inquirer = require("inquirer")
const role = require("./builder.js")
const managArr = []
const enginArr = []
const internArr = []
console.log("the role= " + role.engineer)
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
	// console.log("my manager is", man)
	managArr.push(man)
	// console.log("managers are = " + managArr)
}

const createEngin = (data) => {
	const eng = new role.engineer(
		data.engineer,
		data.id,
		data.email,
		data.github
	)
	enginArr.push(eng)
	console.log("enigneers are " + enginArr)
}

const createIntern = (data) => {
	const int = new role.intern(
		data.intern,
		data.id,
		data.email,
		data.school
	)
	internArr.push(int)
	console.log("interns are " + internArr)
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
	{ manfile = `<div class="card col-3" >
	<div class="card-body manager">
	  <h3 class="card-title">Manager</h3>
	  <h6 class="card-subtitle mb-2 text-muted">icon</h6>
	  <div class="cardtweak">
		<p class="card-text">Name:${managArr[i].name}</p>
		<p class="card-text">ID: ${managArr[i].id}</p>
		<p class="card-text">Email:${managArr[i].email}</p>
		<p class="card-text">Office Number: ${managArr[i].officeNumber}</p>
	  </div>`;
	//   console.log(manfile);
	  return manfile}
}

const engineerCardRender = () => {
	for(i=0; i<enginArr.length; i++)
	{ engineerFile = `<div class="card col-3" >
	<div class="card-body manager">
	  <h3 class="card-title">Engineer</h3>
	  <h6 class="card-subtitle mb-2 text-muted">icon</h6>
	  <div class="cardtweak">
		<p class="card-text">Name:${enginArr[i].name}</p>
		<p class="card-text">ID: ${enginArr[i].id}</p>
		<p class="card-text">Email:${enginArr[i].email}</p>
		<p class="card-text">github user name: ${enginArr[i].github}</p>
	  </div>`;
	//   console.log(manfile);
	  return engineerFile}

}


const internCardRender = () => {
	for(i=0; i<internArr.length; i++)
	{ internFile = `<div class="card col-3" >
	<div class="card-body manager">
	  <h3 class="card-title">Intern</h3>
	  <h6 class="card-subtitle mb-2 text-muted">icon</h6>
	  <div class="cardtweak">
		<p class="card-text">Name:${internArr[i].name}</p>
		<p class="card-text">ID: ${internArr[i].id}</p>
		<p class="card-text">Email:${internArr[i].email}</p>
		<p class="card-text">School: ${internArr[i].school}</p>
	  </div>`;
	//   console.log(internFile);
	  return internFile}

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
		<title>Document</title>
	</head>
	<body>
		<div class="jumbotron jumbotron-fluid">
			<div class="container">
			  <h1 class="display-4">My Team</h1>
			  <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
			</div>
		  </div>
		  <section class="container ">\n
		  ${managerCardRender()}\n
		  </section>
		  <section class="container container-fluid">
		  <div class="row">\n
		  ${engineerCardRender()}\n
		  </div>
		  </section>
		  </section>
		  <section class="container container-fluid">
		  <div class="row">\n
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
		.then(() => whatNext())
}

main()
