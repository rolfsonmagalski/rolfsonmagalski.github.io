var posts=["2026/03/02/111/","2025/06/03/考研英语/","2025/06/03/记录一下生活/","2025/06/01/测试帖子/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };