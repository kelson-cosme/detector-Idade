const botao = document.getElementById("botao");
let sexo = document.getElementsByName("radsex");
let resultado = document.getElementById("resultado");
let imagem = document.getElementById("img");
let data = new Date(); /**pegar o ano do momento */
let ano = data.getFullYear();

function verificar(){
    let nascimento = document.getElementById("idade").value;
    let idade = (ano - nascimento)

    if(nascimento == 0 || nascimento > ano){
        alert("Ocorreu um erro");
    }else{

        let genero = ""

        if(sexo[0].checked){
            genero = "Homem"
           
            if(idade >= 0 && idade < 15){    /*CRIANÇA*/
                imagem.src = /imgens/foto-bebe-m.png

            }else if(idade < 21){   /*JOVEM*/ 
                imagem.src = "/imgens/foto-jovem-m.png"

            }else if(idade < 50){     /*ADULTO*/
                imagem.src = "/imgens/foto-adulto-m.png"

            }else{              /*IDOSO*/ 
                imagem.src = "/imgens/foto-idoso-m.png"
            }


        }else if (sexo[1].checked){
            genero = "Mulher"

            if(idade >= 0 && idade < 15){    /*CRIANÇA*/
                imagem.src = "/imgens/foto-bebe-f.png"

            }else if(idade < 21){   /*JOVEM*/ 
                imagem.src = "/imgens/foto-jovem-f.png"

            }else if(idade < 50){     /*ADULTO*/
                imagem.src = "/imgens/foto-adulto-f.png"

            }else{              /*IDOSO*/ 
                imagem.src = "/imgens/foto-idoso-f.png"
            }

        }
        
        resultado.innerHTML = "Detectamos "+ genero + " com " + idade + " anos"
    }
}

botao.addEventListener("click", verificar)

