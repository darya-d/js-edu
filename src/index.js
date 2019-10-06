/**
 * Function that calculates how many weeks the education process would take under given conditions
 * 
 * @param focus - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */

module.exports = function getTimeForEducation(focus, knowsProgramming, config) {
    // 800 hours to master the JavaScript language, its ecosystem and related tools. 
    const hoursProgrammingBasic = 800;
    // 500 hours are required to learn pretty basic programming from scratch.
    const hoursProgrammingAddition = 500;
    const hoursProgrammingSummary = hoursProgrammingBasic + hoursProgrammingAddition;
    const speedInHours = config[focus];

    // Weeks of education process.
    let weeks = knowsProgramming ? Math.ceil(hoursProgrammingBasic / speedInHours) : Math.ceil(hoursProgrammingSummary / speedInHours);

    return weeks;
  };
