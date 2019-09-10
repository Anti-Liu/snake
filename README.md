# snake
snake game


# 游戏规则：
  界面初始化：生成长度为3 的snack，运行方向随机；生成食物，位置随机，食物位置不可在蛇身上
  开始游戏，键盘上下左右可控制蛇头的方向，不能回头
  蛇头位置与食物重合，算吃到食物，蛇身长度加一，食物消失并生成新的食物
  若蛇头碰到边界或者蛇身，游戏失败

# 实现：
  class Snake：
    属性：
      direction: 蛇头运行的方向
      status:蛇的状态，每节身体的位置
    方法：
      run：运行
      eat： 吃食物
      init: 初始化
      destroy：销毁

  class Food：
    属性：
      x: x位置
      y: y位置
    方法：
      create: 创建食物
      destroy：销毁食物
      
# 技能点：
  创建元素createElement
  添加元素appendChild
  删除元素removeChild
  键盘上下左右事件

# 截止时间：2019.09.20