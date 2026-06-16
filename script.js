const feedContainer = document.getElementById('feed');

const posts = [
  {
    name: 'Cindy Claudia',
    role: 'Technology Enthusiast',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80',
    captionShort: 'Some tech expansions do not fail because of the product.',
    captionFull: 'Some tech expansions do not fail because of the product. action request first so I can message you!',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
    likes: 123,
    comments: 23,
    reposts: 24,
  },
  {
    name: 'Rizky Mahendra',
    role: 'AI Product Strategist',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80',
    captionShort: 'AI in 2026 demands more empathy than ever before.',
    captionFull: 'AI in 2026 demands more empathy than ever before. Building products that care requires deep user understanding and strong technical execution.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    likes: 214,
    comments: 42,
    reposts: 19,
  },
  {
    name: 'Cindy Claudia',
    role: 'Software Engineer',
    avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=100&q=80',
    captionShort: 'Some tech expansions do not fail because of the product.',
    captionFull: 'Some tech expansions do not fail because of the product. action request first so I can message you!',
    image: 'https://images.unsplash.com/photo-1527261834078-9b37d6b8fdf9?auto=format&fit=crop&w=1200&q=80',
    likes: 89,
    comments: 11,
    reposts: 8,
  },
  {
    name: 'Aurel S.',
    role: 'Cloud Infrastructure Lead',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80',
    captionShort: 'Migrating legacy systems into cloud-native architecture is a journey.',
    captionFull: 'Migrating legacy systems into cloud-native architecture is a journey. It takes discipline, strong collaboration, and an eye for cost-efficiency.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    likes: 172,
    comments: 28,
    reposts: 15,
  },
  {
    name: 'Nadia Putri',
    role: 'Cybersecurity Analyst',
    avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=100&q=80',
    captionShort: 'Security starts with a culture of curiosity and care.',
    captionFull: 'Security starts with a culture of curiosity and care. Every engineering team must own the risk model and keep learning to stay ahead.',
    image: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&w=1200&q=80',
    likes: 138,
    comments: 31,
    reposts: 20,
  }
];

function createPostCard(post) {
  const card = document.createElement('article');
  card.className = 'card post-card';
  card.innerHTML = `
    <div class="post-header">
      <div class="post-header-left">
        <img src="${post.avatar}" alt="${post.name}" />
        <div class="post-user">
          <h4>${post.name}</h4>
          <p>${post.role}</p>
        </div>
      </div>
      <button class="follow-button">+ Follow</button>
    </div>
    <div class="post-content">
      <p class="post-text">${post.captionShort} <a href="#" class="more-btn">...more</a><span class="post-text-full hidden"> ${post.captionFull}</span></p>
      <img class="post-image" src="${post.image}" alt="Post image" />
      <div class="post-meta">
        <span>${post.likes} likes</span>
        <span>${post.comments} comments • ${post.reposts} reposts</span>
      </div>
      <div class="post-actions-row">
        <button><img src="like.png" alt="Like" /><span>Like</span></button>
        <button><img src="comment.png" alt="Comment" /><span>Comment</span></button>
        <button><img src="repost.png" alt="Repost" /><span>Repost</span></button>
        <button><img src="send.png" alt="Send" /><span>Send</span></button>
      </div>
    </div>
  `;
  return card;
}

function renderFeed() {
  posts.forEach((post) => {
    const postCard = createPostCard(post);
    feedContainer.appendChild(postCard);
  });
}

function enableExpandMore() {
  feedContainer.addEventListener('click', (event) => {
    const moreButton = event.target.closest('.more-btn');
    if (!moreButton) return;
    event.preventDefault();

    const postText = moreButton.closest('.post-text');
    const fullText = postText.querySelector('.post-text-full');
    if (fullText) {
      fullText.classList.remove('hidden');
      moreButton.style.display = 'none';
    }
  });
}

renderFeed();
enableExpandMore();
