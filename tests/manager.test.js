const { intern } = require("../builder.js")
const team = require("../builder.js")

describe("team", () => {
	test("team manager", () => {
		const Jeff = new team.manager("Harith", 1, "test@gmail.com", 1234567890)

		expect(Jeff.getRole()).toBe("Manager");
    expect(Jeff.email).toBe("test@gmail.com");
	});
  test("manager email", () => {
		const Jeff = new team.manager("Harith", 1, "test@gmail.com", 1234567890)

		
    expect(Jeff.email).toBe("test@gmail.com");
	})
})
