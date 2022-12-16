import { useState } from 'react';
import Fproduct from './Products';
const App = () => {
    const [products, setproducts] = useState([
        { id: 1, productname: 'pc', count: 8 },
        { id: 2, productname: 'mm', count: 99 },
        { id: 3, productname: 'pmc', count: 9 },
        { id: 4, productname: 'kk', count: 8 },
        { id: 5, productname: 'llll', count: 77 },
        { id: 6, productname: 'plyuc', count: 3 },
        { id: 7, productname: '234', count: 6 }
    ])
    return (
        <>
            <button onClick={handlereset} className='btn btn-sm btn-secondary'>ClearAll</button>
            {products.map((p, index) => (
                <Fproduct

                    oninc={handelinc}

                    ondec={handeldec}
                    onkey={index} id={p.id} Pname={p.productname} count={p.count} ondelet={Pdelet}  >
                    <p>hi product</p>
                </Fproduct>

            ))}
        </>
    );
    function Pdelet(Pid) {
        const pnew = products.filter(p => p.id !== Pid)
        setproducts(pnew);
    }
    function handelreset() {
        const newproducts = products.map(p => {
            p.count = 0
            return p
        })

        setproducts(newproducts)

    }
    function handelinc(productid) {
        const newproducts = [...products];
        const index = newproducts.findIndex(p => p.id === productid);
        newproducts = [index].count += 1;
        setproducts(newproducts)
    }
    function handeldec(productid) {
        const newproducts = [...products];
        const index = newproducts.findIndex(p => p.id === productid);
        newproducts = [index].count -= 1;
        setproducts(newproducts)
    }
}
export default App;