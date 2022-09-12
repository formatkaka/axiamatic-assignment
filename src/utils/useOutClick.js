import React, { useEffect } from 'react';

function useOutclick(ref, fn) {
  useEffect(() => {
    function cb(evt) {
      const withinBoundaries = evt.composedPath().includes(ref.current);

      if (!withinBoundaries) fn();
    }

    document.addEventListener('click', cb);

    return () => {
      document.removeEventListener('click', cb);
    };
  }, []);
}

export default useOutclick;
