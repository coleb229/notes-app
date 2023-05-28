import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <list className='list'>
        <li className='list-item'>
          <Link href='/'>
            <p>Home</p>
          </Link>
        </li>
        <li className='list-item'>
          <Link href='/Handoff'>
            <p>Handoff Template</p>
          </Link>
        </li>
        <li className='list-item'>
          <Link href='/contact'>
            <p>Call Template</p>
          </Link>
        </li>
      </list>
    </div>
  )
}
