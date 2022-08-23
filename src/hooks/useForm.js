import { useState } from 'react';

export const useForm = ( initialForm = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }
//agregamos on reset en el form para que se borre luego de agregar al todo
    const onResetForm = () => {
        setFormState( initialForm );
    }
//tercero usamos el hook del form
    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}
