import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Pagination from 'react-bootstrap/Pagination';
import { setPage } from '../store/deviceSlice';

const Pages = () => {
    const device =   useSelector(({device})=>device);
    const dispatch = useDispatch();
    const pageCount = Math.ceil(device.totalCount/device.limit)
    const pages = [];
    for(let i=0; i<pageCount; i++){
        pages.push(i+1);
    }
    return (
        <Pagination className='mt-5'>
            {pages.map((page)=>(
                <Pagination.Item onClick={()=>dispatch(setPage(page))} key={page} active={device.page === page}>
                    {page}
                </Pagination.Item>
            ))}
        </Pagination>
    )
}

export default Pages