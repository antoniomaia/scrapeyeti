import { getHTML, getTwitterFollowers, getInstagramFollowers } from './lib/scraper'

async function go() {
    const tPromise = getHTML('https://twitter.com/checkyeti');
    const iPromise = getHTML('https://www.instagram.com/checkyeti');
    const [instagramHTML, twitterHTML] = await Promise.all(
        [iPromise, tPromise]
    );

    const twCount = await getTwitterFollowers(twitterHTML);
    const instaCount = await getInstagramFollowers(instagramHTML);

    console.log(`You have ${twCount} twitter followers and ${instaCount} instagram followers.`)
}
  
go();
