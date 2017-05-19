class CrewMember {
  constructor(position, currentShip = 'Looking for a Rig') {
    this.position = position
    this.name = name
    this.currentShip = currentShip
  }

  engageWarpDrive() {
    if (this.position === 'Pilot' && this.currentShip !== 'Looking for a Rig') {
      this.currentShip.warpDrive = 'engaged!'
    } else {
      return "had no effect"
    }
  }

  setsInvisibility() {
    if (this.position === 'Defender' && this.currentShip !== 'Looking for a Rig') {
      this.currentShip.cloaked = true
    } else {
      return "had no effect"
    }
  }

  chargePhasers() {
    if (this.position === 'Gunner' && this.currentShip !== 'Looking for a Rig') {
      this.currentShip.phasersCharge = 'charged!'
    } else {
      return "had no effect"
    }
  }
}
