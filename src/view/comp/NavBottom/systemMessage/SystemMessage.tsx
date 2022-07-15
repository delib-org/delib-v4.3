import m from 'mithril';
import './systemMessage.scss'
import store from '../../../../model/store';

export default function SystemMessage(){
    function handleCloseError(){
        try {
          store.error = null;  
        } catch (error) {
            console.error(error)
        }
    }
    return{
        oninit:()=>{
            console.log('init')
        },
        view:()=>{
            console.log(store.error)
            if(store.error){
                console.log(store.error.message)
            return(
                <div className="systemMessage" onclick={handleCloseError}>
                    {store.error.message}
                </div>
            )
            } else{
                return null
            }
        }
    }
}