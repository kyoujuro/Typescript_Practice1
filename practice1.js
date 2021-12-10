var name1 = 'Hello';
console.log(name1);
function add(a, b) {
    return a + b;
}
var diff = function (a, b) {
    return a - b;
};
function Corr(x, y) {
    var data_length = x.length;
    var sum_x = 0;
    var sum_y = 0;
    var sx_2 = 0;
    var sy_2 = 0;
    var sxy = 0;
    for (var i = 0; i < data_length; i++) {
        sum_x += x[i];
        sum_y += y[i];
    }
    var avg_x = sum_x / data_length;
    var avg_y = sum_y / data_length;
    for (var i = 0; i < data_length; i++) {
        sx_2 += (x[i] - avg_x) * (x[i] - avg_x) / data_length;
        sy_2 += (y[i] - avg_y) * (y[i] - avg_y) / data_length;
        sxy += (x[i] - avg_x) * (y[i] - avg_y);
    }
    return (sxy / data_length) / (Math.sqrt(sx_2) * Math.sqrt(sy_2));
}
console.log(Corr([50, 60, 70, 80, 90], [40, 70, 90, 60, 100]));