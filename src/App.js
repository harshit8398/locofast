import React,{Fragment} from 'react';

import './App.css';
import Product from './components/Product.jsx';
import Modal from 'react-bootstrap/Modal';

import green from './assets/green.svg';
import random from './assets/random.svg';
import brown from './assets/brown.svg';
import button from './assets/button.svg';

import close from './assets/close.svg';
import back from './assets/back.svg';
import down from './assets/down.svg';
import attachicon from './assets/attachicon.svg';
import eye from './assets/eye.svg';
import circle from './assets/circle.svg';

import ellipse1 from './assets/Ellipse1.svg';
import ellipse2 from './assets/Ellipse2.svg';
import ellipse3 from './assets/Ellipse3.svg';
import ellipse4 from './assets/Ellipse4.svg';

import oval from './assets/oval.svg';
import blue from './assets/blue.svg';
import line from './assets/line.svg';

class App extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      open: false,
      activeProduct: {id:'',description:''},
      factory: '',
      design: '',
      quantity: '',
      formView: true,
      finalView: false,
      fileName:'',
      products: [
        { 
          id:1,
          description: '100% Cotton Navy/White Colour Oxford Chambery',
          colorText: '8 more colors',
          image: green,
          inventory: 1200
        },
        { 
          id:2,
          description: '100% Cotton Navy/White Colour Oxford Chambery',
          colorText: '8 more colors',
          image: random,
          inventory: 900
        },
        { 
          id:3,
          description: 'Lorem ipsum, or lipsum as it is sometimes known',
          colorText: '3 more colors',
          image: brown,
          inventory: 800
        },
        { 
          id:4,
          description: '1Lorem ipsum, or lipsum as it is sometimes known,',
          colorText: '4 more colors',
          image: button,
          inventory: 1000
        }
      ]
    }

    this.toggleModal = this.toggleModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.next = this.next.bind(this);
    this.goBack = this.goBack.bind(this);
    this.setter = this.setter.bind(this);
    
  }

  toggleModal(activeProduct){

    this.setState({
      open: true,
      activeProduct,
      factory: 'Amaya creations',
      design: 'Design name 1',
      quantity: '',
      formView: true,
      finalView: false,
    })
  }

  closeModal(){
    
    this.setState({
      open: false
    })
  }

  handleClick(){

    let file = document.getElementById('file');
    file.click();
  }

  setter(e){

    this.setState({
      [e.target.name]: e.target.value
    })
  }

  setDesign(value){

    this.setState({
      design: value
    })

    let x = document.getElementsByClassName('dropdown-content');
    x[0].style.display = 'none';
  }

  setQuantity(e){

    var x = e.target.value;

    if(x<=0)
    {
      x = 1;
    }

    this.setState({quantity: x})
  }

  next(){

    let {quantity} = this.state;

    if(quantity == '' || isNaN(quantity))
    {
      alert('Please enter a valid quantity value');
      return false;
    }

    var file = document.getElementById('file');
    console.log(file.value)

    if(file.value == '' || file.value == undefined)
    {
      alert('Please upload challan file');
      return false;
    }

    this.setState({
      formView: false,
      finalView: true,
      fileName: file.value
    })
  }

  goBack(){

    this.setState({
      formView: true,
      finalView: false
    })
  }

  render()
  {

    var {activeProduct} = this.state;

    return (
        <Fragment>
          
          <div style={{backgroundColor:'#fff',padding:60}}>
            
              <div style={{display:'flex',flex:1,flexDirection:'row'}}>

                {
                  this.state.products.map((product,i)=>{

                    return (
                      <Product key={i} product={product} toggleModal={this.toggleModal}/>
                    )
                  })
                }

              </div>
            
          </div>

          <Modal show={this.state.open} className={"productModal"} onHide={this.closeModal}>
              
              <div className={"flexRow"} style={{justifyContent:'space-between',padding:'0px 24px'}}>
                <span className={"text_20_700_000126"}>Material details</span>
                <img src={close}/>
              </div>

              <div className={"flexRow"} style={{marginTop:40,padding:'0px 24px'}}>

                <div>
                  <img src={activeProduct.image} style={{width:330}} onClick={this.closeModal}/>
                </div>
                
                {
                  this.state.formView && 
                
                  <div className={"flexColumn"} style={{flex:1,marginLeft:48}}>
                    
                    <div className={"flexRow"}>
                      <img src={back}/>
                      <span style={{paddingLeft:20}} className={"text_20_700_000126"}>Assign to factory</span>
                    </div>
                    
                    <div className={"flexColumn"} style={{marginTop:24}}>
                      <span className={"text_14_600_333340"}>Factory</span>
                      <div className={"inputContainer"}>
                        <select className={"enterInput"} name={"factory"} onChange={(e)=>this.setter(e)} value={this.state.factory}>
                          <option>Amaya creations</option>
                          <option>Pinki creations</option>
                        </select>
                        <img src={down} className={"dropIcon"}/>
                      </div>
                    </div>

                    <div className={"flexColumn"} style={{marginTop:24}}>
                      <span className={"text_14_600_333340"}>Assign for design</span>

                      {/* <div className={"inputContainer"}>
                        <select className={"enterInput"} name={"design"} onChange={(e)=>this.setter(e)} value={this.state.design}>
                          <option style={{backgroundImage: `url(${ellipse1})`}}>Design name 1</option>
                          <option style={{backgroundImage: `url(${ellipse2})`}}>Design name 2</option>
                          <option style={{backgroundImage: `url(${ellipse3})`}}>Design name 3</option>
                          <option style={{backgroundImage: `url(${ellipse4})`}}>Design name 4</option>
                        </select>
                        <img src={down} className={"dropIcon"}/>
                      </div> */}
                      
                      <div style={{marginTop:8}} className={"dropdown"}> 
                          <button className={"dropbtn"}> 
                              {this.state.design}
                          </button> 
                            
                          <div className={"dropdown-content"}> 
                              <div onClick={()=>this.setDesign('Design name 1')}><img src={ellipse1} /><span style={{paddingLeft:10}} className={"text_14_400_000126"}>Design name 1</span></div>
                              <div onClick={()=>this.setDesign('Design name 2')}><img src={ellipse2} /><span style={{paddingLeft:10}} className={"text_14_400_000126"}>Design name 2</span></div>
                              <div onClick={()=>this.setDesign('Design name 3')}><img src={ellipse3} /><span style={{paddingLeft:10}} className={"text_14_400_000126"}>Design name 3</span></div>
                              <div onClick={()=>this.setDesign('Design name 4')}><img src={ellipse4} /><span style={{paddingLeft:10}} className={"text_14_400_000126"}>Design name 4</span></div>
                          </div> 

                          <img src={down} className={"dropIcon"}/>
                      </div> 

                    </div>
                    
                    <div className={"flexRow"} style={{marginTop:24}}>

                      <div className={"flexColumn"} style={{width:'50%'}}>
                        <span className={"text_14_600_333340"}>Assign Quantity</span>
                        <input style={{marginTop:8}} type={"number"} value={this.state.quantity} className={"enterInput"} placeholder={"Enter quantity"} onChange={(e)=>{this.setQuantity(e)}}/>
                      </div>

                      <div className={"flexColumn"} style={{marginLeft:20,width:'50%'}}>
                        <span className={"text_14_600_333340"}>Available Inventory</span>
                        <span style={{marginTop:18}} className={"text_14_600_333340"}>{activeProduct.inventory} meter</span>
                      </div>

                    </div>

                    <div className={"flexColumn"} style={{marginTop:24,width:'calc(50% - 10px)'}}>
                      <span className={"text_14_600_333340"}>Assign challan</span>
                      <div className={"enterInput"} style={{border:'dashed 1px #d4d4d4',position:'relative',marginTop:8}} onClick={this.handleClick}>
                        <input type={"file"} id={"file"} placeholder={"Select file"} />
                        <img src={attachicon} className={"attachIcon"}/>
                        <span style={{position:'absolute',top:6}}>Select file</span>
                      </div>
                    </div>
                    
                  </div>
                }

                {
                  this.state.finalView && 

                  <div className={"flexColumn"} style={{flex:1,marginLeft:48}}>
                    
                    <div className={"flexRow"}>
                      <img src={back} style={{cursor:'pointer'}} onClick={this.goBack}/>
                      <span style={{paddingLeft:20}} className={"text_20_700_000126"}>Assign to factory</span>
                    </div>

                    <div style={{marginTop:24}} className={"warning"}>
                      <div style={{position:'relative',display:'flex',width:18,height:18}}>
                        <img src={oval}/>
                        <img src={blue} style={{position:'absolute',left:8,top:5}}/>
                        <img src={line} style={{position:'absolute',left:8,top:8}}/>
                      </div>
                      <span style={{paddingLeft:10}} className={"text_14_400_000126"}>You won't be able to change the details later.</span>
                    </div>
                    
                    <div className={"flexColumn"} style={{marginTop:16}}>
                      <span className={"text_14_400_676773"}>Factory</span>
                      <span className={"text_16_400_000126"}>{this.state.factory}</span>
                    </div>

                    <div className={"flexColumn"} style={{marginTop:24}}>
                      <span className={"text_14_400_676773"}>Assign for design</span>
                      <span className={"text_16_400_000126"}>{this.state.design}</span>
                    </div>

                    <div className={"flexColumn"} style={{marginTop:24}}>
                      <span className={"text_14_400_676773"}>Assign quantity</span>
                      <span className={"text_16_400_000126"}>{this.state.quantity} meter</span>
                    </div>

                    <div className={"flexColumn"} style={{marginTop:24}}>
                      <span className={"text_14_400_676773"}>Challan</span>
                      <div className={"fileContainer"} style={{marginTop:8}}>
                        <span className={"text_14_400_000126"}>{this.state.fileName}</span>
                        <img src={eye} style={{position:'absolute',right:16}}/>
                        <img src={circle} style={{position:'absolute',right:22}}/>
                      </div>
                    </div>
                  
                  </div>
                }

              </div>
                
              <div className={"flexColumn"} style={{justifyContent:'flex-end',flex:1}}>

                {
                  this.state.formView &&
                
                  <div className={"flexRow"} style={{borderTop:'solid 1px #e5e5e5',padding:'12px 24px 0px 24px',justifyContent:'flex-end'}}>
                    <button style={{marginLeft:16}} className={"greyBtn"} onClick={this.next}>
                      <span className={"text_14_600_ffffff"}>NEXT</span>
                    </button>
                  </div>
                }

                {
                  this.state.finalView && 

                  <div className={"flexRow"} style={{borderTop:'solid 1px #e5e5e5',padding:'12px 24px 0px 24px',justifyContent:'flex-end'}}>
                    <button className={"whiteBtn"} onClick={this.goBack}>
                      <span className={"text_14_600_000126"}>BACK</span>
                    </button>

                    <button style={{marginLeft:16}} className={"blueBtn"}>
                      <span className={"text_14_600_ffffff"}>ASSIGN TO FACTORY</span>
                    </button>
                  </div>
                }

              </div>
              

          </Modal>

        </Fragment>
    );
  }

}

const customStyles = {
    width: '70%',
    height: 500,
    display: 'flex',
    flexDirection: 'column'
};

export default App;
