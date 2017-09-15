/*By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.*/

+var sum = 0;
 +var j = 1;
 +
 +for(var i = 0; i <= 4000000;){
 +	j = i + j;
 +	i = j + i;
 +
 +		if(i % 2 === 0){
 +		sum = sum + i;
 +	}
 +}
 +
 +	console.log(sum);
