const qBank = [
  {
    question:
      " Everything in React is a _____________     ",
    answers: ["Module", "Component", "Package", "Class"],
    correct: "Component",
    questionId: "099099"
  },
  {
    question:
      " In which directory React Components are saved?",
    answers: ["Inside js/components/", "Inside/Vendor/components/", "Inside external/components/", "Inside vendor/"],
    correct: "Inside js/components",
    questionId: "183452"
  },
  {
    question:
      "How many elements does a react component return?",
    answers: ["2 Elements", "1 Element", "Multiple Elements", "None of these"],
    correct: "Multiple Elements",
    questionId: "267908"
  },
  {
    question: "What is state in React?",
    answers: [
      "A persistant storage",
      "An internal data store(object) of a component",
      "Both",
      "None of these"
    ],
    correct: "An internal data store(object) of a component",
    questionId: "333247"
  },
  {
    question: "What is Babel?",
    answers: ["A transpiler", "An interpreter", "A compiler", "Both Compiler and Transpiler"],
    correct: "Both Compiler and Transpiler",
    questionId: "496293"
  },
  {
    question:
      "What does the webpack command do?",
    answers: [
      "Transpiles all the javascript down into one file",
      "Runs react local development server",
      "A module bundler",
      "None of these"
    ],
    correct: "A module bundler",
    questionId: "588909"
  },
  {
    question:
      ' What port is the default where the webpack-dev-server will run?',
    answers: ["3000", "8080", "3306", "None of these"],
    correct: "8080",
    questionId: "648452"
  },
  {
    question: " What is ReactJS?",
    answers: ["Server side Framework", "User-Interface framework", "A library for buliding interaction interfaces", "None of these"],
    correct: "A library for buliding interaction interfaces",
    questionId: "786649"
  },
  {
    question:
      "What are the two ways that data gets handled in React?",
    answers: ["State & props", "Services & components", "Both", "None of these"],
    correct: "State & props",
    questionId: "839754"
  },
  {
    question:
      "In React what is used to pass data to a component from outside?",
    answers: [
      "setState",
      "render with arguments",
      "props",
      "Prop Types"
    ],
    correct: "Props",
    questionId: "98390"
  },
  {
    question: "Props are __________ into other components",
    answers: ["Methods", "Injected", "Both 1 & 2", "All of the above"],
    correct: "Methods",
    questionId: "1071006"
  },
  {
    question: "IHow can you access the state of a component from inside of a member function?",
    answers: ["this.getState()", "this.values", "this.prototype.stateValue", "this.state"],
    correct: "this.values",
    questionId: "1174154"
  },
  {
    question: "What is a react.js in MVC?",
    answers: ["Middleware", "Controller", "Model", "Router"],
    correct: "Controller",
    questionId: "1226535"
  },
  {
    question: "ReactJS uses _____ to increase performance",
    answers: ["Original DOM", "Virtual DOM", "Both 1 & 2", "None of Above"],
    correct: "Virtual DOM",
    questionId: "1310938"
  },
  {
    question: "Keys are given to a list of elements in react. These keys should be -",
    answers: ["Do not requires to be unique", "Uniques in the DOM", "Unique among the siblings only", "All of the above"],
    correct: "Unique among the siblings only",
    questionId: "1436873"
  },
  {
    question: "Which of the following is the correct data flow sequence of flux concept?",
    answers: ["Dispatcher->Action->Store->View", "Action->Dispatcher->Store->View", "Action->Dispatcher->Store->View", "Action->Store->Dispatcher->View"],
    correct: "Action->Dispatcher->Store->View",
    questionId: "1515110"
  },
  {
    question: "React.js Covers only the view layer of the app.?",
    answers: ["Yes", "No", "Maybe", "None"],
    correct: "Yes",
    questionId: "1642728"
  },
  {
    question:
      "What is the name of React.js Developer ? ",
    answers: ["Jordan mike", "Jordan Lee", "Jordan Walke", "Tim lee"],
    correct: "Jordan Walke",
    questionId: "1747256"
  },
  {
    question:
      "Who Develop React.js?",
    answers: ["Apple", "Facebook", "Twitter", "Google"],
    correct: "Facebook",
    questionId: "1822532"
  },
  {
    question: " .............. helps react for keeping their data unidirectional.",
    answers: [
      "JSX",
      "Flux",
      "Dom",
      "Props"
    ],
    correct: "Flux",
    questionId: "195075"
  }
];

export default (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
