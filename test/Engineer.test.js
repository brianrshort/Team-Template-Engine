const Engineer = require("../lib/engineer.js");



test("Can instantiate instance of Engineer subclass", () => {
  const newEng = new Engineer();
  expect(typeof(newEng)).toBe("object");
});

test("Can set name for Engineer subclass", () => {
  const name = "Tina";
  const newEng = new Engineer(name);
  expect(newEng.name).toBe(name);
});

test("Can set email address for Engineer subclass", () => {
  const testEmail = "tina@turner.com";
  const newEng = new Engineer("Tina", testEmail);
  expect(newEng.email).toBe(testEmail);
});

test("Can set identification number for Engineer subclass", () => {
  const testID = 1234;
  const newEng = new Engineer("Tina", "tina@turner.com", testID);
  expect(newEng.id).toBe(testID);
});

test("Can set github ID for Engineer subclass", () => {
    const testID = "gitTina2020";
    const newEng = new Engineer("Tina", "tina@turner.com", 1234, testID);
    expect(newEng.github).toBe(testID);
  });

test("Can get name via getName() method", () => {
  const testName = "Martha";
  const newEng = new Engineer(testName);
  expect(newEng.getName()).toBe(testName);
});

test("Can get email via getEmail() method", () => {
    const testEmail = "martha@washington.com";
    const newEng = new Engineer("Martha", testEmail);
    expect(newEng.getEmail()).toBe(testEmail);
  });
  
test("Can get id via getId() method", () => {
  const testID = 5678;
  const newEng = new Engineer("Martha", "martha@washington.com", testID);
  expect(newEng.getId()).toBe(testID);
});

test("Can get github ID via getGithub() method", () => {
    const testGit = "marthaGit";
    const newEng = new Engineer("Martha", "martha@washington.com", 1234, testGit);
    expect(newEng.getGithub()).toBe(testGit);
  });

test("Can get 'Engineer' via getRole() method", () => {
  const testRole = "Engineer";
  const newEng = new Engineer("Tina", "tina@turner.com", 1234, "tina@turner.com");
  expect(newEng.getRole()).toBe(testRole);
});
