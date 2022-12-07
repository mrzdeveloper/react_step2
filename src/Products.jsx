const product = () => {
    return (
        <>
            <span className='m-2 bg-dark'>ProductName</span>
            <span className='m-2 bg-primary badge '>Count</span>
            <button className='m-2 btn bs-primary'>+</button>
            <button className='m-2 btn bs-warning'>-</button>
            <button className='m-2 btn bs-danger'>Delete</button>
        </>

    );
}

export default product;