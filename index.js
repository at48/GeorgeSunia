/* logic behind the meme timer and stuff
   upwards of 10000 missing semicolons. */
const timer = document.getElementById('timer');
const content = document.getElementById('content');
const jorugueGifsSrc = [
    ['spinning-georgeprism.gif', new Date('2026-11-19T14:40:00Z'), 'spin', 'Andrew Teng'],
];
const jorugueImgsSrc = [
  ['george_ball.png', new Date('2026-11-18T16:50:00Z'), 'george ball', 'lmao his head looks like a ball (don\'t all of our heads tho)', 'Andrew Teng'],
  ['george-side.png', new Date('2026-11-18T16:50:00Z'), 'george side', 'ear used in george pyramid meme', 'Andrew Teng'],
  ['george_dumbfounded_stare.png', new Date('2026-11-18T16:50:00Z'), 'dumbfounded stare', ,'Andrew Teng'],
  ['george_side_happy.png', new Date('2026-11-18T16:50:00Z'), 'george side happy', 'a happy george is a good george :)', 'Andrew Teng'],
  ['greg-128.png', new Date('1900-01-01'), 'greg', 'src: Discord server emoji, peak img quality'],
  ['Jorgue-128.png', new Date('1900-01-01'), 'Jorgue', 'src: Discord server emoji. he looks tired.'],
  ['george_no-128.png', new Date('1900-01-01'), 'george_no', 'src: Discord server emoji. nope.'],
  ['georgeprism.webp', new Date('2026-11-17'), 'george prism', 'blender render of george as a pyramid', 'Andrew Teng']
];
if (window.location.pathname.endsWith('gifs.html')) {
 console.log('User on gifs.html');
 for (let i = 0; i < jorugueGifsSrc.length; i++) {
   let newImg = document.createElement('img');
   newImg.src = 'gifs/' + jorugueGifsSrc[i][0]
   newImg.style.width = "100%";
   newImg.style.maxWidth = "500px"
   newImg.style.height = "auto";
   let labelDateOfImage = document.createElement('h2');
   let dateOfImage = jorugueGifsSrc[i][1]
   if (jorugueGifsSrc[i][2]){
     labelDateOfImage.textContent = '\'' + jorugueGifsSrc[i][2] +'\' - ' + dateOfImage.toLocaleDateString("en-US");
   } else {
     labelDateOfImage.textContent = 'Untitled - ' + dateOfImage.toLocaleDateString("en-US");
   }
   content.appendChild(labelDateOfImage);
   let caption;
   if (jorugueGifsSrc[i][3]){
     caption = document.createElement('p');
     caption.textContent = jorugueGifsSrc[i][3]
   } else {
     caption = document.createElement('p')
     caption.style.fontStyle = 'italic';
     caption.textContent = '[ No caption provided ]'
   }
   let author;
   if (jorugueGifsSrc[i][4]){
     author = document.createElement('p');
     author.textContent = 'By ' + jorugueGifsSrc[i][4]
   } else {
     author = document.createElement('p')
     author.style.fontStyle = 'italic';
     author.textContent = 'Author Unknown'
   }
   content.appendChild(caption)
   content.appendChild(author)
   content.appendChild(newImg);
   let link = document.createElement('a')
   link.textContent = 'Link to Image'
   link.href = 'gifs/' + jorugueGifsSrc[i][0]
   content.appendChild( document.createElement('br'))
   content.appendChild(link)
   content.appendChild(document.createElement("hr"));
 }
}
if (window.location.pathname.endsWith('images.html')) {
  console.log('User on images.html');
  for (let i = 0; i < jorugueImgsSrc.length; i++) {
    let newImg = document.createElement('img');
    newImg.src = 'imgs/' + jorugueImgsSrc[i][0]
    newImg.style.width = "100%";
    newImg.style.maxWidth = "500px"
    newImg.style.height = "auto";
    let labelDateOfImage = document.createElement('h2');
    let dateOfImage = jorugueImgsSrc[i][1]
    if (jorugueImgsSrc[i][2]){
      labelDateOfImage.textContent = '\'' + jorugueImgsSrc[i][2] +'\' - ' + dateOfImage.toLocaleDateString("en-US");
    } else {
      labelDateOfImage.textContent = 'Untitled - ' + dateOfImage.toLocaleDateString("en-US");
    }
    content.appendChild(labelDateOfImage);
    let caption;
    if (jorugueImgsSrc[i][3]){
      caption = document.createElement('p');
      caption.textContent = jorugueImgsSrc[i][3]
    } else {
      caption = document.createElement('p')
      caption.style.fontStyle = 'italic';
      caption.textContent = '[ No caption provided ]'
    }
    let author;
    if (jorugueImgsSrc[i][4]){
      author = document.createElement('p');
      author.textContent = 'By ' + jorugueImgsSrc[i][4]
    } else {
      author = document.createElement('p')
      author.style.fontStyle = 'italic';
      author.textContent = 'Author Unknown'
    }
    content.appendChild(caption)
    content.appendChild(author)
    content.appendChild(newImg);
    let link = document.createElement('a')
    link.textContent = 'Link to Image'
    link.href = 'imgs/' + jorugueImgsSrc[i][0]
    content.appendChild( document.createElement('br'))
    content.appendChild(link)
    content.appendChild(document.createElement("hr"));
  }
}

function getTimeUntilNextSunday() {
  const now = new Date();
  const target = new Date(now);
  let daysUntilSunday = (7 - now.getDay()) % 7;
  target.setDate(now.getDate() + daysUntilSunday);
  target.setHours(11, 59, 0, 0);

  if (target <= now) {
    target.setDate(target.getDate() + 7);
  }

  const diffMs = target - now;
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diffMs / 1000 / 60) % 60);
  const seconds = Math.floor((diffMs / 1000) % 60);
  const formattedTime = `${days}:${hours}:${minutes}:${seconds}`;
  if (timer) {
    timer.textContent = formattedTime;
  }

  return {
    totalMilliseconds: diffMs,
    days,
    hours,
    minutes,
    seconds,
    formatted: formattedTime,
  };
}
getTimeUntilNextSunday();
const intervalId = setInterval(getTimeUntilNextSunday, 1000);