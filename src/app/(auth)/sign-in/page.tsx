import { Blocks } from 'lucide-react'

import { Form } from './form'

export default async function SignIn() {
  return (
    <main className="grid h-screen grid-cols-2">
      <section className="flex h-full flex-col justify-between bg-muted p-6">
        <span className="flex items-center gap-3">
          <Blocks />
          <h1 className="font-medium">Trend Monitor</h1>
        </span>
        <span className="text-xs text-muted-foreground">
          Partner Panel @ Trend Monitor - {new Date().getFullYear()}
        </span>
      </section>

      <section className="flex items-center justify-center">
        <Form />
      </section>
    </main>
  )
}
