const Employee = require("../lib/employee.js");



test("Can instantiate instance of Employee superclass", () => {
  const newEmp = new Employee();
  expect(typeof(newEmp)).toBe("object");
});

test("Can set name for Employee superclass", () => {
  const name = "Eddy";
  const newEmp = new Employee(name);
  expect(newEmp.name).toBe(name);
});

test("Can set email address for Employee superclass", () => {
  const testEmail = "eddy@2u.com";
  const newEmp = new Employee("Eddy", testEmail);
  expect(newEmp.email).toBe(testEmail);
});

test("Can set identification number for Employee superclass", () => {
  const testID = 1234;
  const newEmp = new Employee("Eddy", "eddy@2u.com", testID);
  expect(newEmp.id).toBe(testID);
});

test("Can get name via getName() method", () => {
  const testName = "Joey";
  const newEmp = new Employee(testName);
  expect(newEmp.getName()).toBe(testName);
});

test("Can get email via getEmail() method", () => {
    const testEmail = "joey@2u.com";
    const newEmp = new Employee("Joey", testEmail);
    expect(newEmp.getEmail()).toBe(testEmail);
  });
  
test("Can get email id via getId() method", () => {
  const testID = 5678;
  const newEmp = new Employee("Joe", "Joey@2u.com", testID);
  expect(newEmp.getId()).toBe(testID);
});

test("Can get 'Employee' via getRole() method", () => {
  const testRole = "Employee";
  const newEmp = new Employee("Joey", "joey@2u.com", 9012);
  expect(newEmp.getRole()).toBe(testRole);
});