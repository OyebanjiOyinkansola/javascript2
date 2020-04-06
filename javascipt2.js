<script type="text/javascript">
let data = [
{principal: 2500, rate:3,time:1.8},
{principal: 1000, rate:2, time:5 },
{principal:3000, rate:2, time:1 },
{principal:2000, rate:2,time:3 ,}
];

function interestCalculator(array) {
let interestData = [];
array.forEach(element=> {
let r;
const {principal, time, rate} = element;
if(principal >= 2500 && time > 1 && time < 3) {
r = 3;
}else if(principal >= 2500 && time >= 3) {
r = 4;
}else if(principal < 2500 || time <= 1) {
r = 2;
}else {
r = 1;
};
let interest = (principal * r * time)/100
element.interest = interest;
interestData.push(element);
});
console.log(interestData);
return(interestData);
};
interestCalculator(data);
</script>

