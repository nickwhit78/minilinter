let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

var storyWords = story.split(' ');
//console.log(storyWords.length);

var betterWords = storyWords.filter((words) => {
    return words !== unnecessaryWords[0] && words !== unnecessaryWords[1] && words !== unnecessaryWords[2];
  });

//console.log(betterWords);
var element = 'really';
var overUsedWords = 0;
for(var i =0; i<betterWords.length; i ++){
  if(betterWords[i] === 'really')
  overUsedWords ++;
}
console.log(`The word "really" occurs ${overUsedWords} times in the pargraph.` );

/*var element2 = 'very';
betterWords = betterWords.filter(value => value === element2);
console.log(betterWords)*/
//retunred number of 'very' but still had to count manually, not very effective.
var overUsedWords2 = betterWords.reduce((count, value) => (value === 'very' ? count +1: count),0);
console.log(`The word "very" occurs ${overUsedWords2} times in the paragraph.`);

var overUsedWords3 = betterWords.reduce((count,value) => (value ==='basically' ? count +1: count),0);
console.log(`The word "basically" occurs ${overUsedWords3} time in the paragraph.`);

var storyWords2 = story.split('');
//console.log(storyWords2);
var period = '.';
var countperiod = 0 
for (var k=0 ; k<storyWords2.length; k++){
  if (storyWords2[k] === '.')
  countperiod ++;
};
//console.log(count);

var exc = '!';
var countsent = 0;
for (var l = 0 ; l<storyWords2.length; l++){
  if (storyWords2[l] === '!')
  countsent ++;
};
console.log(`There are ${countperiod + countsent} sentences in the story.`);

console.log( `There are ${storyWords.length} words in the story, there are ${countperiod + countsent} sentences in the story, and overused words occur ${overUsedWords + overUsedWords2 + overUsedWords3} times in the story.`);

console.log(betterWords.join(' '));
