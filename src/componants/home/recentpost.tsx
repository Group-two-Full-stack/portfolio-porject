export default function RecentPosts111() {
  const posts = [
    {
      id: 1,
      title: 'Making a design system from scratch',
      date: '5 Jan 2023',
      category: 'Design',
      tag: 'Pattern',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua consequat aute officia exercitation.',
      url: '#'
    },
    {
      id: 2,
      title: 'Creating pixel perfect icons in Figma',
      date: '12 Feb 2023',
      category: 'Figma',
      tag: 'Icon Design',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua consequat aute officia exercitation.',
      url: '#'
    }
  ]

  return (
    <section id="recent" className="py-16 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-foreground">Recent posts</h2>
          <a href="#" className="text-primary hover:text-primary/80 font-medium">View all</a>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="flex items-start gap-2 mb-3">
                <a href={post.url} className="font-semibold text-blue-600 hover:underline text-sm">
                  {post.title}
                </a>
              </div>
              
              <div className="flex gap-4 text-sm text-muted mb-3">
                <span>{post.date}</span>
                <span className="text-muted">{post.category}, {post.tag}</span>
              </div>
              
              <p className="text-muted text-sm leading-relaxed">
                {post.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
