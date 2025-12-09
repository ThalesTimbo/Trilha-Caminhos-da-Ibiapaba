// Variáveis globais
let slideAtual = 0
let ultimoScroll = 0
const header = document.getElementById("header")
const menuToggle = document.getElementById("menu-toggle")
const menuMobile = document.getElementById("menu-mobile")

// Inicialização quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", () => {
  inicializarCarrossel()
  inicializarMenuMobile()
  inicializarScrollHeader()
  inicializarFormulario()
  inicializarAnimacoes()
})

// === CARROSSEL DE IMAGENS ===

function inicializarCarrossel() {
  // Iniciar carrossel automático
  setInterval(proximoSlideAutomatico, 5000)

  // Pausar carrossel quando hover
  const carrossel = document.getElementById("carrossel")
  if (carrossel) {
    carrossel.addEventListener("mouseenter", pausarCarrossel)
    carrossel.addEventListener("mouseleave", retomarCarrossel)
  }
}

function mudarSlide(direcao) {
  const slides = document.querySelectorAll(".slide")
  const indicadores = document.querySelectorAll(".indicador")

  if (slides.length === 0) return

  // Remove classe ativo do slide atual
  slides[slideAtual].classList.remove("ativo")
  indicadores[slideAtual].classList.remove("ativo")

  // Calcula próximo slide
  slideAtual += direcao

  // Loop infinito
  if (slideAtual >= slides.length) {
    slideAtual = 0
  } else if (slideAtual < 0) {
    slideAtual = slides.length - 1
  }

  // Ativa novo slide
  slides[slideAtual].classList.add("ativo")
  indicadores[slideAtual].classList.add("ativo")
}

function irParaSlide(indice) {
  const slides = document.querySelectorAll(".slide")
  const indicadores = document.querySelectorAll(".indicador")

  if (slides.length === 0 || indice < 0 || indice >= slides.length) return

  // Remove classe ativo do slide atual
  slides[slideAtual].classList.remove("ativo")
  indicadores[slideAtual].classList.remove("ativo")

  // Define novo slide
  slideAtual = indice

  // Ativa novo slide
  slides[slideAtual].classList.add("ativo")
  indicadores[slideAtual].classList.add("ativo")
}

function proximoSlideAutomatico() {
  if (!document.querySelector(".carrossel:hover")) {
    mudarSlide(1)
  }
}

let carrosselPausado = false

function pausarCarrossel() {
  carrosselPausado = true
}

function retomarCarrossel() {
  carrosselPausado = false
}

// === MENU MOBILE ===

function inicializarMenuMobile() {
  if (menuToggle && menuMobile) {
    menuToggle.addEventListener("change", function () {
      if (this.checked) {
        menuMobile.classList.add("ativo")
        document.body.style.overflow = "hidden" // Previne scroll
      } else {
        menuMobile.classList.remove("ativo")
        document.body.style.overflow = ""
      }
    })

    // Fechar menu ao clicar em um link
    const linksMobile = document.querySelectorAll(".link-menu-mobile")
    linksMobile.forEach((link) => {
      link.addEventListener("click", () => {
        menuToggle.checked = false
        menuMobile.classList.remove("ativo")
        document.body.style.overflow = ""
      })
    })

    // Fechar menu ao clicar fora
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".hamburger") && !e.target.closest(".menu-mobile")) {
        menuToggle.checked = false
        menuMobile.classList.remove("ativo")
        document.body.style.overflow = ""
      }
    })
  }
}

// === HEADER SCROLL ===

function inicializarScrollHeader() {
  window.addEventListener("scroll", () => {
    const scrollAtual = window.pageYOffset

    // Esconder/mostrar header baseado na direção do scroll
    if (scrollAtual > ultimoScroll && scrollAtual > 100) {
      // Scrolling para baixo - esconder header
      header.classList.add("escondido")
    } else {
      // Scrolling para cima - mostrar header
      header.classList.remove("escondido")
    }

    ultimoScroll = scrollAtual
  })
}

// === SCROLL SUAVE ===

function scrollParaSecao(secaoId) {
  const secao = document.getElementById(secaoId)
  if (secao) {
    const offsetTop = secao.offsetTop - 80 // Compensar altura do header
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    })
  }
}

function scrollParaTopo() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

// === GALERIA FUNCIONAL EXPANDIDA ===

// Dados completos da galeria (22 fotos)
const galeriaData = [
  {
    src: "IMG/Galeria/IMG 01.jpg",
    alt: "Trilha na Serra da Ibiapaba",
    titulo: "Trilha na Serra da Ibiapaba",
    descricao: "Paisagem deslumbrante da trilha principal que conecta os parques nacionais."
  },
  {
    src: "IMG/Galeria/IMG 02.jpg",
    alt: "Cachoeira do Ubajara",
    titulo: "Cachoeira do Ubajara",
    descricao: "Uma das cachoeiras mais belas da região, com águas cristalinas."
  },
  {
    src: "IMG/Galeria/IMG 03.jpg",
    alt: "Gruta do Ubajara",
    titulo: "Gruta do Ubajara",
    descricao: "Formações calcárias impressionantes que se formaram ao longo de milhares de anos."
  },
  {
    src: "IMG/Galeria/IMG 04.jpg",
    alt: "Vista do Parque Sete Cidades",
    titulo: "Parque Nacional de Sete Cidades",
    descricao: "Formações rochosas únicas que contam a história geológica da região."
  },
  {
    src: "IMG/Galeria/IMG 05.jpg",
    alt: "Flora da Caatinga",
    titulo: "Flora da Caatinga",
    descricao: "Vegetação característica do bioma Caatinga, adaptada ao clima semiárido."
  },
  {
    src: "IMG/Galeria/IMG 06.jpg",
    alt: "Pôr do sol na Serra",
    titulo: "Pôr do Sol na Serra",
    descricao: "Momentos mágicos na trilha, com vistas espetaculares do pôr do sol."
  },
  {
    src: "IMG/Galeria/IMG 07.jpg",
    alt: "Trilheiros na jornada",
    titulo: "Trilheiros na Jornada",
    descricao: "Aventura e descoberta na trilha, conectando pessoas com a natureza."
  },
  {
    src: "IMG/Galeria/IMG 08.jpg",
    alt: "Vista panorâmica",
    titulo: "Vista Panorâmica",
    descricao: "Panorama deslumbrante da região, mostrando a diversidade da paisagem."
  },
  {
    src: "IMG/Galeria/IMG 09.jpg",
    alt: "Caminho na mata",
    titulo: "Caminho na Mata",
    descricao: "Trilha serpenteando pela vegetação nativa da região."
  },
  {
    src: "IMG/Galeria/IMG 10.jpg",
    alt: "Mirante natural",
    titulo: "Mirante Natural",
    descricao: "Ponto de observação com vista privilegiada da serra."
  },
  {
    src: "IMG/Galeria/IMG 11.jpg",
    alt: "Flora nativa",
    titulo: "Flora Nativa",
    descricao: "Diversidade de plantas e flores da região da Ibiapaba."
  },
  {
    src: "IMG/Galeria/IMG 12.jpg",
    alt: "Trilha noturna",
    titulo: "Trilha Noturna",
    descricao: "Experiência única de caminhada sob as estrelas."
  },
  {
    src: "IMG/Galeria/IMG 13.jpg",
    alt: "Paisagem da Serra",
    titulo: "Paisagem da Serra",
    descricao: "Vistas deslumbrantes da Serra da Ibiapaba."
  },
  {
    src: "IMG/Galeria/IMG 14.jpg",
    alt: "Trilha na natureza",
    titulo: "Trilha na Natureza",
    descricao: "Caminhos que conectam o homem com a natureza."
  },
  {
    src: "IMG/Galeria/IMG 15.jpg",
    alt: "Cachoeira cristalina",
    titulo: "Cachoeira Cristalina",
    descricao: "Águas cristalinas das cachoeiras da região."
  },
  {
    src: "IMG/Galeria/IMG 16.jpg",
    alt: "Flora exuberante",
    titulo: "Flora Exuberante",
    descricao: "Vegetação rica e diversificada da região."
  },
  {
    src: "IMG/Galeria/IMG 17.jpg",
    alt: "Vista do mirante",
    titulo: "Vista do Mirante",
    descricao: "Panoramas espetaculares dos mirantes naturais."
  },
  {
    src: "IMG/Galeria/IMG 18.jpg",
    alt: "Trilha na mata",
    titulo: "Trilha na Mata",
    descricao: "Caminhos serpenteando pela mata nativa."
  },
  {
    src: "IMG/Galeria/IMG 19.jpg",
    alt: "Pôr do sol na trilha",
    titulo: "Pôr do Sol na Trilha",
    descricao: "Momentos mágicos do pôr do sol na trilha."
  },
  {
    src: "IMG/Galeria/IMG 20.jpg",
    alt: "Paisagem rural",
    titulo: "Paisagem Rural",
    descricao: "Belezas da paisagem rural da Ibiapaba."
  },
  {
    src: "IMG/Galeria/IMG 21.jpg",
    alt: "Trilha de bicicleta",
    titulo: "Trilha de Bicicleta",
    descricao: "Aventuras de mountain bike na trilha."
  },
  {
    src: "IMG/Galeria/IMG 22.jpg",
    alt: "Conquistas da trilha",
    titulo: "Conquistas da Trilha",
    descricao: "Medalhas e conquistas dos trilheiros."
  }
]

// Variáveis globais
let galeriaExpandida = false
let galeriaExpandidaContainer, btnVerMais

// === FUNÇÕES DA GALERIA ===

// Função para expandir a galeria
function expandirGaleria() {
  if (galeriaExpandida) {
    // Recolher galeria
    galeriaExpandidaContainer.classList.remove("ativo")
    btnVerMais.classList.remove("expandido")
    btnVerMais.querySelector(".btn-texto").textContent = "Ver mais fotos"
    galeriaExpandida = false
    
    setTimeout(() => {
      galeriaExpandidaContainer.style.display = "none"
    }, 500)
  } else {
    // Expandir galeria
    galeriaExpandidaContainer.style.display = "grid"
    
    // Carregar imagens adicionais
    carregarImagensExpandidas()
    
    setTimeout(() => {
      galeriaExpandidaContainer.classList.add("ativo")
      btnVerMais.classList.add("expandido")
      btnVerMais.querySelector(".btn-texto").textContent = "Ver menos"
      
      // Scroll suave para o botão
      btnVerMais.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }, 50)
    
    galeriaExpandida = true
  }
}

// Função para carregar imagens da seção expandida
function carregarImagensExpandidas() {
  const container = galeriaExpandidaContainer
  container.innerHTML = ""
  
  // Carregar imagens 7-22 (índices 6-21)
  for (let i = 6; i < galeriaData.length; i++) {
    const item = galeriaData[i]
    const galeriaItem = document.createElement("div")
    galeriaItem.className = "galeria-item lazy-loading"
    galeriaItem.setAttribute("data-index", i)
    
    galeriaItem.innerHTML = `
      <img data-src="${item.src}" alt="${item.alt}" loading="lazy">
    `
    
    container.appendChild(galeriaItem)
  }
  
  // Inicializar lazy loading para as novas imagens
  inicializarLazyLoading()
  
  // Re-inicializar lightbox para incluir as novas imagens
  setTimeout(() => {
    inicializarLightbox()
    // Re-inicializar animações para os novos elementos
    scrollAnimations.refresh()
  }, 1000)
}

// Função para inicializar lazy loading
function inicializarLazyLoading() {
  const lazyImages = document.querySelectorAll('img[data-src]')
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target
          const galeriaItem = img.closest('.galeria-item')
          
          img.src = img.dataset.src
          img.removeAttribute('data-src')
          
          img.onload = () => {
            galeriaItem.classList.remove('lazy-loading')
            img.classList.add('loaded')
            
            // Re-inicializar lightbox e animações após carregar novas imagens
            setTimeout(() => {
              inicializarLightbox()
              scrollAnimations.refresh()
            }, 100)
          }
          
          observer.unobserve(img)
        }
      })
    })
    
    lazyImages.forEach(img => imageObserver.observe(img))
  } else {
    // Fallback para navegadores que não suportam IntersectionObserver
    lazyImages.forEach(img => {
      img.src = img.dataset.src
      img.removeAttribute('data-src')
      const galeriaItem = img.closest('.galeria-item')
      galeriaItem.classList.remove('lazy-loading')
      
      // Garantir que a imagem seja clicável
      if (galeriaItem.closest('.galeria-grid-expandida')) {
        img.style.cursor = 'pointer'
      }
    })
    
    // Re-inicializar lightbox após carregar todas as imagens
    setTimeout(() => {
      inicializarLightbox()
    }, 100)
  }
}



// === EVENT LISTENERS ===





// Inicializar lazy loading quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
  // Inicializar elementos do DOM
  galeriaExpandidaContainer = document.getElementById("galeria-expandida")
  btnVerMais = document.querySelector(".btn-ver-mais")
  
  inicializarLazyLoading()
  

})

// Adicionar event listener para tecla Enter na logo
document.addEventListener("DOMContentLoaded", () => {
  const logoButton = document.querySelector(".logo-container-simple")
  if (logoButton) {
    logoButton.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault()
        scrollParaTopo()
      }
    })
  }
})

// Adicionar scroll suave para todos os links do menu
document.addEventListener("DOMContentLoaded", () => {
  const linksMenu = document.querySelectorAll('a[href^="#"]')

  linksMenu.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href").substring(1)
      scrollParaSecao(targetId)
    })
  })
})

// === FORMULÁRIO DE CONTATO ===

function inicializarFormulario() {
  const formulario = document.getElementById("formulario-contato")

  if (formulario) {
    // Configurar URL de redirecionamento após envio
    const currentUrl = window.location.href
    const nextInput = formulario.querySelector('input[name="_next"]')
    if (nextInput) {
      nextInput.value = currentUrl + '?enviado=true'
    }

    formulario.addEventListener("submit", function (e) {
      // Coletar dados do formulário
      const formData = new FormData(this)
      const dados = {
        nome: formData.get("nome"),
        email: formData.get("email"),
        telefone: formData.get("telefone"),
        mensagem: formData.get("mensagem"),
      }

      // Validação básica
      if (!dados.nome || !dados.email || !dados.mensagem) {
        e.preventDefault()
        mostrarMensagem("Por favor, preencha todos os campos obrigatórios.", "erro")
        return false
      }

      // Validar email
      if (!validarEmail(dados.email)) {
        e.preventDefault()
        mostrarMensagem("Por favor, insira um e-mail válido.", "erro")
        return false
      }

      // Mostrar feedback de envio
      const botaoEnviar = this.querySelector(".botao-enviar")
      const textoOriginal = botaoEnviar.innerHTML

      botaoEnviar.innerHTML = "Enviando..."
      botaoEnviar.disabled = true

      // O formulário será enviado normalmente para o FormSubmit
      // Se houver erro, o FormSubmit redirecionará de volta
      mostrarMensagem("Enviando sua mensagem...", "info")
    })

    // Verificar se foi redirecionado após envio bem-sucedido
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.get('enviado') === 'true') {
      mostrarMensagem("Mensagem enviada com sucesso! Entraremos em contato em breve.", "sucesso")
      // Limpar parâmetro da URL
      window.history.replaceState({}, document.title, window.location.pathname)
    }
  }
}

function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

function mostrarMensagem(texto, tipo) {
  // Remove mensagem anterior se existir
  const mensagemAnterior = document.querySelector(".mensagem-feedback")
  if (mensagemAnterior) {
    mensagemAnterior.remove()
  }

  // Criar nova mensagem
  const mensagem = document.createElement("div")
  mensagem.className = `mensagem-feedback ${tipo}`
  mensagem.textContent = texto

  // Adicionar ao DOM
  document.body.appendChild(mensagem)

  // Remover após 5 segundos
  setTimeout(() => {
    mensagem.style.animation = "slideOutRight 0.3s ease"
    setTimeout(() => {
      if (mensagem.parentNode) {
        mensagem.remove()
      }
    }, 300)
  }, 5000)
}

// === ANIMAÇÕES DE SCROLL ===

// Sistema de animações de scroll
let scrollAnimations = {
  observer: null,
  animatedElements: new Set(),
  
  init() {
    if ('IntersectionObserver' in window) {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.animateElement(entry.target)
            } else {
              // Reset da animação quando elemento sai do viewport
              this.resetElement(entry.target)
            }
          })
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px",
        }
      )
      
      this.observeElements()
    }
  },
  
  observeElements() {
    const selectors = [
      '.card-preservacao',
      '.inauguracao-texto', 
      '.inauguracao-imagem',
      '.seta-card',
      '.pegada-item',
      '.parceiro-card',
      '.galeria-item',
      '.contato-item',
      '.categoria-titulo',
      '.subtitulo-sinalizacao',
      '.btn-ver-mais'
    ]
    
    selectors.forEach(selector => {
      const elements = document.querySelectorAll(selector)
      elements.forEach(el => {
        this.addAnimationClass(el, selector)
        this.observer.observe(el)
      })
    })
  },
  
  addAnimationClass(element, selector) {
    // Remover classes de animação existentes
    element.classList.remove(
      'animate-on-scroll',
      'animate-fade-in',
      'animate-slide-left',
      'animate-slide-right',
      'animate-slide-up',
      'animate-zoom-in',
      'animate-bounce-in'
    )
    
    // Adicionar classe de animação baseada no tipo de elemento
    if (selector.includes('card')) {
      element.classList.add('animate-slide-up')
    } else if (selector.includes('texto')) {
      element.classList.add('animate-slide-left')
    } else if (selector.includes('imagem')) {
      element.classList.add('animate-slide-right')
    } else if (selector.includes('galeria')) {
      element.classList.add('animate-zoom-in')
    } else if (selector.includes('pegada')) {
      element.classList.add('animate-bounce-in')
    } else if (selector.includes('btn')) {
      element.classList.add('animate-fade-in')
    } else {
      element.classList.add('animate-on-scroll')
    }
    
    // Adicionar delays para elementos em sequência
    const parent = element.parentElement
    if (parent) {
      const siblings = Array.from(parent.children).filter(child => 
        child.matches(selector)
      )
      const index = siblings.indexOf(element)
      if (index > 0 && index <= 5) {
        element.classList.add(`animate-delay-${index}`)
      }
    }
  },
  
  animateElement(element) {
    if (!this.animatedElements.has(element)) {
      element.classList.add('animated')
      this.animatedElements.add(element)
    }
  },
  
  resetElement(element) {
    // Remover classe animated para permitir re-animação
    element.classList.remove('animated')
    this.animatedElements.delete(element)
  },
  
  // Função para re-inicializar animações quando novos elementos são adicionados
  refresh() {
    if (this.observer) {
      this.observer.disconnect()
      this.animatedElements.clear()
      this.observeElements()
    }
  }
}

// === ANIMAÇÕES E EFEITOS ===

function inicializarAnimacoes() {
  // Inicializar sistema de animações de scroll
  scrollAnimations.init()
  
  // Otimizar performance das animações
  optimizeAnimations()
}

// Otimizar performance das animações
function optimizeAnimations() {
  // Usar requestAnimationFrame para animações suaves
  const animatedElements = document.querySelectorAll('[class*="animate-"]')
  animatedElements.forEach(el => {
    el.style.willChange = 'transform, opacity'
  })
  
  // Limpar will-change após animação
  setTimeout(() => {
    animatedElements.forEach(el => {
      el.style.willChange = 'auto'
    })
  }, 1000)
}

// === ANIMAÇÃO DE ENTRADA PARA SEÇÕES E CARDS ===
function animarSecoesAoScroll() {
  const secoes = document.querySelectorAll(".secao-animada, .parceiro-card")
  const ativarSecao = (el) => {
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("ativo")
    }
  }
  secoes.forEach(ativarSecao)
}
window.addEventListener("scroll", animarSecoesAoScroll)
document.addEventListener("DOMContentLoaded", animarSecoesAoScroll)

// === UTILITÁRIOS ===

// Debounce function para otimizar performance
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Throttle function para scroll events
function throttle(func, limit) {
  let inThrottle
  return function () {
    const args = arguments

    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

// Aplicar throttle no scroll do header
window.addEventListener(
  "scroll",
  throttle(() => {
    const scrollAtual = window.pageYOffset

    if (scrollAtual > ultimoScroll && scrollAtual > 100) {
      header.classList.add("escondido")
    } else {
      header.classList.remove("escondido")
    }

    ultimoScroll = scrollAtual
  }, 100),
)

// === ACESSIBILIDADE ===

// Navegação por teclado no carrossel
document.addEventListener("keydown", (e) => {
  if (e.target.closest(".carrossel-container")) {
    switch (e.key) {
      case "ArrowLeft":
        e.preventDefault()
        mudarSlide(-1)
        break
      case "ArrowRight":
        e.preventDefault()
        mudarSlide(1)
        break
    }
  }
})

// Melhorar foco para usuários de teclado
document.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    document.body.classList.add("navegacao-teclado")
  }
})

document.addEventListener("mousedown", () => {
  document.body.classList.remove("navegacao-teclado")
})

// Adicionar estilos para navegação por teclado
const estilosAcessibilidade = document.createElement("style")
estilosAcessibilidade.textContent = `
    .navegacao-teclado *:focus {
        outline: 2px solid var(--cor-primaria) !important;
        outline-offset: 2px !important;
    }
    
    .navegacao-teclado .botao-cta:focus,
    .navegacao-teclado .botao-enviar:focus,
    .navegacao-teclado .botao-download:focus {
        box-shadow: 0 0 0 3px rgba(107, 142, 35, 0.3) !important;
    }
`
document.head.appendChild(estilosAcessibilidade)

// === PERFORMANCE ===

// Lazy loading para imagens (caso não seja suportado nativamente)
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.src = img.dataset.src || img.src
        img.classList.remove("lazy")
        imageObserver.unobserve(img)
      }
    })
  })

  document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
    imageObserver.observe(img)
  })
}

// Preload de imagens críticas
function preloadImagens() {
  const imagensCriticas = [
    "/placeholder.svg?height=800&width=1200", // Hero background
    "/placeholder.svg?height=400&width=600", // Inauguração
  ]

  imagensCriticas.forEach((src) => {
    const img = new Image()
    img.src = src
  })
}

// Executar preload após carregamento inicial
window.addEventListener("load", preloadImagens)

// === ANALYTICS E TRACKING (Placeholder) ===

function trackEvent(categoria, acao, label) {
  // Aqui você integraria com Google Analytics, Facebook Pixel, etc.
  console.log("Event tracked:", { categoria, acao, label })
}

// Tracking de interações importantes
document.addEventListener("click", (e) => {
  if (e.target.matches(".botao-cta")) {
    trackEvent("Engagement", "Click", "CTA Saiba Mais")
  }

  if (e.target.matches(".botao-enviar")) {
    trackEvent("Conversion", "Submit", "Formulário Contato")
  }

  if (e.target.matches(".whatsapp-flutuante")) {
    trackEvent("Contact", "Click", "WhatsApp")
  }
})

// === ERROR HANDLING ===

window.addEventListener("error", (e) => {
  console.error("Erro JavaScript:", e.error)
  // Aqui você poderia enviar erros para um serviço de monitoramento
})

// === LIGHTBOX GALERIA ===

// Variáveis globais do lightbox
let lightboxAtivo = false
let imagemAtual = 0
let todasImagens = []

// Inicializar lightbox
function inicializarLightbox() {
  const overlay = document.getElementById("lightbox-overlay")
  const fechar = document.getElementById("lightbox-fechar")
  const anterior = document.getElementById("lightbox-anterior")
  const proximo = document.getElementById("lightbox-proximo")
  const indicador = document.getElementById("lightbox-indicador")

  // Garantir que o botão de fechar seja sempre visível
  if (fechar) {
    fechar.style.display = "flex"
    fechar.style.visibility = "visible"
    fechar.style.opacity = "1"
    fechar.style.zIndex = "10002"
    fechar.style.position = "fixed"
    fechar.style.top = "20px"
    fechar.style.right = "20px"
  }

  // Remover event listeners antigos para evitar duplicação
  const galeriaItems = document.querySelectorAll(".galeria-item img")
  galeriaItems.forEach(img => {
    img.removeEventListener("click", img.lightboxHandler)
  })

  // Coletar todas as imagens da galeria
  todasImagens = Array.from(galeriaItems).map(img => ({
    src: img.src || img.dataset.src,
    alt: img.alt
  })).filter(img => img.src) // Filtrar apenas imagens com src válido

  // Event listeners para abrir lightbox
  galeriaItems.forEach((img, index) => {
    // Criar handler único para cada imagem
    img.lightboxHandler = () => abrirLightbox(index)
    img.addEventListener("click", img.lightboxHandler)
  })

  // Event listeners para fechar lightbox (apenas uma vez)
  if (!fechar.hasEventListener) {
    fechar.addEventListener("click", fecharLightbox)
    fechar.hasEventListener = true
  }

  if (!overlay.hasEventListener) {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        fecharLightbox()
      }
    })
    overlay.hasEventListener = true
  }

  // Event listeners para navegação (apenas uma vez)
  if (!anterior.hasEventListener) {
    anterior.addEventListener("click", () => navegarImagem(-1))
    anterior.hasEventListener = true
  }

  if (!proximo.hasEventListener) {
    proximo.addEventListener("click", () => navegarImagem(1))
    proximo.hasEventListener = true
  }

  // Navegação por teclado (apenas uma vez)
  if (!document.hasLightboxKeyboardListener) {
    document.addEventListener("keydown", (e) => {
      if (!lightboxAtivo) return

      switch (e.key) {
        case "Escape":
          fecharLightbox()
          break
        case "ArrowLeft":
          navegarImagem(-1)
          break
        case "ArrowRight":
          navegarImagem(1)
          break
      }
    })
    document.hasLightboxKeyboardListener = true
  }

  // Prevenir scroll quando lightbox estiver aberto (apenas uma vez)
  if (!overlay.hasWheelListener) {
    overlay.addEventListener("wheel", (e) => {
      if (lightboxAtivo) {
        e.preventDefault()
      }
    })
    overlay.hasWheelListener = true
  }
}

// Abrir lightbox
function abrirLightbox(index) {
  if (index < 0 || index >= todasImagens.length) return

  imagemAtual = index
  lightboxAtivo = true

  const overlay = document.getElementById("lightbox-overlay")
  const imagem = document.getElementById("lightbox-imagem")
  const indicador = document.getElementById("lightbox-indicador")
  const fechar = document.getElementById("lightbox-fechar")

  // Carregar imagem
  imagem.src = todasImagens[index].src
  imagem.alt = todasImagens[index].alt

  // Atualizar indicador
  indicador.textContent = `${index + 1} / ${todasImagens.length}`

  // Mostrar overlay
  overlay.classList.add("ativo")
  document.body.style.overflow = "hidden"

  // Garantir que o botão de fechar seja visível
  if (fechar) {
    fechar.style.display = "flex"
    fechar.style.visibility = "visible"
    fechar.style.opacity = "1"
    fechar.style.zIndex = "10002"
  }

  // Atualizar estado dos botões de navegação
  atualizarBotoesNavegacao()
}

// Fechar lightbox
function fecharLightbox() {
  const overlay = document.getElementById("lightbox-overlay")
  const fechar = document.getElementById("lightbox-fechar")
  
  overlay.classList.remove("ativo")
  document.body.style.overflow = ""
  lightboxAtivo = false

  // Resetar estilos do botão de fechar
  if (fechar) {
    fechar.style.display = ""
    fechar.style.visibility = ""
    fechar.style.opacity = ""
    fechar.style.zIndex = ""
  }
}

// Navegar entre imagens
function navegarImagem(direcao) {
  const novoIndex = imagemAtual + direcao

  // Comportamento em loop (opcional)
  if (novoIndex < 0) {
    // Ir para a última imagem
    abrirLightbox(todasImagens.length - 1)
  } else if (novoIndex >= todasImagens.length) {
    // Ir para a primeira imagem
    abrirLightbox(0)
  } else {
    abrirLightbox(novoIndex)
  }
}

// Atualizar estado dos botões de navegação
function atualizarBotoesNavegacao() {
  // Botões sempre ativos - comportamento em loop
  // Não é necessário fazer nada aqui, os botões sempre funcionam
}

// === INTEGRAÇÃO COM NOVA GALERIA ===

// Importar funcionalidades da galeria
document.addEventListener("DOMContentLoaded", () => {
  // Carregar script da galeria
  const scriptGaleria = document.createElement("script")
  scriptGaleria.src = "scripts-galeria.js"
  scriptGaleria.onload = () => {
    console.log("🖼️ Galeria expandida carregada com sucesso!")
  }
  document.head.appendChild(scriptGaleria)

  // Carregar estilos da galeria
  const linkGaleria = document.createElement("link")
  linkGaleria.rel = "stylesheet"
  linkGaleria.href = "styles-galeria.css"
  document.head.appendChild(linkGaleria)

  // Inicializar lightbox após carregar a galeria
  setTimeout(() => {
    inicializarLightbox()
  }, 500)
})





// === ANIMAÇÕES PARA NOVAS SEÇÕES ===

function inicializarAnimacoesNovas() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("ativo")

          // Animação especial para cards de parceiros
          if (entry.target.classList.contains("parceiro-card")) {
            const delay = Array.from(entry.target.parentElement.children).indexOf(entry.target) * 100
            setTimeout(() => {
              entry.target.style.opacity = "1"
              entry.target.style.transform = "translateY(0)"
            }, delay)
          }
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    },
  )

  // Observar novas seções e elementos
  const novosElementos = document.querySelectorAll(
    ".secao-sinalizacao, .seta-card, .categoria-parceiros",
  )

  novosElementos.forEach((el) => {
    observer.observe(el)
  })
}

// === MELHORAR PERFORMANCE ===

// Lazy loading para SVGs das setas e pegadas
function lazyLoadSVGs() {
  const svgElements = document.querySelectorAll('img[src*="data:image/svg"]')

  if ("IntersectionObserver" in window) {
    const svgObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target
          // SVG já está carregado, apenas aplicar fade-in
          img.style.opacity = "0"
          img.style.transition = "opacity 0.3s ease"
          setTimeout(() => {
            img.style.opacity = "1"
          }, 100)
          svgObserver.unobserve(img)
        }
      })
    })

    svgElements.forEach((img) => svgObserver.observe(img))
  }
}

// === ATUALIZAR INICIALIZAÇÃO ===

// Modificar função de inicialização existente
const inicializarOriginal = inicializar
inicializar = () => {
  inicializarOriginal()

  // Novas inicializações
  setTimeout(() => {
    inicializarAnimacoesNovas()
    lazyLoadSVGs()
  }, 100)
}

// === INICIALIZAÇÃO FINAL ===

// Garantir que tudo funcione mesmo se o JavaScript carregar antes do HTML
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", inicializar)
} else {
  inicializar()
}

function inicializar() {
  console.log("🌿 Trilha Caminhos da Ibiapaba - Site carregado com sucesso!")

  // Verificar se todos os elementos críticos estão presentes
  const elementosCriticos = ["#header", "#carrossel", "#formulario-contato"]

  elementosCriticos.forEach((seletor) => {
    if (!document.querySelector(seletor)) {
      console.warn(`Elemento crítico não encontrado: ${seletor}`)
    }
  })
}
