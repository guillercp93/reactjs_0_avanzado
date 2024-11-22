/* useRef has 2 use cases:
 * It allows us to create a mutable reference that persists throughout the entire lifecycle of a component without causing a re-render. Any change isn't showed in screen.
 * It references a DOM element.
 */

import { useRef } from "react"

export const BookReader = () => {
    const currentPageRef = useRef<number>(1);
    const nextPage = () => {
        currentPageRef.current += 1;
        console.debug(`You advance to page ${currentPageRef.current}`)
    }

    const previousPage = () => {
        if (currentPageRef.current < 1) {
            console.debug("You're already on the first page.")
            return;
        }
        currentPageRef.current -= 1;
        console.debug(`You go back to page ${currentPageRef.current}`)
    }

    const goToPage = (page: number) => {
        if (page < 1) {
            console.debug("You can't go to a non-existent page")
            return;
        }

        currentPageRef.current = page;
        console.debug(`You skip to page ${currentPageRef.current}`)
    }

    return (
        <div>
            <h2>Reading of Book</h2>
            <p>Actual page: {currentPageRef.current}</p>
            <button type="button" onClick={previousPage}>Previous page</button>
            <button type="button" onClick={nextPage}>Next page</button>
            <button type="button" onClick={() => goToPage(currentPageRef.current + 10)}>Go to page</button>
        </div>
    )
}

export const FocusInput = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        if (!inputRef.current) {
            console.debug("The element to reference doesn't exist");
            return;
        }
        inputRef.current.focus();
    }

    return (
        <div>
            <input type="text" name="something" id="something" placeholder="Write something..." ref={inputRef} />
            <button type="button" onClick={handleClick}>Focus input</button>
        </div>
    )
}
