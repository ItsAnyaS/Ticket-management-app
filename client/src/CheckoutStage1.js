import { useState, useEffect } from 'react'

const CheckoutStage1 = () => {

    const [theater, setTheater] = useState({})

    useEffect(() => {
        const getTheater = async (theaterId = 1) => {
            let req = await fetch(`http://localhost:3000/theaters/${theaterId}`)
            let res = await req.json()
            console.log('theater', res)
            setTheater(res)
        }
        getTheater()
    }, [])

    return (
        <div className='checkout-stage-1'>
            
        </div>
    )
}

export default CheckoutStage1