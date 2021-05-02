const team = require("../builder.js")

describe("team", () => {
	test("team intern", () => {
		const Jeff = new team.intern("Harith", 1, "test@gmail.com", 1234567890)

		expect(Jeff.getRole()).toBe("Intern");
    
	});
  test("manager email", () => {
		const Jeff = new team.intern("Harith", 1, "test@gmail.com", 1234567890)

		
    expect(Jeff.email).toBe("test@gmail.com");
	})
})
