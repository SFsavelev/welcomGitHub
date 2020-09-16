let arr = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];

for (let i = 0; i < arr.length; i++) {
if(arr[i] == "сб" || arr[i] == "вс") {
document.write('<b>' + arr[i] + '</b>' + '<br>')
} else { document.write(arr[i] + '<br>')
}
}