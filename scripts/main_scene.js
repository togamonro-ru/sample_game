// シーンクラス
// 他のJSファイルから呼び出された場合はシーンを返す
class MainScene extends Phaser.Scene {
    
    // コンストラクタ
    constructor() {
        // 継承した「Phaser.Scene」クラスのコンストラクタの呼び出し
        super('MainScene');
    }

    // シーンの事前読み込み処理
    preload() {
        // 画像の読み込み(使用する時の名前, パス)
       this.load.image('back', 'assets/back.png');
       this.load.image('hanako', 'assets/hanako.png');
       this.load.image('taro', 'assets/taro.png');
   }

   // シーン初期化処理
   create() {
    // 単体画像をシーンに追加(X座標,Y座標,画像名)
   this.add.image(400, 300, 'back');
   const taro = this.physics.add.sprite(500, 350, 'taro')
   const hanako = this.physics.add.sprite(500, 350, 'hanako')
   this.taro = taro
   this.hanako = hanako
   }

   arrow_move(cursors, object){
    if(cursors.up.isDown){
        console.log("Up!!");
        object.setVelocityY(-200);// 上方向の速度を設定

    }else if(cursors.down.isDown){
        console.log("down!!");
        object.setVelocityY(200);// 下方向の速度を設定

    }else if(cursors.left.isDown){
        console.log("Left");
        object.setVelocityX(-200);// 左方向の速度を
    }else if(cursors.right.isDown){
        console.log("Right!!");
        object.setVelocityX(200);// 右方向の速度を設定

    }else{
        object.setVelocity(0,0);// 
     // 毎フレーム実行される繰り返し処理
    }

}
    update(time, delta) {
        // キーボードの情報を取得
        let cursors = this.input.keyboard.createCursorKeys();
// 矢印キーのカーソル情報とplayerスプライトをarrow_move()メソッドに渡す
        this.arrow_move(cursors, this.taro);
    }

}

