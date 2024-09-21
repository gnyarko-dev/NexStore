import React from 'react';
import StoreHeader from './StoreHeader';
import Sidebar from '@/components/ui/Sidebar';
import '../components/Header';
import storeDetails from './storeDetail.json';
import InputField from './components/InputField';

function AddStore() {
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
              <div className='grid gap-5'>
                {storeDetails.storeDetails.map((item,index)=>(
                  <div key={index}>
                    <label className='text-sm'>{item?.label} {item.required&&<span className='text-red-500'>*</span>}</label>
                    {item.fieldType=='text'||item.fieldType=='number'?<InputField item={item} />:null}
                  </div>
                ))}
              </div>
            </div>

            {/* Product / Service */}

            {/* Inventory */}

          </form>
        </div>
      </div>
    </div>
  )
}

export default AddStore