/*
for(i=1 ;i<=5 ;i++){
    console.log(i);
}

output = "output ";


for(i=1 ;i<=5 ;i++){
    output += output + "";
}

console.log(output);

output = "";

for(i=5 ;i>=1 ;i++){
    output += output + "";
}

console.log(output);

reverse = "";
str = "Kim";

for(i=str.length-1 ;i>=0 ;i--){
    reverse += str[i];
}

console.log(reverse);


output = " ";
arr = [4,3,2];

for(i=0; i<arr.length; i--){
    output += arr[i] + " ";
}

console.log(output);

output = " ";
arr = [4,3,2];

for(i=arr.length; i>=0; i--){
    output += arr[i] + " ";
}

console.log(output);
*/

arr1 = [4, 2, 3];
arr2 = [6, 7, 4, 2, 0];
arr3 = [6, 9, 8];

function arrayTraverse(arr) {
    output = " ";

    for (i = 0; i < arr.length; i++) {
        output += arr[i] + " ";
    }
    console.log(output);
}

arrayTraverse(arr1);
arrayTraverse(arr2);
arrayTraverse(arr3);