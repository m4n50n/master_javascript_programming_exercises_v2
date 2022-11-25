function detectOutlierValue(string) {
    string = string.split(" ");
		let odd = [];
		let even = [];
		
    for (let i = 0; i < string.length; i++) {
			if (parseInt(string[i]) % 2 === 0) {
				even.push(i + 1);
			}
			else {
				odd.push(i + 1);
			}
		}
		
		if (odd.length > even.length) {
			return even[0];
		}
		else {
			return odd[0];
		}
}

// Third number is odd, while the rest of the numbers are even
console.log(detectOutlierValue("2 4 7 8 10")); // => 3 

// Second number is even, while the rest of the numbers are odd
console.log(detectOutlierValue("1 10 1 1"))  //=> 2