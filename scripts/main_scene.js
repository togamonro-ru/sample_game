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
    this.load.image('taro', 'assets/taro.png');
    this.load.image('hanako', 'assets/hanako.png');
    this.load.image('apple', 'assets/apple.png');
    this.load.image('orange', 'assets/orange.png');
  }
  // シーン初期化処理
  create() {
    // 単体画像をシーンに追加(X座標,Y座標,画像名)
    this.add.image(400, 300, 'back');
    // taroの画像を物理演算を持った画像にする
    const taro = this.physics.add.sprite(50, 50, 'taro');
    this.taro = taro
    const hanako = this.physics.add.sprite(750, 400, 'hanako');
    this.hanako = hanako

    let staticGroup = this.physics.add.group();// 動く物体をまとめる

    for (let i = 0; i < 5; i++) {
      let randx = Phaser.Math.Between(25, 775); // y は　50～750の間の値
      let randy = Phaser.Math.Between(25, 425);  // y は　50～200の間の値
      staticGroup.create(randx, randy, 'apple');// 星1
    }

    for (let i = 0; i < 5; i++) {
      let randx = Phaser.Math.Between(25, 775); // y は　50～750の間の値
      let randy = Phaser.Math.Between(25, 425);  // y は　50～200の間の値
      staticGroup.create(randx, randy, 'orange');// 星2
    }

    this.physics.add.overlap(taro, staticGroup, runitems, null, this);
    function runitems() {
      //物理エンジンを止める
      this.physics.pause();
    }

    this.physics.add.overlap(hanako, staticGroup, runitems, null, this);
    function runitems() {
      //物理エンジンを止める
      this.physics.pause();
    }

    
    // this.physics.add.overlap(hanako, staticGroup, runitems, null, this);
    // function runitems() {
    //   //物理エンジンを止める
    //   this.physics.pause();
    // }
  }

  update() {
    // キーボードの情報を取得
    let cursors = this.input.keyboard.createCursorKeys();
    if (cursors.up.isDown) {
      console.log("Up!!");
      this.taro.setVelocityY(-40);// 上方向の速度を設定
      this.hanako.setVelocityY(40);// 上方向の速度を設定
    } else if (cursors.down.isDown) {
      console.log("down!!");
      this.taro.setVelocityY(40);// 下方向の速度を設定
      this.hanako.setVelocityY(-40);// 下方向の速度を設定
    } else if (cursors.left.isDown) {
      console.log("Left");
      this.taro.setVelocityX(-40);// 左方向の速度を設定
      this.hanako.setVelocityX(40);// 左方向の速度を設定
    } else if (cursors.right.isDown) {
      console.log("Right!!");
      this.taro.setVelocityX(40);// 右方向の速度を設定
      this.hanako.setVelocityX(-40);// 右方向の速度を設定
    } else {
      this.taro.setVelocityX(0);// 横方向の速度を0
      this.taro.setVelocityY(0);// 縦方向の速度を0
      this.hanako.setVelocityX(0);// 横方向の速度を0
      this.hanako.setVelocityY(0);// 縦方向の速度を0
    }
  }
}