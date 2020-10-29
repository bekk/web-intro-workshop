const DAY = 1000 * 60 * 60 * 24;
// Bilder lastet ned fra Unsplash
// Dette er arrayet du skal liste ut
// Det inneholder bilder på formatet
// { id: 1, path: 'http://url.com', description: 'tekst til posten', alt: 'alt-tekst' }
const posts = [{
    id: '1',
    path: './img/working.jpeg',
    description: 'God trøkk på jobb i dag 😎',
    alt: 'Fem personer som jobber sammen rundt et bord',
    createdDate: new Date() - DAY * 2,
    username: '@olav',
    likes: 4,
  },
  {
    id: '2',
    path: './img/sunset.jpeg',
    description: 'Koser meg med litt kveldsjobbing når ungene endelig er i seng',
    alt: 'En mann som arbeider på pc i solnedgang',
    createdDate: new Date() - DAY * 3,
    username: '@reidar',
    likes: 6,
  },
  {
    id: '3',
    path: './img/suitcase.jpeg',
    description: 'På vei til møte med ny, spennende kunde 🤩',
    alt: 'Mann med stresskoffert som går',
    createdDate: new Date() - DAY * 4,
    username: '@frithjof',
    likes: 0,
  },
  {
    id: '4',
    path: './img/writing.jpeg',
    description: 'Ny artikkel om frontend på vei! 💪',
    alt: 'Hands writing on a computer',
    createdDate: new Date() - DAY * 12,
    username: '@selbekk',
    likes: 1,
  },
  {
    id: '5',
    path: './img/office.jpeg',
    description: 'Hjemmekontoret er på plass 😍',
    alt: 'Home office',
    createdDate: new Date() - DAY * 50,
    username: '@unni',
    likes: 9,
  },]

const renderPosts = () => {
    const hovedElement = document.getElementById('posts');
        
    posts.forEach((post) => {
        const article = document.createElement("article");
        article.className = 'post';

        const image = document.createElement('img');
        image.className = 'image';
        image.src = post.path;
        image.alt = post.alt;

        const author = document.createElement("h3")
        author.className= "author";
        author.innerHTML = post.username;


        const description = document.createElement("p");
        description.className = 'description';
        description.innerHTML = post.description;

        const details = document.createElement('section');
        details.className = 'post-details';
        const timestamp = document.createElement('p');
        timestamp.className = 'timestamp';
        timestamp.innerHTML = new Date(post.createdDate).toLocaleDateString('nb-NO')
        details.appendChild(timestamp)

        const likes = document.createElement('p');
        likes.className = 'likes';
        const likeCount = document.createTextNode("Likes: " + post.likes);
        const likeButton = document.createElement('button');
        likeButton.className='like-button';
        const likeButtonContent = document.createElement('span')
        likeButtonContent.setAttribute('role', 'img');
        likeButtonContent.setAttribute('aria-label', 'Lik bildet');
        likeButtonContent.innerText = "👍";
        likeButton.appendChild(likeButtonContent);

        likes.appendChild(likeCount)
        likes.appendChild(likeButton);
        details.appendChild(likes);

        article.appendChild(author);
        article.appendChild(image);
        article.appendChild(description);
        article.appendChild(details);
        hovedElement.appendChild(article);

        /**
         * <article class="post">
            <h3 class="author">olav</h3>
            <img
              class="image"
              src="./img/working.jpeg"
              alt="Fem personer som jobber sammen rundt et bord"
            />
            <p class="description">
              God trøkk på jobb i dag
              <span role="img" aria-label="Emoji med solbriller">😎</span>
            </p>
            <section class="post-details">
              <p class="timestamp">7 hours ago</p>
              <p class="likes">
                Likes: 0
                <button class="like-button">
                  <span role="img" aria-label="Lik bildet">👍</span>
                </button>
              </p>
            </section>
        </article>
         */
        
    })

}


renderPosts();

console.log("GOT HERE")






















