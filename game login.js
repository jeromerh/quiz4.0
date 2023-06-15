function addUser(){
    player1=document.getElementById("player1_name_input").value
    player2=document.getElementById("player2_name_input").value 
    localStorage.setItem("usuario1",player1)
    localStorage.setItem("usuario2",player2)
    window.location="game_pages.html"
}
