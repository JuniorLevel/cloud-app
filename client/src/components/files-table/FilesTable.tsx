import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import ButtonAddFolder from 'components/ui/button-add-folder/ButtonAddFolder';
import ButtonUpload from 'components/ui/button-upload/ButtonUpload';
import { FC } from 'react';
import useFileStore from 'store/file.store';

const FilesTable: FC = () => {
  const files = useFileStore(state => state.files);
  const columns: GridColDef[] = [
    {
      field: 'typeOfFile',
      headerName: 'Type',
      width: 150,
      disableColumnMenu: true,
      renderCell: params => {
        return params.row.typeOfFile === 'dir' ? (
          <FolderOpenIcon color="primary" />
        ) : (
          <InsertDriveFileIcon color="primary" />
        );
      },
    },
    {
      field: 'fileName',
      headerName: 'Name',
      width: 500,
      disableColumnMenu: true,
    },
    {
      field: 'date',
      headerName: 'Data Created',
      width: 250,
      disableColumnMenu: true,
      renderCell: params => params.row.date.slice(0, 10).replaceAll('-', '.'),
    },
    {
      field: 'sizeOfFile',
      headerName: 'Size',
      width: 150,
      disableColumnMenu: true,
    },
  ];
  return (
    <Box sx={{ height: 630, width: '100%' }}>
      <div className="flex gap-4 justify-end mb-2">
        <ButtonAddFolder />
        <ButtonUpload />
      </div>
      <DataGrid
        rows={files}
        columns={columns}
        getRowId={file => file._id}
        className="bg-whiteInput"
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </Box>
  );
};

export default FilesTable;
