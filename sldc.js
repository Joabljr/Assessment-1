// In this section you will answer some work through problems related to the Software Development Lifecycle

//////////////////PROBLEM 1////////////////////
/*
    Reorganize the following steps of the Software Development Lifecycle to be in their correct order.
*/

// Analysis of Requirements
// Design
// Implementation
// Maintain
// Planning
// Testing & Integration

//////////////////PROBLEM 2////////////////////
/*
    Create a variable for each of the above steps of the Software Development Lifecycle and set the values of each variable to a definition of the step.
*/
var softDevelopLife = {
  first: "Planning",
  second: "Analysis of Requirements",
  third: "Design",
  fourth: "Implementation",
  fifth: "Testing & Integration",
  sixth: "Maintain",
};
console.log(softDevelopLife);

var planningD =
  "1 Software life cycle models describe phases of the software cycle and the order in which those phases are executed.";
console.log(planningD);

var analysisOfRequirementsD =
  "2 Business requirements are gathered in this phase. This phase is the main focus of the project managers and stake holders.Meetings with managers, stake holders and users are held in order to determine the requirements like; Who is going to use the system? How will they use the system? What data should be input into the system? What data should be output by the system? These are general questions that get answered during a requirements gathering phase. After requirement gathering these requirements are analyzed for their validity and the possibility of incorporating the requirements in the system to be development is also studied.";
console.log(analysisOfRequirementsD);

var DesignD =
  "3 In this phase the system and software design is prepared from the requirement specifications which were studied in the first phase. System Design helps in specifying hardware and system requirements and also helps in defining overall system architecture. The system design specifications serve as input for the next phase of the model.";
console.log(DesignD);

var ImplementationD =
  "4 On receiving system design documents, the work is divided in modules/units and actual coding is started.";
console.log(ImplementationD);

var testingIntegrationD =
  "5 After the code is developed it is tested against the requirements to make sure that the product is actually solving the needs addressed and gathered during the requirements phase.";
console.log(testingIntegrationD);

var maintainD =
  "6 Once when the customers starts using the developed system then the actual problems comes up and needs to be solved from time to time.";
console.log(maintainD);
