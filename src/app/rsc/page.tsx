import ClientCompoent from "@/components/ClientComponent"
import Link from "next/link"

export default function ServerComponent() {
//   const [ count, setCount ] = useState(0)

  console.log('sever')
  return (
    <div>
      サーバー
      <ClientCompoent />
      <Link href="/about">About</Link>
    </div>
  )
}
