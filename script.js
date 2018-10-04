function calcfunction() {
    var numbers = [];
    var start = parseFloat(document.getElementById('star').value);
    var end = parseFloat(document.getElementById('end').value);
    var step = parseFloat(document.getElementById('step').value);
    try {
        if (start < end) {
            for (var i = start; i <= end; i += step) {
                numbers.push(i);
            }
        }
        else {
            for (var i = start; i >= end; i += step) {
                numbers.push(i);
            }
        }
        document.getElementById('display1').innerHTML = 'you generated array is '+numbers;
        function getSum(total, num) {
            return total + num;
        }
        document.getElementById('display2').innerText = 'your sum is '+numbers.reduce(getSum);
        binary = function(n) {
            if (n < 0) {
                n = 0xFFFFFFFF + n + 1;
            } 
            return parseInt(n, 10).toString(2);
        }
        var x = [];
        for (var g = 0; g < numbers.length; g++) {
            x.push(binary(numbers[g]));
        }
        document.getElementById('display3').innerHTML = 'The Binary of absolut element values are: '+x;
    }
    catch (err) {
        document.getElementById('display1').innerHTML = "Invalid trigger input, please reload and try again";
    }
}