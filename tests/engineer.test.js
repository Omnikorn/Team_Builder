const team = require("../builder.js")

describe("team", () => {
	test("Engineer", () => {
		const Jeff = new team.engineer("Harith", 1, "test@gmail.com", 1234567890)

		expect(Jeff.getRole()).toBe("Engineer");
    
	});
  test("engineer email", () => {
		const Jeff = new team.engineer("Harith", 1, "test@gmail.com", 1234567890)

		
    expect(Jeff.email).toBe("test@gmail.com");
	})
})
