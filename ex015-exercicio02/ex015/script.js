function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ``
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'mulher'
            if (idade >=0 && idade < 12) {
                img.setAttribute('src', 'açucar.png')
            } else if (idade < 18){
                img.setAttribute('src', 'celular.png')
            } else if (idade < 22) {
                img.setAttribute('src', 'acido.png')
            } else if (idade < 28) {
                img.setAttribute('src', 'cocaina.png')
            } else if (idade < 35) {
                img.setAttribute('src', 'maconha.png')
            } else if (idade < 45) {
                img.setAttribute('src', 'alcool.png')
            } else if (idade < 55) {
                img.setAttribute('src', 'remedios.png')
            } else {
                img.setAttribute('src', 'cogumelo.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'homem'
            if (idade >=0 && idade < 12) {
                img.setAttribute('src', 'açucar.png')
            } else if (idade < 18){
                img.setAttribute('src', 'celular.png')
            } else if (idade < 22) {
                img.setAttribute('src', 'acido.png')
            } else if (idade < 28) {
                img.setAttribute('src', 'cocaina.png')
            } else if (idade < 35) {
                img.setAttribute('src', 'maconha.png')
            } else if (idade < 45) {
                img.setAttribute('src', 'alcool.png')
            } else if (idade < 55) {
                img.setAttribute('src', 'remedios.png')
            } else {
                img.setAttribute('src', 'cogumelo.png')
            }
        } else {
            gênero = 'de outro sexo'
            if (idade >=0 && idade < 12) {
                img.setAttribute('src', 'açucar.png')
            } else if (idade < 18){
                img.setAttribute('src', 'celular.png')
            } else if (idade < 22) {
                img.setAttribute('src', 'acido.png')
            } else if (idade < 28) {
                img.setAttribute('src', 'cocaina.png')
            } else if (idade < 35) {
                img.setAttribute('src', 'maconha.png')
            } else if (idade < 45) {
                img.setAttribute('src', 'alcool.png')
            } else if (idade < 55) {
                img.setAttribute('src', 'remedios.png')
            } else {
                img.setAttribute('src', 'cogumelo.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você ${gênero} com ${idade} anos gosta de`
        res.appendChild(img)
    }
}