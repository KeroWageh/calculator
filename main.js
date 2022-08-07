function insert(num) {
    var mystring = document.form.textview.value;
    var lastChar = mystring[mystring.lenght - 1];
    if (mystring.lenght < 30) {
        if (!isNaN(lastChar) || lastChar == null || !isNaN(num)) {
            document.form.textview.value = mystring + num;
        } else if (num != lastChar) {
            document.form.textview.value = mystring.replace(lastChar, num);
        }
    }
}

function equal() {
    var sum = document.form.textview.value;
    if (sum) {
        document.form.textview.value = eval(sum);
    }
}

function clean() {
    document.form.textview.value = '';
}

function back() {
    var exp = document.form.textview.value
    document.form.textview.value = exp.substring(0, exp.lenght - 1);
}

