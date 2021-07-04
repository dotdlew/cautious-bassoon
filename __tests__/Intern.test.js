const Intern = require("../lib/Intern");

test("creates an intern object", () => {
  const intern = new Intern("Intern", 888, "Intern@Intern.Intern", "school");

  expect(intern.name).toBe("Intern");
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.role).toBe("Intern");
});
