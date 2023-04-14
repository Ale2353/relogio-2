function relogio(){

    var img =document.getElementById("imagem")
    
    


    const espacoRelogio = document.querySelector(".relogio");

    const horaAgora = new Date();

    const horas = horaAgora.getHours();

    const minutos = horaAgora.getMinutes();

    const segundos = horaAgora.getSeconds();
   
    const formatoHora = horas.toString().padStart(2, "0");

     const formatoMinutos = minutos.toString().padStart(2, "0");

     const formatoSegundos = segundos.toString().padStart(2, "0");

     espacoRelogio.textContent = `${formatoHora}:${formatoMinutos}:${formatoSegundos}`;

    const frase = document.querySelector('.frase')

    dia = new Array ('Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sabádo');
    
    mes = new Array ('Janeiro', 'Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro');

    hoje = new Date()

   frase.innerHTML = `${dia[hoje.getDay()]},  ${hoje.getDate().toString().padStart(2,0)} de ${mes[hoje.getMonth()]} de ${hoje.getFullYear()} `

  //dia nome da Array, array é um arranjo, uma variavel que armazena varios dados, vai armazenar varios elementos.

    if (formatoHora >= 00 && formatoHora <12) {
      document.body.style.backgroundImage = 'url(https://i.pinimg.com/originals/ac/b7/6b/acb76b4e8dba42cad53d2e71fd179e37.gif )'

      img.scr ="https://img.freepik.com/vector-premium/linda-caricatura-sonriente-sol-nubes-cielo-kawaii-anime-manga-vector_655504-11.jpg?w=2000 "


    } 
    else if (formatoHora >= 12 && formatoHora <18){
      document.body.style.backgroundImage = 'url(https://i.pinimg.com/originals/38/4c/4e/384c4ef16e888690c77bc068b39b1840.gif )'
      document.body.style.color = 'black'
      document.body.style.backgroundSize = 'cover'

      img.scr = "https://dbdzm869oupei.cloudfront.net/img/vinylrugs/preview/32352.png "
    }
    else {
      document.body.style.backgroundImage  = 'url(https://uploads.spiritfanfiction.com/historias/capitulos/202004/implication--harom-gp-19040956-170420202128.gif )'

      img.src = " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKqLeBebYYS-k5wWnstfbOBs2YrlmJljc9TawpySgy&s" 

      
    }
    

    

}

  setInterval(relogio, 1000) 