import { ColumnFilter } from "./ColumnFilter"

export const columns = [
    {
        Header: 'StartDate',
        accessor: 'startdate',
    },
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
]