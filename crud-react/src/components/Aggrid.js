import React, {
	useState,
	useRef,
	useEffect,
	//useMemo,
	useCallback,
} from "react";

// import { render } from "react-dom";
import { AgGridReact } from "ag-grid-react"; // the AG Grid React Component

import "ag-grid-community/dist/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/dist/styles/ag-theme-alpine.css"; // Optional theme CSS

const Aggrid = () => {
	const gridRef = useRef(); // Optional - for accessing Grid's API
	const [rowData, setRowData] = useState([]); // Set rowData to Array of Objects, one Object per Row

	// Each Column Definition results in one Column.
	const [columnDefs, setColumnDefs] = useState([
		{ field: "id", filter: true },
    { field: "title", filter: true },
		{ field: "description", filter: true },
		{ field: "status", filter: true },
	]);

	// DefaultColDef sets props common to all Columns
	// const defaultColDef = useMemo(() => ({
	// 	sortable: true,
	// }));

	// Example of consuming Grid Event
	// const cellClickedListener = useCallback((event) => {
	// 	console.log("cellClicked", event);
	// }, []);

	// Example load data from sever
	useEffect(() => {
		fetch("http://localhost:8081/api/tutorial")
			.then((result) => result.json())
			.then((rowData) => setRowData(rowData));
	}, []);

	// Example using Grid's API
	// const buttonListener = useCallback((e) => {
	// 	gridRef.current.api.deselectAll();
	// }, []);

	return (
		<div>
			{/* Example using Grid's API */}
			{/* On div wrapping Grid a) specify theme CSS Class Class and b) sets Grid size */}
			<div className="ag-theme-alpine" style={{ width: 680, height: 420 }}>
				<AgGridReact
					ref={gridRef} // Ref for accessing Grid's API
					rowData={rowData} // Row Data for Rows
					//columnDefs={columnDefs} // Column Defs for Columns
					defaultColDef={{flex: 1}} // Default Column Properties
					animateRows={true} // Optional - set to 'true' to have rows animate when sorted
					rowSelection="multiple" // Options - allows click selection of rows
					//onCellClicked={cellClickedListener} // Optional - registering for Grid Event
				/>
			</div>
			{/* <button onClick={buttonListener}>Push Me</button> */}

		</div>
	);
};
export default Aggrid;
