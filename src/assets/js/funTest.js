function funTestFn() {
    var a, b, c
    a = 10
    b = 20
    c = 30
    var obj = funTestFn1(a, b, c)
    var {b, a, c} = obj
    console.log(a, b, c); // 20 40 60
}
function funTestFn1(a, b, c) {
    a += 10
    b += 20
    c += 30
    var obj = {a:a, b:b, c:c}
    return obj
}
export default funTestFn
