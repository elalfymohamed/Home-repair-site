/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable consistent-return */
import React, { useEffect, useRef } from 'react';

export default function Map({ options, onMount, className }) {
    const props = { ref: useRef(), className };
    const onLoad = () => {
        const map = new window.google.maps.Map(props.ref.current, options)
            && (onMount && onMount(map));
    };

    useEffect(() => {
        if (!window.google) {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = 'https://maps.google.com/maps/api/js?key='
                + 'AIzaSyC73-He0-RQKJIKqLy6tVF6ZwcGPW7UImo';

            const headScript = document.getElementsByTagName('script')[0];
            headScript.parentNode.insertBefore(script, headScript);
            script.addEventListener('load', onLoad);
            return () => script.removeEventListener('load', onLoad);
        } onLoad();
    });

    return (

        <div
            {...props}
            style={{ height: '66vh', margin: '.4em 0', borderRadius: '0.5em' }}
        />

    );
}

Map.defaultProps = {
    options: {
        center: { lat: 48, lng: 8 },
        zoom: 5,
    },

};
