
 // Função para o controle do primeiro slider
 let count1 = 1;
 document.getElementById("radio1").checked = true;
 setInterval(function() {
   nextImage(1); // Passa o número do slider
 }, 3000);
 
 function nextImage(sliderNumber) {
   let count;
 
   // Controle do slider 1
   if (sliderNumber === 1) {
     count = count1;
     count++;
     if (count > 4) {
       count = 1;
     }
     document.getElementById("radio" + count).checked = true;
     count1 = count;
   }
   
   // Controle do slider 2
   if (sliderNumber === 2) {
     count = count2;
     count++;
     if (count > 4) {
       count = 1;
     }
     document.getElementById("radio" + (count + 4)).checked = true; // radio5 a radio8
     count2 = count;
   }
   
   // Controle do slider 3
   if (sliderNumber === 3) {
     count = count3;
     count++;
     if (count > 4) {
       count = 1;
     }
     document.getElementById("radio" + (count + 8)).checked = true; // radio9 a radio12
     count3 = count;
   }
 }
 
 // Função para o segundo slider
 let count2 = 1;
 document.getElementById("radio5").checked = true;
 setInterval(function() {
   nextImage(2); // Passa o número do slider 2
 }, 3000);
 
 // Função para o terceiro slider
 let count3 = 1;
 document.getElementById("radio9").checked = true;
 setInterval(function() {
   nextImage(3); // Passa o número do slider 3
 }, 3000);
 
 
 
 
 
 // Seleciona os elementos
 const menuIcon = document.querySelector('.menu-icon');
 const modalOverlay = document.getElementById('modalOverlay');
 const closeModal = document.getElementById('closeModal');
 
 // Abre o modal ao clicar no ícone de menu
 menuIcon.addEventListener('click', () => {
   modalOverlay.style.display = 'flex'; // Exibe o modal
 });
 
 // Fecha o modal ao clicar no botão de fechar
 closeModal.addEventListener('click', () => {
   modalOverlay.style.display = 'none'; // Esconde o modal
 });
 
 // Fecha o modal ao clicar fora do conteúdo
 modalOverlay.addEventListener('click', (event) => {
   if (event.target === modalOverlay) {
     modalOverlay.style.display = 'none'; // Esconde o modal
   }
 });
 
 // Adiciona funcionalidade para fechar o modal e rolar a página ao clicar nos links
 const modalLinks = document.querySelectorAll('.modal-link'); // Seleciona todos os links do modal
 
 modalLinks.forEach(link => {
   link.addEventListener('click', (event) => {
     event.preventDefault(); // Impede o comportamento padrão do link
 
     // Fecha o modal
     modalOverlay.style.display = 'none';
 
     // Obtém o ID da seção correspondente ao link clicado
     const targetId = link.getAttribute('href'); // Ex: #home, #servicos
     const targetSection = document.querySelector(targetId); // Seleciona a seção
 
     // Rola a página até a seção correspondente
     if (targetSection) {
       targetSection.scrollIntoView({ behavior: 'smooth' }); // Rola suavemente
     }
   });
 });
 
 
 
 
 
 
 // Funcionalidade para rolar suavemente ao clicar no link do menu
 document.querySelectorAll('.menu a').forEach(anchor => {
   anchor.addEventListener('click', function(e) {
     e.preventDefault();
 
     document.querySelector(this.getAttribute('href')).scrollIntoView({
       behavior: 'smooth'
     });
   });
 });
 
 
 
 // Funcionalidade para levar para o whatsApp
 
 
 document.getElementById("contato").addEventListener("click", function() {
     var phoneNumber = "554584330907"; // Número sem espaços ou caracteres especiais
     var message = encodeURIComponent("Olá! Gostaria de mais informações.");
     var whatsappURL = "https://wa.me/" + phoneNumber + "?text=" + message;
     window.location.href = whatsappURL;
 });
 
 
 document.getElementById("contato-atendimento").addEventListener("click", function() {
     var phoneNumber = "554584330907"; // Número sem espaços ou caracteres especiais
     var message = encodeURIComponent("Olá! Gostaria de mais informações.");
     var whatsappURL = "https://wa.me/" + phoneNumber + "?text=" + message;
     window.location.href = whatsappURL;
 });
 
 
 document.getElementById("localizacao").addEventListener("click", function() {
     var mapsURL = "https://www.google.com/maps/search/Rua+Antonio+Franciscao+Neto,+248+-+Belmonte+-+CEP+85817-866+-+Cascavel%2FPR/@-24.9329702,-53.4067153,20.25z?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3Dhttps://www.google.com/maps/search/Rua+Antonio+Franciscao+Neto,+248+-+Belmonte+-+CEP+85817-866+-+Cascavel%2FPR/@-24.9329374,-53.4079814,17.67z?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3Dhttps://www.google.com/maps/place/R.+Antonio+Francisc%C3%A3o+Neto,+248+-+Belmonte,+Cascavel+-+PR,+85817-866/@-24.9329947,-53.4081979,18.49z/data=!4m6!3m5!1s0x94f3d4a6ae2e83d5:0xfb09eaeaf94d075c!8m2!3d-24.9329446!4d-53.40632!16s%2Fg%2F11qb2gjn8b?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D";
     window.location.href = mapsURL;
 });
 
 
 
 document.querySelectorAll('#contato-saber-mais').forEach(button => {
     button.addEventListener('click', () => {
         const phoneNumber = '554584330907'; // Número do WhatsApp sem espaços e com DDI/DD
         const message = encodeURIComponent('Olá, gostaria de saber mais sobre os serviços!');
         window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
     });
 });
 
 
 
 
 document.addEventListener('DOMContentLoaded', function() {
     const menuIcon = document.querySelector('.menu-icon');
     const modalOverlay = document.getElementById('modalOverlay');
     const closeModal = document.getElementById('closeModal');
     const modalLinks = document.querySelectorAll('.modal-link');
 
     // Abre o modal ao clicar no ícone de menu
     menuIcon.addEventListener('click', () => {
         modalOverlay.style.display = 'flex'; // Exibe o modal
     });
 
     // Fecha o modal ao clicar no botão de fechar
     closeModal.addEventListener('click', () => {
         modalOverlay.style.display = 'none'; // Esconde o modal
     });
 
     // Fecha o modal ao clicar fora do conteúdo
     modalOverlay.addEventListener('click', (event) => {
         if (event.target === modalOverlay) {
             modalOverlay.style.display = 'none'; // Esconde o modal
         }
     });
 
     // Adiciona funcionalidade para fechar o modal e rolar a página ao clicar nos links
     modalLinks.forEach(link => {
         link.addEventListener('click', (event) => {
             event.preventDefault(); // Impede o comportamento padrão do link
 
             // Fecha o modal
             modalOverlay.style.display = 'none';
 
             // Obtém o ID da seção correspondente ao link clicado
             const targetId = link.getAttribute('href').substring(1); // Ex: 'home', 'servicos'
             const targetSection = document.getElementById(targetId); // Seleciona a seção pelo ID
 
             // Verifica se a seção existe
             if (targetSection) {
                 // Rola suavemente até a seção
                 targetSection.scrollIntoView({ behavior: 'smooth' });
             }
         });
     });
 });
 
 
 
 // Seleciona todos os elementos <p> dentro da div .navegação2
   const links = document.querySelectorAll('.navegação2 p');
 
   // Adiciona um evento de clique a cada elemento <p>
   links.forEach(link => {
     link.addEventListener('click', function () {
       // Obtém o valor do atributo href
       const targetId = this.getAttribute('href');
       // Seleciona a seção correspondente
       const targetSection = document.querySelector(targetId);
 
       // Rola a página até a seção correspondente
       if (targetSection) {
         targetSection.scrollIntoView({ behavior: 'smooth' });
       }
     });
   });
 
 
   document.addEventListener('DOMContentLoaded', function () {
   const links = document.querySelectorAll('.navegação2 p');
   console.log(links); // Verifique no console do navegador
 
   links.forEach(link => {
     link.addEventListener('click', function () {
       const targetId = this.getAttribute('href');
       const targetSection = document.querySelector(targetId);
 
       if (targetSection) {
         targetSection.scrollIntoView({ behavior: 'smooth' });
       }
     });
   });
 });