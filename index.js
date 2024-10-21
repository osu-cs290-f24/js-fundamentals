console.log("Hello, world!")

console.log("=================")
console.log("== Variables")
console.log("=================")

var n = 8
// n = "String"
// n = [1, 2, 3]
var pi = 3.1415
var str = "String"
var b = true

console.log("== typeof(n):", typeof(n))
console.log("== typeof(pi):", typeof(pi))
console.log("== typeof(str):", typeof(str))
console.log("== typeof(b):", typeof(b))

console.log("=================")
console.log("== Numbers")
console.log("=================")

console.log("== 9 / 5:", 9 / 5)

console.log("=================")
console.log("== Comparisons")
console.log("=================")

console.log("== 2 == 2:", 2 == 2)
console.log("== 2 == 3:", 2 == 3)
console.log("== 2 == '2':", 2 == '2')
console.log("== 2 === '2':", 2 === '2')
console.log("== 2 !== '2':", 2 !== '2')

console.log("=================")
console.log("== String")
console.log("=================")

var greeting = "Hello, my name is: "
var myName = 'Rob'
var bigStr = greeting + myName
console.log("== bigStr:", bigStr)

var anotherStr = "4 + 4 = " + 8
console.log("== anotherStr:", anotherStr)
console.log("== anotherStr.length:", anotherStr.length)
console.log("== anotherStr[4]:", anotherStr[4])
anotherStr[4] = '6'
console.log("== anotherStr:", anotherStr)

var decathlon = "decathlon"
console.log(
  "== decathlon.indexOf('cat'):",
  decathlon.indexOf('cat')
)
var team = "team"
console.log("== team.indexOf('i'):", team.indexOf('i'))

console.log("=================")
console.log("== Arrays")
console.log("=================")

var array = [ 1, 'b', [ 4, 5, 6 ] ]
console.log("== array:", array)
console.log("== array[1]:", array[1])
array.push("new value")
console.log("== array:", array)

for (var i = 0; i < array.length; i++) {
  console.log("  -- array[" + i + "]:", array[i])
}
