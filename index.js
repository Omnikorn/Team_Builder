const fs = require("fs")
const inquirer = require("inquirer")
const enginArr = []
const internArr = []

const promptManager = [
	{
		type: "input",
		name: "Manager",
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
		name: "Engineer",
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
		name: "Intern",
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
		choices: ["Engineer", "intern", "None"],
	},
]

const whatNext = () => {
	inquirer.prompt(promptNext).then((answers) => {
		if (answers.next === "Engineer") {
			inquirer
				.prompt(promptEngineer)
				.then((answers) => creatEngin(answers))
		}
	})
}

const creatEngin = (answers) => {
	const eng = new Engineer(
		answers.name,
		answers.id,
		answers.email,
		answers.github
	)
	enginArr.push(eng)
}
