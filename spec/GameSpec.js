describe("Game", function() {

  beforeEach(function() {
    game = new Game;
  });

  it("is defined", function() {
    expect(game).toBeDefined();
  });

  describe("score", function() {

    it("is 0 when game starts", function () {
      expect(game.score()).toEqual(0);
    });

    it("remembers score after every roll", function() {
      game.roll(1);
      game.roll(5);
      expect(game.score()).toEqual(6);
    });

    it("returns a current frame", function() {
      var game = new Game;
      game.roll(1);
      game.roll(3);
      expect(game.completedFrames).toEqual([[1, 3]]);
    });

    it("saves completed frames", function() {
      var game = new Game;
      game.roll(1);
      game.roll(3);
      game.roll(5);
      game.roll(3);
      expect(game.completedFrames).toEqual([[1, 3], [5, 3]]);
    });

    it("saves frame if it's strike after first roll", function() {
      var game = new Game;
      game.roll(10);
      expect(game.completedFrames).toEqual([[10, 0]]);
    })

  });

});
