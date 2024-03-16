import Table from "../Components/Table";

function TablePage(){
    const data = [
        {name:"Orange", color: "bg-orange-500", score: 1},
        {name:"Banana", color: "bg-yellow-500", score: 4},
        {name:"Apple", color: "bg-red-500", score: 3},
        {name:"Strawberry", color: "bg-red-600", score: 5},
    ]

    const config = [
        {label: 'Fruit', render: (fruit) => fruit.name},
        {label: 'Color', render: (fruit) => <div className={`m-2 p-3 ${fruit.color}`} ></div>},
        {label: 'Score', render: (fruit) => fruit.score},
    ]

    return <div>
        <Table data={data} config={config} />
    </div>
}

export default TablePage;