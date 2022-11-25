function PhoneNumberFormatter(numbers) {
  this.numbers = numbers;
}

PhoneNumberFormatter.prototype.render = function() {
  var string = '';
	string += this.parenthesize(this.getAreaCode());
	string += ' ';
	string += this.getExchangeCode();
	string += '-';
	string += this.getLineNumber();
	
	return string;
};

PhoneNumberFormatter.prototype.getAreaCode = function() {
  return this.slice(0, 3);
};

PhoneNumberFormatter.prototype.getExchangeCode = function() {
 	return this.slice(3, 6);
};

PhoneNumberFormatter.prototype.getLineNumber = function() {
  return this.slice(6);
};

PhoneNumberFormatter.prototype.parenthesize = function(string) {
  return '(' + string + ')';
};

PhoneNumberFormatter.prototype.slice = function(start, end) {
  return this.numbers.slice(start, end).join('');
};

let arr = [6, 5, 0, 8, 3, 5, 9, 1, 7, 2];
var phoner = new PhoneNumberFormatter(arr);
console.log(phoner.render());
