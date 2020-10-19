module.exports = function check(str, bracketsConfig) {
    let stack = [];

    let mapStartEnd = new Object();
    let mapEnd = new Object();

    bracketsConfig.forEach(element => {
        mapStartEnd[element[0]] = element[1];
        mapEnd[element[1]] = true;
    });


    for (let i = 0; i < str.length; i++) {
        if (mapStartEnd[str[i]] != null && (mapEnd[str[i]] == null || stack.indexOf(mapStartEnd[str[i]]) < 0)) {
            stack.push(str[i]);
        } else if (mapEnd[str[i]] != null) {
            let last = stack.pop();

            if (str[i] !== mapStartEnd[last]) {
                return false
            };
        } else {
            return false;
        }
    }

    if (stack.length !== 0) {
        return false
    };

    return true;
}