pragma solidity ^0.8.0;

contract Counter {
    string public contractName; // Public variable to store the name of the contract
    uint public a;              // Public variable to store the first number
    uint public b;              // Public variable to store the second number
    uint public result;         // Public variable to store the result of the operation

    // Constructor to initialize the contract
    constructor(string memory name, uint _a, uint _b) {
        contractName = name; // Initialize contractName with the given name
        a = _a;              // Initialize a with the given value
        b = _b;              // Initialize b with the given value

        // Perform the addition if a > b, otherwise store the value of b
        if (a > b) {
            result = a + b;  // Set result to the sum of a and b
        } else {
            result = b;      // Set result to the value of b
        }
    }

    // Function to update the values of a and b and recalculate the result
    function updateValues(uint _a, uint _b) public {
        a = _a;
        b = _b;
        
        if (a > b) {
            result = a + b;
        } else {
            result = b;
        }
    }

    // Function to get the result
    function getResult() public view returns (uint) {
        return result;
    }
}
