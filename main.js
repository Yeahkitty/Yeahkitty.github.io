gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.style.overflowX = "hidden";
});

if (ScrollTrigger.isTouch !==1) {
  ScrollSmoother.create ({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 1.5,
    effects: true,
  })

  gsap.fromTo ('.img-main', {opacity:1}, {
    opacity:0,
    scrollTrigger: {
      trigger: '.img-main',
      start: 'center',
      end: 'bottom',
      scrub:true,
    }
  })
  gsap.fromTo ('.kvadratiki', {opacity:0, x:-100}, {
    opacity:1, x: 0,
    scrollTrigger: {
      trigger: '.kvadratiki',
      start: '-1200',
      end: '-500',
      scrub:true,
    }
  })
 gsap.fromTo ('.headers', {opacity:0,x:100}, {
  opacity:1,
  x: 0,
  scrollTrigger: {
    trigger: '.headers',
    start: '-1200',
    end: '-500',
    scrub: true,
  }
 })

 gsap.fromTo ('.definition', {opacity:0,y:200}, {
  opacity:1,
  y: 0,
  scrollTrigger: {
    trigger: '.definition',
    start: '-1200',
    end: '-500',
    scrub: true,
  }
 })
 
 gsap.fromTo ('.first', {opacity:0, x:-50}, {
  opacity: 1,
  x: 0,
  scrollTrigger: {
    trigger: '.definition_3',
    start: '-1200',
    end: '-100',
    scrub: true,
  }
 })

 gsap.fromTo ('.second', {opacity:0, x:-25}, {
  opacity: 1,
  x: 0,
  scrollTrigger: {
    trigger: '.definition_3',
    start: '-1200',
    end: '-100',
    scrub: true,
  }
 })

 gsap.fromTo ('.third', {opacity:0, x:25}, {
  opacity: 1,
  x: 0,
  scrollTrigger: {
    trigger: '.definition_3',
    start: '-1200',
    end: '-100',
    scrub: true,
  }
 })

 gsap.fromTo ('.fourth', {opacity:0, x:50}, {
  opacity: 1,
  x: 0,
  scrollTrigger: {
    trigger: '.definition_3',
    start: '-1200',
    end: '-100',
    scrub: true,
  }
 })

 let itemsL = gsap.utils.toArray('.gallery-left .gallery_item')
  itemsL.forEach(item =>{
    gsap.fromTo (item, {opacity:0, x: -50}, {
      opacity:1, x:0,
      scrollTrigger: {
        trigger: item,
        scrub:true,
      }
    })
  })

  let itemsR = gsap.utils.toArray('.gallery-right .gallery_item')
  itemsR.forEach(item =>{
    gsap.fromTo (item, {opacity:0, x: 50}, {
      opacity:1, x:0,
      scrollTrigger: {
        trigger: item,
        scrub:true,
      }
    })
  })

}