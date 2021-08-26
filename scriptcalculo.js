function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var img = window.document.getElementById('imagem')

    if (fano.value.length == 0 || Number (fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''

        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                //criança
            img.src = 'img/criança-m.png'  
            } else if (idade < 21) {
                //jovem
            img.src = 'img/jovem-m.png'   
            } else if (idade < 60) {
                //adulto
            img.src = 'img/adulto-m.png'    
            } else {
                //idoso
            img.src = 'img/idoso-m.png'    
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //criança
            img.src = 'img/criança-f.png'    
            } else if (idade < 21) {
                //jovem
            img.src = 'img/jovem-f.png'    
            } else if (idade < 60) {
                //adulto
            img.src = 'img/adulto-f.png'    
            } else {
                //idoso
            img.src = 'img/idoso-f.png'    
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}