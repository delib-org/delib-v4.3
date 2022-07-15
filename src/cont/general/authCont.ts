import m from 'mithril';
export function redirect():void{
    try {
        m.route.set('/home')
    } catch (error) {
        console.error(error)
    }
}