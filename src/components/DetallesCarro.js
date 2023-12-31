import { Component } from "react";

const styles = {
    detallesCarro:{
        backgroundColor: '#fff',
        position: 'absolute',
        margin: '30px 0px 0px',
        boxShadow: '1px 5px 5px rgb(0,0,0,0.3)',
        borderRadius: '5px',
        width: '300px',
        right: 50, /* con esto especificamos que tanta separacion queremos entre el borde derecho*/
    },
    ul:{
        margin: 0,
        padding: 0
    },
    producto:{
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '25px 20px',
        borderBottom: 'solid 1px #aaa'
    },
    total:{
        listStyleType: 'none',
        padding: '3px 0px',
        fontWeight: 500,
        textAlign: 'center'
    }
}

class DetallesCarro extends Component{
    render(){
        const {carro} = this.props
        console.log(carro)
        return(
            <div style={styles.detallesCarro}>
                <ul style={styles.ul}>
                    {carro.map(x => <li style={styles.producto} key={x.name}>
                        <img alt={x.name} src={x.img} width = '50' height = '32'/>
                        {x.name} <span>{x.cantidad}</span>
                        </li>
                    )}
                    <li style={styles.total}>Total a pagar: ${carro.reduce((acc, el) => acc + el.cantidad * el.price, 0)}</li>
                </ul>
            </div>
        )
    }
}

export default DetallesCarro