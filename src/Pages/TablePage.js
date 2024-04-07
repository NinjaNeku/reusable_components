import Table from "../Components/Table";
import SortableTable from "../Components/sortableTable";

function TablePage(){
    const data = [
        {name:"Orange", color: "bg-orange-500", score: 1},
        {name:"Banana", color: "bg-yellow-500", score: 4},
        {name:"Apple", color: "bg-red-500", score: 3},
        {name:"Strawberry", color: "bg-red-600", score: 5},
    ]

    const config = [
        {label: 'Fruit', render: (fruit) => fruit.name, sortValue: (fruit) => fruit.name},
        {label: 'Color', render: (fruit) => <div className={`m-2 p-3 ${fruit.color}`} ></div>},
        {label: 'Score', render: (fruit) => fruit.score, sortValue: (fruit) => fruit.score},
    ]

    return <div>
        <SortableTable data={data} config={config} />
    </div>
}

export default TablePage;