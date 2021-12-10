var name1 = 'Hello';
console.log(name1);
function add(a, b) {
    return a + b;
}
var diff = function (a, b) {
    return a - b;
};
function avg(num) {
    var data_length = num.length;
    var sum_num = 0;
    for (var i = 0; i < data_length; i++) {
        sum_num += num[i];
    }
    return sum_num / data_length;
}
function Corr(x, y) {
    var data_length = x.length;
    var sx_2 = 0;
    var sy_2 = 0;
    var sxy = 0;
    var avg_x = avg(x);
    var avg_y = avg(y);
    for (var i = 0; i < data_length; i++) {
        sx_2 += (x[i] - avg_x) * (x[i] - avg_x) / data_length;
        sy_2 += (y[i] - avg_y) * (y[i] - avg_y) / data_length;
        sxy += (x[i] - avg_x) * (y[i] - avg_y);
    }
    return (sxy / data_length) / (Math.sqrt(sx_2) * Math.sqrt(sy_2));
}
function SimpleLinerRegression(x, y) {
    var beta1_hat = 0;
    var sx = 0;
    var sxy = 0;
    var avg_x = avg(x);
    var avg_y = avg(y);
    var data_length = x.length;
    for (var i = 0; i < data_length; i++) {
        sx += (x[i] - avg_x) * (x[i] - avg_x);
        sxy += (x[i] - avg_x) * (y[i] - avg_y);
    }
    beta1_hat = sxy / sx;
    var beta0_hat = avg(y) - beta1_hat * avg(x);
    return [beta0_hat, beta1_hat];
}
;
console.log(SimpleLinerRegression([12, 38, 28, 50, 76], [28, 35, 55, 87, 93]));
