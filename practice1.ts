let name1: string ='Hello';
console.log(name1);

function add(a: number, b: number){
    return a+b;
}

const diff = (a: number, b: number) => {
    return a-b;
}

function Corr(x: number[], y: number[]){    
    let data_length: number = x.length;
    let sum_x: number = 0;
    let sum_y: number = 0;
    let sx_2: number = 0;
    let sy_2: number = 0;
    let sxy: number = 0;
    for(let i=0; i<data_length; i++){
        sum_x += x[i];
        sum_y += y[i];
    }
    let avg_x: number = sum_x / data_length;
    let avg_y: number = sum_y / data_length;
    for(let i=0; i<data_length; i++){
        sx_2 += (x[i] - avg_x) * (x[i] - avg_x) / data_length;
        sy_2 += (y[i] - avg_y) * (y[i] - avg_y) / data_length;
        sxy += (x[i] - avg_x) * (y[i] - avg_y);
    }
    return (sxy/data_length) / (Math.sqrt(sx_2) * Math.sqrt(sy_2));
}