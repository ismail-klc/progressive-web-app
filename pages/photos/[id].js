import React from 'react'
import { useRouter } from 'next/router'

function PhotoDetail() {
    const router = useRouter()
    const id = router.query.id

    return (
        <div className="container">
           <h2>
               { id }
           </h2>
        </div>
    )
}

export default PhotoDetail
