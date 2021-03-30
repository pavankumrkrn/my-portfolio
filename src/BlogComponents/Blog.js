import React from 'react';
import { blogItems } from '../Shared/blogitems';
import './blog.css'
import { Welcome } from './Welcome';


export const Blog = () => {
    const [items, setItems] = React.useState(blogItems);
    // const handleSort = (value) => {
    //     console.log(value)
    //     if (value !== '') {
    //         if (value === 'asc') setItems(items.sort((a, b) => a.name - b.name))
    //         else setItems(items.sort((a, b) => b.name - a.name))
    //     }
    // }
    return (
        <>
            <Welcome />
            <hr className='aboutHr' />
            {/* <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-md-2 mt-1 mb-1 offset-md-10">
                        <select name="" id="" className="form-control shd bg-dark text-white" onChange={((e) => {
                            handleSort(e.target.value)
                        })}>
                            <option value="" className=''>--Sort by--</option>
                            <option value="asc" className='text-white'>Name ascending</option>
                            <option value="desc" className='text-white'>Name descending</option>
                        </select>
                    </div>
                </div>
            </div> */}
            <div class="container-fluid mt-5">
                <div className="row mt-4 mb-5">
                    {items.map((i, index) => {
                        return (
                            <div className="col-lg-4 mt-2 mb-2 col-md-6 col-sm-12 p-5">
                                <div className="card trans cirl shd" key={index} onClick={() => {
                                    window.open(i.link)
                                }}>
                                    <img src={i.image} alt="" className="card-img-top blog-img" />
                                    <div className="card-body">
                                        <div className="card-title">
                                            <p className="text-white h5 und">{i.name.split('').slice(0, 30).join('') + ' ...'}</p>
                                        </div>
                                        <div className="card-text">
                                            <p className="text-white">{i.description.split('').slice(0, 100).join('') + ' ...'}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}