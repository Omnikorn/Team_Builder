const { intern } = require("../builder.js")
const team = require("../builder.js")


describe("team", () =>{
    test('team manager', () => {
        const Jeff = new team.Manager(() => true);
      
        Jeff.getRole();
      
        expect(Jeff.getRole).toHaveReturned("Manager");
      });
})