import {useRef, useState} from "react";

const useIsEditing = ({defaultValue = '', debounceTime = 500} = {}) => {
    const [value, setValue] = useState(defaultValue)
    const [isEditing, setIsEditing] = useState(false)
    const timeoutId = useRef(null)

    const timeoutFinishedHandler = () => {
        setIsEditing(false)
        timeoutId.current = null
    }

    const updateValue = (evt) => {
        // Als er al een timeout ingesteld was, 
        // moet deze geannuleerd worden.
        if (timeoutId) {
            clearTimeout(timeoutId.current)
        }
        setValue(evt.target.value)

        // Stel isEditing op true in, en zet het nadat 
        // debounceTime ms verstreken zijn terug op false.
        setIsEditing(true)
        timeoutId.current = setTimeout(timeoutFinishedHandler, debounceTime)
    }

    return [
        value,
        updateValue,
        isEditing
    ]
}

export default useIsEditing