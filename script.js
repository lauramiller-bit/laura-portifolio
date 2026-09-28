// Menu no celular
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
menuBtn.addEventListener('click', () => {
  const aberto = menu.classList.toggle('aberto');
  menuBtn.setAttribute('aria-expanded', aberto);
});
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  menu.classList.remove('aberto');
  menuBtn.setAttribute('aria-expanded', 'false');
}));

// Efeito de digitação no código do início
const palavras = ['"HTML"', '"CSS"', '"JavaScript"'];
const alvo = document.getElementById('digitando');
const reduzir = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let p = 0, i = 0, apagando = false;

function digitar() {
  const palavra = palavras[p];
  alvo.textContent = palavra.slice(0, i);
  if (!apagando && i < palavra.length) { i++; setTimeout(digitar, 110); }
  else if (!apagando) { apagando = true; setTimeout(digitar, 1400); }
  else if (i > 0) { i--; setTimeout(digitar, 60); }
  else { apagando = false; p = (p + 1) % palavras.length; setTimeout(digitar, 300); }
}
if (reduzir) alvo.textContent = palavras.join(', '); else digitar();

// Mensagem de surpresa
const mensagens = [
  'Todo código começa com uma ideia. 💡',
  'Errar faz parte de aprender a programar! 🚀',
  'Um passo de cada vez, uma linha de cada vez. ✨',
  'Curiosidade é a melhor ferramenta. 💜'
];
let m = 0;
document.getElementById('surpresaBtn').addEventListener('click', () => {
  document.getElementById('surpresaMsg').textContent = mensagens[m];
  m = (m + 1) % mensagens.length;
});

// Cartões de habilidades
document.querySelectorAll('.skill').forEach(botao => {
  botao.addEventListener('click', () => {
    const aberto = botao.classList.toggle('aberto');
    botao.setAttribute('aria-expanded', aberto);
  });
});

// Filtro de projetos
const filtros = document.querySelectorAll('.filtro');
const cards = document.querySelectorAll('.card');
filtros.forEach(f => f.addEventListener('click', () => {
  filtros.forEach(x => x.classList.remove('ativo'));
  f.classList.add('ativo');
  cards.forEach(c => {
    const mostrar = f.dataset.filtro === 'todos' || c.dataset.tec === f.dataset.filtro;
    c.classList.toggle('oculto', !mostrar);
  });
}));

// Copiar link do GitHub
document.getElementById('copiarBtn').addEventListener('click', async e => {
  const msg = document.getElementById('copiarMsg');
  try {
    await navigator.clipboard.writeText(e.currentTarget.dataset.link);
    msg.textContent = 'Link copiado!';
  } catch {
    msg.textContent = 'Não consegui copiar. Use o botão "Abrir meu GitHub".';
  }
});

// Botão de voltar ao topo
const topoBtn = document.getElementById('voltarTopo');
window.addEventListener('scroll', () => topoBtn.classList.toggle('visivel', window.scrollY > 500));
topoBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Ano no rodapé
document.getElementById('ano').textContent = new Date().getFullYear();