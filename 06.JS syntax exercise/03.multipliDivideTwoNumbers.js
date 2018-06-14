function multyply(nums) {
    let num1=Number(nums[0]);
    let num2=Number(nums[1])
    let sum=0;
    if(num2 >= num1){
         sum=num1*num2;
    }else{
        sum=num1/num2;
    }
    console.log(sum);
}
multyply(["3","2"])