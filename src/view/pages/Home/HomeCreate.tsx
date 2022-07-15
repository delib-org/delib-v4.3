import m, {Component} from 'mithril';

interface state{
    test?:string
}

interface attrs{

}



export default function HomeCreate():Component<attrs, state>{

    function handleGoToNewConsultation(){
        try {
            m.route.set('/set-consultation/new')
        } catch (error) {
            console.error(error)
        }
    }

    return{
        view:()=>(
            <div>
                <div className="btn" onclick={handleGoToNewConsultation}>
                    התייעצות חדשה
                </div>
            </div>
        )
    }
}

