import React,{Fragment} from 'react';

export default class Product extends React.Component{

    constructor(props){

        super(props);
        this.state = {
            open: false
        }

        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal(){

        this.props.toggleModal(this.props.product);
    }

    render()
    {

        var {product} = this.props;
            
        return(
            <Fragment>

                <div className={"customCard"} onClick={this.toggleModal}>
                    <div className={"imageContainer"}>
                        <img src={product.image}/>
                    </div>
                    <div className={"content"}>
                        <span className={"text_14_600_000126"}>{product.description}</span>
                        <span style={{marginTop:8}} className={"text_12_600_676773"}>{product.colorText}</span>
                    </div>
                </div>               

            </Fragment>
        )
    }
}