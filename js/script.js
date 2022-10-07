function musica(){
    const audio = document.querySelector('audio')
    audio.play()
    let blackscreen = document.querySelector("#blackscreen")
    blackscreen.style.display = "block"
    let main = document.querySelector('main')
    main.style.display = "block"
}