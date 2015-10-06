(function(){
  if (typeof PersonalSite === "undefined") {
    var PersonalSite = window.PersonalSite = {};
  }

  AnimationController = PersonalSite.AnimationController = function () {
    this.bindHandlers();
  };

  AnimationController.prototype.bindHandlers = function () {
    $('#works-link').click(this.scrollToWorks.bind(this));
    $('#home-link').click(this.scrollToHome.bind(this));
    $('#about-link').click(this.scrollToAbout.bind(this));
    $('#skills-link').click(this.scrollToSkills.bind(this));
    $('#brand-link').click(this.scrollToHome.bind(this));
  };

  AnimationController.prototype.scrollToWorks = function (event) {
    event.preventDefault();
    if (this.scrolling) {return;}
    this.scrolling = true;
    $('.active').removeClass('active');
    $('#works-link').parent('li').addClass('active');
    $('html,body').animate(
      {
        scrollTop: $("#works").offset().top
      },
      {
        duration: 'slow',
        complete: function () {
          this.scrolling = false;
        }.bind(this)
      }
    );
  };

  AnimationController.prototype.scrollToHome = function (event) {
    event.preventDefault();
    if (this.scrolling) {return;}
    this.scrolling = true;
    $('.active').removeClass('active');
    $('#home-link').parent('li').addClass('active');
    $('html,body').animate(
      {
        scrollTop: $("body").offset().top
      },
      {
        duration: 'slow',
        complete: function () {
          this.scrolling = false;
        }.bind(this)
      }
    );
  };

  AnimationController.prototype.scrollToSkills = function (event) {
    event.preventDefault();
    if (this.scrolling) {return;}
    this.scrolling = true;
    $('.active').removeClass('active');
    $('#skills-link').parent('li').addClass('active');
    $('html,body').animate(
      {
        scrollTop: $("#aboutwrap").offset().top
      },
      {
        duration: 'slow',
        complete: function () {
          this.scrolling = false;
        }.bind(this)
      }
    );
  };

  AnimationController.prototype.scrollToAbout = function (event) {
    event.preventDefault();
    if (this.scrolling) {return;}
    this.scrolling = true;
    $('.active').removeClass('active');
    $('#about-link').parent('li').addClass('active');
    $('html,body').animate(
      {
        scrollTop: $(".about-me-container").offset().top
      },
      {
        duration: 'slow',
        complete: function () {
          this.scrolling = false;
        }.bind(this)
      }
    );
  };
})();
