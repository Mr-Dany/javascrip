
var numero=5
var mostrar=document.getElementById("mostrar")
var h="<div class='row'>"
for (var i =1; i <= 12; i++){	
	h+="<div class='col-lg-2' style='background-color: skyblue'>"
	for (var j =1; j <= 12; j++){
		h+= i +" * "+j+" = "+i*j+ "<br>"
	}
	h+="</div>"


}
h+="</div>"
mostrar.innerHTML+=h
