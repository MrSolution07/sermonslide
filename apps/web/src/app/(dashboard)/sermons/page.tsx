import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen } from "lucide-react"

export default function SermonsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Sermons</h1>
          <p className="text-muted-foreground">
            Create and manage your sermon presentations
          </p>
        </div>
        <Button>
          <BookOpen className="mr-2 size-4" />
          New Sermon
        </Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Your Sermons</CardTitle>
          <CardDescription>All your sermon presentations in one place</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <BookOpen className="size-12 text-muted-foreground/50" />
            <h3 className="mt-4 text-lg font-semibold">No sermons yet</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Get started by creating your first sermon presentation.
            </p>
            <Button className="mt-4">Create Your First Sermon</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
