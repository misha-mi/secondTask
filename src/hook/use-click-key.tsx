
import { useEffect } from "react";

const useClickKey = (key: string, func: () => void, blockFunc?: boolean) => {

  useEffect(() => {

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === key && !blockFunc) {
        func();
      }
    }

    document.addEventListener("keydown", onKeyDown);

    return () => document.removeEventListener("keydown", onKeyDown);
  })

}

export default useClickKey;