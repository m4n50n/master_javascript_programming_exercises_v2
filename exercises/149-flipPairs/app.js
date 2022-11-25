function flipPairs(input){
    let inverted = "";
      
      let fin = 0;
      for (i = fin; i < input.length; i++) {
      
          inverted += input.slice(fin, fin + 2).split("").reverse().join("");
         fin += 2;
      }
      
      return inverted;
 }
 
 var input = 'check out how interesting this problem is, it\'s insanely interesting!';
 var output = flipPairs(input);
 console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!
 