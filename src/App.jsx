import { Canvas } from '@react-three/fiber'
import {Sky} from "@react-three/drei"
import './App.css'

function App() {

  return (
    <>
    {/* { <div> Outside canvas</div> } */}
        <Canvas>
          <Sky sumPosition={[100,100,20]} />
        </Canvas>
      
 
     
    </>
  )
}

export default App
