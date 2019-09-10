window.onload = function(){
  const container = document.getElementById('container');
  class Snake {
    status = [{x:200,y:0},{x:180,y:0},{x:160,y:0}]; //每节蛇身的位置
    d = 'right'; // 方向
    x = 0;
    y = 0;
    
    init() {
      this.status.forEach((lf)=>{
        const ele = document.createElement("div");
        ele.className = 'ele';
        ele.style.background = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
        ele.style.left = `${lf.x}px`;
        ele.style.top = `${lf.y}px`;
        container.appendChild(ele);
      })
      // this.run()

    }

    turn(){
      console.log(this.x)
      document.onkeydown = function(e) {
        console.log(e.keyCode)
        let dd = this.d, x, y;
        switch(e.keyCode){
          case 37:
            if(this.d === 'right') return;
            dd = 'left';
            x = -20;
            y = 0;
            break;
          case 38:
            if(this.d === 'down') return;
            dd = 'up';
            x = 0;
            y = -20;
            break;
          case 39:
            if(this.d === 'left') return;
            dd = 'right';
            x = 20;
            y = 0;
            break;
          case 40:
            if(this.d === 'up') return;
            dd = 'down';
            x = 0;
            y = 20;
            break;

          default:
            return;
        }
        if(dd !== this.d){
          this.d = dd;
          this.x = x;
          this.y = y;
          this.run();
        }
        console.log(this.d, this.x, this.y)
      }
    }

    run() {
      const eles =  Array.from(container.getElementsByTagName('div'));
      for(let i = eles.length -1; i > 0; i--){
        console.log(i, i-1, this.status)
        this.status[i].x = this.status[i-1].x;
        this.status[i].y = this.status[i-1].y;

        eles[i].style.left = this.status[i].x + 'px';
        eles[i].style.top = this.status[i].y + 'px';
      }
      this.status[0].x = this.status[0].x + this.x;
      this.status[0].y = this.status[0].y + this.y;
      
      console.log(this.status[0], this.d,  111)

      eles[0].style.left = this.status[0].x + 'px';
      eles[0].style.top = this.status[0].y + 'px';
      
    }

    eat() {
      
    }

    destroy() {

    }


  }
  const a = new Snake();
  a.init();
  a.turn()
  // setInterval(()=>{
  //   a.run();
  // }, 500);

  
}