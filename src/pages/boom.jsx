import dynamic from 'next/dynamic'
import Instructions from '@/components/dom/Instructions'

const Boom = dynamic(() => import('@/components/canvas/Boom'), { ssr: false })

export default function Page(props) {
  return (
    <mesh>
      <h1 className='text-center font-extralight mt-10'>Rope </h1>
    </mesh>
  )
}

Page.canvas = (props) => <Boom route='/' position-y={-0.75}  />

export async function getStaticProps() {
  return { props: { title: 'Boom' } }
}
