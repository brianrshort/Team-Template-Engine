const Intern = require("../lib/intern.js");



test("Can instantiate instance of Intern subclass", () => {
  const newInt = new Intern();
  expect(typeof(newInt)).toBe("object");
});

test("Can set name for Intern subclass", () => {
  const name = "Terna";
  const newInt = new Intern(name);
  expect(newInt.name).toBe(name);
});

test("Can set email address for Intern subclass", () => {
  const testEmail = "in@terna.com";
  const newInt = new Intern("Terna", testEmail);
  expect(newInt.email).toBe(testEmail);
});

test("Can set identification number for Intern subclass", () => {
  const testID = 1234;
  const newInt = new Intern("Terna", "in@terna.com", testID);
  expect(newInt.id).toBe(testID);
});

test("Can set school for Intern subclass", () => {
    const testSchool = "Devry";
    const newInt = new Intern("Terna", "in@terna.com", 1234, testSchool);
    expect(newInt.school).toBe(testSchool);
  });

test("Can get name via getName() method", () => {
  const testName = "Bucky";
  const newInt = new Intern(testName);
  expect(newInt.getName()).toBe(testName);
});

test("Can get email via getEmail() method", () => {
    const testEmail = "bucky@cap.com";
    const newInt = new Intern("Bucky", testEmail);
    expect(newInt.getEmail()).toBe(testEmail);
  });
  
test("Can get id via getId() method", () => {
  const testID = 5678;
  const newInt = new Intern("Bucky", "bucky@cap.com", testID);
  expect(newInt.getId()).toBe(testID);
});

test("Can get school via getSchool() method", () => {
    const testSchool = "Phoenix";
    const newInt = new Intern("Bucky", "bucky@cap.com", 1234, testSchool);
    expect(newInt.getSchool()).toBe(testSchool);
  });

test("Can get 'Intern' via getRole() method", () => {
  const testRole = "Intern";
  const newInt = new Intern("Bucky", "bucky@cap.com", 1234, "Devry");
  expect(newInt.getRole()).toBe(testRole);
});
