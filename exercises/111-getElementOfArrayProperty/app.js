var obj = {
    key: ['Jamil', 'Albrey']
   };
   
   function getElementOfArrayProperty(obj, key, index) {
       return (obj[key]) ? (typeof obj[key] === "object") ? obj[key][index] : undefined : undefined;
   }
   
   var output = getElementOfArrayProperty(obj, 'key', 0); 
   console.log(output); // --> 'Jamil'