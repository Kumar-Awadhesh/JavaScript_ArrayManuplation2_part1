//functon to calculate sum of cube if number is divisible by 3.
function sumOfCube(array){
    let cubeSum=0;
    for(let i=0;i<array.length;i++){
        if(array[i]%3===0){
            cubeSum+=array[i]**3
        }
    }
    //return the sum of cube to the function.
    return(cubeSum)
}

//input taking of an Array of numbers.
const array=[1, 2, 3, 4, 5, 6];

//calling the function to print sum of cube.
let arr=sumOfCube(array)
console.log(arr)