import React from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'
import EnhancedTable from './table/EnhancedTable'

const App = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'First Name',
        accessor: 'firstName',
      },
      {
        Header: 'Last Name',
        accessor: 'lastName',
      },
      {
        Header: 'Age',
        accessor: 'age',
      },
      {
        Header: 'Visits',
        accessor: 'visits',
      },
      // {
      //   Header: 'Status',
      //   accessor: 'status',
      // },
      {
        Header: 'Profile Progress',
        accessor: 'progress',
      },
    ],
    []
  )

  const [data, setData] = React.useState(React.useMemo(() => rows, []))
  const [skipPageReset, setSkipPageReset] = React.useState(false)

  // We need to keep the table from resetting the pageIndex when we
  // Update data. So we can keep track of that flag with a ref.

  // When our cell renderer calls updateMyData, we'll use
  // the rowIndex, columnId and new value to update the
  // original data
  const updateMyData = (rowIndex, columnId, value) => {
    // We also turn on the flag to not reset the page
    setSkipPageReset(true)
    setData(old =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          }
        }
        return row
      })
    )
  }

  return (
    <div>
      <CssBaseline />
      <EnhancedTable
        columns={columns}
        data={data}
        setData={setData}
        updateMyData={updateMyData}
        skipPageReset={skipPageReset}
      />
    </div>
  )
}

export default App

const rows = [
  {
    "id": 1,
    "firstName": "unit",
    "lastName": "distribution",
    "age": 23,
    "visits": 21,
    "progress": 23,
  },
  {
    "id": 2,
    "firstName": "woman",
    "lastName": "fuel",
    "age": 29,
    "visits": 87,
    "progress": 95,
  },
  {
    "id": 3,
    "firstName": "toad",
    "lastName": "mother",
    "age": 21,
    "visits": 31,
    "progress": 76,
  },
  {
    "id": 4,
    "firstName": "video",
    "lastName": "country",
    "age": 29,
    "visits": 23,
    "progress": 68,
  },
  {
    "id": 5,
    "firstName": "height",
    "lastName": "sail",
    "age": 0,
    "visits": 45,
    "progress": 37,
  },
  {
    "id": 6,
    "firstName": "patch",
    "lastName": "height",
    "age": 23,
    "visits": 61,
    "progress": 59,
  },
  {
    "id": 7,
    "firstName": "milk",
    "lastName": "sticks",
    "age": 5,
    "visits": 63,
    "progress": 95,
  },
  {
    "id": 8,
    "firstName": "balloon",
    "lastName": "gun",
    "age": 11,
    "visits": 95,
    "progress": 30,
  },
  {
    "id": 9,
    "firstName": "copper",
    "lastName": "learning",
    "age": 26,
    "visits": 38,
    "progress": 37,
  },
  {
    "id": 10,
    "firstName": "side",
    "lastName": "thought",
    "age": 22,
    "visits": 24,
    "progress": 56,
  }
]
