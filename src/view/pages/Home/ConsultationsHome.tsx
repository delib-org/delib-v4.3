import m, {Component} from 'mithril';
import store from '../../../cont/store/store';
import { EntityType, News } from '../../../model/newsModel';
import ConsultationCard from './consultationCard/ConsultationCard';

interface state{
    test?:string
}

interface attrs{

}



export default function ConsultationsHome():Component<attrs, state>{


    return{
        view:()=>(
            <div>
                 {/* @ts-ignore */}
          {store.news
            // .sort((a:News, b:News) => b.update.seconds - a.update.seconds)
            .map((newy:News) => (
              newy.entityType === EntityType.CONSULTATION? <ConsultationCard key={newy.id} consultation={newy.entity} />:null
            ))}
            </div>
        )
    }
}


