let name1: string ='Hello';
console.log(name1);

function add(a: number, b: number){
    return a+b;
}

const diff = (a: number, b: number) => {
    return a-b;
}

function avg(num: number[]){
    let data_length: number = num.length;
    let sum_num: number = 0;
    for(let i=0; i<data_length; i++){
        sum_num += num[i];
    }
    return sum_num / data_length;
}

function Corr(x: number[], y: number[]){    
    let data_length: number = x.length;
    let sx_2: number = 0;
    let sy_2: number = 0;
    let sxy: number = 0;
    let avg_x: number = avg(x);
    let avg_y: number = avg(y);
    for(let i=0; i<data_length; i++){
        sx_2 += (x[i] - avg_x) * (x[i] - avg_x) / data_length;
        sy_2 += (y[i] - avg_y) * (y[i] - avg_y) / data_length;
        sxy += (x[i] - avg_x) * (y[i] - avg_y);
    }
    return (sxy/data_length) / (Math.sqrt(sx_2) * Math.sqrt(sy_2));
}

function SimpleLinerRegression(x: number[], y: number[]){
    let beta1_hat: number = 0;
    let sx: number = 0;
    let sxy: number = 0;
    let avg_x: number = avg(x);
    let avg_y: number = avg(y);
    let data_length: number = x.length;
    for(let i=0; i<data_length; i++){
        sx += (x[i] - avg_x) * (x[i] - avg_x);
        sxy += (x[i] - avg_x) * (y[i] - avg_y);
    }
    beta1_hat = sxy/sx;
    let beta0_hat: number = avg(y) - beta1_hat * avg(x);
    return [beta0_hat, beta1_hat];
};

console.log(SimpleLinerRegression([12, 38, 28, 50, 76],[28, 35, 55, 87, 93]));