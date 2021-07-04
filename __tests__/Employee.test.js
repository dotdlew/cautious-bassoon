const Employee = require("../lib/Employee.js");

test("creates employee object", () => {
  const employee = new Employee(
    "Employee",
    1,
    "Employee@Employee.Employee",
    "Employee"
  );

  expect(employee.name).toBe("Employee");
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
  expect(employee.role).toBe("Employee");
});
