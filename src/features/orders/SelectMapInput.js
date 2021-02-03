import React from 'react'
import AsyncSelect from 'react-select/async';
import { Field } from 'react-final-form';

const customStyles = {
   control: (provided, state) => ({
      ...provided,
      borderRadius: "20px",
      height: '44px',
      border: '1px solid #858E9E'
   }),
}

export const SelectMapInput = ({name, loadOptions, className}) => {
   
   return (
      <Field name={name}>
         {({input, meta}) => (
            <AsyncSelect
               className={className}
               customStyles={customStyles}
               loadOptions={loadOptions}
               defaultOptions
               onChange={input.onChange}
            />
         )}
      </Field>
   )
}
