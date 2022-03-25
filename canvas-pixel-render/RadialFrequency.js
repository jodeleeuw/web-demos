// required libaries: https://unpkg.com/mathjs@10.4.0/lib/browser/math.js.

// First function used to create the stimulus (do not disturb).
function rf_D4creator(x, y, fr, theta, C, Lm, Rm, A, Wp) {
  // fr : radial frequency (angle number, should be integer)
  // theta : the phase of the modulation
  // C : contrast (I think [1] is normal)
  // Lm : the mean luminance of the pattern (0 ~ 1, 0.5 is gray)
  // Rm : the mean radius
  // A : the amplitude of modulation (angle strenth)
  // Wp : D4 peak spatial frequency (the width  of the line)
  let scope = {
    x: x,
    y: y,
    fr: fr,
    theta: theta,
    C: C,
    Lm: Lm,
    Rm: Rm,
    A: A,
    Wp: Wp
  }


  var sigma = math.evaluate('2.^(1/2) ./ (pi.*Wp)', scope);
  sigma
  scope['sigma'] = sigma
  
  var R = math.evaluate('Rm.* (1 + A.* sin(fr.* atan2(y, x) + theta))', scope)
  scope['R'] = R

  var r = math.evaluate('( (x.^2 + y.^2).^(1/2) - R ) ./ sigma', scope)
  scope['r'] = r

  var rf_D4 = math.evaluate('Lm .* ( 1 + C.*(1-4.*r.^2 + 4./3.*r.^4) .* exp(-r.^2) )', scope)
  rf_D4

  return rf_D4
}


// Second function used to create the stimulus 
// This function generates the array of pixel values to be drawn.
// When using the function, we only want to change the first argument (intensity), which determines the shape of the stimulus. 
// If intensity=0, the shape will be a perfect circle.
function rf_picCreator(intensity=0.008, picPixel=300, fr=4, C=0.8, Lm=0.5) {
  picPixel = Math.round(picPixel/2)
  var theta = Math.random() * Math.PI
  var Rm = picPixel / 4
  var Wp = 1 / Rm * 2

  var xRange = math.range(-picPixel, picPixel)
  var yRange = math.range(-picPixel, picPixel)
  var xyGrid = math.setCartesian(xRange, yRange)
  var x = math.column(xyGrid, 0)
  var y = math.column(xyGrid, 1)
  var pic = rf_D4creator(x, y, fr, theta, C, Lm, Rm, intensity, Wp)
  return math.reshape(pic, [picPixel * 2, picPixel * 2]).toArray()
}