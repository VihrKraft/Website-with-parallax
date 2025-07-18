document.addEventListener("DOMContentLoaded", function() {
    let parallax = document.querySelector('.parallax')
    if (parallax) {
        let parallaxContent = parallax.querySelector('.parallax__content')
        let clouds = parallax.querySelector('.images__clouds')
        let mountains = parallax.querySelector('.images__mountains')
        let human = parallax.querySelector('.images__human')

        const forClouds = 40
        const forMountains = 20
        const forHuman = 10
        const animationSpeed = 0.05

        let positionX = 0
        let positionY = 0
        let coordXpercent = 0
        let coordYpercent = 0


        function setParalaxAnimation() {
            let distX = coordXpercent-positionX
            let distY = coordYpercent-positionY

            positionX = positionX+distX*animationSpeed
            positionY = positionY+distY*animationSpeed

            clouds.style.cssText = `transform: translate(${positionX/forClouds}%, ${positionY/forClouds}%)`
            mountains.style.cssText = `transform: translate(${positionX/forMountains}%, ${positionY/forMountains}%)`
            human.style.cssText = `transform: translate(${positionX/forHuman}%, ${positionY/forHuman}%)`

            requestAnimationFrame(setParalaxAnimation)
        }
        setParalaxAnimation()


        parallax.addEventListener('mousemove', function(event) {
            let parallaxWidth = parallax.offsetWidth 
            let parallaxHeight = parallax.offsetHeight 

            let coordX = event.pageX-parallaxWidth/2
            let coordY = event.pageY-parallaxHeight/2

            coordXpercent = coordX/parallaxWidth*100
            coordYpercent = coordY/parallaxHeight*100
        })
    }
})