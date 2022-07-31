function Res() {
	var r=document.getElementById("numero").value;
	document.write("<table border='2'>");
	document.write("<tr >");
	document.write("<td colspane='5'>Tabla de Numero"+r);
	document.write("</tr>");
	for (var i = 1; i <= 10; i++) {
		m=i*r;
		document.write("<tr>");
		document.write("<td>"+r);
		document.write("<td> x");
		document.write("<td>"+i);
		document.write("<td> =");
		document.write("<td>"+m);
		document.write("</tr>");
	};
	document.write("</table>");
}