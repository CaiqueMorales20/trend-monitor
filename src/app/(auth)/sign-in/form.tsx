import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

function Form() {
  return (
    <form>
      <h1 className="text-center text-xl font-bold">Login</h1>
      <p className="mb-6 text-center text-sm text-foreground/80">
        Manage your inventory right now
      </p>
      <div className="space-y-6">
        <div className="space-y-2">
          <Label className="text-sm">Your username</Label>
          <Input className="w-80" />
        </div>
        <div className="space-y-2">
          <Label className="text-sm">Your password</Label>
          <Input type="password" className="w-80" />
        </div>
        <Button className="w-full text-sm">Access panel</Button>
      </div>
    </form>
  )
}

export { Form }
