import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/css/bootstrap.css"
import "./main.css";

function szinvaltas(e){
    
    document.getElementById('cimsor').style.color = e.currentTarget.value;
}
document.getElementById('szinvalto').addEventListener(change, szinvaltas);

let i = 0;
function kepklikk()
{

    document.getElementById('kepalairas').textContent = i++;

}


document.getElementById('bok').addEventListener('click', kepklikk)