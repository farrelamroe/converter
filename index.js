document.querySelector("btn").addEventListener("click", terminate);
        function terminate(){
            const v = document.getElementById("inputan").value;
            const i1 = document.getElementById("input1").value;
            const i2 = document.getElementById("input2").value;
            if(i1=="celcius" && i2=="kelvin") document.getElementById("demo").innerHTML = v*1+273.15 + " Kelvin";
            else if(i1=="celcius" && i2=="celcius") document.getElementById("demo").innerHTML = v + "° Celcius";
            else if(i1=="celcius" && i2=="fahrenheit") document.getElementById("demo").innerHTML = 9/5*v+32 + "° Fahrenheit";
            else if(i1=="celcius" && i2=="reamur") document.getElementById("demo").innerHTML = 4/5*v + "° Reamur";
            else if(i1=="kelvin" && i2=="celcius") document.getElementById("demo").innerHTML = v-273.15 + "° Celcius";
            else if(i1=="kelvin" && i2=="kelvin") document.getElementById("demo").innerHTML = v + " Kelvin";
            else if(i1=="kelvin" && i2=="fahrenheit") document.getElementById("demo").innerHTML = 9/5*(v-273.15) +"° Fahrenheit";
            else if(i1=="kelvin" && i2=="reamur") document.getElementById("demo").innerHTML = 4/5*(v-273.15) + "° Reamur";
            else if(i1=="fahrenheit" && i2=="celcius") document.getElementById("demo").innerHTML = 5/9*(v-32) + "° Celcius";
            else if(i1=="fahrenheit" && i2=="kelvin") document.getElementById("demo").innerHTML = 5/9*(v-32)+273.15 + " Kelvin";
            else if(i1=="fahrenheit" && i2=="fahrenheit") document.getElementById("demo").innerHTML = v + "° Fahrenheit";
            else if(i1=="fahrenheit" && i2=="reamur") document.getElementById("demo").innerHTML = 4/9*(v-32) + "° Reamur";
            else if(i1=="reamur" && i2=="celcius") document.getElementById("demo").innerHTML = 5/4*v + "° Celcius";
            else if(i1=="reamur" && i2=="kelvin") document.getElementById("demo").innerHTML = 5/4*v+273.15 + " Kelvin";
            else if(i1=="reamur" && i2=="fahrenheit") document.getElementById("demo").innerHTML = 9/4*v+32 + "° Fahrenheit";
            else if(i1=="reamur" && i2=="reamur") document.getElementById("demo").innerHTML = v + "° Reamur";
        }