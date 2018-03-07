var expect = require('chai').expect;

describe('checkForShip', function () {
	var checkForShip = require('../game_logic/ship_methods').checkForShip;

	it('should correctly report no ship at a given players coordinate', function () {

		player = {
			ships: [
				{
					locations: [[0, 0]]
				}
			]
		};

		expect(checkForShip(player, [9, 9])).to.be.false;
	});

	// Report ship located at given coordinates
	it('should correctly report a ship located at the given coordinates', function () {

		player = {
			ships: [
				{
					locations: [[0, 0]]
				}
			]
		};

		expect(checkForShip(player, [0, 0])).to.be.true;
	});

// Handle more than one coordinate
	it('should handle ships at more than one coordinates', function () {

		player = {
			ships: [
				{
					locations: [[0, 0], [0, 1]]
				}
			]
		};
		expect(checkForShip(player, [0, 1])).to.be.true;
		expect(checkForShip(player, [0, 0])).to.be.true;
		expect(checkForShip(player, [9, 9])).to.be.false;
	});

	//Handle multiple ships
		it('should handle checking multiple ships', function () {

			player = {
				ships: [
					{
						locations: [[0, 0], [0, 1]]
					},
					{
						locations: [[1, 0], [1, 1]]
					},
					{
						locations: [[2, 0], [2, 1], [2, 2], [2, 3]]
					}
				]
			};
			expect(checkForShip(player, [0, 1])).to.be.true;
			expect(checkForShip(player, [0, 0])).to.be.true;
			expect(checkForShip(player, [1, 0])).to.be.true;
			expect(checkForShip(player, [1, 1])).to.be.true;
			expect(checkForShip(player, [2, 3])).to.be.true;
			expect(checkForShip(player, [9, 9])).to.be.false;
		});
});
