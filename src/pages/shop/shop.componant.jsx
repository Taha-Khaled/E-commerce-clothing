import React from 'react';
import './shop.data';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
class ShopPage extends React.Component {
    constructor(props){
        super(props);

        this.state ={
            collections :SHOP_DATA
        }
    }
    render(){
        const {collections} =this.state;
        return( <div>
            {
            collections.map(({id , ...otherCollectionsProps})=>(
                <CollectionPreview key ={id}{...otherCollectionsProps}/>
            ))
    }
            </div>);
    }
}
export default ShopPage;