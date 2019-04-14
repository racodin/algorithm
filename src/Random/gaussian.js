/**
 * @method gaussian
 * @param  {Number} mean  the mean
 * @param  {Number} sd    the standard deviation
 * @return {Number} the random number
 */

function gaussian(mean, sd) {
    var y1, x1, x2, w;
    if (previous) {
        y1 = y2;
        previous = false;
    } else {
        do {
            x1 = this.random(2) - 1;
            x2 = this.random(2) - 1;
            w = x1 * x1 + x2 * x2;
        } while (w >= 1);
        w = Math.sqrt(-2 * Math.log(w) / w);
        y1 = x1 * w;
        y2 = x2 * w;
        previous = true;
    }

    var m = mean || 0;
    var s = sd || 1;
    return y1 * s + m;
}

// Standard Normal variate using Box-Muller transform.
// function randn_bm() {
//     var u = 0, v = 0;
//     while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
//     while(v === 0) v = Math.random();
//     return Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
// }