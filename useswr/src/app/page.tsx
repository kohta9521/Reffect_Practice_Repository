import Image from 'next/image'
import styles from './page.module.css'
import { GitHubUser } from './components/GitHubUser'

export default function Home() {
  return (
    <>
      <h1>This Project is useSWR Practice</h1>
      <GitHubUser login='kohta9521' />
    </>
  )
}
