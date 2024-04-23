import { Canvas } from '@react-three/fiber'
import {Sky} from "@react-three/drei"
import {Physics} from "@react-three/cannon"
import './App.css'
import { Ground } from "./components/Ground"
import { PLayer } from './components/Player'
import { FPV } from './components/FPV'
import { Cubes } from './components/Cubes'
import { TextureSelector } from './components/TextureSelector'

function App() {

  return (
    <>
    {/* { <div> Outside canvas</div> } */}
        <Canvas>
          <Sky sumPosition={[100,100,20]} />
          <ambientLight intensity={1.8} />  
          <FPV/>
          <Physics>
            <PLayer/>
            <Cubes/>
            <Ground/>   
          </Physics> 
        </Canvas>
        <div className='absolute centered cursor'>+</div>
        <TextureSelector/>
      
 
     
    </>
  )
}

export default App
