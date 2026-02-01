export default function FeaturedWorks() {
  const works = [
    {
      id: 1,
      title: 'Designing Dashboards',
      category: 'Dashboard',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua consequat aute officia exercitation sunt reprehenderit.'
    },
    {
      id: 2,
      title: 'Vibrant Portraits of 2020',
      category: 'Illustration',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua consequat aute officia exercitation sunt reprehenderit.'
    },
    {
      id: 3,
      title: '36 Days of Malayalam type',
      category: 'Typography',
   image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua consequat aute officia exercitation sunt reprehenderit.'
    }
  ]

  return (
    <section id="featured" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground mb-12">Featured works</h2>
        
        <div className="space-y-12">
          {works.map((work) => (
            <article key={work.id} className="group">
              <div className="grid md:grid-cols-3 gap-6 items-start">
                {/* Image */}
                <div className="md:col-span-1">
                  <div className="bg-gray-200 rounded-lg overflow-hidden aspect-square md:aspect-auto md:h-48">
                    <img 
                      src={work.image || "/placeholder.svg"} 
                      alt={work.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                
                {/* Content */}
                <div className="md:col-span-2">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-foreground">{work.title}</h3>
                  </div>
                  
                  <div className="inline-block bg-gray-800 text-white text-xs font-semibold px-3 py-1 rounded mb-4">
                    {work.category}
                  </div>
                  
                  <p className="text-muted text-sm leading-relaxed">
                    {work.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
