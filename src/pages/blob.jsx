import dynamic from 'next/dynamic'
import Instructions from '@/components/dom/Instructions'

const Blob = dynamic(() => import('@/components/canvas/Blob'), { ssr: false })

export default function Page(props) {
  return (
        <mesh>
      <h1 className='text-center font-extralight mt-2'>Enemy </h1>

      
    </mesh> 
  )
}

Page.canvas = (props) => <Blob route='/boom' position-y={-0.75} />

export async function getStaticProps() {
  return { props: { title: 'Blob' } }
}
