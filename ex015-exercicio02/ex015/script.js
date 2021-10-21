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
                //Criança
                img.setAttribute('src', 'açucar.png')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'celular.png')
            } else if (idade < 50) {
                //Adulta
                img.setAttribute('src', 'maconha.png')
            } else {
                //Idosa
                img.setAttribute('src', 'maconha.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'homem'
            if (idade >=0 && idade < 12) {
                //Criança
            } else if (idade < 21){
                //Jovem
            } else if (idade < 50) {
                //Adulta
            } else {
                //Idosa
            }
        } else {
            gênero = 'de outro sexo'
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você ${gênero} com ${idade} anos gosta de`
        res.appendChild(img)
    }
}