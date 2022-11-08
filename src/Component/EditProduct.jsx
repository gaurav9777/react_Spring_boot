import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import productService from '../service/productService';

const EditProduct = () => {
  const[product,setProduct]=useState(
    {
     
    }
  );

  const navigate = useNavigate();
    const{id} = useParams();

  const [msg,setMsg]=useState("")

  useEffect(()=>{
    productService.getProductById(id).then((res)=>{
      setProduct(res.data);
    }).catch((error)=>{
      console.log(error);
    })
  },[]);

    const handleChange=(e)=>{
      const value=e.target.value;
      setProduct({...product,[e.target.name]:value});
    };

    const ProductUpdate=(e)=>{
      e.preventDefault();

      productService.editProduct(product).then((res)=>{
        
        navigate("/")
      }).catch((error)=>{
        console.log(error);
      })
    };

  return (
    <>
    <div className='container'>
      <div className="row">
        <div className='col-md-6 offset-md-3'>
          <div className="card">
            <div className="card-header fs-3 text-center">
                Edit Product
            </div>
            {
              msg && 
              <p className="fs-4 text-center text-success">{msg}</p>
            }
            <div className="card-body">
              <form onSubmit={(e)=>ProductUpdate(e)}>
                <div className='mb-3'>
                  <label> Enter Product Name </label>
                  <input type="text" name="ProductName" className="form-control"
                   onChange={(e)=>handleChange(e)}
                   value={product.productName}
                   />
                </div>
                <div className='mb-3'>
                  <label> Description </label>
                  <input type="text" name="ProductDescription" className="form-control"
                   onChange={(e)=>handleChange(e)}
                   value={product.description}
                   />
                </div>
                <div className='mb-3'>
                  <label> Enter Product Price </label>
                  <input type="text" name="ProductPrice" className="form-control"
                   onChange={(e)=>handleChange(e)}
                   value={product.price}
                   />
                </div>
                <div className="mb-3">
                  <label>Enter Product Status</label>
                  <input type="text" name="ProductStatus" className="form-control"
                   onChange={(e)=>handleChange(e)}
                   value={product.status}
                   /> 
                </div>
                <button className="btn btn-danger col-md-12 " type="reset" value="Reset">Reset</button>
                <div>
                  <h1></h1>
                </div>
                <button className="btn btn-primary col-md-12"> Update Product </button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default EditProduct