(function(){
  if (typeof window.GameOfLife === "undefined") {
    var GameOfLife = window.GameOfLife = {};
  }

  var GameOfLife = window.GameOfLife;

  var MenuBar = GameOfLife.MenuBar = function (options) {
    this.board = options.board;
    var $body = $('body');
    this.$startButton = $body.find('.start-button');
    this.$stopButton = $body.find('.stop-button');
    this.$stepButton = $body.find('.step-button');
    this.$resetButton = $body.find('.reset-button');
    this.$conwayButton = $body.find('.conway-button');
    this.$cyclicButton = $body.find('.cyclic-button');
    this.$instructionsButton = $body.find('.instructions-button');
    this.$cyclicOptions = $body.find('#cyclic-options');
    this.$conwayOptions = $body.find('#conway-options');
    this.$zoomBar = $body.find('#zoom-bar');
    this.$speedBar = $body.find('#speed-bar');
    this.$rangeBar = $body.find('#cyclic-range-bar');
    this.$thresholdBar = $body.find('#cyclic-threshold-bar');
    this.$numColorsBar = $body.find('#num-colors-bar');
    this.$mooreBox = $body.find('#moore-box');
    this.$neumannBox = $body.find('#neumann-box');
    this.timerId = null;
    this.mode = "paused";
    this.speed = 100;

    this.bindClickHandlers();
  };

  MenuBar.prototype.bindClickHandlers = function () {
    this.$startButton.click(this.startGame.bind(this));
    this.$stopButton.click(this.stopGame.bind(this));
    this.$stepButton.click(this.stepGame.bind(this));
    this.$conwayButton.click(this.switchGame.bind(this));
    this.$cyclicButton.click(this.switchGame.bind(this));
    this.$resetButton.click(this.resetGame.bind(this));
    this.$instructionsButton.click(this.showInstructions.bind(this));
    this.$speedBar.on('input', this.changeSpeed.bind(this));
    this.$rangeBar.on('input', this.changeRange.bind(this));
    this.$conwayOptions.on('input',this.changeConwayBoard.bind(this));
    this.$cyclicOptions.on('input',this.changeCyclicOptions.bind(this));
    this.$thresholdBar.on('input', this.changeThreshold.bind(this));
    this.$numColorsBar.on('input', this.changeNumColors.bind(this));
    this.$mooreBox.on('click', this.changeNeighborType.bind(this));
    this.$neumannBox.on('click', this.changeNeighborType.bind(this));
  };

  MenuBar.prototype.startGame = function () {
    if (this.mode === "running") {return;}
    this.board.mode = this.mode = "running";
    this.timerId = setInterval(this.runGame.bind(this), this.speed);
    if (this.scrolling) {return;}
    this.scrolling = true;
    $('html,body').animate(
      {
        scrollTop: ($("canvas").offset().top - 30)
      },
      {
        duration: 'slow',
        complete: function () {
          this.scrolling = false;
        }.bind(this)
      }
    );
  };

  MenuBar.prototype.runGame = function () {
    this.board.step();
  };

  MenuBar.prototype.stopGame = function () {
    if (this.mode === "paused") {return;}
    this.board.mode = this.mode = "paused";
    window.clearInterval(this.timerId);
  };

  MenuBar.prototype.stepGame = function () {
    if (this.mode === "running") {return;}
    this.board.step();
  };

  MenuBar.prototype.switchGame = function (event) {
    var $target = $(event.currentTarget);
    this.board.mode = this.mode = "paused";
    window.clearInterval(this.timerId);
    if ($target.text() === "Conway") {
      $('.cyclic-buttons').addClass("inactive");
      $('.current-mode').text("Conway");
      this.board.gameType = "Conway";
      this.board.reset();

    } else if ($target.text() === "Cyclic") {
      $('.cyclic-buttons').removeClass("inactive");
      $('.current-mode').text("Cyclic");
      this.board.gameType = "Cyclic";
      this.board.reset();
    }
  };

  MenuBar.prototype.resetGame = function () {
    this.board.mode = this.mode = "paused";
    window.clearInterval(this.timerId);
    this.board.reset();
  };

  MenuBar.prototype.changeRange = function (event) {
    var newRange = this.$rangeBar.val();
    $('#range-status').text(newRange);
    this.board.range = parseInt(newRange);
  };

  MenuBar.prototype.changeSpeed = function () {
    var newSpeed = this.$speedBar.val();
    this.speed = newSpeed;
    $('.speed').text(newSpeed);
    if (this.mode === "running") {
      window.clearInterval(this.timerId);
      this.timerId = setInterval(this.runGame.bind(this), this.speed);
    }
  };

  MenuBar.prototype.changeThreshold = function (event) {
    var newThreshold = this.$thresholdBar.val();
    $('#threshold-status').text(newThreshold);
    this.board.threshold = parseInt(newThreshold);
  };

  MenuBar.prototype.changeNumColors = function (event) {
    var newNumColors = this.$numColorsBar.val();
    $('#num-colors-status').text(newNumColors);
    this.board.mode = this.mode = "paused";
    this.board.numColors = parseInt(newNumColors);
    window.clearInterval(this.timerId);
    this.board.reset();
  };

  MenuBar.prototype.changeNeighborType = function (event) {
    var $box = $(event.currentTarget);
    var newNeighborType = $box.val();
    if (newNeighborType === "extended-moore") {
      $('#neighborhood-status').text("NM");
      this.board.neighborType = "Moore";
    } else {
      $('#neighborhood-status').text("NN");
      this.board.neighborType = "Neumann";
    }
  };

  MenuBar.prototype.showInstructions = function () {
    if (this.scrolling) {return;}
    this.scrolling = true;
    $('html,body').animate(
      {
        scrollTop: $("#instructions-tab").offset().top
      },
      {
        duration: 'slow',
        complete: function () {
          this.scrolling = false;
        }.bind(this)
      }
    );
  };

  MenuBar.prototype.changeCyclicOptions = function (event) {
    var settingArray = $(event.currentTarget).val().split("/");
    for (index in settingArray) {
      var setting = settingArray[index];
      switch (index) {
        case "0":
          var num = parseInt(setting.slice(1,3));
          this.$rangeBar.val(num);
          this.$rangeBar.trigger('input');
          break;
        case "1":
          var num = parseInt(setting.slice(1,3));
          this.$thresholdBar.val(num);
          this.$thresholdBar.trigger('input');
          break;
        case "2":
          var num = parseInt(setting.slice(1,3));
          this.$numColorsBar.val(num);
          this.$numColorsBar.trigger('input');
          break;
        case "3":
          if (setting === "NM") {
            this.$mooreBox.trigger('click');
          } else {
            this.$neumannBox.trigger('click');
          }
          break;
      }
    }
    this.$cyclicButton.trigger('click');
    this.$startButton.trigger('click');
  };

  MenuBar.prototype.changeConwayBoard = function (event) {
    var setting = $(event.currentTarget).val();
    this.$conwayButton.trigger('click');
    this.board.prevConwaySetting = setting;
    this.board.reset();
  };


})();
