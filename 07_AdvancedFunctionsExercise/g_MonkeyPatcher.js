function solve(input) {
    switch (input) {
        case 'upvote':
            this.upvotes++;
            break;
        case 'downvote':
            this.downvotes++;
            break;
        case 'score':
            let currentUpvotes = this.upvotes;
            let currentDownvotes = this.downvotes;
            let rating = 'new';
            if (currentUpvotes + currentDownvotes >= 10) {
                if (currentUpvotes > 0.66 * (currentUpvotes + currentDownvotes)) {
                    rating = 'hot';
                } else if (currentDownvotes > currentUpvotes) {
                    rating = 'unpopular';
                } else if (currentUpvotes > 100 || currentDownvotes > 100) {
                    rating = 'controversial';
                }
            }
            if (currentUpvotes + currentDownvotes > 50) {
                let modifier = Math.ceil(0.25 * Math.max(currentUpvotes, currentDownvotes));
                currentUpvotes += modifier;
                currentDownvotes += modifier;
            }
            let score = currentUpvotes - currentDownvotes;
            return [currentUpvotes, currentDownvotes, score, rating];
    }
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};
monkeyPatcher.call(post, 'upvote');
monkeyPatcher.call(post, 'downvote');
let score = monkeyPatcher.call(post, 'score'); // [127, 127, 0, 'controversial']
console.log(score);
for (let i = 0; i < post.length; i++) {
    monkeyPatcher.call(post, 'downvote');  // (executed 50 times)
}
score = monkeyPatcher.call(post, 'score');     // [139, 189, -50, 'unpopular']
console.log(score);
