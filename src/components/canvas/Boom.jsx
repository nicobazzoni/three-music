import { useState, useEffect, useRef, useMemo  } from 'react'
import { useRouter } from 'next/router'
import { useCursor, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

export default function Boom({ route, ...props }) {
  const router = useRouter()
  const [hovered, hover] = useState(false)
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(new Audio(url));

  //define camera  
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

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


  useCursor(hovered)
   return (  
    <>
    <mesh
     onClick={() => setPlaying(!playing)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
   
     
      {...props}>
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial roughness={0} color={hovered ? 'hotpink' : '#a4ff3d'} />
     
    </mesh>
</> 
)
}
const url = "./rope.wav";