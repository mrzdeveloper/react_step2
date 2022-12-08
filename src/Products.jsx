import { useState } from 'react';

const Fproduct = () => {

    const [count, setcount] = useState()
    return (
        <>
            <div>

                <span className='m-2 '>ProductName</span>
                <span className='m-2 bg-primary badge'>{format()}</span>
                <button onClick={inc} className='m-2 btn btn-sm btn-primary'>+</button>
                <button onClick={dec} className='m-2 btn btn-sm btn-warning'>-</button>
                <button onClick={delet} className='m-2 btn btn-sm btn-danger'>Delete</button>
            </div>
        </>

    );

    function inc() {
        setcount(count + 1)

    }

    function dec() {
        if (count <= 0) {
            setcount(0)
        } else
            setcount(count - 1)

    }
    function delet() {
        setcount(0)

    }
    function format() {
        if (count <= 0) {
            return 'zero'
        } else {
            return count
        }


    }
}

export default Fproduct;