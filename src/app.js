// Passo 1: Guardar a "identidade" da nossa aplicação (Client ID).
const CLIENT_ID = 'Ov23liUKfjoJcUru2PWT';

// Passo 2: Encontrar o botão de login no nosso HTML.
// Usamos o 'id' que definimos no index.html para encontrá-lo.
const loginBtn = document.getElementById('loginBtn');

// Passo 3: Criar a função que será executada quando o botão for clicado.
function handleLogin() {
    // Esta é a URL de autorização do GitHub.
    // Nós passamos nosso Client ID para que o GitHub saiba quem está pedindo.
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}`;

    // Exibimos a URL no console apenas para depuração, para ter certeza que está correta.
    console.log('Redirecionando para:', githubAuthUrl);

    // A linha mágica: Redireciona a página atual do usuário para a URL de login do GitHub.
    window.location.href = githubAuthUrl;
}

// Passo 4: Adicionar um "ouvinte de evento" ao botão.
// Isso diz ao navegador: "Ei, quando o elemento 'loginBtn' for clicado,
// execute a função 'handleLogin'".
loginBtn.addEventListener('click', handleLogin);