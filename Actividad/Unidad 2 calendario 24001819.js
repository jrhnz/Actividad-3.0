var mes = prompt("ingrese su mes de nacimiento en formato numerico")
var dia = prompt("ingrese su fecha de nacimiento")
if((mes ==1 && dia <=20) || (mes ==12 && dia >= 22)){
alert("es capricornio");
}else if((mes ==2 && dia <=19) || (mes ==1 && dia >= 20)){
alert("es acuario");
}else if((mes ==3 && dia <=20) || (mes ==2 && dia >= 20)){
alert("es piscis");
}else if((mes ==4 && dia <=19) || (mes ==3 && dia >= 21)){
alert("es aries");
}else if((mes ==5 && dia <=20) || (mes ==4 && dia >= 20)){
alert("es tauro");
}else if((mes ==6 && dia <=20) || (mes ==5 && dia >= 21)){
alert("es geminis");
}else if((mes ==7 && dia <=22) || (mes ==6 && dia >= 21)){
alert("es cancer");
}else if((mes ==8 && dia <=22) || (mes ==7 && dia >= 23)){
alert("es leo");
}else if((mes ==9 && dia <=22) || (mes ==8 && dia >=23 )){
alert("es virgo");
}else if((mes ==10 && dia <=22) || (mes ==9 && dia >= 23)){
alert("es libra");
}else if((mes ==11 && dia <=21) || (mes ==10 && dia >= 23)){
alert("es escorpio");
}else if((mes ==12 && dia <=21) || (mes ==11 && dia >= 22)){
alert("es acuario");
}else if((mes <1)){
alert("ingrese una fecha valida");
}else if((mes >12)){
alert("ingrese una fecha valida");
}else if((dia <1)){
alert("ingrese una fecha valida");
}else if((dia >31)){
alert("ingrese una fecha valida");
}