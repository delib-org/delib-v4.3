import m from 'mithril';
import './systemMessage.scss'
import store from '../../../../cont/store/store';

export default function SystemMessage(){
    function handleCloseError(){
        try {
          store.error = null;  
        } catch (error) {
            console.error(error)
        }
    }
    return{
    
        view:()=>{
         
            if(store.error){
             
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