//use a custom ogg sound for shooting
shootSound: swings

//define ammo, which is done by assigning a bullet type per item
ammo: {
  //re-define old types of ammo
  copper: standardCopper
  graphite: standardDense
  pyratite: standardIncendiary
  silicon: standardHoming
  
  //define a custom type with different properties
  electrum: {
    //move 6 world units per frame (very fast)
    speed: 6.0
    damage: 30
    //0.5x reload time, so 2x shoot speed
    reloadMultiplier: 0.5
    //visual size - does not affect hitbox
    bulletWidth: 7
    bulletHeight: 9
    shootEffect: shootSmall
    smokeEffect: shootSmallSmoke
    //2 bullets per electrum item
    ammoMultiplier: 2
    //visual bullet front and back
    backColor: ac7349
    frontColor: dcd16b
  }
}
