AFRAME.registerComponent("floating-fish",{
    init:function(){
        for(var i=1; i<=20; i++){
            var id=`fishes${i}`
            var posX=(Math.random()*3000+(-1000))
            var posY=(Math.random()*2+(-1))
            var posZ=(Math.random()*3000+(-1000))
            var position={x:posX,y:posY,z:posZ}
            this.floatingFish(id,position)
        }
    },
    flyingBirds:function(id,position){
        var islandEl=document.querySelector("#island")
        var fishEl=document.createElement("a-entity")
        fishEl.setAttribute("id",id)
        fishEl.setAttribute("position",position)
        fishEl.setAttribute("scale",{x:500,y:500,y:500})
        fishEl.setAttribute("gltf-model","./assets/shiny_fish/scene.gltf")
        fishEl.setAttribute("animation-mixer",{})
        birdEl.setAttribute("static-body",{
            shape:"sphere",
            sphereRadius:2,    
        })

        birdEl.setAttribute("game-play",{
            elementId:`#${id}`
        })
        islandEl.appendChild(fishEl)
    }})