import { useState, useEffect, useRef, useMemo  } from 'react'
import { useRouter } from 'next/router'
import { useCursor, MeshDistortMaterial, Line, useKTX2, Html, Stars, Sparkles, Cloud, MeshWobbleMaterial, Text3D, GizmoHelper, GizmoViewport } from '@react-three/drei'
import * as THREE from 'three'
import { MeshReflectorMaterial } from '@react-three/drei/materials/MeshReflectorMaterial'
import { Sky } from 'three-stdlib'

export default function Blob({ route, ...props }) {
  const router = useRouter()
  const [hovered, hover] = useState(false)
  const [playing, setPlaying] = useState(false);
  const [playing2, setPlaying2] = useState(false);
 
  const audioRef = useRef(new Audio(url));
  const audioRef2 = useRef(new Audio(url2));
 const points = useMemo(() => new THREE.EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(100), [])
  //define camera  
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

 const fontUrl = 'https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2'

   useEffect(() => {
    const handler = () => setPlaying(false);
    audioRef.current.addEventListener("ended", handler);
    return () => 
      audioRef.current.removeEventListener("ended", handler)
    ;
  }, [audioRef.current]);

  useEffect(() => {
    audioRef.current[playing ? "play" : "pause"]();
  }, [playing]);




    useEffect(() => {
    const handler = () => setPlaying2(false);
    audioRef2.current.addEventListener("ended", handler);
    return () => 
      audioRef2.current.removeEventListener("ended", handler)
    ;
  }, [audioRef2.current]);

  useEffect(() => {
    audioRef2.current[playing2 ? "play" : "pause"]();
  }, [playing2]);

   
 


  //create button that goes home 
  const goHome = () => {
    router.push('/')
  }



  useCursor(hovered)
   return (  
    <>
  
    
    <mesh
     onClick={() => setPlaying(!playing)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
       position={[4, 3, 5]}
   
     
      {...props}>
      <sphereGeometry args={[10, 5, 10]} />
      <MeshDistortMaterial roughness={0} color={hovered ? '#d9ff67' : '#20221d'} />

      <Html>
      
      <h1 className='font-bold tracking-widest border-1  hover:text-green-200 text-xl'>rope</h1>
      
      </Html>
     
    </mesh>
     <mesh>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
     </mesh>

     <mesh>
      <Sparkles speed={5} size={10} color={50}  />
  <Sparkles speed={1} size={2} color={200}  />
  
     


     </mesh>

     
        
    <mesh
     onClick={() => setPlaying2(!playing2)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
       position={[-20, 10, 50]}
   
     
      {...props}>
      <sphereGeometry args={[10, 5, 10]} />
      <MeshDistortMaterial roughness={0} color={hovered ? 'hotpink' : '#353632'} />

      <Html>
     
      <h1 className='font-bold tracking-widest border-1  hover:text-green-200 text-xl'>garden</h1>
      
      </Html>
     
    </mesh>

    //cloud mesh

    <mesh  position={[-10, 10, 20]}
   
     
      {...props} >
      <Cloud
  opacity={0.5}
  speed={0.4} // Rotation speed
  width={10} // Width of the full cloud
  depth={1.5} // Z-dir depth
  segments={20} // Number of particles
/>
    </mesh>

//function that makes object expand in size when click on it




    <mesh

    onClick={goHome}
    onPointerOver={() => hover(true)}
    onPointerOut={() => hover(false)}
    position={[1, -10, -20]}
    >
    <torusKnotGeometry args={[1, 5, 7, 4]}  />
    
    <MeshDistortMaterial roughness={0} color={hovered ? 'whitesmoke' : '#a4ff3d'}  />
       <Html>
     
      <h1 className='font-bold tracking-widest border-1  hover:text-green-200 text-xl'>home</h1>
      
      </Html>
   
    </mesh>

    <mesh position={[1, -10, -100]}>
  <boxGeometry args={[5,5,5]}  color={hovered ? 'whitesmoke' : '#27fcd9'} />
  <MeshWobbleMaterial roughness={0} factor={1} speed={2} />
</mesh>
  
</> 
)
}
const url = "./rope.wav";
const url2 = "./garden.mp3";