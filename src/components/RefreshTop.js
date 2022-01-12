import React, {useEffect} from 'react'


export const RefreshTop = () => {
    window.scrollTo(0, 0)
}

window.addEventListener('scroll', RefreshTop)




