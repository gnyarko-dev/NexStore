import React, { useState } from 'react';
import StoreHeader from './StoreHeader';
import Sidebar from '@/components/ui/Sidebar';
import '../components/Header';
import storeDetails from './storeDetail.json';
import productDetails from './productDetail.json';
import InputField from './components/InputField';
import DropdownField from './components/DropdownField';
import { Separator } from '@radix-ui/react-dropdown-menu';
import { SelectSeparator } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

function AddStore() {

  const [formData,setFormData]=useState([]);

  const handleInputChange=(name,value)=>{
    setFormData((prevData)=>({
      ...prevData,
      [name]:value
    }))
    console.log(formData);
  }

  const onSubmit=(e)=>{
    e.preventDefault();
    console.log(formData);
  }

  return (
    <div>
      <div className='sticky-header'>
       <StoreHeader/>
      </div>
      <Sidebar/>
      <div className='grid w-full h-full pl-[300px]'>
        <div className='px:10 md:px-20 my-10'>
          <h2 className='font-bold text-4xl'>Store</h2>
          <form className='p-10 border rounded-xl mt-10'>
            {/* Store details */}
            <div>
              <h2 className='font-medium text-xl mb-6'>Store details</h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {storeDetails.storeDetails.map((item,index)=>(
                  <div key={index}>
                    <label className='text-sm'>{item?.label} {item.required&&<span className='text-red-500'>*</span>}</label>
                    {item.fieldType=='text'||item.fieldType=='number'?<InputField item={item} handleInputChange={handleInputChange} />
                    :item.fieldType=='dropdown'
                    ?<DropdownField item={item} handleInputChange={handleInputChange} />
                    :null}
                  </div>
                ))}
              </div>
            </div>
            <SelectSeparator className="my-6"/>

            {/* Product / Service */}
            <div>
              <h2 className='font-medium text-xl my-6'>Product / Service</h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {productDetails.productDetails.map((item,index)=>(
                  <div key={index}>
                    <label className='text-sm'>{item?.label} {item.required&&<span className='text-red-500'>*</span>}</label>
                    {item.fieldType=='text'||item.fieldType=='number'?<InputField item={item} />
                    :item.fieldType=='textarea'
                    ?<Textarea item={item} placeholder='Tell us more about your store' handleInputChange={handleInputChange} />
                    :null}
                  </div>
                ))}
              </div>
            </div>

            {/* Store Image */}

            <div className='mt-10 flex justify-end'>
              <Button type='submit' onClick={(e)=>onSubmit(e)} >Save</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddStore