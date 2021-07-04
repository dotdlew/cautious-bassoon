const Manager = require("../lib/Manager");

test("creates a manager object", () => {
  const manager = new Manager("Manager", 99, "Manager@Manager.Manager", 666);

  expect(manager.name).toBe("Manager");
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.role).toBe("Manager");
  expect(manager.officeNumber).toEqual(expect.any(Number));
});
