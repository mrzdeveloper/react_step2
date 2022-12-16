import { useState } from 'react';
import './style.css'

const Fproduct = ({ Pname, count: counts, id, ondelet, productid, oninc, ondec, ondelet }) => {

    const [count, setcount] = useState(counts)
    return (
        <>
            <div>
                <span className='m-2 '>{id}</span>
                <div className='d-inline'>{Pname}</div>
                <div className='xa'>
                    <div className='xa bg-primary badge'>{format()}</div>
                    <button onClick={inc} className='m-2 btn btn-sm btn-primary'>+</button>
                    <button onClick={dec} className='m-2 btn btn-sm btn-warning'>-</button>
                    <button onClick={delet} className='m-2 btn btn-sm btn-danger'>Delete</button>
                </div>
            </div>
        </>

    );
    handeldelet(id)

    function inc() {
        oninc(id)
 
    }

    function dec() {
        ondec(id)

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