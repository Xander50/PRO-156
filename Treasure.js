AFRAME.registerComponent("treasure-chest",{
    init:function(){
        for(var i=1; i<=20; i++){
            var id=`treasure${i}`
            var posX=(Math.random()*400+(-400))
            var posY=(Math.random()*2+(-1))
            var posZ=(Math.random()*100+(-100))
            var position={x:posX,y:posY,z:posZ}
            this.treasure(id,position)
        }
    },
    createRings:function(id,position){
        var islandEl=document.querySelector("#island")
        var ringEl=document.createElement("a-entity")
        chestElEl.setAttribute("id",id)
        chestElgEl.setAttribute("position",position)
        chestEl.setAttribute("material","color","yellow")
        fishEl.setAttribute("gltf-model","./assets/old_wooden_chest/scene.gltf")
        ringEl.setAttribute("static-body",{
            shape:"cube",
            width:3,
            height:3
        })

        ringEl.setAttribute("game-play",{
            elementId:`#${id}`
        })
        islandEl.appendChild(chestEl)
    }
})