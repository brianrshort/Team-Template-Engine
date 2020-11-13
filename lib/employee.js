class Employee {
    constructor (name, email, id) {
        this.name = name;
        this.email = email;
        this.id = id; 
        this.role = "Employee";
        this.getName = function() {
            return this.name;
        }
        this.getId = function() {
            return this.id;
        }
        this.getEmail = function() {
            return this.email;
        }
        this.getRole = function() {
            return this.role;
        }
    }
}

module.exports = Employee;