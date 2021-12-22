import { ColumnFilter } from "./ColumnFilter"

export const columns = [
    {
        Header: 'Batch',
        accessor: 'batch',
        Filter: ColumnFilter,
    },
    {
        Header: 'Name',
        accessor: 'name',
    },
    {
        Header: 'Mentor',
        accessor: 'mentor',
    },
    {
        Header: 'Mentee',
        accessor: 'mentee',
    },
    // {
    //     Header: 'username',
    //     accessor: 'username',
    // },
]