import { UserButton } from "@clerk/nextjs"


export default function Home() {
  return (
    <div className="h-creen">
        <UserButton afterSignOutUrl="/"/>
    </div>
  )
}