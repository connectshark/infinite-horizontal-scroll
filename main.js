import './assets/main.css'

const scrollers = document.querySelectorAll('.scroller')

const addAnimation = async () => {
  scrollers.forEach(scroller => {
    scroller.setAttribute('data-animated', true)

    const scrollerContent = Array.from(scroller.children)
    
    scrollerContent.forEach(item => {
      const copyItem = item.cloneNode(true)
      copyItem.setAttribute('aria-hidden', true)
      scroller.appendChild(copyItem)
    })
  })
}

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  addAnimation()
}