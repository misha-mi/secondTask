
import { useEffect, useState, MutableRefObject } from "react";

const useOutsideClick = (elementRef: MutableRefObject<HTMLElement | null>, func: () => void, blockFunc?: boolean) => {

  const [start, setStart] = useState(false);

  const onClick = (e: Event) => {
    if (!elementRef.current?.contains(e.target as Node) && start && !blockFunc) {
      func();
    }
  }

  setTimeout(() => setStart(true));

  useEffect(() => {
    document.addEventListener("mousedown", onClick);

    return () => {
      document.removeEventListener("mousedown", onClick);
    };
  })
}

export default useOutsideClick;


