import axios from 'axios';
import React, { useEffect } from 'react'
import { Row } from 'react-bootstrap';
import { useRecoilState } from 'recoil';
import PhotoCard from "../../components/photo-card";
import { photosState } from '../../states/photos';

function Photos() {
    const [photos, setPhotos] = useRecoilState(photosState);

    useEffect(() => {
        if (photos.length === 0) {
            getPhotos();
            photos.filter(p => p.id < 20);
        }           
    }, [photos])

    const getPhotos = async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/photos/');
        setPhotos(res.data.filter(p => p.id < 21));
    }
    
    return (
        <div className="container">
            <h2>Photos</h2>
            <Row>
                {
                    photos.length > 0 ? 
                    photos.map(p => (
                        <PhotoCard 
                            id={p.id}
                            albumId={p.albumId}
                            url={p.url}
                            title={p.title}
                            thumbnailUrl={p.thumbnailUrl}    
                            key={p.id}
                        />
                    )) : null
                }
                
            </Row>
        </div>
    )
}

export default Photos
