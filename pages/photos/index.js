import axios from 'axios';
import React, { useEffect } from 'react'
import { Row } from 'react-bootstrap';
import { useRecoilState } from 'recoil';
import PhotoCard from "../../components/photo-card";
import withLoaded from '../../hocs/withLoaded';
import { photosState } from '../../states/photos';

function Photos({ sPhotos }) {
    const [photos, setPhotos] = useRecoilState(photosState);

    useEffect(() => {
        if (photos.length === 0) {
            setPhotos(sPhotos)
        }           
    }, [photos])

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

export async function getServerSideProps(context) {
	const res = await axios.get('https://jsonplaceholder.typicode.com/photos/');
	const sPhotos = await res.data.filter(p => p.id < 21)

    return {
		props: {
			sPhotos,
		},
	}
}

export default withLoaded(Photos)
