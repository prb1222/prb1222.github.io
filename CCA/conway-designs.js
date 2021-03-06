(function(){
  if (typeof window.GameOfLife === "undefined") {
    window.GameOfLife = {};
  }

  var GameOfLife = window.GameOfLife;

  GameOfLife.gosperGun = [
    ,"........................O"
    ,"......................O.O"
    ,"............OO......OO............OO"
    ,"...........O...O....OO............OO"
    ,"OO........O.....O...OO"
    ,"OO........O...O.OO....O.O"
    ,"..........O.....O.......O"
    ,"...........O...O"
    ,"............OO"
  ].join("#");

  GameOfLife.b52 = [
    ".OO"
    ,".OO.................O"
    ,"...................O.O............O.O"
    ,"....................O............O"
    ,"OO.......OO.......................O..O"
    ,"OO.O.....OO.......................O.O.O"
    ,"...O.......................O.......O..O"
    ,"...O.......................OO.......OO"
    ,"O..O.................OO.....O"
    ,".OO..................O"
    ,".....................OOO"
    ,"....................................OO"
    ,"....................................OO"
    ,".OO"
    ,"O..O"
    ,"O.O.O................O.O....OO.....OO"
    ,".O..O.................OO....OO.....OO.O"
    ,".....O............O...O...............O"
    ,"..O.O............O.O..................O"
    ,"..................O................O..O"
    ,"....................................OO"
  ].join("#");

  GameOfLife.gardenOfEden = [
    ,"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO"
    ,"OO.O.OOO.OOO.OO.O.O.O.O.O.O.O.O.O"
    ,"O.O.OOO.OOO.OOOO.OOO.O.O.O.O.O.O"
    ,"OOOOO.OOO.OOO.OOOO.OOOOOOOOOOOOOO"
    ,"O.O.OO.OOO.OOO.O.OOO.O.O.O.O.O.O"
    ,"OOOO.OOO.OOO.OOOOO.OO.O.O.O.O.O.O"
    ,".OO.OOO.OOO.OOO.O.O.OOOOOOOOOOOOO"
    ,"OO.OO.OOO.OOO.OO.OOOO.O.O.O.O.O.O"
    ,"OOOOOOOOOOOOOOOOOO.OOOOOOOOOOOOOO"
  ].join("#");

  GameOfLife.gardenOfEden2 = [
    ,"OO.O.O.O.OO.O"
    ,"O.OOO.OOO.OO.O"
    ,"OOOO.OOO.OO.O"
    ,"OOO.O.O.O.OOOO"
    ,".OOO.O.OOO.OO"
    ,"OOOOOOO.OOOO.O"
    ,".O.O.OOOOOOOO"
    ,"O.OOO.OO.O.O.O"
    ,"OOOOOO.OOOOOO"
    ,"O.OO.OOOOO.O.O"
    ,"OOO.OOOOOOOOO"
    ,".OOO.O.O.O.OOO"
    ,"OOO.O.O.O.OO.O"
    ,"O.OOOOOOOOOOOO"
  ].join("#");

  GameOfLife.weekender = [
    ,".O............O"
    ,".O............O"
    ,"O.O..........O.O"
    ,".O............O"
    ,".O............O"
    ,"..O...OOOO...O"
    ,"......OOOO"
    ,"..OOOO....OOOO"
    ,"."
    ,"....O......O"
    ,".....OO..OO"
  ].join("#");

  GameOfLife.dragon = [
    ,"............O"
    ,"............OO..............O"
    ,"..........O.OO.....O.O....OO"
    ,".....O...O...OOO..O....O"
    ,"OO...O..O......O.O.....OOO..O"
    ,"OO...O.OO......O...O.O.O"
    ,"OO...O..........O.O.......OO"
    ,".....OO..............O......O"
    ,".......O............O.O"
    ,".......O............O.O"
    ,".....OO..............O......O"
    ,"OO...O..........O.O.......OO"
    ,"OO...O.OO......O...O.O.O"
    ,"OO...O..O......O.O.....OOO..O"
    ,".....O...O...OOO..O....O"
    ,"..........O.OO.....O.O....OO"
    ,"............OO..............O"
    ,"............O"
  ].join("#");

  GameOfLife.seal = [
    ,"..OO"
    ,".OOO.OOO"
    ,"...O...OO"
    ,"OO.OO..O..O.O"
    ,"O......O.OOOO"
    ,"......OO.O..O"
    ,"O....OO...O.OO"
    ,"OO........O.O..O"
    ,"O..OOOOO.OOO....O"
    ,".O.........O....O"
    ,".OO.O..O...O...O"
    ,"..O.........OO"
    ,".........OO..OO....O"
    ,"..O...OO.O....OOO..O"
    ,"...OO.O.OOOOO.....O.OO"
    ,".......OO.OO.OO.OO..OOO"
    ,".................O.O....O"
    ,"........OO....O.O...OOOOOO"
    ,".............O.......OO"
    ,".............O...O"
    ,".............O....O...OOO......O"
    ,"..............OOOOO...OO.OO..OO.OO"
    ,".................OO.O..O.OO..O"
    ,"................OO.....O....O..OOO"
    ,"...............OOO.O.O.O.O"
    ,"......................O..O"
    ,"..................O.O"
    ,"...................O"
    ,"."
    ,".....................OOO"
    ,".....................OOO"
    ,"."
    ,"....................OO"
    ,"....................OO"
    ,".....................O"
  ].join("#");

  GameOfLife.beehiveHassler = [
    ,"...................................OO....OO"
    ,"...................................O.O..O.O...........................OO"
    ,".....................................O..O......OO....OO........OO...O..O"
    ,"....................................O....O......O....O.O........O...OO"
    ,"..........................O.........OO..OO......O.OO.O..O.......O.OO..OOOO.OO"
    ,".........................O.O..........OO.......OO.O.O.OO......OO.O.O.O...O.O.O"
    ,".........................O.OOO................O...O.O..........O.O...OO....O.O"
    ,"......................O.OO....O..............OOO.OO.OO......OO.O.OO.O.O.O.OO.OO"
    ,"..............OO......OO...OO.O..............O...OO.OO.OO..O......O.OO..O..O"
    ,".............O.O.........OO.O.OO.............O.......O..OOO...O.O.O.O....O.O"
    ,".......OO.O..O......OOOOO...O...O............O........O.OO.......OO.OOOO.OO"
    ,"......O.OO.O.OO....O.....O..OO.OO.....O......O...OO...OO..O.....O..O....O"
    ,"......O....O.......OO..O........O.....OO.....OOO.OO........O....OO.O.OO.O"
    ,"....OO.OOOO.OO....OO..O.O....O.OO......O......O...O.O.OOOOO......O..O.OO"
    ,"...O.O....O.O.O.OOOO..OO..O..O.OO..............OO.O.OO.........O.O"
    ,"...O..OO..O..OO.O.OO..O...O.....O...............O.OO...OO......OO"
    ,"OO.O......O..O.O.O........O.OO.OO...............O....OO.O"
    ,".O.O..O.OO...O.O..........O.O...O................OOO.O"
    ,".O.O.O...O.O.O.OO......OO.O.O.OO......O..O.........O.O"
    ,"..OO.OOOO..OO.O.......O..O.OO.O.....O..OO..O........O"
    ,".........OO...O........O.O....O.....O..OO..O"
    ,".......O..O...OO........OO....OO......OOOO"
    ,".......OO...........................O.O..O.O"
    ,"....................................OO....OO"
  ].join("#");

  GameOfLife.toadHassler = [
    ,"...OO.........OO..OO.........OO"
    ,"....O.........O....O.........O"
    ,"...O...........O..O...........O"
    ,"...OO.........OO..OO.........OO"
    ,"....O....O....O....O....O....O"
    ,".OOO.OOOOOOOOO.OOOO.OOOOOOOOO.OOO"
    ,"O..O...O.O.O...O..O...O.O.O...O..O"
    ,"OO..............................OO"
    ,"......OO...OO........OO...OO"
    ,"."
    ,"....OO.OO.OO.OO....OO.OO.OO.OO"
    ,"...O.....O.....O..O.....O.....O"
    ,"...OO.O.....O.OO..OO.O.....O.OO"
    ,"."
    ,".........O..............O"
    ,"."
    ,"................OO"
    ,"..........O....O..O....O"
    ,"..........O.....OO.....O"
    ,".........O.O..........O.O"
    ,"..........O............O"
    ,"..........O............O"
    ,"...........................OO"
    ,"....OOO...................O.O"
    ,"....OOO...................OO"
    ,"....OOO...........O.............OOO"
    ,".OOO............O..O............OOO"
    ,".OOO............O..O............OOO"
    ,".OOO.............O...........OOO"
    ,"........OO...................OOO"
    ,".......O.O...................OOO"
    ,".......OO"
    ,"............O............O"
    ,"............O............O"
    ,"...........O.O..........O.O"
    ,"............O.....OO.....O"
    ,"............O....O..O....O"
    ,"..................OO"
    ,"."
    ,"...........O..............O"
    ,"."
    ,".....OO.O.....O.OO..OO.O.....O.OO"
    ,".....O.....O.....O..O.....O.....O"
    ,"......OO.OO.OO.OO....OO.OO.OO.OO"
    ,"."
    ,"........OO...OO........OO...OO"
    ,"..OO..............................OO"
    ,"..O..O...O.O.O...O..O...O.O.O...O..O"
    ,"...OOO.OOOOOOOOO.OOOO.OOOOOOOOO.OOO"
    ,"......O....O....O....O....O....O"
    ,".....OO.........OO..OO.........OO"
    ,".....O...........O..O...........O"
    ,"......O.........O....O.........O"
    ,".....OO.........OO..OO.........OO"
  ].join("#");

  GameOfLife.acorn = [
    ".O"
    ,"...O"
    ,"OO..OOO"
  ].join("#");

  GameOfLife.switchEngine = [
    ,".O.O"
    ,"O"
    ,".O..O"
    ,"...OOO"
  ].join("#");

  GameOfLife.chickenWire = [
    ,"OO..OO..OOOO...OO.....OOO..OOO....OO"
    ,"..OO..OO....OOO..OOOOO...OO...OOOO"
    ,"OO..OO..OOOO...OO.....OOO..OOO....OO"
    ,"..OO..OO....OOO..OOOOO...OO...OOOO"
    ,"OO..OO..OOOO...OO.....OOO..OOO....OO"
    ,"..OO..OO....OOO..OOOOO...OO...OOOO"
    ,"OO..OO..OOOO...OO.....OOO..OOO....OO"
    ,"..OO..OO....OOO..OOOOO...OO...OOOO"
    ,"OO..OO..OOOO...OO.....OOO..OOO....OO"
    ,"..OO..OO....OOO..OOOOO...OO...OOOO"
    ,"OO..OO..OOOO...OO.....OOO..OOO....OO"
    ,"..OO..OO....OOO..OOOOO...OO...OOOO"
    ,"OO..OO..OOOO...OO.....OOO..OOO....OO"
    ,"..OO..OO....OOO..OOOOO...OO...OOOO"
    ,"OO..OO..OOOO...OO.....OOO..OOO....OO"
    ,"..OO..OO....OOO..OOOOO...OO...OOOO"
    ,"OO..OO..OOOO...OO.....OOO..OOO....OO"
    ,"..OO..OO....OOO..OOOOO...OO...OOOO"
    ,"OO..OO..OOOO...OO.....OOO..OOO....OO"
    ,"..OO..OO....OOO..OOOOO...OO...OOOO"
    ,"OO..OO..OOOO...OO.....OOO..OOO....OO"
    ,"..OO..OO....OOO..OOOOO...OO...OOOO"
    ,"OO..OO..OOOO...OO.....OOO..OOO....OO"
    ,"..OO..OO....OOO..OOOOO...OO...OOOO"
    ,"OO..OO..OOOO...OO.....OOO..OOO....OO"
    ,"..OO..OO....OOO..OOOOO...OO...OOOO"
    ,"OO..OO..OOOO...OO.....OOO..OOO....OO"
    ,"..OO..OO....OOO..OOOOO...OO...OOOO"
    ,"OO..OO..OOOO...OO.....OOO..OOO....OO"
    ,"..OO..OO....OOO..OOOOO...OO...OOOO"
    ,"OO..OO..OOOO...OO.....OOO..OOO....OO"
    ,"..OO..OO....OOO..OOOOO...OO...OOOO"
    ,"OO..OO..OOOO...OO.....OOO..OOO....OO"
    ,"..OO..OO....OOO..OOOOO...OO...OOOO"
    ,"OO..OO..OOOO...OO.....OOO..OOO....OO"
    ,"..OO..OO....OOO..OOOOO...OO...OOOO"
    ,"OO..OO..OOOO...OO.....OOO..OOO....OO"
    ,"..OO..OO....OOO..OOOOO...OO...OOOO"
    ,"OO..OO..OOOO...OO.....OOO..OOO....OO"
    ,"..OO..OO....OOO..OOOOO...OO...OOOO"
  ].join("#");

  GameOfLife.noahsArk = [
    ,"..........O.O"
    ,".........O"
    ,"..........O..O"
    ,"............OOO"
    ,"."
    ,"."
    ,"."
    ,"."
    ,"."
    ,".O"
    ,"O.O"
    ,"."
    ,"O..O"
    ,"..OO"
    ,"...O"
  ].join("#");
})();
