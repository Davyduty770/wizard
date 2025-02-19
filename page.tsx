import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Twitter, Linkedin } from "lucide-react"

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <main className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
          {/* Profile Section */}
          <Card className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden mb-6">
                <Image src="/placeholder.svg" alt="Profile photo" fill className="object-cover" priority />
              </div>
              <h1 className="text-2xl font-bold mb-2">Your Name</h1>
              <p className="text-muted-foreground mb-4">Software Developer</p>
              <div className="flex gap-4 mb-6">
                <Button variant="ghost" size="icon">
                  <Github className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Linkedin className="w-5 h-5" />
                </Button>
              </div>
              <Button className="w-full">Contact Me</Button>
            </div>
          </Card>

          {/* Content Section */}
          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">About Me</h2>
                <p className="text-muted-foreground">
                  Hello! I'm a passionate software developer with expertise in web development. I love creating elegant
                  solutions to complex problems and sharing my knowledge with the community through my YouTube channel
                  and blog posts.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Featured Video</h2>
                <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/FU8e3oR-XFw"
                    title="Featured YouTube video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

