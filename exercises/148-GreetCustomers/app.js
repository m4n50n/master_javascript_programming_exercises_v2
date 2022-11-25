var customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) {
  let greeting;

  if (!Object.keys(customerData).includes(firstName)) {
    greeting = "Welcome! Is this your first time?";
	}
  else if (customerData[firstName].visits == 1) {
    greeting = "Welcome back, Joe! We're glad you liked us the first time!";
  }
  else if (customerData[firstName].visits > 1) {
    greeting = "Welcome back, Carol! So glad to see you again!";
  }
		
  return greeting;
}

var output = greetCustomer('Terrance');
console.log(output); // --> 'Welcome! Is this your first time?'