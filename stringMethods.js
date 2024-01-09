console.log('Q1 concat');

let fname = 'Ananth'
let lname =  'Krishnan A'

console.log(fname.concat(" ",lname));

console.log('Q2 endswith');

let endWith = 'sam sabu'

console.log(endWith.endsWith('sabu'));

console.log('Q3 includes');

let StringIncludes = "welcome to javascript development"

console.log(StringIncludes.includes('javascript'));

console.log('Q4 indexOf');

let str1 = 'first occurrence of a value in a string.'

console.log("index value of value",str1.indexOf("value"));

console.log('Q5 lastIndexOf');

let str2 = 'welcomes to javascript development ,hello welcomes you again'

console.log("lastIndexOf value of welcome",str2.lastIndexOf("welcome"));

console.log('Q6 match');

let str3 = 'welcomes to javascript development ,hello welcomes you again'

console.log("match",str3.match("to"));

console.log('Q7 matchAll');

let str = 'welcomes to javascript development ,hello welcomes you again'

console.log("match",str.matchAll("javascript"));

console.log('Q8 padEnd');

let text6 = "5"

let padEndText = text6.padEnd(4,0)

console.log('Ans',padEndText);

console.log('Q9 padStart');

let text = "5"

let padStartText = text.padStart(5,1)

console.log('Ans',padStartText);

console.log('Q10 repeat');

let textRepeat = "Hai !!"

console.log("Repate : ",textRepeat.repeat(5));

console.log('Q11 replace');

let textReplace = "welcome to Vue.js"

console.log("Repate : ",textReplace.replace("Vue","React"));

console.log('Q12 search');

let textsearch = "welcome to Vue.js"

console.log("search : ",textsearch.search("Vue"));

console.log('Q13 slice');

let textslice = "welcome to Vue.js"

console.log("slice : ",textslice.slice(0,5));

console.log('Q14 split');

let textsplit = "welcome to Vue.js"

console.log("split : ",textsplit.split(" "));

console.log('Q15 startsWith');

let textStartsWith = "welcome to Vue.js"

console.log("startsWith : ",textStartsWith.startsWith("welcome"));

console.log('Q16 substr');

let textsubstr = "welcome to Vue.js"

let ans1 = textsubstr.substr(4,4)

console.log("ans : ",ans1);

console.log('Q17 substring');

let textsubstring = "welcome to Vue.js"

let ans2 = textsubstring.substring(4,9)

console.log("ans : ",ans2);

console.log('Q18 toLowerCase');

let textToLowerCase = "WELCOME TO REACT.JS"

let ans3 = textToLowerCase.toLowerCase()

console.log("ans : ",ans3);

console.log('Q19 toUpperCase');

let textToUpperCase = "welcome to Vue.js"

let ans = textToUpperCase.toUpperCase()

console.log("ans : ",ans);

console.log('Q20 Trim');

let fullName1 = "          Ananth krishnan    "

console.log("trimed :",fullName1.trim());

console.log('Q21 Trimend');

let fullName2 = "          Ananth krishnan     "

console.log("trimed :",fullName2.trimEnd());

console.log('Q22 trimStart ');

let fullName3 = "          Ananth krishnan     "

console.log("trimed :",fullName3.trimStart());

console.log('Q23 charAt ');

let textCharAt = "Ananth krishnan"

console.log("trimed :",textCharAt.charAt(4));

console.log('Q24 charCodeAt ');

let textcharCodeAt = "Ananth krishnan"

console.log("trimed :",textcharCodeAt.charCodeAt(5));
