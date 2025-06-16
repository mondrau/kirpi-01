import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Clock, Search, TrendingUp, User } from "lucide-react"

const featuredArticle = {
  title: "Breaking: Major Technology Breakthrough Changes Everything",
  excerpt:
    "Scientists have made a groundbreaking discovery that could revolutionize the way we think about technology and its applications in everyday life.",
  author: "Sarah Johnson",
  time: "2 hours ago",
  category: "Technology",
  image: "/placeholder.svg?height=400&width=800",
}

const articles = [
  {
    title: "Global Markets Show Strong Recovery",
    excerpt: "Financial markets worldwide are experiencing unprecedented growth following recent policy changes.",
    author: "Michael Chen",
    time: "4 hours ago",
    category: "Finance",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Climate Summit Reaches Historic Agreement",
    excerpt: "World leaders unite on ambitious climate goals that could reshape environmental policy for decades.",
    author: "Emma Rodriguez",
    time: "6 hours ago",
    category: "Environment",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Space Exploration Enters New Era",
    excerpt: "Private companies are pushing the boundaries of space travel with innovative technologies.",
    author: "David Kim",
    time: "8 hours ago",
    category: "Science",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "AI Revolution in Healthcare",
    excerpt: "Artificial intelligence is transforming medical diagnosis and treatment protocols worldwide.",
    author: "Lisa Wang",
    time: "10 hours ago",
    category: "Health",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Sustainable Energy Breakthrough",
    excerpt: "New solar technology promises to make renewable energy more efficient and affordable.",
    author: "James Wilson",
    time: "12 hours ago",
    category: "Energy",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Digital Privacy Laws Updated",
    excerpt: "New regulations aim to protect user data while maintaining innovation in the tech sector.",
    author: "Anna Thompson",
    time: "14 hours ago",
    category: "Policy",
    image: "/placeholder.svg?height=200&width=300",
  },
]

const trendingArticles = [
  { title: "The Future of Remote Work", time: "1 hour ago" },
  { title: "Cryptocurrency Market Analysis", time: "3 hours ago" },
  { title: "Urban Planning Revolution", time: "5 hours ago" },
  { title: "Mental Health Awareness", time: "7 hours ago" },
  { title: "Education Technology Trends", time: "9 hours ago" },
]

export default function NewsHomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold text-black">Hürkirpi</h1>
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-gray-700 hover:text-black transition-colors">
                  Ana Sayfa
                </a>
                <a href="#" className="text-gray-700 hover:text-black transition-colors">
                  Teknoloji
                </a>
                <a href="#" className="text-gray-700 hover:text-black transition-colors">
                  Finans
                </a>
                <a href="#" className="text-gray-700 hover:text-black transition-colors">
                  Bilim
                </a>
                <a href="#" className="text-gray-700 hover:text-black transition-colors">
                  Siyaset
                </a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative hidden sm:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search news..."
                  className="pl-10 w-64 bg-white/50 backdrop-blur-sm border-gray-200/50"
                />
              </div>
              <Button variant="outline" className="bg-white/50 backdrop-blur-sm border-gray-200/50">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Featured Article */}
            <Card className="overflow-hidden bg-white/70 backdrop-blur-md border-gray-200/50 shadow-xl">
              <div className="relative">
                <img
                  src={featuredArticle.image || "/placeholder.svg"}
                  alt={featuredArticle.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <Badge className="mb-3 bg-white/20 backdrop-blur-sm text-white border-white/30">
                    {featuredArticle.category}
                  </Badge>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">{featuredArticle.title}</h2>
                  <p className="text-gray-200 mb-4">{featuredArticle.excerpt}</p>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{featuredArticle.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{featuredArticle.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {articles.map((article, index) => (
                <Card
                  key={index}
                  className="overflow-hidden bg-white/70 backdrop-blur-md border-gray-200/50 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                >
                  <div className="relative">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-white border-gray-200/30">
                      {article.category}
                    </Badge>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg line-clamp-2 text-black">{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-4 line-clamp-2">{article.excerpt}</CardDescription>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{article.time}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Trending Section */}
            <Card className="bg-white/70 backdrop-blur-md border-gray-200/50 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-black">
                  <TrendingUp className="h-5 w-5" />
                  <span>Trending Now</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {trendingArticles.map((article, index) => (
                  <div key={index}>
                    <div className="space-y-2">
                      <h4 className="font-medium text-black hover:text-gray-700 cursor-pointer transition-colors">
                        {article.title}
                      </h4>
                      <div className="flex items-center space-x-1 text-xs text-gray-500">
                        <Clock className="h-3 w-3" />
                        <span>{article.time}</span>
                      </div>
                    </div>
                    {index < trendingArticles.length - 1 && <Separator className="mt-4" />}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card className="bg-white/70 backdrop-blur-md border-gray-200/50 shadow-lg">
              <CardHeader>
                <CardTitle className="text-black">Stay Updated</CardTitle>
                <CardDescription>Get the latest news delivered to your inbox</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Enter your email" className="bg-white/50 backdrop-blur-sm border-gray-200/50" />
                <Button className="w-full bg-black text-white hover:bg-gray-800">Subscribe</Button>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card className="bg-white/70 backdrop-blur-md border-gray-200/50 shadow-lg">
              <CardHeader>
                <CardTitle className="text-black">Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Technology",
                    "Business",
                    "Science",
                    "Health",
                    "Environment",
                    "Politics",
                    "Sports",
                    "Entertainment",
                  ].map((category) => (
                    <Badge
                      key={category}
                      variant="outline"
                      className="cursor-pointer hover:bg-black hover:text-white transition-colors bg-white/50 backdrop-blur-sm border-gray-200/50"
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black/90 backdrop-blur-md text-white mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">NewsHub</h3>
              <p className="text-gray-300">Your trusted source for breaking news and in-depth analysis.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Sections</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Technology
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Business
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Science
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Health
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <p className="text-gray-300">Stay connected for the latest updates</p>
            </div>
          </div>
          <Separator className="my-8 bg-gray-700" />
          <div className="text-center text-gray-400">
            <p>&copy; Hürkirpi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
