var keys = [
	['q','w','e','r','t','y','u','i','o','p'],
	['a','s','d','f','g','h','j','k','l'],
	['z','x','c','v','b','n','m']
]
var hash = {
	"q":"qq.com",
	"w":"weibo.com"
}
for(i = 0; i<keys.length; i++){
	var divTemp = document.createElement("div")
	main.appendChild(divTemp)
	for(v = 0; v<keys[i].length; v++){
		var kbdTemp = document.createElement("kbd")
		kbdTemp.textContent = keys[i][v]
		mainWrapper.appendChild(kbdTemp)
		v++
	}
	i++
}