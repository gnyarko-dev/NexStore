import { Input } from '@/components/ui/input'
import React from 'react'

function InputField({item}) {
  return (
    <div>
        <Input name={item?.name} required={item?.required}/> 
    </div>
  )
}

export default InputField