import Accordion from "../Components/Accordion";

function AccordionPage(){
    const items = [
        {
            id : 'asdasdasd',
            label:'First Title',
            content: 'description of the first title'
        },
        {
            id : 'asjdaksj',
            label:'Second Title',
            content: 'description of the second title'
        },
        {
            id : 'jwehiuqwhi',
            label:'Third Title',
            content: 'description of the third title'
        }
    ];

    return <Accordion items = {items} />;
}

export default AccordionPage;