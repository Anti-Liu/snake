window.onload = function(){
  const container = document.getElementById('container');
  class Snake {
    status = [{x:200,y:0},{x:180,y:0},{x:160,y:0}]; //每节蛇身的位置
    d = 'right'; // 方向
    x = 20;
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
    }

    run() {
      const eles =  Array.from(container.getElementsByTagName('div'));
      for(let i = eles.length -1; i > 0; i--){
        this.status[i].x = this.status[i-1].x;
        this.status[i].y = this.status[i-1].y;

        eles[i].style.left = this.status[i].x + 'px';
        eles[i].style.top = this.status[i].y + 'px';
      }
      this.status[0].x = this.status[0].x + this.x;
      this.status[0].y = this.status[0].y + this.y;
      
      console.log(this.status[0], this.d,  111, this.x, this.y)

      eles[0].style.left = this.status[0].x + 'px';
      eles[0].style.top = this.status[0].y + 'px';
      this.turn();
    }

    eat() {
      
    }

    destroy() {

    }


  }
  const snake = new Snake();
  snake.init();
  document.body.onkeydown = function(e) {
    let dd = snake.d, x, y;
    switch(e.keyCode){
      case 37:
        if(snake.d === 'right') return;
        dd = 'left';
        x = -20;
        y = 0;
        break;
      case 38:
        if(snake.d === 'down') return;
        dd = 'up';
        x = 0;
        y = -20;
        break;
      case 39:
        if(snake.d === 'left') return;
        dd = 'right';
        x = 20;
        y = 0;
        break;
      case 40:
        if(snake.d === 'up') return;
        dd = 'down';
        x = 0;
        y = 20;
        break;

      default:
        return;
    }
    if(dd !== snake.d){
      snake.d = dd;
      snake.x = x;
      snake.y = y;
    }
    // console.log(snake.d, snake.x, snake.y)
  }
  setInterval(()=>{
    snake.run();
  }, 500);

  
}