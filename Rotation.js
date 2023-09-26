AFRAME.registerComponent("diver-rotation-reader",{
    schema:{
        speedOfRotation:{type:"number",default:0},
        speedOfMovement:{type:"number",default:0}
    },
    init: function(){
        window.addEventListener("keydown",(e)=>{
            this.data.speedOfRotation=this.el.getAttribute("rotation")
            this.data.speedOfmovement=this.el.getAttribute("position")
            var diverMovement=this.el.speedOfMovement
            var diverRotation=this.el.speedOfRotation
            if(e.key==="ArrowRight"){
                if(diverRotation.x<10){
                    diverRotation.x+=0.5
                    this.el.setAttribute("rotation",diverRotation)
                }
            }
            if(e.key==="ArrowLeft"){
                if(diverRotation.x>-10){
                    diverRotation.x-=0.5
                    this.el.setAttribute("rotation",diverRotation)
                }
            }
            if(e.key==="ArrowUp"){
                if(diverRotation.z<20){
                    diverRotation.z+=0.5
                    this.el.setAttribute("rotation",diverRotation)
                }
                if(diverMovement.y<2){
                    diverMovementP.y+=0.01
                    this.el.setAttribute("position", diverMovement)
                }
            }

            if(e.key==="ArrowDown"){
                if(diverRotation.z>-10){
                    diverRotation.z-=0.5
                    this.el.setAttribute("rotation",diverRotation)
                }
                if(diverMovement.y>-2){
                    diverMovement.y-=0.01
                    this.el.setAttribute("position",diverMovement)
                }
            }

        })
    }})