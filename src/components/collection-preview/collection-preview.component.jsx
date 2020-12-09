import React from 'react';
import './collection-preview.styles.scss';
import CollectionItems from '../collection-items/collection-items.component'

const CollectionPreview = ({title,items})=>(
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items.filter((item,index)=>index<4).map(({id,...otherCollectionProps})=>(
                    <CollectionItems key ={id} {...otherCollectionProps}/> 
                    ))}
        </div>

    </div>
);
export default CollectionPreview;