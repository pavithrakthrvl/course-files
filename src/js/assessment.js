function getCoursePercent(skillMarkOf100, attendanceMarkOf100 = 100) {
  const skills = ((skillMarkOf100 / 100) * (2 / 3) * 100);
  const attendance = ((attendanceMarkOf100 / 100) * (1 / 3) * 100);
  return Math.round(skills + attendance);
}

function getSkillPercent(homeworkMarks) {
  let earned = 0;
  let total = 0;

  homeworkMarks.forEach((assignmentMark) => {
    earned += assignmentMark[0];
    total += assignmentMark[1];
  });


  const skillMarkOf100 = Math.round((earned / total) * 100);
  return skillMarkOf100;
}

// If Node.js then export as public
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = {
    getCoursePercent,
    getSkillPercent,
  };
}
