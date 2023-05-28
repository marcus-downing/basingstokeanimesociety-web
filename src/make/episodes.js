const _ = require('lodash');

const util = require('./util.js');

function flowEpisodes(series) {
	let directives = _.has(series, "episodes") ? series.episodes : [];
	let start = 1;
	let end = _.has(series, "count") ? series.count : 0;

	// get the episode number range
	for (let directive of directives) {
		// start episode numbers with something other than 1
		if (_.has(directive, "start")) {
			start = directive.start;
		}

		// end the series here
		if (_.has(directive, "end")) {
			end = directive.end
		}
	}
	console.log(series.name, "Episodes", start, "to", end);

	// make an episode list
	let episodes = []
	for (let number = start; number <= end; number++) {
		episodes.push({
			episode: number
		});
	}

	// adjust or insert extra episodes where needed
	for (let directive of directives) {
		if (_.has(directive, "episode")) {
			if (_.has(directive, "before")) {
				// insert before a given episode
				let index = episodes.findIndex((ep) => ep.episode == directive.before);
				episodes.splice(index, 0, directive);
			} else if (_.has(directive, "after")) {
				// insert after a given episode
				let index = episodes.findIndex((ep) => ep.episode == directive.after) + 1;
				episodes.splice(index, 0, directive);
			} else {
				// don't insert, adjust an existing episode
				let index = episodes.findIndex((ep) => ep.episode == directive.episode);
				let episode = {...episodes[index], ...directive};
				episodes.splice(index, 1, directive);
			}
		}
	}
	console.log(series.name, "Episode flow, adjusted:", episodes);
	
	// flow by week
	let weeks = [];
	let weekDate = series.from;
	let currentWeek = {
		week: weekDate,
		episodes: []
	};
	weeks.push(currentWeek);
	let weekFull = false;
	for (let episode of episodes) {
		if (episode.show == 'skip') {
			continue;
		}
		if (weekFull) {
			weekDate = util.plus1week(weekDate);
			currentWeek = {week: weekDate, episodes: []};
			weeks.push(currentWeek);
			weekFull = false;
		}
		currentWeek.episodes.push(episode);
		if (episode.show == 'single' || (currentWeek.episodes.length >= 2 && episode.show != 'more')) {
			weekFull = true;
		}
	}
	console.log(series.name, "Weeks:", JSON.stringify(weeks, null, 2));

	series.episodes = episodes;
	series.weeks = weeks;
}

module.exports = {
	flowEpisodes
}