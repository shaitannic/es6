function areTheyAwesome (name) {
    if (name === 'nico') {
        let awesome = name;
    }

    return awesome;
}
// будет ошибка, т.к. name определена в блочном скоупе
// const result = areTheyAwesome('nico');
// console.log(result);





{
    let _nested = 'secret';
    function nested () {
        return _nested;
    }
}
// будет ошибка, т.к. nested определена в блочном скоупе
// console.log(nested());





var nested2;
{
    var _nested2 = 'secret';
    nested2 = function() {
        return _nested2;
    }
}
// console.log(nested2());




there = 'far away';
// let there = 'dragons';
