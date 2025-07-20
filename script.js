function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    // Pegar a tag img apenas uma vez
    const img = document.querySelector("#profile img")

    // Substituir a imagem e a descrição conforme o modo
    if (html.classList.contains('light')) {
        img.setAttribute("src", "./assets/avatar-light.png")
        img.setAttribute("alt", "Foto de Julio Bento sorrindo, usando terno e gravata, sem barba")
    } else {
        img.setAttribute("src", "./assets/avatar.png")
        img.setAttribute("alt", "Foto de Julio Bento sorrindo, usando terno e gravata, barba e fundo cinza")
    }
}