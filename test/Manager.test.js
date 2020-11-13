const Manager = require("../lib/manager.js");



test("Can instantiate instance of Manager subclass", () => {
  const newMan = new Manager();
  expect(typeof(newMan)).toBe("object");
});

test("Can set name for Manager subclass", () => {
  const name = "Mister";
  const newMan = new Manager(name);
  expect(newMan.name).toBe(name);
});

test("Can set email address for Manager subclass", () => {
  const testEmail = "mister@manager.com";
  const newMan = new Manager("Eddy", testEmail);
  expect(newMan.email).toBe(testEmail);
});

test("Can set identification number for Manager subclass", () => {
  const testID = 1234;
  const newMan = new Manager("Mister", "mister@manager.com", testID);
  expect(newMan.id).toBe(testID);
});

test("Can set office number for Manager subclass", () => {
    const testID = 4321;
    const newMan = new Manager("Mister", "mister@manager.com", 1234, testID);
    expect(newMan.officeNumber).toBe(testID);
  });

test("Can get name via getName() method", () => {
  const testName = "George";
  const newMan = new Manager(testName);
  expect(newMan.getName()).toBe(testName);
});

test("Can get email via getEmail() method", () => {
    const testEmail = "george@michael.com";
    const newMan = new Manager("George", testEmail);
    expect(newMan.getEmail()).toBe(testEmail);
  });
  
test("Can get id via getId() method", () => {
  const testID = 5678;
  const newMan = new Manager("George", "george@michael.com", testID);
  expect(newMan.getId()).toBe(testID);
});

test("Can get 'Manager' via getRole() method", () => {
  const testRole = "Manager";
  const newMan = new Manager("George", "george@michael.com", 9012);
  expect(newMan.getRole()).toBe(testRole);
});
