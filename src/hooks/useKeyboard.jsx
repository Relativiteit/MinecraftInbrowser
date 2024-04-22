import { useEffect,useState } from "react"

export const useKeyboard = () => {
    const [actions, setMovement] = useState({
            moveForward: false,
            moveBackward: false,
            moveLeft: false,
            moveRight: false,
            jump: false,
            texture1: false,
            texture2: false,
            texture3: false,
            texture4: false,
            texture5: false,
    })

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)
    })
}