function criarCoracao() {
    const coracao = document.createElement("div");
    coracao.classList.add("coracao");
    coracao.innerHTML = "❤️";
    coracao.style.left = Math.random() * 100 + "vw";
    coracao.style.fontSize = (20 + Math.random() * 30) + "px";
    coracao.style.animationDuration = (3 + Math.random() * 3) + "s";
    document.body.appendChild(coracao);
    setTimeout(() => {
    coracao.remove();
    }, 6000);
   }
   setInterval(criarCoracao, 400);