import NavBack from '../components/navBack'
import Title from '../components/title'

export default function Home() {
  return (
      <main className="max-w-screen-xl mx-auto px-72">
          <div>
              <div>
                <NavBack />
              </div>
              <div>
                <Title />
              </div>
          </div>
      </main>
  )
}
