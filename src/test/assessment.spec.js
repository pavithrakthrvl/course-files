/* global describe, it */
const expect = require('expect.js');
const lib = require('../js/assessment');

describe('Assessment.js', () => {
  describe('getCoursePercent', () => {
    expect(lib.getCoursePercent(100)).to.be(100);
    expect(lib.getCoursePercent(50)).to.be.within(66, 67);
    expect(lib.getCoursePercent(0)).to.be(33);
  });

  describe('getSkillPercent', () => {
    it('one assignment', () => {
      expect(lib.getSkillPercent([[10, 10]])).to.be(100);
      expect(lib.getSkillPercent([[6, 10]])).to.be(60);
      expect(lib.getSkillPercent([[3, 10]])).to.be(30);
      expect(lib.getSkillPercent([[2, 10]])).to.be(20);
      expect(lib.getSkillPercent([[0, 10]])).to.be(0);
    });

    it('two assignments', () => {
      expect(lib.getSkillPercent([[10, 10], [10, 10]])).to.be(100);
      expect(lib.getSkillPercent([[6, 10], [6, 10]])).to.be(60);
      expect(lib.getSkillPercent([[3, 10], [3, 10]])).to.be(30);
      expect(lib.getSkillPercent([[2, 10], [2, 10]])).to.be(20);
      expect(lib.getSkillPercent([[0, 10], [0, 10]])).to.be(0);
    });

    it('assignments with same result', () => {
      expect(lib.getSkillPercent([[10, 10], [10, 10], [5, 5], [5, 5]])).to.be(100);
      expect(lib.getSkillPercent([[6, 10], [6, 10], [3, 5], [3, 5]])).to.be(60);
      expect(lib.getSkillPercent([[3, 10], [3, 10], [1.5, 5], [1.5, 5]])).to.be(30);
      expect(lib.getSkillPercent([[2, 10], [2, 10], [1, 5], [1, 5]])).to.be(20);
      expect(lib.getSkillPercent([[0, 10], [0, 10], [0, 5], [0, 5]])).to.be(0);
    });

    it('assignments with varied result', () => {
      expect(lib.getSkillPercent([[10, 10], [10, 10], [5, 5], [5, 5], [19, 20]])).to.be(98);
      expect(lib.getSkillPercent([[6, 10], [6, 10], [3, 5], [3, 5], [20, 20]])).to.be(76);
      expect(lib.getSkillPercent([[3, 10], [3, 10], [1.5, 5], [1.5, 5], [20, 20]])).to.be(58);
      expect(lib.getSkillPercent([[2, 10], [2, 10], [1, 5], [1, 5], [24, 20]])).to.be(60);
      expect(lib.getSkillPercent([[0, 10], [0, 10], [0, 5], [0, 5], [5, 20]])).to.be(10);
    });

    it('assignments with decimal result', () => {
      expect(lib.getSkillPercent([[1, 3], [7, 13], [17, 17]])).to.be(Math.round((25 / 33) * 100));
      expect(lib.getSkillPercent([[5, 7], [11, 13], [14, 17]])).to.be(Math.round((30 / 37) * 100));
    });
  });
});
