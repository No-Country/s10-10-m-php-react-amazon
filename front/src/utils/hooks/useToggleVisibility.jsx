import { useState } from 'react';

const useToggleVisibility = (initialValue = false) => {

    const [isVisible, setIsVisible] = useState(initialValue);

    const handleVisible = () => {
        setIsVisible(prevVisible => !prevVisible);
    };

    return [isVisible, handleVisible];
};

export default useToggleVisibility;
