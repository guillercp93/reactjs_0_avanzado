import { useEffect, useState } from 'react';
import './App.css';
import { BookReader, Button, ChildrenButton, ColorRed, CustomForm, FocusInput, Modal, PhoneBook, ShoppingCart } from './Components';
import { useModalContext } from './Components/Modal/context/UseModalContext';
import { useFetch } from './Hooks';
import { useApi } from './Hooks/useApi';
import { Character } from './Interfaces';
import { User } from './Interfaces/User';
import { getCharacter } from './Services';
import { URL_PLACEHOLDER } from './Utilities';
/* import { EffectExample, PromiseError, UndefinedExample } from './Components/ErrorExamples'; */

function App() {
    const [count, setCount] = useState(0);
    const { data: dataUser, loading: loadingUser, error: errorUser } = useFetch<User>(URL_PLACEHOLDER);
    const { setState } = useModalContext();

    const countMore = () => {
        // For fix the batching, pass a function to setCount.
        setCount(c => c + 1)
        setCount(c => c + 1)
        setCount(c => c + 1)
        setCount(c => c + 1)
        setCount(c => c + 1)
        setCount(c => c + 1)
    }

    // Communicate with a endpoint - External entity
    // Async operations
    // inputs parameters
    // use a context

    useEffect(() => {
        // 1- when component mounts
        // 2 - each time that any value changes in the list of dependencies
        console.log("Componente montado.")
    }, [])

    const openModal = () => {
        setState(true);
        throw new Error("Modal dead 😵");
    }

    const { loading: loadingCharacter, error: errorCharacter, data: character, reFetch } = useApi<Character, number>(getCharacter, { autoFetch: true, params: 1 })

    if (loadingUser || loadingCharacter) {
        return (
            <div>
                <span>Reading the information...</span>
            </div>
        )
    }

    if (errorUser) {
        console.debug(errorUser)
        return (
            <div>
                <span className='error_label'>Ups!!! An error has happened. <i>"{errorUser.toString()}"</i></span>
            </div>
        )
    }

    if (errorCharacter) {
        console.debug(errorCharacter)
        return (
            <div>
                <span className='error_label'>Ups!!! An error has happened. <i>"{errorCharacter.toString()}"</i></span>
            </div>
        )
    }

    return (
        <>
            <Button parentMethod={countMore}>
                <ChildrenButton><span>Click here!</span></ChildrenButton>
            </Button>
            <ColorRed>
                <span>Color Rojo</span>
            </ColorRed>
            <div>{count}</div>
            <div>{JSON.stringify(dataUser)}</div>
            <CustomForm />
            <BookReader />
            <FocusInput />
            <ShoppingCart />
            <PhoneBook />
            <button type="button" onClick={openModal}>Open Modal</button>
            <Modal>
                <h2>Hello Guiller</h2>
                <h3>I love y❤️u!</h3>
            </Modal>
            {/* <UndefinedExample /> */}
            {/* <EffectExample /> */}
            {/* <PromiseError /> */}
            <div>
                {JSON.stringify(character)}
            </div>
            <button type="button" onClick={() => reFetch(2)}>Volver a cargar</button>
        </>
    )
}

export default App
